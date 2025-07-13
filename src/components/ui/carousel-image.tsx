'use client'

import { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'

interface CarouselImageProps {
  zodiac: string
  alt?: string
  className?: string
  priority?: boolean
}

export function CarouselImage({
  zodiac,
  alt,
  className,
  priority = false
}: CarouselImageProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [imageError, setImageError] = useState(false)
  
  // 图片数组：产品图和功效图
  const images = [
    {
      type: 'product',
      src: `/optimized/products/${zodiac}-medium.webp`,
      fallback: `/optimized/products/${zodiac}-medium.jpeg`,
      alt: `${zodiac} 星座香水产品图`
    },
    {
      type: 'effect',
      src: `/optimized/effects/${zodiac}-effect.webp`,
      fallback: `/optimized/effects/${zodiac}-effect.jpeg`,
      alt: `${zodiac} 星座香水功效图`
    }
  ]
  
  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000) // 每3秒切换一次
    
    return () => clearInterval(interval)
  }, [images.length])
  
  const handleError = () => {
    setImageError(true)
  }
  
  const currentImageData = images[currentImage]
  
  return (
    <div className={`relative ${className}`}>
      <picture>
        {!imageError && (
          <>
            <source
              srcSet={currentImageData.src.replace('.webp', '.avif')}
              type="image/avif"
            />
            <source
              srcSet={currentImageData.src}
              type="image/webp"
            />
          </>
        )}
        <img
          src={imageError ? currentImageData.fallback : currentImageData.src}
          alt={alt || currentImageData.alt}
          className="w-full h-full object-contain transition-all duration-500 ease-in-out"
          onError={handleError}
          loading={priority ? "eager" : "lazy"}
        />
      </picture>
      
      {/* 右上角闪烁星星 */}
      <div className="absolute top-4 right-4">
        <Sparkles className="h-6 w-6 text-white/80 animate-pulse drop-shadow-lg" />
      </div>
      
      {/* 轮播指示器 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? 'bg-white shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`切换到第${index + 1}张图片`}
          />
        ))}
      </div>
      
      {/* 图片类型标签 */}
      <div className="absolute top-4 left-4">
        <span className="bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
          {currentImageData.type === 'product' ? '产品图' : '功效图'}
        </span>
      </div>
    </div>
  )
}
