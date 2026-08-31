"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

type ContactFormProps = {
  contactType: string;
};

export default function ContactForm({
  contactType,
}: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const maxCharacters = 1000;

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault();

  setSuccess("");
  setError("");

  // Validation

  if (
    !name.trim() ||
    !email.trim() ||
    !subject.trim() ||
    !message.trim()
  ) {
    setError("Please fill in all required fields.");
    return;
  }

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    setError("Please enter a valid email address.");
    return;
  }

  if (message.length < 15) {
    setError(
      "Please provide a little more detail in your message."
    );
    return;
  }

  try {
    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        contactType,
        name,
        email,
        company,
        subject,
        message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || "Failed to send your message."
      );
    }

    setSuccess(
      "Your message has been sent successfully. We'll get back to you soon."
    );

    // Reset Form

    setName("");
    setEmail("");
    setCompany("");
    setSubject("");
    setMessage("");
  } catch (err: any) {
    setError(
      err.message ||
        "Something went wrong. Please try again."
    );
  } finally {
    setLoading(false);
  }
}
  }

  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl lg:p-10">
      {/* Header */}

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
          Contact Form
        </p>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Send us a message
        </h2>

        <p className="mt-4 max-w-xl leading-7 text-gray-400">
          Fill out the form below and our team will get back to
          you as soon as possible.
        </p>
      </div>

      {/* Selected Inquiry */}

      <div className="mt-8 rounded-2xl border border-purple-500/30 bg-purple-500/10 p-4">
        <p className="text-sm text-purple-300">
          Inquiry Type
        </p>

        <h3 className="mt-1 text-lg font-semibold text-white capitalize">
          {contactType}
        </h3>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-7"
      >
        {/* Message */}

        <div>
          <label className="mb-3 block text-sm font-medium text-gray-300">
            Message *
          </label>

          <textarea
            rows={7}
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            maxLength={maxCharacters}
            placeholder="Tell us how we can help..."
            className="
              w-full
              resize-none
              rounded-2xl
              border
              border-white/10
              bg-black
              px-5
              py-4
              text-white
              placeholder:text-gray-600
              outline-none
              transition
              focus:border-purple-500
            "
          />

          <div className="mt-2 text-right text-xs text-gray-500">
            {message.length}/{maxCharacters}
          </div>
        </div>

        {/* Inputs */}

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-3 block text-sm font-medium text-gray-300">
              Full Name *
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="John Doe"
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-white/10
                bg-black
                px-5
                text-white
                placeholder:text-gray-600
                outline-none
                transition
                focus:border-purple-500
              "
            />
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-gray-300">
              Email Address *
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="john@example.com"
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-white/10
                bg-black
                px-5
                text-white
                placeholder:text-gray-600
                outline-none
                transition
                focus:border-purple-500
              "
            />
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-gray-300">
              Company
            </label>

            <input
              type="text"
              value={company}
              onChange={(e) =>
                setCompany(e.target.value)
              }
              placeholder="Company (Optional)"
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-white/10
                bg-black
                px-5
                text-white
                placeholder:text-gray-600
                outline-none
                transition
                focus:border-purple-500
              "
            />
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-gray-300">
              Subject *
            </label>

            <input
              type="text"
              value={subject}
              onChange={(e) =>
                setSubject(e.target.value)
              }
              placeholder="How can we help?"
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-white/10
                bg-black
                px-5
                text-white
                placeholder:text-gray-600
                outline-none
                transition
                focus:border-purple-500
              "
            />
          </div>
        </div>

        {/* Alerts */}

        {error && (
         <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-5">
            <div className="font-semibold text-red-300">
  Unable to Send
</div>

<p className="mt-2 text-sm text-red-200">
  {error}
</p>
          </div>
        )}

        {success && (
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5">
            <div className="font-semibold text-emerald-300">
  Message Sent Successfully
</div>

<p className="mt-2 text-sm text-emerald-200">
  {success}
</p>
          </div>
        )}

<div className="rounded-2xl border border-white/10 bg-black/30 p-4">
  <p className="text-sm text-gray-400">
    Our team typically replies within
    <span className="mx-1 font-semibold text-white">
      24 hours
    </span>
    during business days.
  </p>
</div>

        {/* Submit */}

        <button
          type="submit"
          disabled={loading}
          className="
            inline-flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-purple-600
            to-fuchsia-600
            px-8
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading ? (
            <>
              <Loader2
                size={18}
                className="animate-spin"
              />
              Sending...
            </>
          ) : (
            <>
              Send Inquiry
              <ArrowRight size={18} />
            </>
          )}
        </button>

        <p className="text-center text-sm leading-6 text-gray-500">
          By submitting this form, you agree to our
          Terms of Service and Privacy Policy.
        </p>
      </form>
    </div>
  );
}