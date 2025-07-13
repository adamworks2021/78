#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 配置
const config = {
  inputDir: './public',
  outputDir: './public/optimized',
  formats: {
    webp: { quality: 85 },
    avif: { quality: 80 },
    jpeg: { quality: 85, progressive: true }
  },
  sizes: {
    // 香水产品图片尺寸
    product: [
      { width: 400, height: 400, suffix: '-thumb' },
      { width: 800, height: 800, suffix: '-medium' },
      { width: 1200, height: 1200, suffix: '-large' }
    ],
    // Logo尺寸
    logo: [
      { width: 120, height: 60, suffix: '-small' },
      { width: 240, height: 120, suffix: '-medium' },
      { width: 480, height: 240, suffix: '-large' }
    ],
    // 二维码尺寸
    qr: [
      { width: 200, height: 200, suffix: '-small' },
      { width: 300, height: 300, suffix: '-medium' },
      { width: 400, height: 400, suffix: '-large' }
    ]
  }
};

// 星座名称映射
const zodiacNames = [
  'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
  'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'
];

// 创建输出目录
function createOutputDirs() {
  const dirs = [
    config.outputDir,
    path.join(config.outputDir, 'products'),
    path.join(config.outputDir, 'effects'),
    path.join(config.outputDir, 'brand')
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`✅ 创建目录: ${dir}`);
    }
  });
}

// 优化单个图片
async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const { width, height, format, quality } = options;
    
    let pipeline = sharp(inputPath);
    
    // 调整尺寸
    if (width || height) {
      pipeline = pipeline.resize(width, height, {
        fit: 'cover',
        position: 'center'
      });
    }
    
    // 设置格式和质量
    switch (format) {
      case 'webp':
        pipeline = pipeline.webp({ quality });
        break;
      case 'avif':
        pipeline = pipeline.avif({ quality });
        break;
      case 'jpeg':
        pipeline = pipeline.jpeg({ quality, progressive: true });
        break;
      default:
        pipeline = pipeline.webp({ quality: 85 });
    }
    
    await pipeline.toFile(outputPath);
    console.log(`✅ 优化完成: ${path.basename(outputPath)}`);
    
  } catch (error) {
    console.error(`❌ 优化失败 ${inputPath}:`, error.message);
  }
}

// 处理香水产品图片（从转换后的JPG）
async function processProductImages() {
  console.log('\n🖼️  处理香水产品图片...');

  for (const zodiac of zodiacNames) {
    // 优先使用转换后的JPG文件
    const convertedPath = path.join('./public/converted', `${zodiac}.jpg`);
    const heicPath = path.join(config.inputDir, `${zodiac}.HEIC`);
    const heicLowerPath = path.join(config.inputDir, `${zodiac}.heic`);

    // 检查文件是否存在（优先级：转换后的JPG > HEIC）
    let inputPath = null;
    if (fs.existsSync(convertedPath)) {
      inputPath = convertedPath;
      console.log(`📸 使用转换后的图片: ${zodiac}.jpg`);
    } else if (fs.existsSync(heicPath)) {
      inputPath = heicPath;
      console.log(`📸 使用原始HEIC: ${zodiac}.HEIC`);
    } else if (fs.existsSync(heicLowerPath)) {
      inputPath = heicLowerPath;
      console.log(`📸 使用原始HEIC: ${zodiac}.heic`);
    }

    if (inputPath) {
      // 生成多种尺寸和格式
      for (const size of config.sizes.product) {
        for (const [format, formatConfig] of Object.entries(config.formats)) {
          const outputPath = path.join(
            config.outputDir,
            'products',
            `${zodiac}${size.suffix}.${format}`
          );

          await optimizeImage(inputPath, outputPath, {
            width: size.width,
            height: size.height,
            format,
            quality: formatConfig.quality
          });
        }
      }
    } else {
      console.log(`⚠️  未找到 ${zodiac} 的产品图片`);
    }
  }
}

// 处理功效图片（JPG格式）
async function processEffectImages() {
  console.log('\n🌟 处理功效图片...');
  
  for (const zodiac of zodiacNames) {
    const jpgPath = path.join(config.inputDir, `${zodiac}.jpg`);
    const jpgUpperPath = path.join(config.inputDir, `${zodiac}.JPG`);
    
    // 检查文件是否存在（大小写）
    let inputPath = null;
    if (fs.existsSync(jpgPath)) {
      inputPath = jpgPath;
    } else if (fs.existsSync(jpgUpperPath)) {
      inputPath = jpgUpperPath;
    }
    
    if (inputPath) {
      // 生成多种格式
      for (const [format, formatConfig] of Object.entries(config.formats)) {
        const outputPath = path.join(
          config.outputDir, 
          'effects', 
          `${zodiac}-effect.${format}`
        );
        
        await optimizeImage(inputPath, outputPath, {
          format,
          quality: formatConfig.quality
        });
      }
    } else {
      console.log(`⚠️  未找到 ${zodiac} 的功效图片`);
    }
  }
}

