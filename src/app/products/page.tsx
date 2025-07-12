'use client'

import { Section, SectionHeader } from "@/components/ui/section"
import { PerfumeCard } from "@/components/ui/perfume-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { perfumes } from "@/lib/data"
import { Sparkles, Star } from "lucide-react"

export default function ProductsPage() {
  // 显示所有产品
  const displayPerfumes = perfumes

  return (
    <div className="pt-20">
      {/* 页面头部 */}
      <Section background="gradient" padding="large">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="h-8 w-8 text-brand-primary" />
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              产品系列
            </h1>
            <Sparkles className="h-8 w-8 text-brand-primary" />
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            12款星座主题魔法香水，每一款都蕴含着独特的宇宙能量，
            为你的人生注入专属的魔法力量。
          </p>
        </div>
      </Section>



      {/* 产品网格 */}
      <Section>
        <div className="mb-8">
          <p className="text-gray-600 text-center">
            共 <span className="font-semibold text-brand-primary">{displayPerfumes.length}</span> 款星座主题魔法香水
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayPerfumes.map((perfume, index) => (
            <PerfumeCard
              key={perfume.id}
              perfume={perfume}
              index={index}
            />
          ))}
        </div>
      </Section>



      {/* 底部CTA */}
      <Section background="mystical" className="text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            找到属于你的星座香水
          </h2>
          <p className="text-xl mb-8 opacity-90">
            让78°魔法香水为你开启能量之门
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              联系我们
            </Button>
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              成为代理
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
