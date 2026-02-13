"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FlowerNavigation from "@/components/FlowerNavigation";
import { motion } from "framer-motion";
export default function PromessePage() {
  return (
    <div className="relative overflow-hidden bg-transparent text-slate-50">
      {/* Fond BackgroundPromesse */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/img/Promesse/BacgroundPromesse.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <main className="mt-32 relative z-10 pb-32">
        <section className="mx-auto flex max-w-[1600px] flex-col px-6 pt-0 lg:px-10 xl:px-16">
          <Header />
          <div className="relative flex flex-col items-center justify-center pb-8 text-center pt-28 lg:pt-36">
            <ScrollReveal direction="up">
              <h1 className="max-w-4xl text-balance text-[40px] font-normal leading-tight tracking-tight text-white sm:text-[52px] lg:text-[84px]">
                La promesse Memoy
              </h1>
            </ScrollReveal>
          </div>
        </section>
        {/* Bloc */}
        <section className="mx-auto mt-0 max-w-5xl px-6 lg:px-10 xl:px-16">
          <div className="relative flex flex-col items-center">
            <ScrollReveal direction="up">
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
              <article className="relative w-full overflow-hidden rounded-[32px] bg-white/5 px-6 py-10 text-slate-50 backdrop-blur-[32px] shadow-none sm:px-10 lg:px-14">
                {/* Lueur de fond sous le bloc */}
                <img
                  src="/img/CardBackground.webp"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full rounded-[32px] object-cover opacity-40"
                />
                <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
                  {/* Texte à gauche */}
                  <div className="flex-1 space-y-4 text-left">
                    <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                    Je suis là quand la mémoire vacille
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    La mémoire peut devenir fragile, confuse, imprévisible. Je reconnais les lieux, les habitudes, les signaux qui comptent pour toi. Je suis là pour te ramener à tes repères, même quand tout semble emmêlé.
                    </p>
                  </div>
                  {/* Icône à droite du texte */}
                  <div className="shrink-0">
                    <img
                      src="/img/Memoy-Icons/Confuse.svg"
                      alt=""
                      aria-hidden="true"
                      className="h-[140px] w-[140px] object-contain opacity-95 sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px]"
                    />
                  </div>
                </div>
              </article>
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
            </ScrollReveal>
          </div>
        </section>
        {/* Bloc */}
        <section className="mx-auto mt-0 max-w-5xl px-6 lg:px-10 xl:px-16">
          <div className="relative flex flex-col items-center">
            <ScrollReveal direction="up">
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
              <article className="relative w-full overflow-hidden rounded-[32px] bg-white/5 px-6 py-10 text-slate-50 backdrop-blur-[32px] shadow-none sm:px-10 lg:px-14">
                {/* Lueur de fond sous le bloc */}
                <img
                  src="/img/CardBackground.webp"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full rounded-[32px] object-cover opacity-40"
                />
                <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
                  {/* Icône à gauche (2e bloc) */}
                  <div className="shrink-0 order-2 lg:order-1">
                    <img
                      src="/img/Memoy-Icons/heart.svg"
                      alt=""
                      aria-hidden="true"
                      className="h-[140px] w-[140px] object-contain opacity-95 sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px]"
                    />
                  </div>
                  {/* Texte à droite */}
                  <div className="flex-1 space-y-4 text-left order-1 lg:order-2">
                    <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                    Je veille sur toi 
                    et tes proches
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Je veille sur toi, pour que tu ne sentes pas seul·e face aux oublis. Je veille sur ta famille pour qu’ils sachent que quelqu’un d’autre est avec toi tous les jours. Mais je veille avec bienveillance, pas avec surveillance.
                    </p>
                  </div>
                </div>
              </article>
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
            </ScrollReveal>
          </div>
        </section>
        {/* Bloc */}
        <section className="mx-auto mt-0 max-w-5xl px-6 lg:px-10 xl:px-16">
          <div className="relative flex flex-col items-center">
            <ScrollReveal direction="up">
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
              <article className="relative w-full overflow-hidden rounded-[32px] bg-white/5 px-6 py-10 text-slate-50 backdrop-blur-[32px] shadow-none sm:px-10 lg:px-14">
                {/* Lueur de fond sous le bloc */}
                <img
                  src="/img/CardBackground.webp"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full rounded-[32px] object-cover opacity-40"
                />
                <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
                  {/* Texte à gauche */}
                  <div className="flex-1 space-y-4 text-left">
                    <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                    Je reste simple 
                    et douce
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Je ne t’impose rien. Je parle simplement, à ton rythme. Je m’adapte à toi, pas l’inverse.
                    </p>
                  </div>
                  {/* Icône à droite du texte */}
                  <div className="shrink-0">
                    <img
                      src="/img/Memoy-Icons/Spirale.svg"
                      alt=""
                      aria-hidden="true"
                      className="h-[140px] w-[140px] object-contain opacity-95 sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px]"
                    />
                  </div>
                </div>
              </article>
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
            </ScrollReveal>
          </div>
        </section>
        {/* Bloc */}
        <section className="mx-auto mt-0 max-w-5xl px-6 lg:px-10 xl:px-16">
          <div className="relative flex flex-col items-center">
            <ScrollReveal direction="up">
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
              <article className="relative w-full overflow-hidden rounded-[32px] bg-white/5 px-6 py-10 text-slate-50 backdrop-blur-[32px] shadow-none sm:px-10 lg:px-14">
                {/* Lueur de fond sous le bloc */}
                <img
                  src="/img/CardBackground.webp"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full rounded-[32px] object-cover opacity-40"
                />
                <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
                  {/* Icône à gauche */}
                  <div className="shrink-0 order-2 lg:order-1">
                    <img
                      src="/img/Memoy-Icons/Flower2.svg"
                      alt=""
                      aria-hidden="true"
                      className="h-[140px] w-[140px] object-contain opacity-95 sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px]"
                    />
                  </div>
                  {/* Texte à droite */}
                  <div className="flex-1 space-y-4 text-left order-1 lg:order-2">
                    <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                    Je reconnais tes moments difficiles
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Quand tu cherches tes mots, quand tu perds tes repères, quand la confusion arrive, je ne juge pas. Je suis patiente, cohérente, rassurante.
                    </p>
                  </div>
                </div>
              </article>
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
            </ScrollReveal>
          </div>
        </section>
        {/* Bloc */}
        <section className="mx-auto mt-0 max-w-5xl px-6 lg:px-10 xl:px-16">
          <div className="relative flex flex-col items-center">
            <ScrollReveal direction="up">
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
              <article className="relative w-full overflow-hidden rounded-[32px] bg-white/5 px-6 py-10 text-slate-50 backdrop-blur-[32px] shadow-none sm:px-10 lg:px-14">
                {/* Lueur de fond sous le bloc */}
                <img
                  src="/img/CardBackground.webp"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full rounded-[32px] object-cover opacity-40"
                />
                <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
                  {/* Texte à gauche */}
                  <div className="flex-1 space-y-4 text-left">
                    <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                    Je suis co-créée avec les familles et les aidants
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Je ne suis pas venue d’une idée abstraite de technologie. Je suis construite avec les familles, les aidants, les personnes qui connaissent vraiment ces enjeux.
                    </p>
                  </div>
                  {/* Icône à droite du texte */}
                  <div className="shrink-0">
                    <img
                      src="/img/Memoy-Icons/Duo.svg"
                      alt=""
                      aria-hidden="true"
                      className="h-[140px] w-[140px] object-contain opacity-95 sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px]"
                    />
                  </div>
                </div>
              </article>
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
            </ScrollReveal>
          </div>
        </section>
         {/* Bloc */}
         <section className="mx-auto mt-0 max-w-5xl px-6 lg:px-10 xl:px-16">
          <div className="relative flex flex-col items-center">
            <ScrollReveal direction="up">
          <div className="flex h-8 justify-center lg:h-10">
            <div className="h-full w-px bg-white/25" aria-hidden="true" />
          </div>
              <article className="relative w-full overflow-hidden rounded-[32px] bg-white/5 px-6 py-10 text-slate-50 backdrop-blur-[32px] shadow-none sm:px-10 lg:px-14">
                {/* Lueur de fond sous le bloc */}
                <img
                  src="/img/CardBackground.webp"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full rounded-[32px] object-cover opacity-40"
                />
                <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
                  {/* Icône à gauche */}
                  <div className="shrink-0 order-2 lg:order-1">
                    <img
                      src="/img/Memoy-Icons/Home.svg"
                      alt=""
                      aria-hidden="true"
                      className="h-[140px] w-[140px] object-contain opacity-95 sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px]"
                    />
                  </div>
                  {/* Texte à droite */}
                  <div className="flex-1 space-y-4 text-left order-1 lg:order-2">
                    <h2 className="text-[32px] sm:text-[40px] font-normal leading-tight tracking-tight">
                    Tes données restent chez toi
                    </h2>
                    <p className="max-w-3xl text-[18px] leading-relaxed text-slate-200/90">
                    Ce qui te concerne tes habitudes, tes repères, tes préférences ne se vend pas. Je ne crée pas de profit avec tes données personnelles. Tes informations restent chiffrées et protégées
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </section>
        <ScrollReveal className="mt-32">
          <FlowerNavigation />
        </ScrollReveal>
        <Footer />
      </main>
    </div>
  );
}
