interface IMostRead {
  title: string;
  id: string;
}
const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const mostRead: IMostRead[] = data.data;
  console.log(mostRead);
  return (
    <div className="m-5">
      <h2 className="font-bold text-[18px] text-black mb-5 ml-3">সর্বাধিক পঠিত</h2>
      <div>
        {mostRead.map((mr: IMostRead, i: number) => (
          <div key={mr.id} className="flex gap-3 m-3">
            <p className="text-2xl font-bold text-red-700 hover:text-red-900">
              {i + 1}
            </p>
            <h2 className=" font-semibold hover:text-red-500">{mr.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRead;
