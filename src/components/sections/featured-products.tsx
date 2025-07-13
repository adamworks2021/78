'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader } from '@/components/ui/section'
import { perfumes } from '@/lib/data'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { CarouselImage } from '@/components/ui/carousel-image'

export function FeaturedProducts() {
  // 精选产品（前3个）
  const featuredPerfumes = perfumes.slice(0, 3)

  return (
    <Section>
      <SectionHeader
        subtitle="精选产品"
        title="星座能量香水"
        description="融合古老智慧与现代工艺，为你带来专属的星座能量"
      />

      <div className="mt-16">
        {/* 产品网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPerfumes.map((perfume, index) => (
            <motion.div
              key={perfume.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              {/* 产品卡片 */}
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* 产品图片区域 */}
                <div className="relative aspect-[3/4] overflow-hidden bg-white">
                  <CarouselImage
                    zodiac={perfume.id}
                    className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                    priority={index < 3}
                  />
                </div>

                {/* 产品信息 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {perfume.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {perfume.chineseName}
                  </p>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                    {perfume.description}
                  </p>
                  
                  {/* 价格 */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-brand-primary">
                      ¥{perfume.sizes[0].price}
                    </div>
                    <div className="text-sm text-gray-500">
                      代理价 ¥{perfume.sizes[0].agentPrices.level1}
                    </div>
                  </div>

                  {/* 查看详情按钮 */}
                  <Link href="/products" className="block">
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 hover:border-purple-300 transition-all duration-300 group/btn">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative px-6 py-3 flex items-center justify-center space-x-2 text-purple-700 group-hover/btn:text-white transition-colors duration-300">
                        <span className="font-semibold">了解详情</span>
                        <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </div>
                      {/* 魔法闪烁效果 */}
                      <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover/btn:opacity-100 animate-pulse"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 查看全部产品 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/products" className="inline-block">
            <div className="relative group/main-btn">
              {/* 背景光晕效果 */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur opacity-30 group-hover/main-btn:opacity-60 transition duration-500 animate-pulse"></div>

              {/* 主按钮 */}
              <div className="relative px-12 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-xl text-white font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                {/* 星座图案装饰 */}
                <div className="absolute top-1 left-3 text-yellow-300 text-xs opacity-70">✨</div>
                <div className="absolute bottom-1 right-3 text-yellow-300 text-xs opacity-70">⭐</div>

                <div className="flex items-center justify-center space-x-3">
                  <span>查看全部12款星座香水</span>
                  <ArrowRight className="h-5 w-5 transform group-hover/main-btn:translate-x-2 transition-transform duration-300" />
                </div>

                {/* 内部光效 */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/main-btn:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </Section>
  )
}
