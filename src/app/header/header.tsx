"use client";

import React, { useState } from "react";
import { CloseIcon, HamburgerIcon } from "../../components/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter()

  function renderMobileNavbar() {
    return (
      <div className="bg-white w-screen h-screen absolute flex flex-col top-0 left-0 gap-6 px-6 pt-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="font-bold text-xl lg:text-3xl">
              William
            </h1>
          </Link>
          <div onClick={() => {
            setIsMenuOpen(false);
          }}>
            <CloseIcon className="w-5 h-5" />
          </div>
        </div>

        <nav className="flex flex-col gap-4">
          {renderNavbarTabItems({ text: "About", view: "mobile", href: "about" })}
          {renderNavbarTabItems({ text: "Experiences", view: "mobile", href: "experiences" })}
          {renderNavbarTabItems({ text: "Projects", view: "mobile", href: "projects" })}
          {renderNavbarTabItems({ text: "Contact", view: "mobile", href: "contact" })}
        </nav>
      </div>
    );
  }

  function renderNavbarTabItems({
    text,
    view,
    href
  }: {
    text: string;
    view: "mobile" | "web";
    href: string
  }) {
    return (
      <Link
        href={href}
        className={`cursor-pointer font-medium hover:font-bold transition-all duration-200`}
      >
        {text}
      </Link>
    );
  }

  return (
    <div className="px-6 lg:px-20 py-6 lg:py-10 sticky top-0 flex justify-between lg:items-center bg-white/80 backdrop-blur">
      <Link href="/">
        <h1 className="font-bold text-xl lg:text-3xl">
          William
        </h1>
      </Link>

      <nav className="hidden lg:flex gap-10 flex-shrink-0">
        {renderNavbarTabItems({ text: "About", view: "web", href: "about" })}
        {renderNavbarTabItems({ text: "Experiences", view: "web", href: "experiences" })}
        {renderNavbarTabItems({ text: "Projects", view: "web", href: "projects" })}
        {renderNavbarTabItems({ text: "Contact", view: "web", href: "contact" })}
      </nav>

      <div className="lg:hidden flex flex-col gap-2">
        {isMenuOpen ? (
          renderMobileNavbar()
        ) : (
          <div onClick={() => {
            setIsMenuOpen(true);
          }}>
            <HamburgerIcon className="w-5 h-5" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
