import Image from "next/image";

// Fixed outlines preserve the existing lettering without requiring a system font.
export function BrandWordmark() {
  return (
    <Image
      alt="Bressan C2"
      className="block h-[1em] w-[4.942em] object-contain"
      height={100}
      src="/images/bressan-c2-wordmark.svg"
      unoptimized
      width={494}
    />
  );
}
