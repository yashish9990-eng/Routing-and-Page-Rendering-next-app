import Link from "next/link";
import {DUMMY_NEWS} from "@/dummy-news";
import Image from "next/image";

export default function NewsPage() {
  return (
    <>
      <h1>New Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={100} height={100} />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
