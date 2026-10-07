import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const section = data.data;
  // main news
  const mainNews = section[0].articles;

  // other news
  const otherSection = section.slice(1);
  // console.log(otherSection);

  return (
    <div>
      <Marquee />

      <div className="grid grid-cols-3 max-w-7xl mx-auto">
        {/* news section */}
        <div className="col-span-2">
          <MainNews news={mainNews} />
          <div className="my-5">
            {otherSection.map((os) => (
              <div key={os.curationId}>
                <h1 className="border-b border-b-red-600 mt-5">{os.title}</h1>

                <div className='grid grid-cols-3 gap-3'>
                  {os.articles.map(news => <NewsCard key={news.id} news={news} /> )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* most news section */}
        <div className="col-span-1">
          <MostRead />
        </div>
      </div>
    </div>
  );
}
