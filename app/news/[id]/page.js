export default function NewsDetailPage({ params }) {
  const newsDetails = params.id.charAt(0).toUpperCase() + params.id.slice(1);
  console.log("id:--->", params.id);

  return <h1>News Detail Page : {newsDetails}</h1>;
}
