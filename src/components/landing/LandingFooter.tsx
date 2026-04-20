import Image from "next/image";
import Link from "next/link";
import { LANDING_TEXT, type Language } from "@/components/landing/translations";
import { ASSETS } from "@/lib/figma-assets";
import {
  EMAIL_LABEL,
  EMAIL_MAILTO,
  INSTAGRAM_URL,
  PHONE_LABEL,
  PHONE_TEL,
  SITE_URL,
  WHATSAPP_URL,
} from "@/lib/links";

type SocialItem = {
  href: string;
  label: string;
  glow: string;
  icon: string;
  ellipse: string;
  insetGlow: string;
  showScreen: boolean;
};

const SOCIAL = [
  {
    href: WHATSAPP_URL,
    label: "WhatsApp",
    glow: ASSETS.socialWhatsappA,
    icon: ASSETS.socialWhatsappB,
    ellipse: ASSETS.socialEllipse,
    insetGlow: "inset_0px_0px_8px_0px_rgba(13,252,37,0.32)",
    showScreen: true,
  },
  {
    href: INSTAGRAM_URL,
    label: "Instagram",
    glow: ASSETS.socialInstagramA,
    icon: ASSETS.socialInstagramB,
    ellipse: ASSETS.socialEllipsePink,
    insetGlow: "inset_0px_0px_8px_0px_rgba(190,13,252,0.32)",
    showScreen: false,
  },
] as const satisfies readonly SocialItem[];

function SocialIcon({ item }: { item: SocialItem }) {
  return (
    <span className="relative flex h-12 w-12 items-center justify-center">
      <span className="relative h-12 w-12 overflow-hidden rounded-xl border-[0.8px] border-[rgba(216,216,216,0.05)] p-2 shadow-[8px_4px_16px_0px_rgba(0,0,0,0.08)]">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[12px] backdrop-blur-[10px]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(248, 251, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        />
        <span className="relative block size-8 mix-blend-plus-lighter">
          <Image alt="" src={item.glow} fill className="object-cover" unoptimized />
        </span>
        <span className="absolute left-[7.6px] top-[7.6px] block size-8">
          <Image alt="" src={item.icon} fill className="object-cover" unoptimized />
        </span>
        <span className="absolute left-[12.6px] top-[40.6px] block h-[13px] w-[23px]">
          <Image alt="" src={item.ellipse} fill className="object-cover" unoptimized />
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-[-0.4px] rounded-[inherit]"
          style={{ boxShadow: item.insetGlow }}
        />
      </span>
      {item.showScreen ? (
        <span className="pointer-events-none absolute left-2 top-2 size-[18px] mix-blend-screen">
          <Image alt="" src={ASSETS.socialEllipseScreen} fill className="object-cover" unoptimized />
        </span>
      ) : null}
    </span>
  );
}

type LandingFooterProps = {
  language: Language;
};

function SocialLinks({ language }: LandingFooterProps) {
  const text = LANDING_TEXT[language].footer;

  return (
    <nav className="flex flex-wrap items-center justify-center gap-3 min-[390px]:gap-4" aria-label={text.socialAria}>
      {SOCIAL.map((s) => (
        <Link
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:brightness-110"
        >
          <SocialIcon item={s} />
          <span className="sr-only">{s.label}</span>
        </Link>
      ))}
    </nav>
  );
}

function ContactLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 text-white min-[390px]:gap-6">
      <Link href={PHONE_TEL} className="flex items-center gap-1.5 font-manrope text-xs">
        <span className="relative size-[19px] shrink-0">
          <Image alt="" src={ASSETS.phoneIcon} fill className="object-contain" unoptimized />
        </span>
        {PHONE_LABEL}
      </Link>
      <Link href={EMAIL_MAILTO} className="flex items-center gap-1.5 font-manrope text-xs">
        <span className="relative h-[15px] w-[19px] shrink-0">
          <Image alt="" src={ASSETS.emailIcon} fill className="object-contain" unoptimized />
        </span>
        {EMAIL_LABEL}
      </Link>
    </div>
  );
}

function FooterLegal({ language }: LandingFooterProps) {
  const text = LANDING_TEXT[language].footer.legal;

  return (
    <div className="flex max-w-[271px] flex-col items-center px-2 pt-6 text-center font-manrope text-xs leading-4 text-white/40">
      <p>
        {text.copyrightPrefix}{" "}
        <Link href={SITE_URL} className="underline underline-offset-2 hover:text-white/60">
          {text.companyName}
        </Link>
      </p>
    </div>
  );
}

export function LandingFooter({ language }: LandingFooterProps) {
  return (
    <footer
      className="flex w-full flex-col items-center gap-6 pb-12 pt-7 min-[390px]:pt-8"
      data-node-id="3:881"
    >
      <div className="relative flex justify-center">
        <Image
          alt="Neetrino"
          src={ASSETS.logo}
          width={130}
          height={37}
          className="aspect-[130/37] h-[37px] w-[130px] object-contain"
          unoptimized
        />
      </div>
      <SocialLinks language={language} />
      <ContactLinks />
      <FooterLegal language={language} />
    </footer>
  );
}
