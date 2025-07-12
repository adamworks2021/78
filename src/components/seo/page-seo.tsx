import Head from 'next/head'

interface PageSEOProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
}

export function PageSEO({ 
  title, 
  description, 
  keywords = [], 
  image = '/images/og-image.jpg',
  url = '',
  type = 'website'
}: PageSEOProps) {
  const fullTitle = `${title} | 78° 魔法香水`
  const baseUrl = 'https://78perfume.com'
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  
  return (
    <Head>
      {/* 基础SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="78° 魔法香水" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${baseUrl}${image}`} />
      <meta property="og:site_name" content="78° 魔法香水" />
      <meta property="og:locale" content="zh_CN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />
      
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "78° 魔法香水",
            "description": "源自意大利的古老魔法香水配方，融合塔罗牌的神秘智慧与天然植物精华",
            "url": baseUrl,
            "logo": `${baseUrl}/images/logo.png`,
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": "Chinese"
            },
            "sameAs": [
              "https://weixin.qq.com"
            ]
          })
        }}
      />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* 预加载关键资源 */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  )
}

// 预定义的页面SEO配置
export const pageSEOConfigs = {
  home: {
    title: "开启你的能量之门",
    description: "78°魔法香水，源自意大利的古老配方，融合塔罗牌神秘智慧，12款星座主题香水为你的人生注入魔法力量。天然成分，能量疗愈，开启属于你的能量之门。",
    keywords: ["魔法香水", "78度", "星座香水", "塔罗牌", "能量疗愈", "天然香水", "意大利配方"],
    url: "/"
  },
  products: {
    title: "产品系列 - 12款星座主题魔法香水",
    description: "探索78°魔法香水完整产品系列，12款星座主题香水，每款都蕴含独特的宇宙能量。白羊座客源香水、金牛座金钱香水、双子座征服者香水等，为你的人生注入专属魔法力量。",
    keywords: ["星座香水", "魔法香水产品", "白羊座香水", "金牛座香水", "双子座香水", "能量香水"],
    url: "/products"
  },
  story: {
    title: "品牌故事 - 从意大利到中国的魔法之旅",
    description: "了解78°魔法香水的品牌故事，创始人Adam的意大利求学之旅，古老魔法香水配方的传承，以及品牌的使命与愿景。一段跨越千里的神奇篇章。",
    keywords: ["品牌故事", "创始人Adam", "意大利", "塔罗牌", "魔法配方", "品牌历程"],
    url: "/story"
  },
  agency: {
    title: "代理政策 - 加入78°大家庭",
    description: "78°魔法香水代理政策详解，三级代理体系：体验官、推广师、合伙人。丰厚返利制度，全程培训支持，与我们一起传递美好，分享能量，实现财富自由。",
    keywords: ["代理加盟", "代理政策", "返利制度", "代理培训", "财富自由", "创业机会"],
    url: "/agency"
  },
  contact: {
    title: "联系我们 - 专业咨询服务",
    description: "联系78°魔法香水，获得专业的产品咨询和代理服务。微信咨询、电话咨询、在线留言，多种联系方式，24小时内回复，一对一专属服务。",
    keywords: ["联系方式", "微信咨询", "客服服务", "产品咨询", "代理咨询"],
    url: "/contact"
  }
}
