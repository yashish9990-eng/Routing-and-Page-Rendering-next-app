import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/libs/news";

export default function FilteredNewsPage({ params }) {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);

  if (!news || news.length === 0) {
    return notFound();
  }

  return <NewsList news={news} />;
}
