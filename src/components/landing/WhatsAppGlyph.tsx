import Image from "next/image";
import { ASSETS } from "@/lib/figma-assets";

type WhatsAppGlyphProps = { className?: string };

export function WhatsAppGlyph({ className }: WhatsAppGlyphProps) {
  return (
    <span
      className={`relative inline-block h-6 w-[24px] ${className ?? ""}`}
      style={{
        maskImage: `url('${ASSETS.whatsappMask}')`,
        WebkitMaskImage: `url('${ASSETS.whatsappMask}')`,
        maskSize: "24px 24px",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
    >
      <Image alt="" src={ASSETS.whatsappIcon} width={24} height={24} className="size-full" unoptimized  loading="eager" />
    </span>
  );
}
