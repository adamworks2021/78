'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { formatPrice } from '@/lib/utils'
import { AgentLevel } from '@/types'
import { Check, Crown, Star, Zap } from 'lucide-react'

interface AgentCardProps {
  agentLevel: AgentLevel
  index?: number
  featured?: boolean
  onJoin?: () => void
}

const levelIcons = {
  level1: Star,
  level2: Zap,
  level3: Crown,
}

const levelColors = {
  level1: 'from-green-500 to-emerald-500',
  level2: 'from-blue-500 to-cyan-500',
  level3: 'from-purple-500 to-pink-500',
}

export function AgentCard({ agentLevel, index = 0, featured = false, onJoin }: AgentCardProps) {
  const IconComponent = levelIcons[agentLevel.id as keyof typeof levelIcons] || Star
  const colorGradient = levelColors[agentLevel.id as keyof typeof levelColors] || 'from-gray-500 to-gray-600'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <Badge variant="zodiac" className="px-4 py-1">
            推荐选择
          </Badge>
        </div>
      )}
      
      <Card className={`h-full overflow-hidden transition-all duration-300 ${
        featured 
          ? 'border-2 border-brand-primary shadow-xl scale-105' 
          : 'border shadow-lg hover:shadow-xl'
      }`}>
        {/* 头部区域 */}
        <div className={`relative bg-gradient-to-br ${colorGradient} p-6 text-white`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 text-center">
            <IconComponent className="h-12 w-12 mx-auto mb-3 animate-float" />
            <h3 className="text-2xl font-bold">{agentLevel.chineseName}</h3>
            <p className="text-white/80 text-sm mt-1">{agentLevel.name}</p>
          </div>
        </div>

        <CardHeader className="text-center pb-3">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">
              {formatPrice(agentLevel.fee)}
            </div>
            <CardDescription className="text-sm">
              代理费（首次拿货货款）
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          {/* 描述 */}
          <p className="text-sm text-gray-600 mb-4 text-center">
            {agentLevel.description}
          </p>

          {/* 权益列表 */}
          <div className="space-y-3 mb-6">
            <h4 className="font-semibold text-gray-900 text-sm">专享权益：</h4>
            <ul className="space-y-2">
              {agentLevel.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start space-x-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 返利信息 */}
          {agentLevel.commission.length > 0 && (
            <div className="space-y-3 mb-6">
              <h4 className="font-semibold text-gray-900 text-sm">返利比例：</h4>
              <div className="space-y-2">
                {agentLevel.commission.map((comm, i) => (
                  <div key={i} className="flex justify-between items-center text-sm bg-gray-50 rounded-lg px-3 py-2">
                    <span className="text-gray-600">
                      月销售额 {formatPrice(comm.threshold)}+
                    </span>
                    <span className="font-semibold text-brand-primary">
                      {comm.rate}% 返利
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 加入要求 */}
          {agentLevel.requirements.length > 0 && (
            <div className="space-y-3 mb-6">
              <h4 className="font-semibold text-gray-900 text-sm">加入要求：</h4>
              <ul className="space-y-1">
                {agentLevel.requirements.map((req, i) => (
                  <li key={i} className="text-xs text-gray-500">
                    • {req}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 操作按钮 */}
          <Button 
            variant={featured ? "gradient" : "outline"}
            className="w-full"
            onClick={onJoin}
          >
            {featured ? "立即加入" : "了解详情"}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
