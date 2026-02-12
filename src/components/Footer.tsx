const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      className="relative z-10 bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/img/FooterBackground.webp')" }}
    >
      <div className="mx-auto flex max-w-[1600px] flex-col gap-12 px-6 py-16 text-slate-50 lg:px-10 xl:px-12">
        {/* Bloc formulaire de contact / newsletter */}
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <h2 className="text-[40px] font-normal tracking-tight text-white sm:text-[48px]">
            Rester informé·e
          </h2>
          <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-slate-200/90">
            Je partage régulièrement des nouvelles sur les fonctionnalités, la sécurité et les meilleures
            façons de soutenir la mémoire au quotidien.
          </p>

          {/* Bloc confidentialité */}
          <div className="mt-16 w-full rounded-[24px] border border-white/25 bg-white/5 px-5 py-5 text-left backdrop-blur-md sm:px-8 sm:py-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-9 w-9 items-center justify-center text-slate-100">
                <img
                  src="/img/lock-alt.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5"
                />
              </div>
              <p className="text-[13px] leading-relaxed text-slate-100/90">
                Votre vie privée est sacrée. Votre email est chiffré et jamais partagé avec des tiers.
                Nous vous respectons. Voir notre{" "}
                <button className="text-[#00BBFF] hover:text-[#33CCFF]">
                  politique de confidentialité
                </button>
                .
              </p>
            </div>
          </div>

          {/* Formulaire email */}
          <form className="mt-16 flex w-full max-w-2xl flex-col gap-4">
            <input
              type="email"
              required
              placeholder="Votre adresse email"
              className="h-14 w-full rounded-[20px] border border-white/20 bg-black/40 px-6 text-[14px] text-slate-50 placeholder:text-slate-400 focus:border-white/60 focus:outline-none"
            />
            <p className="text-left text-[12px] text-slate-200/80">
              Nous envoyons des mises à jour sur les fonctionnalités, la sécurité et les améliorations de produits.
            </p>
            <div className="mt-2 flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white px-8 py-3 text-[14px] font-medium text-slate-900 shadow-[0_12px_35px_rgba(15,23,42,0.65)] hover:bg-slate-100"
              >
                S'abonner
              </button>
            </div>
          </form>
        </div>

        {/* Bandeau bas – navigation & réseaux */}
        <div className="mt-32 px-8 pt-8 lg:px-12 xl:px-16">
          <div className="grid justify-items-center gap-10 text-[13px] text-slate-200/90 sm:grid-cols-3 lg:items-start">
            {/* Colonne gauche : marque + réseaux sociaux */}
            <div className="space-y-4 text-left">
              <p className="text-[20px] font-normal text-white">Memoy</p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-[12px] text-slate-200/80">
                <a href="#" className="flex flex-col items-center gap-2 hover:opacity-80">
                  <img
                    src="/img/x-social-media-black-icon 1.svg"
                    alt="X (Twitter)"
                    className="h-6 w-6"
                  />
                  <span className="text-[12px] text-slate-200/80">X</span>
                </a>
                <a href="#" className="flex flex-col items-center gap-2 hover:opacity-80">
                  <img
                    src="/img/LinkedIn.svg"
                    alt="LinkedIn"
                    className="h-6 w-6"
                  />
                  <span className="text-[12px] text-slate-200/80">LinkedIn</span>
                </a>
                <a href="#" className="flex flex-col items-center gap-2 hover:opacity-80">
                  <img
                    src="/img/mail.svg"
                    alt="Email"
                    className="h-6 w-6"
                  />
                  <span className="text-[12px] text-slate-200/80">Email</span>
                </a>
              </div>
            </div>

            {/* Colonne milieu : Product */}
            <div className="space-y-3 text-left">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400/90">
                Product
              </p>
              <div className="space-y-2">
                <button className="block w-full text-left text-[13px] text-slate-100 hover:text-white">
                  À propos
                </button>
                <button className="block w-full text-left text-[13px] text-slate-100 hover:text-white">
                  Sécurité
                </button>
                <button className="block w-full text-left text-[13px] text-slate-100 hover:text-white">
                  Fondateurs
                </button>
              </div>
            </div>

            {/* Colonne droite : Légal */}
            <div className="space-y-3 text-left">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400/90">
                Légal
              </p>
              <div className="space-y-2">
                <button className="block w-full text-left text-[13px] text-slate-100 hover:text-white">
                  Vie privée
                </button>
                <button className="block w-full text-left text-[13px] text-slate-100 hover:text-white">
                  Termes
                </button>
              </div>
            </div>
          </div>

          <p className="mt-24 text-center text-[11px] text-slate-300/75">
            © {currentYear} Memoy. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
