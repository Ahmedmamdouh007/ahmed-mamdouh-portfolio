"use client";

import { profile } from "@/data/profile";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading, SectionShell } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Instagram, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    reset();
  };

  return (
    <SectionShell id="contact" backdrop="contact" scatter="contact">
      <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <div>
          <SectionHeading
            index="05"
            eyebrow="Contact"
            title="Open to security and engineering opportunities"
            description="Available for penetration testing roles, backend development, freelance projects, and collaboration."
            className="!mb-5"
          />

          <Reveal className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-lg border border-border bg-cyprus/40 px-4 py-3 transition-colors hover:border-sand/30 hover:bg-cyprus/60"
            >
              <Mail size={18} className="text-cyprus-glow" aria-hidden />
              <span className="font-mono text-sm text-sand">{profile.email}</span>
            </a>
            <div className="flex items-center gap-3 px-1 text-sm text-sand-muted">
              <MapPin size={16} className="text-cyprus-glow" aria-hidden />
              {profile.location}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href={profile.linkedin} variant="secondary" external>
                <Linkedin size={16} aria-hidden />
                LinkedIn
              </Button>
              <Button href={profile.instagram} variant="secondary" external>
                <Instagram size={16} aria-hidden />
                Instagram
              </Button>
            </div>
          </Reveal>

          <Reveal className="mt-6">
            <h3 className="mb-3 font-display text-lg text-sand">Open to</h3>
            <ul className="flex flex-wrap gap-2">
              {profile.availability.map((item) => (
                <li
                  key={item}
                  className="rounded-pill border border-border px-3 py-1.5 font-mono text-xs text-sand-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="drench-sand rounded-xl p-5 shadow-[0_32px_80px_color-mix(in_oklch,var(--color-ink)_25%,transparent)] sm:rounded-2xl sm:p-6 md:p-8"
            noValidate
          >
            <h3 className="font-display text-2xl text-cyprus">Send a message</h3>
            <p className="mt-2 text-sm text-cyprus/70">
              Form opens your email client with a pre-filled message.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-cyprus/60">
                  Name
                </label>
                <input
                  id="name"
                  {...register("name")}
                  className="w-full rounded-lg border border-cyprus/15 bg-white/60 px-4 py-3.5 text-base text-cyprus outline-none transition-colors focus:border-cyprus/40 sm:py-3 sm:text-sm"
                  autoComplete="name"
                />
                {errors.name ? (
                  <p className="mt-1 text-xs text-accent-pink">{errors.name.message}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-cyprus/60">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="w-full rounded-lg border border-cyprus/15 bg-white/60 px-4 py-3.5 text-base text-cyprus outline-none transition-colors focus:border-cyprus/40 sm:py-3 sm:text-sm"
                  autoComplete="email"
                />
                {errors.email ? (
                  <p className="mt-1 text-xs text-accent-pink">{errors.email.message}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-cyprus/60">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className="w-full resize-y rounded-lg border border-cyprus/15 bg-white/60 px-4 py-3.5 text-base text-cyprus outline-none transition-colors focus:border-cyprus/40 sm:py-3 sm:text-sm"
                />
                {errors.message ? (
                  <p className="mt-1 text-xs text-accent-pink">{errors.message.message}</p>
                ) : null}
              </div>
            </div>

            <Button type="submit" variant="primary" className="mt-6 w-full border-cyprus bg-cyprus text-sand hover:bg-cyprus-deep sm:w-auto">
              <Send size={16} aria-hidden />
              Send Message
            </Button>

            {isSubmitSuccessful ? (
              <p className="mt-3 text-sm text-cyprus-glow" role="status">
                Opening your email client…
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </SectionShell>
  );
}
