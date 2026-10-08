import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/bazar-hero.png";

const Hero = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <section className="px-6 py-5">
      

        <div className="min-h-[380px] rounded-3xl border border-gray-200 bg-white overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full">

            {/* ================= Left Content ================= */}
            <div className="px-6 py-10 sm:px-10 md:px-12 lg:px-16">

              {/* Date */}
              <p className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                {date}
              </p>

              {/* Heading */}
              <h1 className="mt-5 max-w-xl text-4xl font-bold leading-[1.2] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                আজকের বাজারের দাম{" "}
                <span className="text-green-600">
                  এক নজরে
                </span>
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
                দামের পরিবর্তন এক জায়গায়।
              </p>

              {/* CTA */}
              <div className="mt-7">
                <Link
                  href="#সব-পণ্য"
                  className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 hover:shadow-md active:scale-95"
                >
                  সব পণ্য দেখুন
                  <span className="ml-2 text-lg">↓</span>
                </Link>
              </div>
            </div>

            {/* ================= Right Image ================= */}
            <div className="flex items-center justify-center px-6 pb-10 md:px-8 md:pb-0">
              <Image
                src={heroImage}
                alt="বাজারের পণ্যের ছবি"
                width={420}
                height={420}
                priority
                className="w-[260px] sm:w-[320px] md:w-[350px] lg:w-[400px] h-auto object-contain"
              />
            </div>

          </div>
        </div>

      
    </section>
  );
};

export default Hero;