import { getAvailableNewsYears } from "@/libs/news";
import Link from "next/link";

export default function ArchivePage() {
  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <Link key={link} href={`/archive/${link}`}>
              {link}
            </Link>
          ))}
        </ul>
      </nav>
      <h1>Archive Page</h1>
    </header>
  );
}
