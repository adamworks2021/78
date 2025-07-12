import { Perfume, AgentLevel, StoryChapter, ContactInfo } from '@/types'

// 12款星座香水数据
export const perfumes: Perfume[] = [
  {
    id: 'aries',
    name: '客源香水',
    zodiac: '白羊座',
    chineseName: 'Aries - Client Attraction',
    description: '灵感源自白羊座的行动力，帮助你吸引优质客户，提升业绩。香味清新，充满活力。',
    effects: ['吸引客户', '提升业绩', '增强行动力', '激发热情'],
    ingredients: ['玫瑰精油', '柠檬精油', '红水晶', '迷迭香'],
    sizes: [
      {
        volume: 15,
        price: 399,
        agentPrices: { level1: 269, level2: 249, level3: 159 }
      },
      {
        volume: 30,
        price: 599,
        agentPrices: { level1: 385, level2: 355, level3: 239 }
      }
    ],
    image: '/images/perfumes/aries.jpg',
    color: 'from-red-500 to-orange-500',
    icon: '♈'
  },
  {
    id: 'taurus',
    name: '金钱香水',
    zodiac: '金牛座',
    chineseName: 'Taurus - Money Attraction',
    description: '灵感源自金牛座的财富能量，帮助你招来金钱机会，提升财运。香味沉稳，具有财富气息。',
    effects: ['招财进宝', '提升财运', '稳定收入', '投资运势'],
    ingredients: ['檀香精油', '薄荷精油', '黄水晶', '肉桂'],
    sizes: [
      {
        volume: 15,
        price: 399,
        agentPrices: { level1: 269, level2: 249, level3: 159 }
      },
      {
        volume: 30,
        price: 599,
        agentPrices: { level1: 385, level2: 355, level3: 239 }
      }
    ],
    image: '/images/perfumes/taurus.jpg',
    color: 'from-green-500 to-emerald-500',
    icon: '♉'
  },
  {
    id: 'gemini',
    name: '征服者香水',
    zodiac: '双子座',
    chineseName: 'Gemini - Conqueror',
    description: '灵感源自双子座的魅力，帮助你提升自信，在人际交往中更具吸引力。香味多变，充满活力。',
    effects: ['提升魅力', '增强自信', '改善人际', '沟通能力'],
    ingredients: ['茉莉精油', '橙花精油', '紫水晶', '薰衣草'],
    sizes: [
      {
        volume: 15,
        price: 399,
        agentPrices: { level1: 269, level2: 249, level3: 159 }
      },
      {
        volume: 30,
        price: 599,
        agentPrices: { level1: 385, level2: 355, level3: 239 }
      }
    ],
    image: '/images/perfumes/gemini.jpg',
    color: 'from-yellow-500 to-amber-500',
    icon: '♊'
  },
  {
    id: 'cancer',
    name: '繁荣香水',
    zodiac: '巨蟹座',
    chineseName: 'Cancer - Prosperity',
    description: '灵感源自巨蟹座的守护能量，帮助你守护家庭，带来繁荣。香味温馨，充满家庭气息。',
    effects: ['家庭和谐', '事业繁荣', '守护平安', '情感稳定'],
    ingredients: ['洋甘菊精油', '乳香精油', '月光石', '白檀香'],
    sizes: [
      {
        volume: 15,
        price: 399,
        agentPrices: { level1: 269, level2: 249, level3: 159 }
      },
      {
        volume: 30,
        price: 599,
        agentPrices: { level1: 385, level2: 355, level3: 239 }
      }
    ],
    image: '/images/perfumes/cancer.jpg',
    color: 'from-blue-500 to-cyan-500',
    icon: '♋'
  },
  {
    id: 'leo',
    name: '蜂鸟香水',
    zodiac: '狮子座',
    chineseName: 'Leo - Hummingbird',
    description: '灵感源自狮子座的自信，帮助你提升魅力，吸引爱情。香味热情，充满魅力。',
    effects: ['吸引爱情', '提升魅力', '增强自信', '领导力'],
    ingredients: ['依兰精油', '佛手柑精油', '太阳石', '龙血树脂'],
    sizes: [
      {
        volume: 15,
        price: 399,
        agentPrices: { level1: 269, level2: 249, level3: 159 }
      },
      {
        volume: 30,
        price: 599,
        agentPrices: { level1: 385, level2: 355, level3: 239 }
      }
    ],
    image: '/images/perfumes/leo.jpg',
    color: 'from-orange-500 to-red-500',
    icon: '♌'
  },
  {
    id: 'virgo',
    name: '好运香水',
    zodiac: '处女座',
    chineseName: 'Virgo - Good Luck',
    description: '灵感源自处女座的细致，帮助你吸引生活中的小确幸。香味清新，给人愉悦感。',
    effects: ['好运连连', '心想事成', '细节完美', '健康平安'],
    ingredients: ['尤加利精油', '茶树精油', '绿松石', '鼠尾草'],
    sizes: [
      {
        volume: 15,
        price: 399,
        agentPrices: { level1: 269, level2: 249, level3: 159 }
      },
      {
        volume: 30,
        price: 599,
        agentPrices: { level1: 385, level2: 355, level3: 239 }
      }
    ],
    image: '/images/perfumes/virgo.jpg',
    color: 'from-green-400 to-teal-500',
    icon: '♍'
  },
  {
    id: 'libra',
    name: '开路香水',
    zodiac: '天秤座',
    chineseName: 'Libra - Path Opener',
    description: '灵感源自天秤座的平衡，帮助你清除障碍，加速目标实现。香味平和，给人舒畅感。',
    effects: ['清除障碍', '平衡能量', '和谐关系', '决策智慧'],
    ingredients: ['天竺葵精油', '柠檬草精油', '粉水晶', '白水晶'],
    sizes: [
      {
        volume: 15,
        price: 399,
        agentPrices: { level1: 269, level2: 249, level3: 159 }
      },
      {
        volume: 30,
        price: 599,
        agentPrices: { level1: 385, level2: 355, level3: 239 }
      }
    ],
    image: '/images/perfumes/libra.jpg',
    color: 'from-pink-500 to-rose-500',
    icon: '♎'
  },
  {
    id: 'scorpio',
    name: '净化香水',
    zodiac: '天蝎座',
    chineseName: 'Scorpio - Purification',
    description: '灵感源自天蝎座的深邃，帮助你净化能量，消除负能量。香味神秘，给人宁静感。',
    effects: ['净化能量', '消除负能量', '深度疗愈', '直觉提升'],
    ingredients: ['没药精油', '雪松精油', '黑曜石', '鼠尾草'],
    sizes: [
      {
        volume: 15,
        price: 399,
        agentPrices: { level1: 269, level2: 249, level3: 159 }
      },
      {
        volume: 30,
        price: 599,
        agentPrices: { level1: 385, level2: 355, level3: 239 }
      }
    ],
    image: '/images/perfumes/scorpio.jpg',
    color: 'from-purple-500 to-indigo-500',
    icon: '♏'
  },
  {
    id: 'sagittarius',
    name: '猫头鹰香水',
    zodiac: '射手座',
    chineseName: 'Sagittarius - Owl Wisdom',
    description: '灵感源自射手座的守护，帮助你抵御负能量，守护平安。香味沉稳，给人安全感。',
    effects: ['守护平安', '智慧提升', '冒险精神', '目标达成'],
    ingredients: ['杜松精油', '丝柏精油', '虎眼石', '白鼠尾草'],
    sizes: [
      {
        volume: 15,
        price: 399,
        agentPrices: { level1: 269, level2: 249, level3: 159 }
      },
      {
        volume: 30,
        price: 599,
        agentPrices: { level1: 385, level2: 355, level3: 239 }
      }
    ],
    image: '/images/perfumes/sagittarius.jpg',
    color: 'from-indigo-500 to-purple-500',
    icon: '♐'
  },
  {
    id: 'capricorn',
    name: '贵人香水',
    zodiac: '摩羯座',
    chineseName: 'Capricorn - Noble Support',
    description: '灵感源自摩羯座的坚韧，帮助你吸引贵人，提升事业。香味内敛，给人支持感。',
    effects: ['贵人相助', '事业成功', '坚韧毅力', '权威地位'],
    ingredients: ['广藿香精油', '岩兰草精油', '石榴石', '黑碧玺'],
    sizes: [
      {
        volume: 15,
        price: 399,
        agentPrices: { level1: 269, level2: 249, level3: 159 }
      },
      {
        volume: 30,
        price: 599,
        agentPrices: { level1: 385, level2: 355, level3: 239 }
      }
    ],
    image: '/images/perfumes/capricorn.jpg',
    color: 'from-gray-600 to-slate-700',
    icon: '♑'
  },
  {
    id: 'aquarius',
    name: '巫师香水',
    zodiac: '水瓶座',
    chineseName: 'Aquarius - Wizard',
    description: '灵感源自水瓶座的灵性，帮助你提升精神力，连结宇宙。香味空灵，给人智慧感。',
    effects: ['精神提升', '宇宙连结', '创新思维', '灵感激发'],
    ingredients: ['乳香精油', '檀香精油', '紫水晶', '透明石英'],
    sizes: [
      {
        volume: 15,
        price: 399,
        agentPrices: { level1: 269, level2: 249, level3: 159 }
      },
      {
        volume: 30,
        price: 599,
        agentPrices: { level1: 385, level2: 355, level3: 239 }
      }
    ],
    image: '/images/perfumes/aquarius.jpg',
    color: 'from-cyan-500 to-blue-500',
    icon: '♒'
  },
  {
    id: 'pisces',
    name: '爱情药水香水',
    zodiac: '双鱼座',
    chineseName: 'Pisces - Love Potion',
    description: '灵感源自双鱼座的浪漫，帮助你增进情感，守护爱情。香味甜蜜，充满爱意。',
    effects: ['爱情美满', '情感深化', '浪漫情怀', '心灵感应'],
    ingredients: ['玫瑰精油', '茉莉精油', '粉水晶', '月光石'],
    sizes: [
      {
        volume: 15,
        price: 399,
        agentPrices: { level1: 269, level2: 249, level3: 159 }
      },
      {
        volume: 30,
        price: 599,
        agentPrices: { level1: 385, level2: 355, level3: 239 }
      }
    ],
    image: '/images/perfumes/pisces.jpg',
    color: 'from-purple-400 to-pink-500',
    icon: '♓'
  }
]

