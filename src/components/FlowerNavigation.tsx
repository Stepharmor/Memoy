"use client";

import { usePathname } from "next/navigation";

const flowers = [
  {
    href: "/promesse",
    label: "Promesse",
    image: "/img/FlowerBlue.webp",
    gradient:
      "radial-gradient(50% 50% at 50% 50%, rgba(59, 190, 255, 0.5) 0%, rgba(59, 190, 255, 0.00) 100%)",
  },
  {
    href: "/fondations",
    label: "Fondations",
    image: "/img/FlowerPink.webp",
    gradient:
      "radial-gradient(50% 50% at 50% 50%, rgba(209, 125, 224, 0.5) 0%, rgba(209, 125, 224, 0.0) 100%)",
  },
  {
    href: "/manifeste",
    label: "Notre manifeste",
    image: "/img/FlowerGreen.webp",
    gradient:
      "radial-gradient(50% 50% at 50% 50%, rgba(0, 255, 85, 0.5) 0%, rgba(0, 255, 85, 0.00) 100%)",
  },
  {
    href: "/co-creation",
    label: "Co-création avec les familles et partenaires",
    image: "/img/FlowerGold.webp",
    gradient:
      "radial-gradient(50% 50% at 50% 50%, rgba(255, 208, 65, 0.5) 0%, rgba(255, 208, 65, 0.00) 100%)",
  },
];

export default function FlowerNavigation() {
  const pathname = usePathname();

  const visibleFlowers = flowers.filter((f) => f.href !== pathname);
  const isOdd = visibleFlowers.length % 2 !== 0;

  return (
    <section className="mt-8 px-6 py-16 lg:px-10 xl:px-12">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 sm:grid-cols-2 sm:-my-16 sm:gap-y-0 gap-2">
        {visibleFlowers.map((flower, index) => {
          // Si nombre impair, le dernier item est centré seul sur sa ligne
          const isLastAlone = isOdd && index === visibleFlowers.length - 1;

          return (
            <a
              key={flower.href}
              href={flower.href}
              className={`group relative flex aspect-square min-h-[240px] items-center justify-center overflow-hidden rounded-[300px] transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(0,187,255,0.6)] ${
                isLastAlone ? "sm:col-span-2 sm:mx-auto sm:w-1/2" : ""
              }`}
            >
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-5000 ease-out group-hover:opacity-100"
                style={{ backgroundImage: flower.gradient }}
              />
              <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-all duration-5000 ease-out group-hover:scale-130 group-hover:rotate-40"
                style={{
                  backgroundImage: `url('${flower.image}')`,
                  backgroundSize: "55% auto",
                }}
              />
              <span className="relative z-10 max-w-[280px] text-center text-2xl font-medium text-white">
                {flower.label}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
