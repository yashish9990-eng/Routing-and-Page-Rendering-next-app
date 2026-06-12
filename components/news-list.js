import Link from "next/link";
import Image from "next/image";

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <Image
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              width={100}
              height={100}
            />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
