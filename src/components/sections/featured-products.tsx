'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Section, SectionHeader } from '@/components/ui/section'
import { perfumes } from '@/lib/data'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

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
                <div className={`aspect-square bg-gradient-to-br ${perfume.color} p-8 flex items-center justify-center relative`}>
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">{perfume.icon}</div>
                    <div className="text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      {perfume.zodiac}
                    </div>
                  </div>
                  
                  {/* 悬停效果 */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300"
                    asChild
                  >
                    <Link href="/products">
                      了解详情
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
          <Button size="lg" variant="gradient" asChild>
            <Link href="/products">
              查看全部12款星座香水
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}
