"use client";

import { useState } from "react";
import { site } from "@/content/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  function validate(): boolean {
    const next: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) next.name = "Please tell us your name.";
    if (!email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!message.trim()) next.message = "Please add a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    const subject = `Enquiry from ${name.trim()}`;
    const body =
      `Name: ${name.trim()}\n` +
      `Email: ${email.trim()}\n\n` +
      `${message.trim()}`;

    const mailto = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  const fieldStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    padding: "0.75rem 0.9rem",
    fontSize: "var(--text-base)",
    fontFamily: "var(--font-sans), system-ui, sans-serif",
    color: "var(--foreground)",
    background: "#fff",
    border: "1px solid var(--line)",
    borderRadius: "var(--radius)",
    marginTop: "0.4rem",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "var(--text-sm)",
    fontWeight: 600,
    color: "var(--foreground)",
  };

  const errorStyle: React.CSSProperties = {
    color: "#b00020",
    fontSize: "var(--text-xs)",
    marginTop: "0.35rem",
  };

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: "grid", gap: "1.25rem" }}>
      <div>
        <label htmlFor="name" style={labelStyle}>
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={fieldStyle}
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? <p style={errorStyle}>{errors.name}</p> : null}
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={fieldStyle}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? <p style={errorStyle}>{errors.email}</p> : null}
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ ...fieldStyle, resize: "vertical" }}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? <p style={errorStyle}>{errors.message}</p> : null}
      </div>

      <button type="submit" className="btn btn--primary">
        Send message
      </button>
    </form>
  );
}
