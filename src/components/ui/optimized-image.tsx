'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

// 图片格式优先级（现代浏览器支持的格式优先）
// const formatPriority = ['avif', 'webp', 'jpeg', 'jpg', 'png']

// 生成不同格式的图片源
// function generateSources(basePath: string, formats: string[] = formatPriority) {
//   const sources: { srcSet: string; type: string }[] = []
//
//   formats.forEach(format => {
//     const srcSet = basePath.replace(/\.(jpg|jpeg|png|webp|avif)$/i, `.${format}`)
//     const mimeType = format === 'jpg' ? 'image/jpeg' : `image/${format}`
//     sources.push({ srcSet, type: mimeType })
//   })
//
//   return sources
// }

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
  quality = 85,
  placeholder = 'empty',
  blurDataURL
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(src)

  // 处理图片加载错误，回退到JPEG格式
  const handleError = () => {
    if (!imageError) {
      setImageError(true)
      // 回退到JPEG格式
      const jpegSrc = src.replace(/\.(webp|avif)$/i, '.jpeg')
      setCurrentSrc(jpegSrc)
    }
  }

  return (
    <picture className={className}>
      {/* 现代格式 */}
      {!imageError && (
        <>
          <source
            srcSet={src.replace(/\.(jpg|jpeg|png|webp)$/i, '.avif')}
            type="image/avif"
            sizes={sizes}
          />
          <source
            srcSet={src.replace(/\.(jpg|jpeg|png|webp)$/i, '.webp')}
            type="image/webp"
            sizes={sizes}
          />
        </>
      )}

      {/* 回退图片 */}
      <Image
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover"
        priority={priority}
        sizes={sizes}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onError={handleError}
      />
    </picture>
  )
}

// 专门用于产品实拍图的组件
interface ProductImageProps {
  zodiac: string
  size?: 'thumb' | 'medium' | 'large'
  alt?: string
  className?: string
  priority?: boolean
}

export function ProductImage({
  zodiac,
  size = 'medium',
  alt,
  className,
  priority = false
}: ProductImageProps) {
  const [imageError, setImageError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(`/optimized/products/${zodiac}-${size}.webp`)

  const handleError = () => {
    if (!imageError) {
      setImageError(true)
      // 回退到JPEG格式
      setCurrentSrc(`/optimized/products/${zodiac}-${size}.jpeg`)
    }
  }

  return (
    <picture className={className}>
      {!imageError && (
        <>
          <source
            srcSet={`/optimized/products/${zodiac}-${size}.avif`}
            type="image/avif"
          />
          <source
            srcSet={`/optimized/products/${zodiac}-${size}.webp`}
            type="image/webp"
          />
        </>
      )}
      <img
        src={currentSrc}
        alt={alt || `${zodiac} 星座香水产品图`}
        className="w-full h-full object-cover"
        onError={handleError}
        loading={priority ? "eager" : "lazy"}
      />
    </picture>
  )
}

// 专门用于功效图的组件
interface EffectImageProps {
  zodiac: string
  alt?: string
  className?: string
  priority?: boolean
}

export function EffectImage({
  zodiac,
  alt,
  className,
  priority = false
}: EffectImageProps) {
  const imagePath = `/optimized/effects/${zodiac}-effect.webp`

  return (
    <OptimizedImage
      src={imagePath}
      alt={alt || `${zodiac} 星座香水功效图`}
      width={800}
      height={600}
      className={className}
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  )
}

// 品牌Logo组件
interface BrandLogoProps {
  size?: 'small' | 'medium' | 'large'
  className?: string
  priority?: boolean
}

export function BrandLogo({
  size = 'medium',
  className,
  priority = false
}: BrandLogoProps) {
  const imagePath = `/optimized/brand/logo-${size}.webp`

  // 根据尺寸设置宽高
  const dimensions = {
    small: { width: 120, height: 60 },
    medium: { width: 240, height: 120 },
    large: { width: 480, height: 240 }
  }

  const { width, height } = dimensions[size]

  return (
    <OptimizedImage
      src={imagePath}
      alt="78° 魔法香水品牌Logo"
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes="(max-width: 768px) 120px, 240px"
    />
  )
}

// 微信二维码组件
interface WechatQRProps {
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export function WechatQR({
  size = 'medium',
  className
}: WechatQRProps) {
  const imagePath = `/optimized/brand/wechat-qr-${size}.webp`

  // 根据尺寸设置宽高
  const dimensions = {
    small: { width: 200, height: 200 },
    medium: { width: 300, height: 300 },
    large: { width: 400, height: 400 }
  }

  const { width, height } = dimensions[size]

  return (
    <OptimizedImage
      src={imagePath}
      alt="78° 魔法香水官方微信二维码"
      width={width}
      height={height}
      className={className}
      sizes="200px"
    />
  )
}
