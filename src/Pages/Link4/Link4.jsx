import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm ";
import AnimatedForm from "../../components/AnimatedForm/AnimatedForm";

function Link4() {
  return (
    <>
      <section className="border border-red-600">
        <div className="w-full bg-slate-500 py-8 px-4 text-white">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
            <p className="font-medium">
              Fill out the form below to reach out to us for any inquiries or
              information.
            </p>
          </div>

          {/* Contact Form */}
          <div className=" mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default Link4;
