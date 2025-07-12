import Link from 'next/link'
import { Sparkles, Heart, Mail, Phone } from 'lucide-react'

const navigation = {
  main: [
    { name: '首页', href: '/' },
    { name: '产品系列', href: '/products' },
    { name: '品牌故事', href: '/story' },
    { name: '代理政策', href: '/agency' },
    { name: '联系我们', href: '/contact' },
  ],
  products: [
    { name: '白羊座 - 客源香水', href: '/products#aries' },
    { name: '金牛座 - 金钱香水', href: '/products#taurus' },
    { name: '双子座 - 征服者香水', href: '/products#gemini' },
    { name: '巨蟹座 - 繁荣香水', href: '/products#cancer' },
    { name: '狮子座 - 蜂鸟香水', href: '/products#leo' },
    { name: '处女座 - 好运香水', href: '/products#virgo' },
  ],
  agency: [
    { name: '78°体验官', href: '/agency#level1' },
    { name: '78°推广师', href: '/agency#level2' },
    { name: '78°合伙人', href: '/agency#level3' },
    { name: '返利制度', href: '/agency#commission' },
    { name: '晋升机制', href: '/agency#promotion' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand section */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-brand-primary" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gradient">78°</span>
                <span className="text-sm text-gray-400">魔法香水</span>
              </div>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              源自意大利的古老魔法香水配方，融合塔罗牌的神秘智慧，为您开启能量之门，点亮人生旅程。
            </p>
            <div className="flex space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>微信咨询</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>在线客服</span>
              </div>
            </div>
          </div>

          {/* Links section */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">网站导航</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">产品系列</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">代理政策</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.agency.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 border-t border-gray-700 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <p className="text-xs leading-5 text-gray-400">
              &copy; 2024 78° 魔法香水. 版权所有.
            </p>
            <div className="mt-4 flex items-center space-x-1 text-xs text-gray-400 sm:mt-0">
              <span>用</span>
              <Heart className="h-3 w-3 text-red-500" />
              <span>制作</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
