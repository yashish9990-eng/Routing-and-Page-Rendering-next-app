import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function ImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug,
  );

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <Image
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
        fill
      />
    </div>
  );
}
