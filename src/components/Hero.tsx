import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/bazar-hero.png";

const Hero = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <section className="w-full px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto w-full max-w-7xl">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm sm:rounded-3xl">
          
          <div className="grid grid-cols-1 items-center md:grid-cols-2">

            {/* ================= Left Content ================= */}
            <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-14 lg:py-16">

              {/* Date */}
              <p className="inline-flex max-w-full items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 sm:text-sm">
                {date}
              </p>

              {/* Heading */}
              <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-[1.2] tracking-tight text-gray-900 sm:mt-5 sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                আজকের বাজারের দাম{" "}
                <span className="text-green-600">
                  এক নজরে
                </span>
              </h1>

              {/* Description */}
              <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-5 sm:text-base sm:leading-7 lg:text-lg">
                চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
                দামের পরিবর্তন এক জায়গায়।
              </p>

              {/* CTA */}
              <div className="flex justify-center sm:justify-start mt-6 sm:mt-7">
                <Link
                  href="#allProducts"
                  className="inline-flex items-center justify-center rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-md active:scale-95 sm:px-6 sm:py-3"
                >
                  সব পণ্য দেখুন
                  <span className="ml-2 text-base sm:text-lg">
                    ↓
                  </span>
                </Link>
              </div>

            </div>

            {/* ================= Right Image ================= */}
            <div className="flex items-center justify-center px-5 pb-8 sm:px-8 sm:pb-10 md:px-6 md:py-10 lg:px-10">
              <Image
                src={heroImage}
                alt="বাজারের পণ্যের ছবি"
                width={420}
                height={420}
                priority
                className="
                  h-auto
                  w-[200px]
                  object-contain
                  sm:w-[280px]
                  md:w-[300px]
                  lg:w-[360px]
                  xl:w-[420px]
                "
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;