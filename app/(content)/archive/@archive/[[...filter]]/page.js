import NewsList from "@/components/news-list";
import {
  getNewsForYear,
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from "@/libs/news";
import Link from "next/link";
import { Suspense } from "react";

async function FilterHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    const debugObj = { error: "Invalid Filter." };
    return <h2>{JSON.stringify(debugObj.error)}</h2>;
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
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
  );
}

async function FilterdNews({ year, month }) {
  let news;
  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

export default async function FilteredNewsPage({ params }) {
  const newsYear = params.filter;
  const selectedYear = newsYear?.[0];
  const selectedMonth = newsYear?.[1];

  return (
    <>
      {/* <Suspense fallback={<p>Loading Filters....</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense> */}
      <Suspense fallback={<p>Loading news....</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
        <FilterdNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
