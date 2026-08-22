import Image from "next/image";
import Link from "next/link";
import { agency } from "@/data/agency";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-foreground/10 bg-background px-6 py-6 sm:px-14">
      <Link href="/">
        <Image
          src="/brand/logo.png"
          alt={agency.name}
          width={262}
          height={66}
          priority
          className="h-6 w-auto sm:h-[26px]"
        />
      </Link>
      <nav className="flex items-center gap-5 sm:gap-9">
        <Link
          href="/#services"
          className="hidden text-sm font-medium sm:inline hover:text-accent"
        >
          Services
        </Link>
        <Link
          href="/#work"
          className="hidden text-sm font-medium sm:inline hover:text-accent"
        >
          Work
        </Link>
        <Link
          href="/#about"
          className="hidden text-sm font-medium sm:inline hover:text-accent"
        >
          About
        </Link>
        <a
          href={agency.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm bg-foreground px-4 py-2.5 text-sm font-semibold text-background hover:bg-accent hover:text-foreground sm:px-[22px]"
        >
          Book Your Audit
        </a>
      </nav>
    </header>
  );
}
