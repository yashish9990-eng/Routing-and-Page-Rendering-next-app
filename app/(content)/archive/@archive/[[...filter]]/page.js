import NewsList from "@/components/news-list";
import {
  getNewsForYear,
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from "@/libs/news";
import Link from "next/link";

export default async function FilteredNewsPage({ params }) {
  let links = await getAvailableNewsYears();
  const newsYear = params.filter;
  const selectedYear = newsYear?.[0];
  const selectedMonth = newsYear?.[1];

  let news;
  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period.</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  const availableYears = await getAvailableNewsYears();
  if (
    (selectedYear && !availableYears.includes(selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
  ) {
    const debugObj = { error: "Invalid Filter." };
    return <h2>{JSON.stringify(debugObj.error)}</h2>;
  }
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li>
                  <Link key={link} href={href}>
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <h1>Archive Page</h1>
      </header>
      {newsContent}
    </>
  );
}
