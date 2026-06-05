import React, { useState } from "react";
import { ArrowRight, Globe, Mail } from "lucide-react";

interface FooterProps {
  setView: (view: "home" | "product-detail" | "shop-all") => void;
}

export default function Footer({ setView }: FooterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Silakan masukkan alamat email yang valid.");
      return;
    }
    setStatus("success");
    setMessage("Terima kasih! Anda telah bergabung dalam kurasi musiman kami.");
    setEmail("");
  };

  return (
    <footer className="bg-brand-surface border-t border-brand-surface-highest transition-all duration-300">
      <div className="w-full py-20 px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="col-span-1 space-y-6">
          <button
            onClick={() => setView("home")}
            className="font-serif text-3xl text-brand-primary tracking-tighter text-left cursor-pointer hover:opacity-80 transition-opacity"
          >
            AESTHETE
          </button>
          <p className="font-sans text-sm text-brand-text-muted leading-relaxed max-w-xs">
            Curating quiet luxury for the modern sanctuary. Intentional design for those who value the space in between.
          </p>
        </div>

        {/* Navigation Column */}
        <div className="space-y-4">
          <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-primary">
            Navigation
          </h4>
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => setView("shop-all")}
                className="text-brand-text-muted hover:text-brand-primary transition-colors text-sm font-medium cursor-pointer"
              >
                Shop All
              </button>
            </li>
            <li>
              <button
                onClick={() => setView("home")}
                className="text-brand-text-muted hover:text-brand-primary transition-colors text-sm font-medium cursor-pointer"
              >
                Collections
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setView("home");
                  setTimeout(() => {
                    const section = document.getElementById("philosophy");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="text-brand-text-muted hover:text-brand-primary transition-colors text-sm font-medium cursor-pointer"
              >
                Journal
              </button>
            </li>
          </ul>
        </div>

        {/* Support Column */}
        <div className="space-y-4">
          <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-primary">
            Support
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-brand-text-muted hover:text-brand-primary transition-colors text-sm font-medium"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-brand-text-muted hover:text-brand-primary transition-colors text-sm font-medium"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-brand-text-muted hover:text-brand-primary transition-colors text-sm font-medium"
              >
                Shipping & Returns
              </a>
            </li>
          </ul>
        </div>

        {/* Connect & Newsletter Column */}
        <div className="space-y-6">
          <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-primary">
            Newsletter
          </h4>
          <p className="text-sm text-brand-text-muted leading-relaxed">
            Join our community for early access and seasonal curations.
          </p>

          <form onSubmit={handleSubscribe} className="relative border-b border-brand-primary pb-2 flex items-center">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus("idle");
              }}
              className="bg-transparent border-none py-1 px-0 w-full focus:ring-0 focus:outline-none text-sm text-brand-primary placeholder:text-brand-text-muted/60"
            />
            <button
              type="submit"
              className="text-brand-primary hover:text-brand-secondary transition-colors cursor-pointer p-1 ml-2"
              aria-label="Subscribe"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {status !== "idle" && (
            <p
              className={`text-xs mt-1 leading-relaxed ${
                status === "success" ? "text-brand-secondary" : "text-red-700"
              }`}
            >
              {message}
            </p>
          )}

          <div className="flex gap-4 pt-4">
            <a
              href="#"
              className="text-brand-text-muted hover:text-brand-primary transition-colors"
              aria-label="Website"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a
              href="mailto:rahmadarsyad91@gmail.com"
              className="text-brand-text-muted hover:text-brand-primary transition-colors"
              aria-label="Email support"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full py-8 px-6 md:px-16 max-w-7xl mx-auto border-t border-brand-surface-highest text-center">
        <p className="font-sans text-xs text-brand-text-muted">
          © 2024 AESTHETE. All rights reserved. Registered email: rahmadarsyad91@gmail.com
        </p>
      </div>
    </footer>
  );
}
