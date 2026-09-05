import { NextResponse } from "next/server";
import { Resend } from "resend";

type ConsultationPayload = {
  firstName: string;
  lastName: string;
  cityState: string;
  eventAddress: string;
  email: string;
  phone: string;
  eventDate: string;
  services: string;
  budget: string;
  message: string;
  guests: string;
  dateFixed: string;
  okToText: string;
  hearAboutUs: string;
};

const REQUIRED_FIELDS: (keyof ConsultationPayload)[] = ["firstName", "lastName", "cityState", "email", "phone"];
const CONSULTATION_EMAIL = "pozeraevents@gmail.com";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "Email sending isn't configured yet." }, { status: 500 });
  }

  let payload: Partial<ConsultationPayload>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const missing = REQUIRED_FIELDS.filter((field) => !payload[field]?.trim());
  if (missing.length > 0) {
    return NextResponse.json({ error: `Missing required fields: ${missing.join(", ")}` }, { status: 400 });
  }

  const fields: ConsultationPayload = {
    firstName: payload.firstName ?? "",
    lastName: payload.lastName ?? "",
    cityState: payload.cityState ?? "",
    eventAddress: payload.eventAddress ?? "",
    email: payload.email ?? "",
    phone: payload.phone ?? "",
    eventDate: payload.eventDate ?? "",
    services: payload.services ?? "",
    budget: payload.budget ?? "",
    message: payload.message ?? "",
    guests: payload.guests ?? "",
    dateFixed: payload.dateFixed ?? "",
    okToText: payload.okToText ?? "",
    hearAboutUs: payload.hearAboutUs ?? "",
  };

  const body = `New consultation request from the Pozera Events website:

Name: ${fields.firstName} ${fields.lastName}
City & State of Event: ${fields.cityState}
Event Address: ${fields.eventAddress}
Email: ${fields.email}
Phone: ${fields.phone}
Event Date: ${fields.eventDate}
Services interested in: ${fields.services}
Estimated Budget: ${fields.budget}
Number of Guests: ${fields.guests}
Is event date fixed: ${fields.dateFixed}
OK to text: ${fields.okToText}
How did you hear about us: ${fields.hearAboutUs}
Details: ${fields.message}`;

  const resend = new Resend(apiKey);
  const fromAddress = process.env.RESEND_FROM_EMAIL || "Pozera Events Website <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [CONSULTATION_EMAIL],
      replyTo: fields.email || undefined,
      subject: `Consultation Request — ${fields.firstName} ${fields.lastName}`,
      text: body,
    });

    if (error) {
      console.error("Resend failed to send consultation email", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send consultation email", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 502 });
  }
}