// 处理品牌Logo
async function processLogo() {
  console.log('\n🏷️  处理品牌Logo...');
  
  const logoPath = path.join(config.inputDir, 'logo.png');
  
  if (fs.existsSync(logoPath)) {
    // 生成多种尺寸和格式
    for (const size of config.sizes.logo) {
      for (const [format, formatConfig] of Object.entries(config.formats)) {
        const outputPath = path.join(
          config.outputDir, 
          'brand', 
          `logo${size.suffix}.${format}`
        );
        
        await optimizeImage(logoPath, outputPath, {
          width: size.width,
          height: size.height,
          format,
          quality: formatConfig.quality
        });
      }
    }
  } else {
    console.log('⚠️  未找到 logo.png');
  }
}

// 处理微信二维码
async function processWechatQR() {
  console.log('\n📱 处理微信二维码...');
  
  const qrPath = path.join(config.inputDir, 'wechatqr.jpg');
  
  if (fs.existsSync(qrPath)) {
    // 生成多种尺寸和格式
    for (const size of config.sizes.qr) {
      for (const [format, formatConfig] of Object.entries(config.formats)) {
        const outputPath = path.join(
          config.outputDir, 
          'brand', 
          `wechat-qr${size.suffix}.${format}`
        );
        
        await optimizeImage(qrPath, outputPath, {
          width: size.width,
          height: size.height,
          format,
          quality: formatConfig.quality
        });
      }
    }
  } else {
    console.log('⚠️  未找到 wechatqr.jpg');
  }
}

// 生成图片清单
function generateImageManifest() {
  console.log('\n📋 生成图片清单...');
  
  const manifest = {
    products: {},
    effects: {},
    brand: {
      logo: {},
      wechatQR: {}
    }
  };
  
  // 扫描优化后的图片
  const optimizedDir = config.outputDir;
  
  // 产品图片
  zodiacNames.forEach(zodiac => {
    manifest.products[zodiac] = {};
    config.sizes.product.forEach(size => {
      manifest.products[zodiac][size.suffix.replace('-', '')] = {};
      Object.keys(config.formats).forEach(format => {
        const imagePath = `/optimized/products/${zodiac}${size.suffix}.${format}`;
        manifest.products[zodiac][size.suffix.replace('-', '')][format] = imagePath;
      });
    });
  });
  
  // 功效图片
  zodiacNames.forEach(zodiac => {
    manifest.effects[zodiac] = {};
    Object.keys(config.formats).forEach(format => {
      const imagePath = `/optimized/effects/${zodiac}-effect.${format}`;
      manifest.effects[zodiac][format] = imagePath;
    });
  });
  
  // Logo
  config.sizes.logo.forEach(size => {
    manifest.brand.logo[size.suffix.replace('-', '')] = {};
    Object.keys(config.formats).forEach(format => {
      const imagePath = `/optimized/brand/logo${size.suffix}.${format}`;
      manifest.brand.logo[size.suffix.replace('-', '')][format] = imagePath;
    });
  });
  
  // 微信二维码
  config.sizes.qr.forEach(size => {
    manifest.brand.wechatQR[size.suffix.replace('-', '')] = {};
    Object.keys(config.formats).forEach(format => {
      const imagePath = `/optimized/brand/wechat-qr${size.suffix}.${format}`;
      manifest.brand.wechatQR[size.suffix.replace('-', '')][format] = imagePath;
    });
  });
  
  // 保存清单文件
  const manifestPath = path.join(config.outputDir, 'image-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`✅ 图片清单已生成: ${manifestPath}`);
}

// 主函数
async function main() {
  console.log('🚀 开始图片优化...\n');
  
  try {
    // 检查sharp是否安装
    try {
      require('sharp');
    } catch (error) {
      console.error('❌ 请先安装 sharp: npm install sharp');
      process.exit(1);
    }
    
    // 创建输出目录
    createOutputDirs();
    
    // 处理各类图片
    await processProductImages();
    await processEffectImages();
    await processLogo();
    await processWechatQR();
    
    // 生成图片清单
    generateImageManifest();
    
    console.log('\n🎉 图片优化完成！');
    console.log(`📁 优化后的图片保存在: ${config.outputDir}`);
    console.log('📋 图片清单: /optimized/image-manifest.json');
    
  } catch (error) {
    console.error('❌ 优化过程中出现错误:', error);
    process.exit(1);
  }
}

// 运行脚本
if (require.main === module) {
  main();
}

module.exports = { optimizeImage, config };
