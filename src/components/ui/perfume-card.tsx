'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getZodiacColor, getZodiacIcon, formatPrice } from '@/lib/utils'
import { Perfume } from '@/types'
import { Sparkles, Star } from 'lucide-react'

interface PerfumeCardProps {
  perfume: Perfume
  index?: number
  onLearnMore?: () => void
}

export function PerfumeCard({ perfume, index = 0, onLearnMore }: PerfumeCardProps) {
  const zodiacColor = getZodiacColor(perfume.zodiac)
  const zodiacIcon = getZodiacIcon(perfume.zodiac)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
        {/* 香水图片区域 */}
        <div className={`relative h-48 bg-gradient-to-br ${zodiacColor} p-6 flex items-center justify-center`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 text-center">
            <div className="text-6xl mb-2 animate-float">
              {zodiacIcon}
            </div>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              {perfume.zodiac}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Sparkles className="h-6 w-6 text-white/80 animate-pulse" />
          </div>
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                {perfume.name}
              </CardTitle>
              <CardDescription className="text-sm text-gray-600 mt-1">
                {perfume.chineseName}
              </CardDescription>
            </div>
            <div className="flex items-center space-x-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {perfume.description}
          </p>

          {/* 功效标签 */}
          <div className="flex flex-wrap gap-1 mb-4">
            {perfume.effects.slice(0, 3).map((effect, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {effect}
              </Badge>
            ))}
            {perfume.effects.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{perfume.effects.length - 3}
              </Badge>
            )}
          </div>

          {/* 价格信息 */}
          <div className="space-y-2 mb-4">
            {perfume.sizes.map((size, i) => (
              <div key={i} className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{size.volume}ml</span>
                <span className="font-semibold text-brand-primary">
                  {formatPrice(size.price)}
                </span>
              </div>
            ))}
          </div>


        </CardContent>
      </Card>
    </motion.div>
  )
}
