// import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";
import { getAllNews } from "@/libs/news";

export default async function NewsPage() {
  // const response = await fetch("http://localhost:8080/news");

  // if (!response.ok) {
  //   throw new Error("Failed to fetch the news");
  // }

  // const newsData = await response.json();

  const news = getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />{" "}
    </>
  );
}
