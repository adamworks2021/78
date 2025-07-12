'use client'

import { useEffect } from 'react'

// Web Vitals 性能监控
export function WebVitals() {
  useEffect(() => {
    // 动态导入 web-vitals 库
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // 监控 Cumulative Layout Shift (CLS)
      getCLS((metric) => {
        console.log('CLS:', metric)
        // 可以发送到分析服务
        sendToAnalytics('CLS', metric)
      })

      // 监控 First Input Delay (FID)
      getFID((metric) => {
        console.log('FID:', metric)
        sendToAnalytics('FID', metric)
      })

      // 监控 First Contentful Paint (FCP)
      getFCP((metric) => {
        console.log('FCP:', metric)
        sendToAnalytics('FCP', metric)
      })

      // 监控 Largest Contentful Paint (LCP)
      getLCP((metric) => {
        console.log('LCP:', metric)
        sendToAnalytics('LCP', metric)
      })

      // 监控 Time to First Byte (TTFB)
      getTTFB((metric) => {
        console.log('TTFB:', metric)
        sendToAnalytics('TTFB', metric)
      })
    }).catch((error) => {
      console.warn('Failed to load web-vitals:', error)
    })
  }, [])

  return null
}

// 发送性能数据到分析服务
function sendToAnalytics(name: string, metric: Metric) {
  // 这里可以集成 Google Analytics, Vercel Analytics 等
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.value),
      non_interaction: true,
    })
  }
  
  // 也可以发送到自定义分析服务
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        value: metric.value,
        id: metric.id,
        timestamp: Date.now(),
      }),
    }).catch((error) => {
      console.warn('Failed to send analytics:', error)
    })
  }
}

// 页面加载性能监控
export function PageLoadMonitor() {
  useEffect(() => {
    // 监控页面加载时间
    const measurePageLoad = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        
        if (navigation) {
          const metrics = {
            // DNS 查询时间
            dnsTime: navigation.domainLookupEnd - navigation.domainLookupStart,
            // TCP 连接时间
            tcpTime: navigation.connectEnd - navigation.connectStart,
            // 请求响应时间
            requestTime: navigation.responseEnd - navigation.requestStart,
            // DOM 解析时间
            domParseTime: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            // 页面完全加载时间
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            // 总时间
            totalTime: navigation.loadEventEnd - navigation.navigationStart,
          }
          
          console.log('Page Load Metrics:', metrics)
          
          // 发送到分析服务
          if (process.env.NODE_ENV === 'production') {
            fetch('/api/page-metrics', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                ...metrics,
                url: window.location.pathname,
                timestamp: Date.now(),
              }),
            }).catch((error) => {
              console.warn('Failed to send page metrics:', error)
            })
          }
        }
      }
    }

    // 页面加载完成后测量
    if (document.readyState === 'complete') {
      measurePageLoad()
    } else {
      window.addEventListener('load', measurePageLoad)
      return () => window.removeEventListener('load', measurePageLoad)
    }
  }, [])

  return null
}

// 错误监控
export function ErrorMonitor() {
  useEffect(() => {
    // 监控 JavaScript 错误
    const handleError = (event: ErrorEvent) => {
      console.error('JavaScript Error:', event.error)
      
      if (process.env.NODE_ENV === 'production') {
        fetch('/api/errors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: event.message,
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno,
            stack: event.error?.stack,
            url: window.location.pathname,
            userAgent: navigator.userAgent,
            timestamp: Date.now(),
          }),
        }).catch((error) => {
          console.warn('Failed to send error report:', error)
        })
      }
    }

    // 监控 Promise 拒绝
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled Promise Rejection:', event.reason)
      
      if (process.env.NODE_ENV === 'production') {
        fetch('/api/errors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'unhandledrejection',
            reason: event.reason?.toString(),
            url: window.location.pathname,
            userAgent: navigator.userAgent,
            timestamp: Date.now(),
          }),
        }).catch((error) => {
          console.warn('Failed to send error report:', error)
        })
      }
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  return null
}

// 组合所有监控组件
export function PerformanceMonitor() {
  return (
    <>
      <WebVitals />
      <PageLoadMonitor />
      <ErrorMonitor />
    </>
  )
}
