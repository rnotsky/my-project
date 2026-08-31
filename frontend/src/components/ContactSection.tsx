"use client";

import { useState } from "react";

export default function ContactSection() {

  const [projectType, setProjectType] = useState("AI System");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    console.log("Clicked");
    setSuccess("");
    setError("");

    if (!name || !email || !subject || !message) {
      setError("Please fill in all required fields.");
      return;
    }

    try {

      setLoading(true);

      const res = await fetch("/api/contact", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({

          name,
          email,
          company,
          subject,
          projectType,
          message,

        }),

      });

  const data = await res.json();

if (!res.ok) {
  throw new Error(data.error || "Something went wrong.");
}

      setSuccess("Message sent successfully!");

      setName("");
      setEmail("");
      setCompany("");
      setSubject("");
      setMessage("");
      setProjectType("AI System");

    } catch (err: any) {

      setError(err.message || "Something went wrong.");

    } finally {

      setLoading(false);

    }

  };
  return (
    <section
      className="
        bg-black
        py-16
        text-white

        sm:py-24

        lg:py-32
      "
    >
      <div
        className="
          mx-auto
          max-w-[1600px]

          px-5
          sm:px-8
          lg:px-10
          xl:px-16
        "
      >
        {/* Header */}

        <div
          className="
            mx-auto
            max-w-4xl

            text-center

            lg:mx-0
            lg:text-left
          "
        >
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]

              text-purple-400

              sm:text-sm
            "
          >
            CONTACT
          </p>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
              leading-tight

              sm:text-5xl

              lg:text-6xl
            "
          >
            Let's Create Something

            <br />

            <span className="text-white/95">
              Extraordinary
            </span>
          </h2>

          <p
            className="
              mx-auto

              mt-6

              max-w-2xl

              text-base
              leading-7

              text-gray-400

              sm:text-lg
              sm:leading-8

              lg:mx-0
            "
          >
            Every great technology starts with an idea.
            Tell us your vision and let's explore what
            we can build together.
          </p>
        </div>

        {/* Contact Card */}

        <div
          className="
            mt-14

            max-w-4xl

            rounded-[2rem]

            border
            border-white/10

            bg-[#0b0b0b]

            p-6

            sm:p-8

            lg:mt-16
            lg:p-12
          "
        >
          <div className="space-y-8 sm:space-y-10">

            {/* Project Type */}

            <div>

              <p className="text-sm uppercase tracking-wider text-gray-500">
                I want to build
              </p>

<div
  className="
    mt-5
    grid
    grid-cols-2
    gap-3

    lg:grid-cols-4
  "
>
  {[
    "AI System",
    "Software Platform",
    "Robotics",
    "Other",
  ].map((item) => (
    <button
      key={item}
      type="button"
      onClick={() => setProjectType(item)}
      className={`
        h-14
        w-full

        rounded-xl

        border

        px-3

        text-center
        text-sm
        font-medium

        transition-all
        duration-300

        ${
          projectType === item
            ? "border-purple-500 bg-purple-600 text-white shadow-lg shadow-purple-500/20"
            : "border-white/10 bg-white/5 text-gray-300 hover:border-purple-500 hover:bg-purple-500/10 hover:text-white"
        }
      `}
    >
      {item}
    </button>
  ))}
              

              </div>

            </div>

            {/* Vision */}

            <div>

              <p className="text-sm uppercase tracking-wider text-gray-500">
                Describe your vision
              </p>

             <textarea
  rows={5}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="Tell us what you want to create..."
  className="
    mt-5
    w-full
    resize-none
    rounded-2xl
    border
    border-white/10
    bg-black
    px-5
    py-4
    text-white
    outline-none
    placeholder:text-gray-600
    transition-colors
    focus:border-purple-500
  "
/>

            </div>

            {/* Email */}
<div className="grid gap-5 md:grid-cols-2">

  <input
    type="text"
    placeholder="Your Name *"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="
      rounded-2xl
      border
      border-white/10
      bg-black
      px-5
      py-4
      text-white
      outline-none
      placeholder:text-gray-600
      focus:border-purple-500
    "
  />

  <input
    type="email"
    placeholder="Your Email *"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="
      rounded-2xl
      border
      border-white/10
      bg-black
      px-5
      py-4
      text-white
      outline-none
      placeholder:text-gray-600
      focus:border-purple-500
    "
  />

  <input
    type="text"
    placeholder="Company (Optional)"
    value={company}
    onChange={(e) => setCompany(e.target.value)}
    className="
      rounded-2xl
      border
      border-white/10
      bg-black
      px-5
      py-4
      text-white
      outline-none
      placeholder:text-gray-600
      focus:border-purple-500
    "
  />

  <input
    type="text"
    placeholder="Subject *"
    value={subject}
    onChange={(e) => setSubject(e.target.value)}
    className="
      rounded-2xl
      border
      border-white/10
      bg-black
      px-5
      py-4
      text-white
      outline-none
      placeholder:text-gray-600
      focus:border-purple-500
    "
  />

</div>

            {/* Button */}

<div className="space-y-4">

  {error && (
    <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
      {error}
    </div>
  )}

  {success && (
    <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-300">
      {success}
    </div>
  )}

  <button
    type="button"
    onClick={handleSubmit}
    disabled={loading}
    className="
      flex
      w-full
      items-center
      justify-center
      gap-3

      rounded-2xl

      bg-purple-600

      px-8
      py-4

      font-semibold

      transition-all
      duration-200

      hover:bg-purple-500

      disabled:cursor-not-allowed
      disabled:opacity-60

      sm:w-auto
    "
  >
    {loading ? "Sending..." : "Start Collaboration"}

    {!loading && <span>→</span>}
  </button>

</div>

          </div>
        </div>

      </div>
    </section>
  );
}