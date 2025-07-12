import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * 合并Tailwind CSS类名的工具函数
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 格式化价格显示
 */
export function formatPrice(price: number): string {
  return `¥${price.toLocaleString()}`
}

/**
 * 获取星座对应的颜色主题
 */
export function getZodiacColor(zodiac: string): string {
  const colors: Record<string, string> = {
    '白羊座': 'from-red-500 to-orange-500',
    '金牛座': 'from-green-500 to-emerald-500',
    '双子座': 'from-yellow-500 to-amber-500',
    '巨蟹座': 'from-blue-500 to-cyan-500',
    '狮子座': 'from-orange-500 to-red-500',
    '处女座': 'from-green-400 to-teal-500',
    '天秤座': 'from-pink-500 to-rose-500',
    '天蝎座': 'from-purple-500 to-indigo-500',
    '射手座': 'from-indigo-500 to-purple-500',
    '摩羯座': 'from-gray-600 to-slate-700',
    '水瓶座': 'from-cyan-500 to-blue-500',
    '双鱼座': 'from-purple-400 to-pink-500'
  }
  return colors[zodiac] || 'from-gray-500 to-gray-600'
}

/**
 * 获取星座对应的图标
 */
export function getZodiacIcon(zodiac: string): string {
  const icons: Record<string, string> = {
    '白羊座': '♈',
    '金牛座': '♉',
    '双子座': '♊',
    '巨蟹座': '♋',
    '狮子座': '♌',
    '处女座': '♍',
    '天秤座': '♎',
    '天蝎座': '♏',
    '射手座': '♐',
    '摩羯座': '♑',
    '水瓶座': '♒',
    '双鱼座': '♓'
  }
  return icons[zodiac] || '✨'
}

/**
 * 延迟函数
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * 滚动到指定元素
 */
export function scrollToElement(elementId: string, offset: number = 0): void {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.offsetTop - offset
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}
