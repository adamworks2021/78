import { Sparkles } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="text-center">
        {/* 加载动画 */}
        <div className="relative mb-8">
          <div className="w-20 h-20 border-4 border-brand-primary/20 rounded-full animate-spin border-t-brand-primary mx-auto"></div>
          <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 text-brand-primary animate-pulse" />
        </div>
        
        {/* 品牌信息 */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-3xl font-bold text-gradient">78°</span>
            <span className="text-lg text-gray-600">魔法香水</span>
          </div>
          <p className="text-gray-500 animate-pulse">
            正在为您开启能量之门...
          </p>
        </div>
        
        {/* 加载进度点 */}
        <div className="flex justify-center space-x-2 mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-brand-primary rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
