const fs = require('fs');
const path = require('path');

// 读取数据文件
const dataPath = path.join(process.cwd(), 'src/lib/data.ts');
let content = fs.readFileSync(dataPath, 'utf8');

console.log('🚀 开始更新产品价格...\n');

// 更新15ml价格从399到299
const price15mlRegex = /price: 399,/g;
const matches15ml = content.match(price15mlRegex);
if (matches15ml) {
  content = content.replace(price15mlRegex, 'price: 299,');
  console.log(`✅ 已更新 ${matches15ml.length} 个 15ml 产品价格: 399 → 299`);
}

// 更新30ml价格从599到455
const price30mlRegex = /price: 599,/g;
const matches30ml = content.match(price30mlRegex);
if (matches30ml) {
  content = content.replace(price30mlRegex, 'price: 455,');
  console.log(`✅ 已更新 ${matches30ml.length} 个 30ml 产品价格: 599 → 455`);
}

// 写回文件
fs.writeFileSync(dataPath, content, 'utf8');

console.log('\n🎉 价格更新完成！');
console.log('📊 新价格体系：');
console.log('   - 15ml: ¥299');
console.log('   - 30ml: ¥455');
