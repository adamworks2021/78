'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, SectionHeader } from "@/components/ui/section"
import { AgentCard } from "@/components/ui/agent-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { agentLevels } from "@/lib/data"
import { formatPrice } from "@/lib/utils"
import {
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Crown,
  Zap,
  Gift,
  Target,
  DollarSign
} from "lucide-react"
import Link from "next/link"

export default function AgencyPage() {
  const [selectedLevel, setSelectedLevel] = useState<string>('level2')

  return (
    <div className="pt-20">
      {/* 页面头部 */}
      <Section background="gradient" padding="large">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Users className="h-8 w-8 text-brand-primary" />
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                代理政策
              </h1>
              <Users className="h-8 w-8 text-brand-primary" />
            </div>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              加入78°大家庭，三级代理体系，丰厚返利制度，
              与我们一起传递美好，分享能量，实现财富自由。
            </p>
          </motion.div>
        </div>
      </Section>

      {/* 代理优势 */}
      <Section>
        <SectionHeader
          subtitle="代理优势"
          title="为什么选择78°代理"
          description="多重优势保障，让您的代理之路更加顺畅"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: TrendingUp,
              title: "市场前景广阔",
              description: "魔法香水市场需求旺盛，用户接受度高",
              color: "from-green-500 to-emerald-500"
            },
            {
              icon: Award,
              title: "产品品质保证",
              description: "天然成分，古老配方，品质有保障",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: Gift,
              title: "丰厚返利制度",
              description: "多层次返利，月度奖励，年度大奖",
              color: "from-purple-500 to-pink-500"
            },
            {
              icon: Users,
              title: "全程支持服务",
              description: "专业培训，推广素材，客服支持",
              color: "from-orange-500 to-red-500"
            }
          ].map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${advantage.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <advantage.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 代理级别 */}
      <Section background="muted">
        <SectionHeader
          subtitle="代理级别"
          title="三级代理体系"
          description="选择适合您的代理级别，开启财富之路"
        />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {agentLevels.map((level, index) => (
            <AgentCard
              key={level.id}
              agentLevel={level}
              index={index}
              featured={level.id === 'level2'}
              onJoin={() => setSelectedLevel(level.id)}
            />
          ))}
        </div>
      </Section>

      {/* 返利制度详解 */}
      <Section>
        <SectionHeader
          subtitle="返利制度"
          title="丰厚的收益回报"
          description="透明的返利机制，让您的努力得到应有的回报"
        />
        
        <div className="mt-16">
          {/* 返利级别选择 */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-gray-100 rounded-lg p-1">
              {agentLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                    selectedLevel === level.id
                      ? 'bg-brand-primary text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {level.chineseName}
                </button>
              ))}
            </div>
          </div>

          {/* 返利详情 */}
          {agentLevels.map((level) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: selectedLevel === level.id ? 1 : 0,
                y: selectedLevel === level.id ? 0 : 20,
                display: selectedLevel === level.id ? 'block' : 'none'
              }}
              transition={{ duration: 0.5 }}
            >
              {selectedLevel === level.id && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* 返利比例 */}
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <DollarSign className="h-6 w-6 text-brand-primary" />
                        <span>返利比例</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {level.commission.length > 0 ? (
                        <div className="space-y-4">
                          {level.commission.map((comm, i) => (
                            <div key={i} className="flex justify-between items-center p-4 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-lg">
                              <div>
                                <div className="font-semibold text-gray-900">
                                  月销售额 {formatPrice(comm.threshold)}+
                                </div>
                                <div className="text-sm text-gray-600">
                                  达到此销售额即可享受返利
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-brand-primary">
                                  {comm.rate}%
                                </div>
                                <div className="text-sm text-gray-600">返利</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 text-gray-500">
                          <Target className="h-12 w-12 mx-auto mb-4 opacity-50" />
                          <p>此级别暂无返利，专注于产品体验和技能提升</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* 专享权益 */}
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Gift className="h-6 w-6 text-brand-primary" />
                        <span>专享权益</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {level.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 晋升机制 */}
      <Section background="gradient">
        <SectionHeader
          subtitle="晋升机制"
          title="成长无上限"
          description="明确的晋升路径，让您的代理事业稳步发展"
        />
        
        <div className="mt-16">
          <div className="relative">
            {/* 晋升路径 */}
            <div className="flex justify-center items-center space-x-8 lg:space-x-16">
              {[
                { 
                  level: '78°体验官', 
                  icon: Star, 
                  color: 'from-green-500 to-emerald-500',
                  requirements: ['累计销售额5万+', '或连续3个月销售额2万+']
                },
                { 
                  level: '78°推广师', 
                  icon: Zap, 
                  color: 'from-blue-500 to-cyan-500',
                  requirements: ['累计销售额15万+', '或连续3个月销售额5万+', '或建立5人+团队']
                },
                { 
                  level: '78°合伙人', 
                  icon: Crown, 
                  color: 'from-purple-500 to-pink-500',
                  requirements: ['最高级别', '享受最优政策']
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* 级别图标 */}
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* 级别名称 */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    {step.level}
                  </h3>
                  
                  {/* 晋升要求 */}
                  <div className="text-center">
                    {step.requirements.map((req, i) => (
                      <div key={i} className="text-sm text-gray-600 mb-1">
                        {req}
                      </div>
                    ))}
                  </div>
                  
                  {/* 箭头 */}
                  {index < 2 && (
                    <ArrowRight className="h-6 w-6 text-brand-primary mt-4 hidden lg:block absolute" 
                      style={{ left: `${33.33 * (index + 1) + 8}%` }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 加入流程 */}
      <Section>
        <SectionHeader
          subtitle="加入流程"
          title="简单四步，开启代理之路"
          description="快速便捷的加入流程，让您轻松开始代理事业"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "联系咨询",
              description: "扫描微信二维码，联系我们的专业客服",
              icon: "💬"
            },
            {
              step: "02", 
              title: "选择级别",
              description: "根据自身情况选择合适的代理级别",
              icon: "🎯"
            },
            {
              step: "03",
              title: "支付代理费",
              description: "支付相应的代理费用，获得代理资格",
              icon: "💳"
            },
            {
              step: "04",
              title: "开始代理",
              description: "接受培训，获得素材，正式开始代理",
              icon: "🚀"
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <div className="text-4xl">{step.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 常见问题 */}
      <Section background="muted">
        <SectionHeader
          subtitle="常见问题"
          title="FAQ"
          description="解答您关心的代理相关问题"
        />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              question: "代理费可以退吗？",
              answer: "代理费将直接充当您首次拿货的货款，不予退还。"
            },
            {
              question: "如何升级代理级别？",
              answer: "达到相应的销售额或团队要求后，联系品牌方申请升级。"
            },
            {
              question: "返利什么时候发放？",
              answer: "返利金额将在每月结束后，5个工作日内打入代理账户。"
            },
            {
              question: "需要囤货吗？",
              answer: "我们建议代理根据自身情况选择合适的拿货量，无需大量囤货。"
            },
            {
              question: "可以发展下级代理吗？",
              answer: "只有78°合伙人才有资格发展下级代理。"
            },
            {
              question: "有哪些培训支持？",
              answer: "我们提供产品知识、销售技巧、运营方法等全方位培训。"
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Q: {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    A: {faq.answer}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 底部CTA */}
      <Section background="mystical" className="text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            准备好加入78°大家庭了吗？
          </h2>
          <p className="text-xl mb-8 opacity-90">
            与我们一起传递美好，分享能量，实现财富自由
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
              <Link href="/contact">
                立即咨询
              </Link>
            </Button>
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
              <Link href="/products">
                了解产品
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