// 代理级别数据
export const agentLevels: AgentLevel[] = [
  {
    id: 'level1',
    name: 'Experience Officer',
    chineseName: '78°体验官',
    fee: 1500,
    description: '适合刚入门，想要先体验产品，积累经验的代理',
    benefits: [
      '新手培训：提供线上产品知识培训和销售技巧指导',
      '基础推广素材：提供基础的产品图片和文案',
      '产品体验：优先体验新品',
      '专属客服：提供专业咨询服务'
    ],
    requirements: [
      '对魔法香水和塔罗文化有兴趣',
      '具备基本的销售意愿',
      '能够积极学习产品知识'
    ],
    commission: []
  },
  {
    id: 'level2',
    name: 'Promoter',
    chineseName: '78°推广师',
    fee: 3000,
    description: '适合有一定销售经验，想要扩展客户，增加收入的代理',
    benefits: [
      '全面培训：提供线上产品知识培训和销售技巧指导',
      '高级推广素材：提供基础的产品图片和文案',
      '月销售额返利：达到销售目标即可享受返利',
      '季度优秀奖励：每季度评选优秀代理，给予额外奖励',
      '优先客户资源：获得部分客户资源支持'
    ],
    requirements: [
      '有一定的销售或推广经验',
      '具备良好的沟通能力',
      '能够独立开展销售活动'
    ],
    commission: [
      { threshold: 10000, rate: 5 },
      { threshold: 20000, rate: 10 }
    ]
  },
  {
    id: 'level3',
    name: 'Partner',
    chineseName: '78°合伙人',
    fee: 10000,
    description: '适合有一定团队管理经验，想要带领团队，实现事业目标的代理',
    benefits: [
      '专属培训：提供线上和线下的全面培训',
      '顶级推广素材：提供高质量的专业产品图片、文案、海报等',
      '高额返利：享受最高返利比例',
      '年度销售冠军奖励：每年评选销售冠军，给予旅游奖励',
      '优先获得客户资源：优先获得品牌提供的客户资源',
      '专属客服服务：提供专属客服，解答疑问',
      '团队发展权：可以发展下级代理'
    ],
    requirements: [
      '有团队管理或领导经验',
      '具备较强的市场开拓能力',
      '能够承担团队培训和管理职责'
    ],
    commission: [
      { threshold: 20000, rate: 10 },
      { threshold: 40000, rate: 15 }
    ]
  }
]

