'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // 记录错误到控制台
    console.error('Application Error:', error)
    
    // 可以发送错误到监控服务
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: error.message,
          stack: error.stack,
          digest: error.digest,
          url: window.location.pathname,
          userAgent: navigator.userAgent,
          timestamp: Date.now(),
        }),
      }).catch((err) => {
        console.warn('Failed to send error report:', err)
      })
    }
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 px-4">
      <div className="text-center max-w-md">
        {/* 错误图标 */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="h-10 w-10 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            出现了一些问题
          </h1>
          <p className="text-gray-600">
            抱歉，页面遇到了意外错误。我们已经记录了这个问题，正在努力修复。
          </p>
        </div>

        {/* 错误详情（仅在开发环境显示） */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <h3 className="font-semibold text-red-800 mb-2">错误详情：</h3>
            <p className="text-sm text-red-700 font-mono break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-red-600 mt-2">
                错误ID: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* 操作按钮 */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={reset}
              variant="gradient"
              className="flex items-center space-x-2"
            >
              <RefreshCw className="h-4 w-4" />
              <span>重试</span>
            </Button>
            <Button
              variant="outline"
              asChild
              className="flex items-center space-x-2"
            >
              <Link href="/">
                <Home className="h-4 w-4" />
                <span>返回首页</span>
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-gray-500">
            如果问题持续存在，请{' '}
            <Link href="/contact" className="text-brand-primary hover:underline">
              联系我们
            </Link>
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
