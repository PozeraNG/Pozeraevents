import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "2348146117487";
const message = "Hi, I'd like to chat about planning an event with Pozera Events.";
const chatUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export default function WhatsAppFloat() {
  return (
    <a
      href={chatUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[10px_0px_16px_0px_rgba(204,204,204,0.8)] transition hover:bg-[#1fb855]"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
