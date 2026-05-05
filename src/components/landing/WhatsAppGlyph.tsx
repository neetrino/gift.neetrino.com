const WHATSAPP_GLYPH_SRC = "/hero-whatsapp-glyph.svg";

type WhatsAppGlyphProps = { className?: string };

export function WhatsAppGlyph({ className }: WhatsAppGlyphProps) {
  return (
    <img
      alt=""
      src={WHATSAPP_GLYPH_SRC}
      width={24}
      height={24}
      className={`size-6 shrink-0 ${className ?? ""}`}
      decoding="async"
    />
  );
}
