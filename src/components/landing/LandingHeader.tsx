import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/figma-assets";
import { PHONE_TEL } from "@/lib/links";
import { LANDING_TEXT, type Language } from "@/components/landing/translations";

type LandingHeaderProps = {
  language: Language;
};

export function LandingHeader({ language }: LandingHeaderProps) {
  const text = LANDING_TEXT[language].header;

  return (
    <header
      className="absolute left-1/2 top-0 z-50 flex h-[102px] w-screen -translate-x-1/2 flex-col items-center justify-start pt-1"
      data-node-id="3:920"
    >
      <div className="flex h-[72px] w-full items-start justify-between pl-3 pr-4 min-[390px]:pl-[14px] min-[390px]:pr-6">
        <div className="flex items-end">
          <Link
            href="/"
            className="relative mt-4 block aspect-[130/37] h-[33px] w-[116px] shrink-0 min-[390px]:h-[37px] min-[390px]:w-[130px]"
          >
            <Image
              alt="Neetrino"
              src={ASSETS.logo}
              width={130}
              height={37}
              className="size-full object-contain object-left"
              priority
              unoptimized
            />
          </Link>
        </div>
        <div className="mt-3 flex items-center">
          <Link href={PHONE_TEL} className="relative block h-[57px] w-[56px] shrink-0" aria-label={text.callAria}>
            <Image alt="" src={ASSETS.headerPhone} fill className="object-cover" unoptimized  loading="eager" />
          </Link>
        </div>
      </div>
    </header>
  );
}
