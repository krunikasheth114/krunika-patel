"use client";

import { FormEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";
import { Send, X } from "lucide-react";

type ContactFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormStatus = "idle" | "sending" | "sent" | "error";

const emailConfig = {
  serviceId: `service_thg0o5m`,
  templateId: `template_d47aman`,
  publicKey: `wI1AAdTSKDR3Icypq`,
};

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const getEmailConfig = () => {
  const { serviceId, templateId, publicKey } = emailConfig;

  if (!serviceId || !templateId || !publicKey) {
    return null;
  }

  return { serviceId, templateId, publicKey };
};

const ContactFormModal = ({ isOpen, onClose }: ContactFormModalProps) => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen || typeof document === "undefined") return null;

  const handleClose = () => {
    if (status === "sending") return;
    setStatus("idle");
    setError("");
    onClose();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    const config = getEmailConfig();

    if (!config) {
      setStatus("error");
      setError("Email service is not configured yet.");
      return;
    }

    setStatus("sending");

    try {
      const sentAt = new Intl.DateTimeFormat("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date());

      await emailjs.send(
        config.serviceId,
        config.templateId,
        {
          name: form.name,
          email: form.email,
          user_email: form.email,
          title: form.subject,
          subject: form.subject,
          time: sentAt,
          message: form.message,
          from_name: form.name,
          from_email: form.email,
          to_email: "krunikasheth114@gmail.com",
        },
        {
          publicKey: config.publicKey,
        }
      );

      setStatus("sent");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again in a moment.");
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto px-4 py-4 sm:py-6">
      <button
        type="button"
        aria-label="Close contact form"
        onClick={handleClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
      />

      <div className="relative my-auto w-full max-w-lg rounded-lg border border-border bg-card p-4 text-left shadow-2xl shadow-primary/10 sm:p-6">
        <div className="flex items-start justify-between gap-4 mb-5 sm:mb-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
              Contact
            </p>
            <h3 className="text-xl font-bold sm:text-2xl">Say Hello</h3>
          </div>
          <button
            type="button"
            aria-label="Close contact form"
            onClick={handleClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition hover:border-primary hover:text-primary"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium">
              Name
              <input
                required
                type="text"
                value={form.name}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    name: event.target.value,
                  }))
                }
                className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-2 text-sm font-medium">
              Email
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    email: event.target.value,
                  }))
                }
                className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="block space-y-2 text-sm font-medium">
            Subject
            <input
              required
              type="text"
              value={form.subject}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  subject: event.target.value,
                }))
              }
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
              placeholder="Project inquiry"
            />
          </label>

          <label className="block space-y-2 text-sm font-medium">
            Message
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  message: event.target.value,
                }))
              }
              className="max-h-48 min-h-32 w-full resize-y rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary sm:max-h-56 sm:min-h-36"
              placeholder="Tell me about your project..."
            />
          </label>

          {status === "sent" && (
            <p className="rounded-md border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary">
              Message sent. Thank you for reaching out. We will connect you
              soon.
            </p>
          )}

          {status === "error" && (
            <p className="rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send size={18} />
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default ContactFormModal;
