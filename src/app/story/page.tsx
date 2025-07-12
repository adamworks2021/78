'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { storyChapters } from "@/lib/data"
import { Sparkles, MapPin, Heart, Star, Zap, Globe } from "lucide-react"
import Link from "next/link"

export default function StoryPage() {
  return (
    <div className="pt-20">
      {/* 页面头部 */}
      <Section background="mystical" padding="large" className="text-white">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="h-8 w-8 text-yellow-400" />
              <h1 className="text-4xl font-bold sm:text-5xl">
                品牌故事
              </h1>
              <Sparkles className="h-8 w-8 text-yellow-400" />
            </div>
            <p className="mx-auto max-w-2xl text-xl opacity-90">
              一段跨越千里的意大利之旅，一份传承千年的古老配方，
              开启了78°魔法香水的神奇篇章。
            </p>
          </motion.div>
        </div>
      </Section>

      {/* 创始人介绍 */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 p-12 flex items-center justify-center text-white shadow-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🔮</div>
                <h3 className="text-2xl font-bold">Adam</h3>
                <p className="text-lg opacity-90">创始人 & 塔罗师</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              关于创始人 Adam
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Adam是一位资深的塔罗牌占卜师，对神秘学和能量疗愈有着深厚的研究。
                七年前，他怀着对塔罗牌艺术的热爱，踏上了前往意大利的求学之旅。
              </p>
              <p>
                在意大利的古老城市中，Adam不仅学习了正宗的塔罗牌解读技巧，
                更幸运地遇到了一位传承古老魔法香水配方的大师。
              </p>
              <p>
                这份珍贵的配方融合了塔罗牌的神秘智慧和天然植物的能量，
                经过千百年的传承和完善，具有独特的疗愈和能量提升效果。
              </p>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-brand-primary">
                <MapPin className="h-5 w-5" />
                <span className="font-semibold">意大利求学</span>
              </div>
              <div className="flex items-center space-x-2 text-brand-primary">
                <Star className="h-5 w-5" />
                <span className="font-semibold">7年经验</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 故事章节 */}
      <Section background="gradient">
        <SectionHeader
          subtitle="品牌历程"
          title="从意大利到中国的魔法之旅"
          description="每一个章节都记录着78°魔法香水的成长足迹"
        />
        
        <div className="mt-16 space-y-16">
          {storyChapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* 内容 */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center text-sm font-bold">
                    {chapter.order}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {chapter.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {chapter.content}
                </p>
              </div>
              
              {/* 图片占位 */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <Card className="overflow-hidden shadow-xl">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="text-4xl mb-2">
                          {index === 0 && '🇮🇹'}
                          {index === 1 && '🔮'}
                          {index === 2 && '🌿'}
                          {index === 3 && '✨'}
                          {index === 4 && '🌟'}
                        </div>
                        <p className="text-sm">{chapter.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 品牌价值观 */}
      <Section>
        <SectionHeader
          subtitle="品牌价值观"
          title="我们的使命与愿景"
          description="78°魔法香水致力于传递美好，分享能量，让世界充满爱与希望"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: "传递美好",
              description: "通过魔法香水传递正能量，帮助每个人发现内在的美好与力量。",
              color: "from-red-500 to-pink-500"
            },
            {
              icon: Zap,
              title: "能量疗愈",
              description: "运用古老的智慧和天然的成分，为现代人提供身心灵的平衡与疗愈。",
              color: "from-purple-500 to-indigo-500"
            },
            {
              icon: Globe,
              title: "连接宇宙",
              description: "帮助人们与宇宙能量建立连接，开启属于自己的人生旅程。",
              color: "from-blue-500 to-cyan-500"
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>



      {/* 底部CTA */}
      <Section background="mystical" className="text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            加入78°的魔法世界
          </h2>
          <p className="text-xl mb-8 opacity-90">
            让我们一起传递美好，分享能量
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
              <Link href="/products">
                探索产品
              </Link>
            </Button>
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
              <Link href="/agency">
                成为代理
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
