"use client";
import { useState } from "react";
export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <h1 className="text-3xl font-bold text-center mt-10">Mingling Hearts China</h1>
      <p className="text-center mt-4 text-neutral-700">Respectful introductions. Real relationships.</p>
      <p className="text-center mt-2">This is your working homepage placeholder. The full site structure will render once you deploy.</p>
    </div>
  );
}
