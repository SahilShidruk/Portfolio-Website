import Link from "next/link";
import { Contact, File, ToolCase } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center py-5 md:justify-between">
      <Link
        href="/"
        className="text-base font-medium opacity-80 transition-opacity hover:opacity-100 md:text-xl md:font-semibold"
      >
        Sahil Shidruk
      </Link>

      <div className="hidden items-center gap-6 md:flex">
        <Link
          href="#tools"
          className="flex items-center gap-2 text-base font-medium opacity-80 transition-opacity hover:opacity-100"
        >
          <ToolCase size={18} />
          Tools
        </Link>

        <Link
          href="#projects"
          className="flex items-center gap-2 text-base font-medium opacity-80 transition-opacity hover:opacity-100"
        >
          <File size={18} />
          Projects
        </Link>

        <Link
          href="#contact"
          className="flex items-center gap-2 text-base font-medium opacity-80 transition-opacity hover:opacity-100"
        >
          <Contact size={18} />
          Contact
        </Link>
      </div>
    </nav>
  );
}