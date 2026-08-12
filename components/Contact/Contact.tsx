"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons/SocialIcons";
import { personal } from "@/data/personal";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Contact.module.css";

type FormState = { name: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormState, string>>;
const initial: FormState = { name: "", email: "", message: "" };

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email.";
  }
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm(initial);
  };

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className={styles.title}>{personal.contactTitle}</h2>
            <p className={styles.text}>{personal.contactText}</p>
            <div className={styles.info}>
              <a href={`mailto:${personal.email}`}>
                <Mail size={16} />
                {personal.email}
              </a>
              <a href={`tel:${personal.phone}`}>
                <Phone size={16} />
                {personal.phoneDisplay}
              </a>
              <span>
                <MapPin size={16} />
                {personal.location}
              </span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon size={16} />
                LinkedIn
              </a>
              {personal.github ? (
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon size={16} />
                  GitHub
                </a>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={50}>
            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <label>
                Name
                <input
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    setStatus("idle");
                  }}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name ? <span>{errors.name}</span> : null}
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    setStatus("idle");
                  }}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email ? <span>{errors.email}</span> : null}
              </label>
              <label>
                Message
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    setStatus("idle");
                  }}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message ? <span>{errors.message}</span> : null}
              </label>
              <button type="submit">
                <Send size={15} />
                Send Message
              </button>
              {status === "success" ? (
                <p className={styles.ok}>
                  Thanks — please also email {personal.email}.
                </p>
              ) : null}
              {status === "error" ? (
                <p className={styles.err}>Please fix the highlighted fields.</p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
