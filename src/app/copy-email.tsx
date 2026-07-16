"use client";

import { useState } from "react";

const EMAIL = "hello@nocharisma.com";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <div className="contact-actions" aria-label="Contact actions">
      <a className="contact-link" href={`mailto:${EMAIL}`}>
        {EMAIL}
      </a>
      <button className="copy-email" type="button" onClick={copyEmail}>
        {copied ? "Copied" : "Copy email"}
      </button>
    </div>
  );
}
