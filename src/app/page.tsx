'use client'

import { Hero } from "@/components/sections/hero";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { PerfumeCard } from "@/components/ui/perfume-card";
import { AgentCard } from "@/components/ui/agent-card";
import Link from "next/link";
import { Sparkles, Star, Heart, Shield, Users, Award, TrendingUp } from "lucide-react";
import { perfumes, agentLevels } from "@/lib/data";
import { getZodiacColor, getZodiacIcon } from "@/lib/utils";

export default function Home() {
  return (
    <>
      {/* 英雄区域 */}
      <Hero />

      {/* 精选产品展示 */}
      <FeaturedProducts />

      {/* 品牌理念区域 */}
      <Section background="gradient" padding="large">
        <SectionHeader
          subtitle="品牌理念"
          title="融合古老智慧与现代科技"
          description="78°魔法香水承载着来自意大利的古老配方，结合塔罗牌的神秘能量，为现代人带来身心灵的平衡与疗愈。"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Sparkles,
              title: "塔罗能量",
              description: "每款香水都对应塔罗牌的独特能量，帮助你找到属于自己的人生牌阵，掌控命运。"
            },
            {
              icon: Star,
              title: "天然成分",
              description: "坚持使用天然植物萃取，结合水晶、精油等魔法元素，纯净安全，与人体能量产生共鸣。"
            },
            {
              icon: Heart,
              title: "能量疗愈",
              description: "不仅仅是香氛，更是能量工具。独特的能量频率帮助平衡身心，疗愈内在。"
            }
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <item.icon className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-4 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>



      {/* 代理政策预览 */}
      <Section background="muted">
        <SectionHeader
          subtitle="代理政策"
          title="加入78°大家庭"
          description="三级代理体系，丰厚返利制度，与我们一起传递美好，分享能量。"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {agentLevels.map((level, index) => (
            <AgentCard
              key={level.id}
              agentLevel={level}
              index={index}
              featured={level.id === 'level2'}
              onJoin={() => {
                // 跳转到代理政策页面
                window.location.href = `/agency#${level.id}`
              }}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/agency">
              了解详细政策
            </Link>
          </Button>
        </div>
      </Section>

      {/* 数据统计区域 */}
      <Section background="gradient">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            选择78°的理由
          </h2>
          <p className="text-lg text-gray-600 mb-16">
            数千用户的信赖选择，见证魔法香水的神奇力量
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Users,
              number: "5000+",
              label: "满意用户",
              description: "遍布全国的忠实用户"
            },
            {
              icon: Star,
              number: "12",
              label: "星座香水",
              description: "完整的星座能量系列"
            },
            {
              icon: Award,
              number: "98%",
              label: "好评率",
              description: "用户满意度持续领先"
            },
            {
              icon: TrendingUp,
              number: "300+",
              label: "代理伙伴",
              description: "共同成长的事业伙伴"
            }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg group-hover:shadow-xl transition-shadow duration-300 mb-4">
                <stat.icon className="h-8 w-8 text-brand-primary" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* 用户见证区域 */}
      <Section>
        <SectionHeader
          subtitle="用户见证"
          title="真实的魔法体验"
          description="听听用户们分享的神奇体验和人生改变"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[
            {
              name: "李女士",
              zodiac: "白羊座",
              product: "客源香水",
              content: "使用客源香水后，我的业绩提升了30%！客户主动找上门，真的很神奇。",
              rating: 5
            },
            {
              name: "王先生",
              zodiac: "金牛座",
              product: "金钱香水",
              content: "金钱香水帮我在投资上获得了意外收益，财运明显改善了。",
              rating: 5
            },
            {
              name: "张小姐",
              zodiac: "双鱼座",
              product: "爱情药水香水",
              content: "使用爱情药水香水后遇到了现在的男朋友，感情很甜蜜。",
              rating: 5
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getZodiacColor(testimonial.zodiac)} flex items-center justify-center text-white text-xl`}>
                  {getZodiacIcon(testimonial.zodiac)}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.zodiac} · {testimonial.product}</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
