/**
 * 香水产品类型定义
 */
export interface Perfume {
  id: string
  name: string
  zodiac: string
  chineseName: string
  description: string
  effects: string[]
  ingredients: string[]
  sizes: PerfumeSize[]
  image: string
  color: string
  icon: string
}

/**
 * 香水规格类型
 */
export interface PerfumeSize {
  volume: number // ml
  price: number // 零售价
  agentPrices: {
    level1: number // 体验官价格
    level2: number // 推广师价格
    level3: number // 合伙人价格
  }
}

/**
 * 代理级别类型
 */
export interface AgentLevel {
  id: string
  name: string
  chineseName: string
  fee: number
  description: string
  benefits: string[]
  requirements: string[]
  commission: {
    threshold: number
    rate: number
  }[]
}

/**
 * 品牌故事章节类型
 */
export interface StoryChapter {
  id: string
  title: string
  content: string
  image?: string
  order: number
}

/**
 * 联系方式类型
 */
export interface ContactInfo {
  wechat: {
    qrCode: string
    id: string
  }
  phone?: string
  email?: string
  address?: string
}

/**
 * 导航菜单项类型
 */
export interface NavItem {
  name: string
  href: string
  children?: NavItem[]
}

/**
 * 页面元数据类型
 */
export interface PageMeta {
  title: string
  description: string
  keywords: string[]
  image?: string
}

/**
 * API响应类型
 */
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

/**
 * 表单验证错误类型
 */
export interface FormError {
  field: string
  message: string
}

/**
 * 用户反馈类型
 */
export interface Feedback {
  id: string
  name: string
  contact: string
  message: string
  type: 'inquiry' | 'agent' | 'complaint' | 'suggestion'
  createdAt: Date
  status: 'pending' | 'replied' | 'resolved'
}
