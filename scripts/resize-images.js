const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 星座名称映射
const zodiacNames = [
  'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
  'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'
];

// 输入和输出目录
const inputDir = path.join(process.cwd(), 'public/converted');
const outputDir = path.join(process.cwd(), 'public/optimized/products');

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function resizeImage(inputPath, outputPath, width, height, format) {
  try {
    await sharp(inputPath)
      .resize(width, height, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .toFormat(format, {
        quality: format === 'jpeg' ? 90 : undefined,
        effort: format === 'avif' ? 6 : undefined
      })
      .toFile(outputPath);
    
    console.log(`✅ 已生成: ${outputPath}`);
  } catch (error) {
    console.error(`❌ 处理失败 ${inputPath}:`, error.message);
  }
}

async function processAllImages() {
  console.log('🚀 开始处理图片，调整分辨率为 600×800...\n');
  
  for (const zodiac of zodiacNames) {
    const inputFile = path.join(inputDir, `${zodiac}.jpg`);
    
    // 检查输入文件是否存在
    if (!fs.existsSync(inputFile)) {
      console.log(`⚠️  跳过不存在的文件: ${inputFile}`);
      continue;
    }
    
    console.log(`📸 处理 ${zodiac} 星座图片...`);
    
    // 生成不同格式的图片，统一尺寸为 600×800
    const formats = [
      { ext: 'webp', format: 'webp' },
      { ext: 'avif', format: 'avif' },
      { ext: 'jpeg', format: 'jpeg' }
    ];
    
    const sizes = [
      { name: 'medium', width: 600, height: 800 },
      { name: 'large', width: 600, height: 800 },
      { name: 'thumb', width: 600, height: 800 }
    ];
    
    for (const size of sizes) {
      for (const format of formats) {
        const outputFile = path.join(outputDir, `${zodiac}-${size.name}.${format.ext}`);
        await resizeImage(inputFile, outputFile, size.width, size.height, format.format);
      }
    }
    
    console.log(`✅ ${zodiac} 处理完成\n`);
  }
  
  console.log('🎉 所有图片处理完成！');
  console.log('📊 生成的图片规格：');
  console.log('   - 尺寸: 600×800 (3:4 比例)');
  console.log('   - 格式: WebP, AVIF, JPEG');
  console.log('   - 质量: 高质量优化');
  console.log('   - 背景: 白色填充');
}

// 运行脚本
processAllImages().catch(console.error);
