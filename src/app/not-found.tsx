import { Button } from '@/components/ui/button'
import { Search, Home, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 px-4">
      <div className="text-center max-w-md">
        {/* 404 动画 */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-gradient mb-4 animate-bounce">
            404
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            页面走丢了
          </h1>
          <p className="text-gray-600">
            抱歉，您访问的页面不存在或已被移动。
            让我们帮您找到正确的路径。
          </p>
        </div>

        {/* 搜索建议 */}
        <div className="mb-8 p-6 bg-white rounded-2xl shadow-lg">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center justify-center space-x-2">
            <Search className="h-5 w-5 text-brand-primary" />
            <span>您可能在寻找：</span>
          </h3>
          <div className="space-y-2">
            {[
              { name: '产品系列', href: '/products', desc: '12款星座主题香水' },
              { name: '品牌故事', href: '/story', desc: '了解78°的起源' },
              { name: '代理政策', href: '/agency', desc: '加入我们的大家庭' },
              { name: '联系我们', href: '/contact', desc: '获得专业咨询' }
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left"
              >
                <div className="font-semibold text-gray-900">{link.name}</div>
                <div className="text-sm text-gray-600">{link.desc}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="gradient"
              asChild
              className="flex items-center space-x-2"
            >
              <Link href="/">
                <Home className="h-4 w-4" />
                <span>返回首页</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>返回上页</span>
            </Button>
          </div>
        </div>

        {/* 魔法元素 */}
        <div className="mt-12">
          <div className="flex justify-center space-x-4 text-4xl animate-pulse">
            <span>✨</span>
            <span>🔮</span>
            <span>⭐</span>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            即使迷路了，魔法的力量依然与您同在
          </p>
        </div>

        {/* 品牌信息 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span className="text-lg font-bold">78°</span>
            <span className="text-sm">魔法香水</span>
          </div>
        </div>
      </div>
    </div>
  )
}
