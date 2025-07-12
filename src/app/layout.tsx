import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PerformanceMonitor } from "@/components/performance/web-vitals";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "78° 魔法香水 - 开启你的能量之门",
  description: "源自意大利的古老魔法香水配方，融合塔罗牌的神秘智慧与天然植物精华，12款星座主题香水为你的人生注入更多可能性。",
  keywords: ["魔法香水", "78度", "星座香水", "塔罗牌", "能量疗愈", "天然香水", "代理加盟"],
  authors: [{ name: "78° 魔法香水" }],
  creator: "78° 魔法香水",
  publisher: "78° 魔法香水",
  openGraph: {
    title: "78° 魔法香水 - 开启你的能量之门",
    description: "源自意大利的古老魔法香水配方，融合塔罗牌的神秘智慧与天然植物精华",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "78° 魔法香水 - 开启你的能量之门",
    description: "源自意大利的古老魔法香水配方，融合塔罗牌的神秘智慧与天然植物精华",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PerformanceMonitor />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
