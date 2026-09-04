"use client";

import { useState } from "react";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

const CONSULTATION_EMAIL = "pozeraevents@gmail.com";

const fieldClass =
  "h-[58px] w-full rounded-[24px] border border-[#ff803f] bg-white px-[43px] font-body text-[14px] text-ink placeholder:text-muted-text-secondary shadow-[0px_6px_38px_0px_#dae0e5] focus:outline-none";

export default function ConsultationForm() {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    cityState: "",
    eventAddress: "",
    email: "",
    phone: "",
    eventDate: "",
    services: "",
    budget: "",
    message: "",
    guests: "",
    dateFixed: "",
    okToText: "",
    hearAboutUs: "",
  });

  const update = (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = `Consultation Request — ${fields.firstName} ${fields.lastName}`;
    const body = `Name: ${fields.firstName} ${fields.lastName}
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
    const mailto = `mailto:${CONSULTATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section className="bg-white-bg pb-24">
      <form onSubmit={handleSubmit} className="mx-auto flex max-w-[953px] flex-col gap-4 px-6">
        <RevealGroup as="div" stagger={0.08} className="flex flex-col gap-4">
          <RevealItem className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              required
              placeholder="First Name"
              value={fields.firstName}
              onChange={update("firstName")}
              className={fieldClass}
            />
            <input
              type="text"
              required
              placeholder="Last Name"
              value={fields.lastName}
              onChange={update("lastName")}
              className={fieldClass}
            />
          </RevealItem>

          <RevealItem>
            <input
              type="text"
              required
              placeholder="City & State of Events"
              value={fields.cityState}
              onChange={update("cityState")}
              className={fieldClass}
            />
          </RevealItem>

          <RevealItem className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Event Address"
              value={fields.eventAddress}
              onChange={update("eventAddress")}
              className={fieldClass}
            />
            <input
              type="email"
              required
              placeholder="Email Address"
              value={fields.email}
              onChange={update("email")}
              className={fieldClass}
            />
          </RevealItem>

          <RevealItem className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="tel"
              required
              placeholder="Phone Number"
              value={fields.phone}
              onChange={update("phone")}
              className={fieldClass}
            />
            <input
              type="text"
              placeholder="Event Date"
              value={fields.eventDate}
              onChange={update("eventDate")}
              className={fieldClass}
              onFocus={(e) => (e.target.type = "date")}
            />
          </RevealItem>

          <RevealItem className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="What services are you interested in"
              value={fields.services}
              onChange={update("services")}
              className={fieldClass}
            />
            <input
              type="text"
              placeholder="Estimated Budget"
              value={fields.budget}
              onChange={update("budget")}
              className={fieldClass}
            />
          </RevealItem>

          <RevealItem>
            <textarea
              placeholder="Tell us about your events"
              value={fields.message}
              onChange={update("message")}
              rows={5}
              className="w-full resize-none rounded-[24px] border border-[#ff803f] bg-white px-[20px] py-[19px] font-body text-[14px] text-ink placeholder:text-muted-text-secondary shadow-[0px_6px_38px_0px_#dae0e5] focus:outline-none"
            />
          </RevealItem>

          <RevealItem className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Number of Guests"
              value={fields.guests}
              onChange={update("guests")}
              className={fieldClass}
            />
            <input
              type="text"
              placeholder="Is your event date fixed?"
              value={fields.dateFixed}
              onChange={update("dateFixed")}
              className={fieldClass}
            />
          </RevealItem>

          <RevealItem className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Is it okay to text you?"
              value={fields.okToText}
              onChange={update("okToText")}
              className={fieldClass}
            />
            <input
              type="text"
              placeholder="How did you hear about us"
              value={fields.hearAboutUs}
              onChange={update("hearAboutUs")}
              className={fieldClass}
            />
          </RevealItem>
        </RevealGroup>

        <Reveal delay={0.1}>
          <button
            type="submit"
            className="mt-2 w-fit rounded-[72px] border-2 border-white bg-brand-orange px-[55px] py-4 font-body text-[18px] text-white transition duration-300 hover:scale-[1.03] hover:bg-[#e86f2f] hover:shadow-[0_12px_24px_-8px_rgba(253,126,20,0.5)]"
          >
            Submit
          </button>
        </Reveal>
      </form>
    </section>
  );
}
