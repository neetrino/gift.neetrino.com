import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/figma-assets";
import { EMAIL_MAILTO, WHATSAPP_URL } from "@/lib/links";
import { WhatsAppGlyph } from "@/components/landing/WhatsAppGlyph";
import { LANDING_TEXT, type Language } from "@/components/landing/translations";

type FinalCtaSectionProps = {
  language: Language;
};

export function FinalCtaSection({ language }: FinalCtaSectionProps) {
  const text = LANDING_TEXT[language].finalCta;

  return (
    <section
      className="flex w-full flex-col gap-6 py-8"
      data-node-id="3:871"
      aria-labelledby="final-cta-heading"
    >
      <h2
        id="final-cta-heading"
        className="text-center font-orbitron text-[clamp(21px,7.2vw,24px)] font-bold leading-[clamp(28px,8.4vw,32px)] text-[#dfe0ff]"
      >
        {text.titleLines[0]}
        <br />
        {text.titleLines[1]}
      </h2>
      <div className="flex flex-col gap-3">
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex w-full items-start justify-center gap-3 rounded-full bg-[rgba(255,255,255,0.09)] px-3 py-4 text-white transition hover:bg-[rgba(255,255,255,0.14)] min-[390px]:gap-[18px] min-[390px]:px-0"
          data-node-id="3:875"
        >
          <span className="pointer-events-none absolute inset-[151px_453.5px_-151px_-453.5px]">
            <span className="absolute inset-[-8.93%_-7.27%_-80.36%_-7.27%]">
              <Image alt="" src={ASSETS.linkShadow} fill className="object-cover" unoptimized  loading="eager" />
            </span>
          </span>
          <WhatsAppGlyph />
          <span className="text-center font-manrope text-[15px] font-bold min-[360px]:text-base">
            {text.whatsappCta}
          </span>
        </Link>
        <Link
          href={EMAIL_MAILTO}
          className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#3025ff] to-[#1d1699] py-4 font-manrope text-[15px] font-bold text-white transition hover:brightness-110 min-[360px]:text-base"
          data-node-id="3:878"
        >
          {text.emailCta}
        </Link>
      </div>
    </section>
  );
}
