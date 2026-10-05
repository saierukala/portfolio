"use client";

import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("./ContactForm"), {
  ssr: false,
  loading: () => <div className="h-[22rem] w-full max-w-xl" aria-hidden />,
});

export default function LazyContactForm() {
  return <ContactForm />;
}
