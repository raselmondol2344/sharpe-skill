import Image from "next/image";
import { Button } from "@heroui/react";
import { Chip } from "@heroui/react";
import Link from "next/link";

const courseDetailspage = async ({ params }) => {
  const { id } = await params;

  const getData = await fetch("http://localhost:3000/data.json");
  const photoData = await getData.json();

  const photo = photoData.find((p) => p.id == id);

  return (
    <div className="max-w-7xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* Left Side: Course Image */}
        <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[400px] lg:h-[460px] overflow-hidden rounded-2xl shadow-md">
          <Image
            src={photo.image}
            alt={photo.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Right Side: Course Essential Details */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div>
            <Chip variant="flat" color="primary" className="mb-4 font-medium">
              {photo.category}
            </Chip>

            <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-default-900 leading-tight">
              {photo.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-default-600 leading-relaxed">
              {photo.description}
            </p>
          </div>

          {/* Quick Info Grid - No Borders, Modern Badges */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-default-50 rounded-xl p-4 transition-hover hover:bg-default-100">
              <p className="text-xs font-medium uppercase tracking-wider text-default-400">
                Instructor
              </p>
              <h3 className="font-semibold text-base text-default-800 mt-1 truncate">
                {photo.instructor}
              </h3>
            </div>

            <div className="bg-default-50 rounded-xl p-4 transition-hover hover:bg-default-100">
              <p className="text-xs font-medium uppercase tracking-wider text-default-400">
                Duration
              </p>
              <h3 className="font-semibold text-base text-default-800 mt-1">
                {photo.duration}
              </h3>
            </div>

            <div className="bg-default-50 rounded-xl p-4 transition-hover hover:bg-default-100">
              <p className="text-xs font-medium uppercase tracking-wider text-default-400">
                Level
              </p>
              <h3 className="font-semibold text-base text-default-800 mt-1">
                {photo.level}
              </h3>
            </div>

            <div className="bg-default-50 rounded-xl p-4 transition-hover hover:bg-default-100">
              <p className="text-xs font-medium uppercase tracking-wider text-default-400">
                Rating
              </p>
              <h3 className="font-semibold text-base text-default-850 mt-1 flex items-center gap-1">
                ⭐ {photo.rating}
              </h3>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="mt-8">
            <Link href='/'>
            <Button
              color="primary"
              size="lg"
              radius="lg"
              className="w-full sm:w-auto px-12 font-semibold shadow-lg shadow-primary/20"
            >
              Enroll Now
            </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Description / Overview Section */}
      <div className="mt-16 bg-default-50/50 rounded-2xl p-6 sm:p-10 border border-default-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-default-900 mb-4">
          Course Overview
        </h2>
        <p className="leading-relaxed text-base sm:text-lg text-default-600 max-w-4xl">
          {photo.description}
        </p>
      </div>
    </div>
  );
};

export default courseDetailspage;