// 品牌故事章节
export const storyChapters: StoryChapter[] = [
  {
    id: 'origin',
    title: '品牌起源',
    content: '七年前，我们的创始人Adam，一位对塔罗牌充满热情的占卜师，远赴意大利学习塔罗牌的奥秘。在那里，他不仅深入研究了塔罗牌的解读，更机缘巧合地传承了一份古老而珍贵的魔法香水配方。这份配方蕴含着千百年来口口相传的魔法智慧，以及大自然的能量。Adam将这份来自意大利的祝福带回，创立了78°魔法香水品牌，希望能帮助更多人开启内在的能量之门。',
    image: '/images/story/origin.jpg',
    order: 1
  },
  {
    id: 'philosophy',
    title: '品牌理念',
    content: '78°魔法香水的灵感源自于塔罗牌中蕴含的78张牌的智慧。每一张牌都代表着独特的宇宙能量，而我们的魔法香水，正是利用这种能量，为你的人生注入更多的可能性。我们相信，通过选择与你对应的星座香水，你能够找到属于自己的人生牌阵，掌控命运，闪耀光芒。',
    image: '/images/story/philosophy.jpg',
    order: 2
  },
  {
    id: 'ingredients',
    title: '天然成分',
    content: '我们始终坚持使用天然植物萃取，并结合水晶、精油等魔法元素。我们对原材料的选择非常严格，确保每一种成分都来自大自然的馈赠，纯净而安全。我们相信，只有天然的成分才能真正地与人体能量产生共鸣，达到最佳的疗愈效果。',
    image: '/images/story/ingredients.jpg',
    order: 3
  },
  {
    id: 'healing',
    title: '能量疗愈',
    content: '78°魔法香水不仅仅是香氛，它更是一种能量工具。我们相信，每一种香味都蕴含着独特的能量频率，可以与人体的能量场产生共鸣，从而达到平衡身心、疗愈内在的效果。使用78°香水，你不仅能闻到美好的香气，更能感受到来自宇宙的祝福，开启你的能量之旅。',
    image: '/images/story/healing.jpg',
    order: 4
  },
  {
    id: 'vision',
    title: '品牌愿景',
    content: '我们希望通过78°魔法香水，将这份来自意大利的祝福和古老的智慧传递给更多的人。我们希望每一位使用78°香水的人，都能感受到来自宇宙的爱和力量，开启自己的人生旅程，实现自己的梦想。我们希望78°能够成为一个传递美好、分享能量的平台，让世界充满更多的爱与希望。',
    image: '/images/story/vision.jpg',
    order: 5
  }
]

// 联系信息
export const contactInfo: ContactInfo = {
  wechat: {
    qrCode: '/images/wechat-qr.jpg',
    id: 'Adam78Perfume'
  },
  phone: '+86 138 0000 0000',
  email: 'contact@78perfume.com',
  address: '中国·上海'
}
