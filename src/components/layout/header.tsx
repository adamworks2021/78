'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: '首页', href: '/' },
  { name: '产品系列', href: '/products' },
  { name: '品牌故事', href: '/story' },
  { name: '代理政策', href: '/agency' },
  { name: '联系我们', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // 防止移动端菜单打开时body滚动
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gradient">78°</span>
                <span className="text-xs text-gray-600">魔法香水</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex">
              <Button variant="gradient" asChild>
                <Link href="/contact">立即咨询</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* 移动端菜单 - 完全独立的结构 */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[10000] lg:hidden">
          {/* 背景遮罩 */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* 菜单面板 */}
          <div
            className="absolute top-0 right-0 w-80 max-w-[90vw] h-full bg-white shadow-xl overflow-auto"
            style={{ backgroundColor: 'white' }}
          >
            {/* 菜单头部 */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
              <Link
                href="/"
                className="flex items-center space-x-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Sparkles className="h-8 w-8 text-purple-600" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-gradient">78°</span>
                  <span className="text-xs text-gray-600">魔法香水</span>
                </div>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* 菜单内容 */}
            <div className="p-6 bg-white">
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-lg font-medium text-gray-900 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <Button variant="gradient" className="w-full" asChild>
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    立即咨询
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
