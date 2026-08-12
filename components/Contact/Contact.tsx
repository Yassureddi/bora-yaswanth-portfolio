"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons/SocialIcons";
import { personal } from "@/data/personal";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./Contact.module.css";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (form.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setForm(initialForm);
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <SectionHeading
          eyebrow="Get In Touch"
          title={personal.contactTitle}
          description={personal.contactText}
        />

        <div className={styles.grid}>
          <div className={styles.info}>
            <a href={`mailto:${personal.email}`} className={styles.infoItem}>
              <span className={styles.icon}>
                <Mail size={18} aria-hidden />
              </span>
              <span>
                <span className={styles.label}>Email</span>
                <span className={styles.value}>{personal.email}</span>
              </span>
            </a>

            <a href={`tel:${personal.phone}`} className={styles.infoItem}>
              <span className={styles.icon}>
                <Phone size={18} aria-hidden />
              </span>
              <span>
                <span className={styles.label}>Phone</span>
                <span className={styles.value}>{personal.phoneDisplay}</span>
              </span>
            </a>

            <div className={styles.infoItem}>
              <span className={styles.icon}>
                <MapPin size={18} aria-hidden />
              </span>
              <span>
                <span className={styles.label}>Location</span>
                <span className={styles.value}>{personal.location}</span>
              </span>
            </div>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoItem}
            >
              <span className={styles.icon}>
                <LinkedInIcon size={18} aria-hidden />
              </span>
              <span>
                <span className={styles.label}>LinkedIn</span>
                <span className={styles.value}>
                  linkedin.com/in/bora-yaswanth-758a1a384
                </span>
              </span>
            </a>

            {personal.github ? (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoItem}
              >
                <span className={styles.icon}>
                  <GitHubIcon size={18} aria-hidden />
                </span>
                <span>
                  <span className={styles.label}>GitHub</span>
                  <span className={styles.value}>View profile</span>
                </span>
              </a>
            ) : null}
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                value={form.name}
                onChange={(event) => {
                  setForm((prev) => ({ ...prev, name: event.target.value }));
                  setStatus("idle");
                }}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name ? (
                <p id="name-error" className={styles.error} role="alert">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(event) => {
                  setForm((prev) => ({ ...prev, email: event.target.value }));
                  setStatus("idle");
                }}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email ? (
                <p id="email-error" className={styles.error} role="alert">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about the opportunity or project..."
                value={form.message}
                onChange={(event) => {
                  setForm((prev) => ({
                    ...prev,
                    message: event.target.value,
                  }));
                  setStatus("idle");
                }}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "message-error" : undefined
                }
              />
              {errors.message ? (
                <p id="message-error" className={styles.error} role="alert">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button type="submit" className={styles.submit}>
              <Send size={16} aria-hidden />
              Send Message
            </button>

            {status === "success" ? (
              <p className={styles.success} role="status">
                Thanks for your message. This form is frontend-only for now —
                please also email me directly at {personal.email}.
              </p>
            ) : null}

            {status === "error" ? (
              <p className={styles.formError} role="alert">
                Please fix the highlighted fields and try again.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
