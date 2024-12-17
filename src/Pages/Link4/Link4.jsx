import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm ";

function Link4() {
  return (
    <>
      <section className="bg-[#f5f5f5]">
        <div className="w-full py-8 px-4 text-[#333]">
          <div className="text-center lg:mb-6">
            <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
            <p className="font-medium">
              Fill out the form below to reach out to us for any inquiries or
              information.
            </p>
          </div>

          {/* Contact Form and Google Maps */}
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-5 md:gap-1 justify-evenly items-stretch">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2 flex flex-col flex-grow min-h-[350px]">
              <ContactForm />
            </div>

            {/* Google Maps Iframe */}
            <div className="w-full lg:w-1/2 flex flex-col flex-grow min-h-[350px]">
              <iframe
                className="rounded-lg w-full h-full min-h-[350px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.614140233755!2d85.32809827464247!3d27.706763125518687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a692fc1c5%3A0xb1c8685679ee4aff!2sMid-Valley%20International%20College!5e1!3m2!1sen!2snp!4v1734432262385!5m2!1sen!2snp"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Link4;
