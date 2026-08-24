import Link from "next/link";
import { Contact, File, ToolCase } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className="text-xl font-semibold">
        Sahil Shidruk
      </Link>

      <div className="flex items-center gap-6">
        <Link
          href="#tools"
          className="flex items-center gap-2 hover:underline"
        >
          <ToolCase size={18} />
          Tools
        </Link>
        
        <Link
          href="#projects"
          className="flex items-center gap-2 hover:underline"
        >
          <File size={18} />
          Projects
        </Link>

        <Link
          href="#contact"
          className="flex items-center gap-2 hover:underline"
        >
          <Contact size={18} />
          Contact
        </Link>
      </div>
    </nav>
  );
}
