'use client'

import { useState } from 'react'

interface OptimizedLogoProps {
  size?: 'small' | 'medium' | 'large' | 'original'
  className?: string
  alt?: string
  priority?: boolean
}

export function OptimizedLogo({
  size = 'medium',
  className = '',
  alt = '78° 魔法香水品牌Logo',
  priority = false
}: OptimizedLogoProps) {
  const [imageError, setImageError] = useState(false)
  
  // 根据尺寸设置默认宽高
  const sizeMap = {
    small: { width: 120, height: 40 },
    medium: { width: 180, height: 60 },
    large: { width: 240, height: 80 },
    original: { width: 900, height: 607 }
  }
  
  const { width, height } = sizeMap[size]
  
  const handleError = () => {
    setImageError(true)
  }
  
  return (
    <picture className={className}>
      {!imageError && (
        <>
          <source
            srcSet={`/optimized/brand/logo-${size}.avif`}
            type="image/avif"
          />
          <source
            srcSet={`/optimized/brand/logo-${size}.webp`}
            type="image/webp"
          />
        </>
      )}
      <img
        src={imageError ? `/logo.png` : `/optimized/brand/logo-${size}.png`}
        alt={alt}
        width={width}
        height={height}
        className="h-auto max-w-full object-contain"
        onError={handleError}
        loading={priority ? "eager" : "lazy"}
        style={{
          filter: imageError ? 'none' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
        }}
      />
    </picture>
  )
}
