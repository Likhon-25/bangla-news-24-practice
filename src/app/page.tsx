import Marquee from "@/components/Marquee";

const page = () => {
  return (
    <div>
      <Marquee />

      <div className="grid grid-cols-3 max-w-7xl mx-auto">
        {/* news section */}
        <div className="bg-red-500 col-span-2 p-10"></div>

        {/* most news section */}
        <div className="bg-green-500 col-span-1 p-10"></div>
      </div>
    </div>
  );
};

export default page;
