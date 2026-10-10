"use client";

import Image from "next/image";
import { useLocale } from "./locale-provider";

export function AnnualBanners() {
  const { locale } = useLocale();
  return (
    <div
      className="annual-banners"
      aria-label={locale === "en" ? "Annual slogan banner" : "بنر شعار سال"}
    >
      <div className="annual-banner annual-banner-unified">
        <Image
          src="/assets/annual-unified-banner.png"
          alt={
            locale === "en"
              ? "Annual slogan, portraits and Iranian flag: Resistance economy in the light of national unity and national security"
              : "شعار سال، تصاویر و پرچم ایران؛ اقتصاد مقاومتی در سایه وحدت ملی و امنیت ملی"
          }
          width={1785}
          height={341}
          sizes="(max-width: 599px) calc(100vw - 20px), (max-width: 1319px) calc(100vw - 40px), 1280px"
          preload
        />
      </div>
    </div>
  );
}