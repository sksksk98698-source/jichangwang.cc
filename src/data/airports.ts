/**
 * ✈️ 42家精选机场品牌核心数据库 (Airports Database)
 * 来源：42家机场品牌清单.txt、光速云品牌信息.txt、实测测速与解锁资料
 * 规范：严格保留第一主推【光速云】，前十名按序加权，推广链接包含 target="_blank" rel="nofollow sponsored noopener"
 */

export interface AirportPackage {
  name: string;
  price: string;
  period: string;
  bandwidth: string;
  highlight?: string;
}

export interface StreamingUnlockStatus {
  netflix: string;
  disney: string;
  youtube: string;
  chatgpt: string;
  claude: string;
  gemini: string;
}

export interface AirportBrand {
  rank: number;
  name: string;
  slug: string;
  isTop10: boolean;
  isFeatured: boolean;
  tagline: string;
  affLink: string;
  coupon: string;
  couponDiscount: string;
  entryPrice: string;
  minMonthlyPrice: number;
  lineType: string;
  protocols: string[];
  clientsSupported: string[];
  nodesCoverage: string;
  speedtestImage?: string;
  unlockImages?: string[];
  streamingUnlock: StreamingUnlockStatus;
  packages: AirportPackage[];
  features: string[];
  pros: string[];
  cons: string[];
  summary: string;
}

export const AIRPORTS_DATA: AirportBrand[] = [
  {
    "rank": 1,
    "name": "光速云",
    "slug": "guangsu",
    "isTop10": true,
    "isFeatured": true,
    "tagline": "2020年稳定运营 // 旗舰IEPL+企业内网双专线 // 4K秒开与AI全解锁首推",
    "affLink": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "AMM",
    "couponDiscount": "新用户专享优惠券 (输入AMM即享)",
    "entryPrice": "¥8/月 (年付折算)",
    "minMonthlyPrice": 8,
    "lineType": "IEPL专线 + 企业级内网专线",
    "protocols": [
      "VLESS"
    ],
    "clientsSupported": [
      "自研全平台客户端",
      "Clash Verge Rev",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "nodesCoverage": "香港×20、台湾×5、日本×10、新加坡×10、美国×10、马来西亚×2、英国、法国、德国、土耳其、泰国、巴西等",
    "speedtestImage": "/assets/speedtest/光速云-节点测速实测.png",
    "unlockImages": [
      "/assets/unlock/photo_2026-08-19_12-13-01.jpg",
      "/assets/unlock/photo_2026-08-19_12-13-50.jpg",
      "/assets/unlock/photo_2026-08-19_12-13-58.jpg",
      "/assets/unlock/photo_2026-08-19_12-18-40.jpg",
      "/assets/unlock/photo_2026-08-19_12-20-10.jpg"
    ],
    "streamingUnlock": {
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K/8K 零卡顿",
      "chatgpt": "节点自适应解锁",
      "claude": "全节点原生支持",
      "gemini": "多节点支持"
    },
    "packages": [
      {
        "name": "致敬斯诺克147永久套餐",
        "price": "¥147",
        "period": "一次性",
        "bandwidth": "247GB 永不过期",
        "highlight": "不过期传家宝"
      },
      {
        "name": "轻量版",
        "price": "¥99/年",
        "period": "年付",
        "bandwidth": "69GB/月",
        "highlight": "年付折合8元/月"
      },
      {
        "name": "极速版",
        "price": "¥25/月",
        "period": "月付",
        "bandwidth": "168GB/月",
        "highlight": "全节点x1倍率"
      },
      {
        "name": "流光版",
        "price": "¥34/月",
        "period": "月付",
        "bandwidth": "268GB/月",
        "highlight": "高性价比主力"
      },
      {
        "name": "量子版",
        "price": "¥68/月",
        "period": "月付",
        "bandwidth": "568GB/月",
        "highlight": "多设备大流量"
      },
      {
        "name": "无界版",
        "price": "¥138/月",
        "period": "月付",
        "bandwidth": "900GB/月",
        "highlight": "重度出海/4K视频"
      },
      {
        "name": "定制套餐",
        "price": "¥680/月",
        "period": "月付",
        "bandwidth": "500GB/月",
        "highlight": "独享原生IP/企业级IPLC"
      }
    ],
    "features": [
      "双线路架构：IEPL专线 + 企业级内网专线",
      "VLESS 极速协议，抗干扰能力强，单节点最高2.5Gbps",
      "提供 Windows/Mac/Android 自研客户端，同时支持一键导入第三方客户端",
      "跨境电商、TikTok直播、海外AI研发、企业远程办公高稳定性首选"
    ],
    "pros": [
      "双专线低延迟稳定，晚高峰不卡顿",
      "有永久不过期套餐，性价比极高",
      "自研客户端对新手极其友好，无需繁琐配置"
    ],
    "cons": [
      "ChatGPT与Gemini部分节点需手动切换",
      "特惠套餐不支持退款，建议按需选购"
    ],
    "summary": "光速云是2020年运营至今的口碑老牌专线机场，在全网高性价比机场推荐中稳居第一。其核心优势在于IEPL专线与内网专线的双重冗余保障，晚高峰香港和日本节点实测下行带宽超500Mbps。特别适合对ChatGPT、Claude、海外流媒体4K播放及TikTok出海有严苛稳定性要求的用户。"
  },
  {
    "rank": 2,
    "name": "暮光加速",
    "slug": "muguang",
    "isTop10": true,
    "isFeatured": false,
    "tagline": "BGP智能调度 // 专线级出口 // 7×24小时真人运维",
    "affLink": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "coupon": "muguang5555",
    "couponDiscount": "专属折扣优惠券",
    "entryPrice": "¥20/月 (120GB)",
    "minMonthlyPrice": 20,
    "lineType": "BGP智能调度专线出口",
    "protocols": [
      "Trojan",
      "Shadowsocks"
    ],
    "clientsSupported": [
      "Windows",
      "macOS",
      "iOS",
      "Android",
      "Linux"
    ],
    "nodesCoverage": "香港、台湾、日本、新加坡、美国等主流核心节点",
    "speedtestImage": "/assets/speedtest/幕光加速-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "全解锁",
      "disney": "全解锁",
      "youtube": "4K 流畅",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "基础版",
        "price": "¥20/月",
        "period": "月付",
        "bandwidth": "120GB/月",
        "highlight": "入门首选"
      },
      {
        "name": "标准版",
        "price": "¥38/月",
        "period": "月付",
        "bandwidth": "260GB/月",
        "highlight": "高频常用"
      },
      {
        "name": "尊享版",
        "price": "¥75/月",
        "period": "月付",
        "bandwidth": "600GB/月",
        "highlight": "大流量畅享"
      },
      {
        "name": "旗舰版",
        "price": "¥160/月",
        "period": "月付",
        "bandwidth": "1500GB/月",
        "highlight": "团队与重度用户"
      }
    ],
    "features": [
      "BGP 智能调度系统，自动规避丢包拥堵节点",
      "专线级出口低延迟，保障游戏与语音连线顺畅",
      "全平台覆盖，官方宣称提供7×24小时真人客服支持"
    ],
    "pros": [
      "BGP多线自动容灾切换",
      "工单响应迅速，客服体系完善",
      "套餐跨度丰富，多设备共享方便"
    ],
    "cons": [
      "入门价格为20元/月，无超低价年付小包"
    ],
    "summary": "暮光加速自2023年运营以来，主打稳定低延迟与企业级真人运维。其全平台多设备同时在线能力和全区流媒体解锁表现亮眼，是注重售后与日常工作稳定性的优质选择。"
  },
  {
    "rank": 3,
    "name": "飞猫云",
    "slug": "feimao",
    "isTop10": true,
    "isFeatured": false,
    "tagline": "IPLC纯专线接入 // 7元入门轻量档 // 晚高峰无丢包实测",
    "affLink": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "coupon": "flycat888",
    "couponDiscount": "首发8折优惠码",
    "entryPrice": "¥7/月起 (低门槛入门)",
    "minMonthlyPrice": 7,
    "lineType": "IPLC内网专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clientsSupported": [
      "Clash",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCoverage": "香港 IEPL、日本东京专线、美国洛杉矶优化、新加坡等",
    "speedtestImage": "/assets/speedtest/飞猫云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "原创剧全解锁",
      "disney": "全区解锁",
      "youtube": "4K满速",
      "chatgpt": "原生IP支持",
      "claude": "无需降级",
      "gemini": "特定节点"
    },
    "packages": [
      {
        "name": "尝鲜包",
        "price": "¥7/月",
        "period": "月付",
        "bandwidth": "35GB/月",
        "highlight": "超低门槛体验"
      },
      {
        "name": "轻量版",
        "price": "¥18/月",
        "period": "月付",
        "bandwidth": "120GB/月",
        "highlight": "个人主力"
      },
      {
        "name": "进阶版",
        "price": "¥32/月",
        "period": "月付",
        "bandwidth": "260GB/月",
        "highlight": "影音追剧"
      },
      {
        "name": "不限时流量包",
        "price": "¥98",
        "period": "一次性",
        "bandwidth": "200GB不过期",
        "highlight": "备用神包"
      }
    ],
    "features": [
      "全链路采用 IPLC 专线，敏感时期网络依然平稳",
      "三列网格实测：ChatGPT 原生IP全绿通过",
      "支持免翻墙访问官网控制台，更新订阅便捷"
    ],
    "pros": [
      "7元超低门槛试错成本低",
      "实测香港节点下载突破86MB/s，丢包率0%",
      "提供不限时不过期流量包备用"
    ],
    "cons": [
      "低价档流量较紧凑，高带宽消耗用户需选进阶套餐"
    ],
    "summary": "飞猫云是性价比特长型专线品牌，以7元极低门槛和成熟的IPLC架构著称。在晚高峰测试中平均延迟94ms、最高下载超86MB/s，且对ChatGPT和Netflix全解锁，适合学生与轻量级出海追剧党。"
  },
  {
    "rank": 4,
    "name": "微风网络",
    "slug": "weifeng",
    "isTop10": true,
    "isFeatured": false,
    "tagline": "全专线中继架构 // 7元档高性价比 // 三网优化出口",
    "affLink": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "coupon": "flat888",
    "couponDiscount": "专享9折优惠",
    "entryPrice": "¥7/月 (入门档)",
    "minMonthlyPrice": 7,
    "lineType": "专线中继 + 三网直连",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "clientsSupported": [
      "全平台通用客户端",
      "Clash Verge",
      "Shadowrocket",
      "v2rayN"
    ],
    "nodesCoverage": "亚太主流枢纽 (香港/日本/新加坡) + 欧美热门节点",
    "speedtestImage": "/assets/speedtest/微风-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "微风入门",
        "price": "¥7/月",
        "period": "月付",
        "bandwidth": "40GB/月",
        "highlight": "小额尝试"
      },
      {
        "name": "微风畅游",
        "price": "¥19/月",
        "period": "月付",
        "bandwidth": "150GB/月",
        "highlight": "性价比首选"
      },
      {
        "name": "微风极速",
        "price": "¥35/月",
        "period": "月付",
        "bandwidth": "320GB/月",
        "highlight": "大带宽享受"
      }
    ],
    "features": [
      "专线中继架构，自动路由优化",
      "全节点不限速，三网优化加速节点",
      "与业界多家大型节点网络互通容灾"
    ],
    "pros": [
      "价格平民，月付7元起步",
      "流媒体与社交媒体解锁稳定",
      "订阅链接适配度高，导入即用"
    ],
    "cons": [
      "高峰期非热门冷门节点偶尔有波动"
    ],
    "summary": "微风网络在平价专线机场中具有广泛用户群体，套餐价格亲民，节点覆盖广泛，适合需要日常查阅学术资料、浏览社媒和刷短视频的用户。"
  },
  {
    "rank": 5,
    "name": "大佬云",
    "slug": "dalaoyun",
    "isTop10": true,
    "isFeatured": false,
    "tagline": "5.6元/月超高性价比 // 60GB实用月流量 // 老牌稳定",
    "affLink": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "coupon": "dly888",
    "couponDiscount": "新人专享折扣",
    "entryPrice": "¥5.6/月",
    "minMonthlyPrice": 5.6,
    "lineType": "高速BGP隧道中继",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "clientsSupported": [
      "Clash",
      "Shadowrocket",
      "Karing",
      "FlClash"
    ],
    "nodesCoverage": "香港、日本、新加坡、美国、英国等",
    "speedtestImage": "/assets/speedtest/SOGO云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "部分支持",
      "disney": "支持",
      "youtube": "4K流畅",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "大佬体验",
        "price": "¥5.6/月",
        "period": "月付",
        "bandwidth": "60GB/月",
        "highlight": "极致性价比"
      },
      {
        "name": "大佬进阶",
        "price": "¥15/月",
        "period": "月付",
        "bandwidth": "180GB/月",
        "highlight": "主力推荐"
      },
      {
        "name": "大佬尊贵",
        "price": "¥28/月",
        "period": "月付",
        "bandwidth": "380GB/月",
        "highlight": "充裕大流量"
      }
    ],
    "features": [
      "突破行业低价底线的 5.6 元月付套餐",
      "节点延迟控制良好，日常网页加载秒开",
      "支持通用订阅格式一键复制"
    ],
    "pros": [
      "月付5.6元几乎无经济负担",
      "适合作为主力的后备防失联通道",
      "基础网络质量扎实"
    ],
    "cons": [
      "冷门小众国家节点相对较少"
    ],
    "summary": "大佬云以5.6元/月的亲民价格成为便宜机场里的标杆产品之一。对于每月流量消耗不大、主要用于文字办公和网页查阅的个人用户来说，是不可多得的平价利器。"
  },
  {
    "rank": 6,
    "name": "星岛梦",
    "slug": "xingdaomeng",
    "isTop10": true,
    "isFeatured": false,
    "tagline": "2020年老牌运营 // 不限时流量套餐 // 经典抗封锁网络",
    "affLink": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "coupon": "nmw888",
    "couponDiscount": "老牌专享优惠券",
    "entryPrice": "¥16/月起",
    "minMonthlyPrice": 16,
    "lineType": "多线混合专线 + BGP中继",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clientsSupported": [
      "全平台客户端支持",
      "Clash Verge Rev",
      "Stash",
      "Surge"
    ],
    "nodesCoverage": "香港、台湾、日本、新加坡、欧美及东南亚",
    "speedtestImage": "/assets/speedtest/星岛梦-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "全解锁",
      "disney": "全解锁",
      "youtube": "4K流畅",
      "chatgpt": "原生支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "月付基础版",
        "price": "¥16/月",
        "period": "月付",
        "bandwidth": "100GB/月",
        "highlight": "常规定期版"
      },
      {
        "name": "月付豪华版",
        "price": "¥32/月",
        "period": "月付",
        "bandwidth": "260GB/月",
        "highlight": "追剧大流量"
      },
      {
        "name": "星岛不限时",
        "price": "¥118",
        "period": "一次性",
        "bandwidth": "180GB永久不过期",
        "highlight": "防失联备用"
      }
    ],
    "features": [
      "2020年稳定持续运营至今，无跑路风险背书",
      "特别提供永久不过期的不限时流量套餐",
      "晚高峰实测节点连通率高达99.8%"
    ],
    "pros": [
      "五年老品牌，信誉经过长周期考验",
      "不限时套餐非常适合低频用户",
      "流媒体解锁矩阵全面"
    ],
    "cons": [
      "不限时套餐单价高于普通月付"
    ],
    "summary": "星岛梦是自2020年稳健运营的经典老牌机场，积累了深厚的技术积累。其主打的不限时套餐配合扎实的专线节点，是很多资深老玩家桌面上的常驻备用保障。"
  },
  {
    "rank": 7,
    "name": "二猫云",
    "slug": "ermao",
    "isTop10": true,
    "isFeatured": false,
    "tagline": "20元享130GB优质带宽 // 亚太专线延迟低于50ms",
    "affLink": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "coupon": "ermao5555",
    "couponDiscount": "专享折扣码",
    "entryPrice": "¥20/月 (130GB)",
    "minMonthlyPrice": 20,
    "lineType": "亚太高速直连 + 隧道中继",
    "protocols": [
      "Trojan",
      "Shadowsocks"
    ],
    "clientsSupported": [
      "Clash",
      "Shadowrocket",
      "v2rayNG",
      "Hiddify"
    ],
    "nodesCoverage": "香港、台湾、日本、韩国、新加坡、美国",
    "speedtestImage": "/assets/speedtest/二猫云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "标准套餐",
        "price": "¥20/月",
        "period": "月付",
        "bandwidth": "130GB/月",
        "highlight": "中端甜品级"
      },
      {
        "name": "尊贵套餐",
        "price": "¥38/月",
        "period": "月付",
        "bandwidth": "280GB/月",
        "highlight": "大额畅享"
      }
    ],
    "features": [
      "性价比定位精准，20元提供130GB充裕流量",
      "亚太骨干节点实测下行破70MB/s",
      "支持全平台主流客户端一键导入"
    ],
    "pros": [
      "定价适中，流量配额合理",
      "实测图显示各节点颜色健康，绿延迟占比高",
      "配置教程详细"
    ],
    "cons": [
      "仅支持主流地区，冷门节点较少"
    ],
    "summary": "二猫云以均衡的定价和过硬的亚太节点素质在中端机场中脱颖而出。20元/月130GB的规格恰到好处，既保证了带宽充裕，又避免了高昂月费支出。"
  },
  {
    "rank": 8,
    "name": "无忧链接",
    "slug": "wuyou",
    "isTop10": true,
    "isFeatured": false,
    "tagline": "无需订阅转换 // 6元轻量试用 // 极简导入秒连",
    "affLink": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "coupon": "wuyou666",
    "couponDiscount": "特惠尝鲜券",
    "entryPrice": "¥6/月 (轻量套餐)",
    "minMonthlyPrice": 6,
    "lineType": "BGP智能中继专线",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "clientsSupported": [
      "原生全格式订阅",
      "Clash",
      "Shadowrocket",
      "Surge",
      "Loon"
    ],
    "nodesCoverage": "香港、台湾、日本、新加坡、美西",
    "speedtestImage": "/assets/speedtest/速界-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K流畅",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "无忧体验",
        "price": "¥6/月",
        "period": "月付",
        "bandwidth": "50GB/月",
        "highlight": "轻量首选"
      },
      {
        "name": "无忧标准",
        "price": "¥18/月",
        "period": "月付",
        "bandwidth": "160GB/月",
        "highlight": "性价比推荐"
      },
      {
        "name": "无忧高级",
        "price": "¥35/月",
        "period": "月付",
        "bandwidth": "350GB/月",
        "highlight": "大流量保障"
      }
    ],
    "features": [
      "独创多协议原生下发，彻底告别第三方 Subconverter 转换报错风险",
      "6元小额月付，零负担体验",
      "自研智能路由分流规则"
    ],
    "pros": [
      "不用担心订阅转换泄密或转换失败",
      "超低起步价",
      "节点稳定性维持在第一梯队"
    ],
    "cons": [
      "客服工单高峰期需排队"
    ],
    "summary": "无忧链接最大卖点是“原生多客户端订阅协议直接兼容”，完全杜绝了因第三方订阅转换器故障导致的节点丢失问题，同时6元档套餐非常贴合新手。"
  },
  {
    "rank": 9,
    "name": "唯兔云",
    "slug": "weitu",
    "isTop10": true,
    "isFeatured": false,
    "tagline": "60+全球节点覆盖 // 三网优化出口 // 智能负载均衡调度",
    "affLink": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "coupon": "weitu666",
    "couponDiscount": "专属优惠券",
    "entryPrice": "¥18/月起",
    "minMonthlyPrice": 18,
    "lineType": "三网优化智能专线 + 均衡集群",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clientsSupported": [
      "全平台主流客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box"
    ],
    "nodesCoverage": "全球60+节点深度覆盖（亚太/欧美/中东/南美）",
    "speedtestImage": "/assets/speedtest/唯兔云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "8K秒开",
      "chatgpt": "原生支持",
      "claude": "原生支持",
      "gemini": "原生支持"
    },
    "packages": [
      {
        "name": "唯兔·标准",
        "price": "¥18/月",
        "period": "月付",
        "bandwidth": "120GB/月",
        "highlight": "三网优化"
      },
      {
        "name": "唯兔·进阶",
        "price": "¥35/月",
        "period": "月付",
        "bandwidth": "280GB/月",
        "highlight": "多端推荐"
      },
      {
        "name": "唯兔·旗舰",
        "price": "¥68/月",
        "period": "月付",
        "bandwidth": "600GB/月",
        "highlight": "极速集群"
      }
    ],
    "features": [
      "全球60+节点深度布局，冷门地区小众IP资源丰富",
      "智能三网负载均衡，自动将联通/电信/移动用户分配至最优路由",
      "AI工具与流媒体全量解锁"
    ],
    "pros": [
      "节点数量庞大，防封锁回旋余地大",
      "三网分流实测优化显著",
      "测速图全绿表现突出"
    ],
    "cons": [
      "高峰期极个别远距离节点延迟相对稍高"
    ],
    "summary": "唯兔云依靠60+海量节点池与三网动态接入技术在测评中表现抢眼。其自动根据用户宽带运营商分配合适入口的技术，显著降低了不同网络下的延迟差距。"
  },
  {
    "rank": 10,
    "name": "Firefly",
    "slug": "firefly",
    "isTop10": true,
    "isFeatured": false,
    "tagline": "IPLC+VLESS原生架构 // 6档细致套餐 // 免翻墙直达官网",
    "affLink": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "coupon": "firefly",
    "couponDiscount": "新用户8折优惠",
    "entryPrice": "¥96/年 (年付折合8元/月) 或 ¥25/月",
    "minMonthlyPrice": 8,
    "lineType": "IPLC纯专线 + VLESS协议",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clientsSupported": [
      "Clash",
      "Shadowrocket",
      "Karing",
      "Sing-box"
    ],
    "nodesCoverage": "香港、台湾、日本、新加坡、美国、欧洲等核心枢纽",
    "speedtestImage": "/assets/speedtest/宇宙云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "全解锁",
      "disney": "全解锁",
      "youtube": "4K极速",
      "chatgpt": "原生IP",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "Firefly年付版",
        "price": "¥96/年",
        "period": "年付",
        "bandwidth": "60GB/月",
        "highlight": "年付8元/月"
      },
      {
        "name": "Firefly Lite",
        "price": "¥25/月",
        "period": "月付",
        "bandwidth": "150GB/月",
        "highlight": "常规主力"
      },
      {
        "name": "Firefly Plus",
        "price": "¥45/月",
        "period": "月付",
        "bandwidth": "300GB/月",
        "highlight": "大流量"
      },
      {
        "name": "Firefly不限时",
        "price": "¥100",
        "period": "一次性",
        "bandwidth": "100GB不过期",
        "highlight": "备用包"
      }
    ],
    "features": [
      "团队8年沉淀，IPLC+VLESS双重技术底座",
      "不限速不限设备同时在线",
      "官网提供防封镜像直达入口，随时随地续费更新"
    ],
    "pros": [
      "纯专线稳定性高",
      "有年付96元平价包与不限时包",
      "官网免翻墙访问极度省心"
    ],
    "cons": [
      "高峰期客服响应有时略慢"
    ],
    "summary": "Firefly（萤火虫）凭借扎实的IPLC专线和细致的6档套餐跻身前十。其原生IP在ChatGPT和海外视频平台表现优秀，免翻墙访问官网更是极大解决了新手失联痛点。"
  },
  {
    "rank": 11,
    "name": "宇宙云",
    "slug": "yuzhou",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "IEPL专线 // VLESS协议 // 自研客户端一键启动",
    "affLink": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "coupon": "YUZHOU553",
    "couponDiscount": "专属折扣优惠",
    "entryPrice": "¥18/月起",
    "minMonthlyPrice": 18,
    "lineType": "IEPL企业专线",
    "protocols": [
      "VLESS"
    ],
    "clientsSupported": [
      "自研客户端",
      "Clash",
      "Shadowrocket"
    ],
    "nodesCoverage": "亚太及欧美主流枢纽",
    "speedtestImage": "/assets/speedtest/宇宙云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K流畅",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "基础版",
        "price": "¥18/月",
        "period": "月付",
        "bandwidth": "120GB/月",
        "highlight": "入门首选"
      }
    ],
    "features": [
      "IEPL+VLESS专线协议",
      "支持自研客户端，一键扫码登录"
    ],
    "pros": [
      "上手极简",
      "专线稳定"
    ],
    "cons": [
      "冷门节点偏少"
    ],
    "summary": "宇宙云采用IEPL专线与VLESS协议，主推自研客户端，适合对复杂代理软件配置感到头疼的新手用户。"
  },
  {
    "rank": 12,
    "name": "U1S1",
    "slug": "u1s1",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "20元120GB标准方案 // 经典成熟老牌",
    "affLink": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "coupon": "akaka",
    "couponDiscount": "实惠优惠码",
    "entryPrice": "¥20/月",
    "minMonthlyPrice": 20,
    "lineType": "优质专线中继",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "clientsSupported": [
      "全平台兼容客户端"
    ],
    "nodesCoverage": "港台日新美核心枢纽",
    "speedtestImage": "/assets/speedtest/U1S1-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "标准套餐",
        "price": "¥20/月",
        "period": "月付",
        "bandwidth": "120GB/月",
        "highlight": "均衡实用"
      }
    ],
    "features": [
      "经典老牌均衡配置",
      "实测晚高峰延迟稳定在80ms以内"
    ],
    "pros": [
      "价格合理",
      "无套路稳定"
    ],
    "cons": [
      "套餐层级较少"
    ],
    "summary": "U1S1以20元120GB的经典配置为核心，实测性能扎实，是实用主义出海用户的常客。"
  },
  {
    "rank": 13,
    "name": "灵猫网络",
    "slug": "lingmao",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "19元150GB超值配置 // 提供不限时套餐",
    "affLink": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "coupon": "lmao888",
    "couponDiscount": "专享折扣码",
    "entryPrice": "¥19/月",
    "minMonthlyPrice": 19,
    "lineType": "高速BGP专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clientsSupported": [
      "Clash",
      "Shadowrocket",
      "Sing-box"
    ],
    "nodesCoverage": "亚太各热门机房",
    "speedtestImage": "/assets/speedtest/灵猫网络-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K流畅",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "灵猫月卡",
        "price": "¥19/月",
        "period": "月付",
        "bandwidth": "150GB/月",
        "highlight": "高性价比"
      }
    ],
    "features": [
      "19元150GB大流量",
      "提供不限时不过期备用包"
    ],
    "pros": [
      "流量单价低",
      "有长期备用方案"
    ],
    "cons": [
      "高峰期偶有轻微波动"
    ],
    "summary": "灵猫网络主打19元150GB大额流量与不限时方案，在学生群体和低频备用用户中口碑良好。"
  },
  {
    "rank": 14,
    "name": "极连云",
    "slug": "jilian",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "18元100GB // 针对海外AI工具专属优化",
    "affLink": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "coupon": "ji8888",
    "couponDiscount": "专属折扣",
    "entryPrice": "¥18/月",
    "minMonthlyPrice": 18,
    "lineType": "AI专用加速通道 + IEPL",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "clientsSupported": [
      "全平台客户端"
    ],
    "nodesCoverage": "美西、香港、日本、新加坡等",
    "speedtestImage": "/assets/speedtest/极连云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K流畅",
      "chatgpt": "原生专线",
      "claude": "深度优化",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "AI尝鲜版",
        "price": "¥18/月",
        "period": "月付",
        "bandwidth": "100GB/月",
        "highlight": "AI研发必备"
      }
    ],
    "features": [
      "针对 OpenAI 和 Anthropic API 端口特别优化",
      "低丢包率长连接保障"
    ],
    "pros": [
      "写代码调用API不断流",
      "价格适中"
    ],
    "cons": [
      "节点数量一般"
    ],
    "summary": "极连云主打针对海外AI研发工具与流媒体的专属通道，特别适合重度依赖ChatGPT、Claude协助编程的工程师。"
  },
  {
    "rank": 15,
    "name": "光年梯",
    "slug": "guangnian",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "18元110GB // 亚太节点高带宽实测",
    "affLink": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "coupon": "gnt6666",
    "couponDiscount": "新人立减券",
    "entryPrice": "¥18/月",
    "minMonthlyPrice": 18,
    "lineType": "高速专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clientsSupported": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "nodesCoverage": "亚太主力地区",
    "speedtestImage": "/assets/speedtest/光年梯-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K秒开",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "光年基础",
        "price": "¥18/月",
        "period": "月付",
        "bandwidth": "110GB/月",
        "highlight": "平价首选"
      }
    ],
    "features": [
      "亚太高带宽直连",
      "流媒体秒开支持"
    ],
    "pros": [
      "延迟表现均衡",
      "测速图表现优良"
    ],
    "cons": [
      "套餐种类较单一"
    ],
    "summary": "光年梯以18元110GB的实用配置和高带宽实测表现，在平价专线机场中表现稳健。"
  },
  {
    "rank": 16,
    "name": "一翻云",
    "slug": "yifan",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "20元150GB大容量 // 稳定追剧首选",
    "affLink": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "coupon": "yfy6666",
    "couponDiscount": "折扣优惠码",
    "entryPrice": "¥20/月",
    "minMonthlyPrice": 20,
    "lineType": "高速BGP专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "clientsSupported": [
      "全平台兼容"
    ],
    "nodesCoverage": "港台日新美核心",
    "speedtestImage": "/assets/speedtest/一翻云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K极速",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "一翻标准",
        "price": "¥20/月",
        "period": "月付",
        "bandwidth": "150GB/月",
        "highlight": "充沛大流量"
      }
    ],
    "features": [
      "充沛大流量月付方案",
      "针对高清流媒体协议优化"
    ],
    "pros": [
      "流量大，追剧不心疼",
      "连接稳定"
    ],
    "cons": [
      "无一次性不限时套餐"
    ],
    "summary": "一翻云以20元150GB的大额流量方案主打影音爱好者，流媒体全区解锁表现稳定出色。"
  },
  {
    "rank": 17,
    "name": "SOGO云",
    "slug": "sogo",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "2026新锐黑马 // 专线骨干全新上线",
    "affLink": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "coupon": "sss777",
    "couponDiscount": "新站开业特惠码",
    "entryPrice": "¥15/月起",
    "minMonthlyPrice": 15,
    "lineType": "全新建设企业IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clientsSupported": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box"
    ],
    "nodesCoverage": "亚太核心节点全新机架",
    "speedtestImage": "/assets/speedtest/SOGO云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "全解锁",
      "disney": "全解锁",
      "youtube": "4K极速",
      "chatgpt": "原生支持",
      "claude": "原生支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "新锐尝鲜",
        "price": "¥15/月",
        "period": "月付",
        "bandwidth": "100GB/月",
        "highlight": "人少带宽大"
      }
    ],
    "features": [
      "全新节点服务器，负载轻，晚高峰拥挤度低",
      "硬件设施全新"
    ],
    "pros": [
      "人少不挤，单节点峰值测速极高",
      "流媒体解锁全绿"
    ],
    "cons": [
      "运营时间相对较新"
    ],
    "summary": "SOGO云是2026年全新上线的专线新锐品牌，最大优势是当前用户密度低，晚高峰各节点下行速度极其充沛。"
  },
  {
    "rank": 18,
    "name": "可信云",
    "slug": "kexin",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "数据诚实透明 // 实事求是的技术流小众精品",
    "affLink": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "coupon": "kkk333",
    "couponDiscount": "诚意优惠券",
    "entryPrice": "¥18/月起",
    "minMonthlyPrice": 18,
    "lineType": "高可靠隧道专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "clientsSupported": [
      "全平台兼容客户端"
    ],
    "nodesCoverage": "主流成熟机房",
    "speedtestImage": "/assets/speedtest/可信云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K流畅",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "诚信版",
        "price": "¥18/月",
        "period": "月付",
        "bandwidth": "100GB/月",
        "highlight": "老实本分"
      }
    ],
    "features": [
      "官方明确标注网络优势与短板，绝不虚假宣传",
      "节点实测丢包率控制优异"
    ],
    "pros": [
      "口碑透明真实",
      "不虚标带宽倍率"
    ],
    "cons": [
      "营销宣传低调"
    ],
    "summary": "可信云以诚实公开的节点运维态度在小众圈子内赢得认可，对于看重真实在线率的用户是放心之选。"
  },
  {
    "rank": 19,
    "name": "速界",
    "slug": "sujie",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "重点强化海外AI生产力工具 // 极速响应",
    "affLink": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "coupon": "sss1111",
    "couponDiscount": "立减优惠码",
    "entryPrice": "¥18/月",
    "minMonthlyPrice": 18,
    "lineType": "AI优化专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clientsSupported": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "nodesCoverage": "亚太及欧美",
    "speedtestImage": "/assets/speedtest/速界-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K秒开",
      "chatgpt": "专属通道",
      "claude": "稳定支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "速界轻量",
        "price": "¥18/月",
        "period": "月付",
        "bandwidth": "110GB/月",
        "highlight": "AI高频推荐"
      }
    ],
    "features": [
      "专门针对大语言模型长对话上下文进行连接保活",
      "实测下载速度突出"
    ],
    "pros": [
      "AI调用不掉线",
      "配置简明"
    ],
    "cons": [
      "高峰期客服主要通过工单交流"
    ],
    "summary": "速界在品牌资料中重点强调AI生产力工具的优化，实测测速条全线飘绿，适合高频需要海外信息检索的人群。"
  },
  {
    "rank": 20,
    "name": "闪跃",
    "slug": "shanyue",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "24元150GB高规格品质 // 低延迟游戏与追剧",
    "affLink": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "coupon": "shanyue",
    "couponDiscount": "专属折扣码",
    "entryPrice": "¥24/月",
    "minMonthlyPrice": 24,
    "lineType": "企业级高可靠专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "clientsSupported": [
      "主流全平台软件"
    ],
    "nodesCoverage": "港台日韩新美欧",
    "speedtestImage": "/assets/speedtest/SOGO云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "全解锁",
      "disney": "全解锁",
      "youtube": "4K极速",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "闪跃尊享",
        "price": "¥24/月",
        "period": "月付",
        "bandwidth": "150GB/月",
        "highlight": "稳定第一"
      }
    ],
    "features": [
      "严苛的带宽与冗余控制，保障不超售",
      "全时段网络抖动低于3ms"
    ],
    "pros": [
      "稳定性极其优秀",
      "游戏加速延迟平稳"
    ],
    "cons": [
      "价格稍高一点"
    ],
    "summary": "闪跃定位中高端稳定品质，24元150GB的设定主打不超售与低抖动，适合对网络卡顿极度敏感的用户。"
  },
  {
    "rank": 21,
    "name": "全球云",
    "slug": "quanqiu",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "2026全新出海集群 // 跨国直连高带宽",
    "affLink": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "coupon": "qqy7777",
    "couponDiscount": "新品牌限时优惠",
    "entryPrice": "¥16/月起",
    "minMonthlyPrice": 16,
    "lineType": "全球多路直连专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clientsSupported": [
      "全平台客户端"
    ],
    "nodesCoverage": "全球主要经济体核心网络",
    "speedtestImage": "/assets/speedtest/全球云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "全解锁",
      "disney": "全解锁",
      "youtube": "4K秒开",
      "chatgpt": "原生支持",
      "claude": "原生支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "全球畅通",
        "price": "¥16/月",
        "period": "月付",
        "bandwidth": "100GB/月",
        "highlight": "高速体验"
      }
    ],
    "features": [
      "跨国直连骨干网节点",
      "新机房线路充沛，实测下行破百兆"
    ],
    "pros": [
      "测速图表现亮眼",
      "价格公道"
    ],
    "cons": [
      "上线时间较近需长期观察"
    ],
    "summary": "全球云是2026年打造的全新出海代理网络，拥有充足的机柜与带宽储备，实测综合延迟极低。"
  },
  {
    "rank": 22,
    "name": "闪电鼠",
    "slug": "shandianshu",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "5.6元/月起步 // 60GB实用配额 // 超平价出海",
    "affLink": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "coupon": "sd88",
    "couponDiscount": "超低价尝鲜券",
    "entryPrice": "¥5.6/月",
    "minMonthlyPrice": 5.6,
    "lineType": "经济型BGP中继",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "clientsSupported": [
      "Clash",
      "Shadowrocket",
      "Karing"
    ],
    "nodesCoverage": "香港、日本、美国等",
    "speedtestImage": "/assets/speedtest/速界-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "基础支持",
      "disney": "基础支持",
      "youtube": "1080P/4K",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "闪电体验",
        "price": "¥5.6/月",
        "period": "月付",
        "bandwidth": "60GB/月",
        "highlight": "极致省钱"
      }
    ],
    "features": [
      "5.6元亲民定价",
      "日常文字查资料利器"
    ],
    "pros": [
      "极度便宜",
      "门槛极低"
    ],
    "cons": [
      "高峰期高码率4K视频可能有缓冲"
    ],
    "summary": "闪电鼠与大佬云同属5.6元极平价梯队，专为预算有限、以文字浏览和学术文献查阅为主的轻量用户打造。"
  },
  {
    "rank": 23,
    "name": "云界线",
    "slug": "yunjiexian",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "5.6元/月轻量备用 // 经典入门方案",
    "affLink": "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    "coupon": "yjx888",
    "couponDiscount": "立减优惠码",
    "entryPrice": "¥5.6/月",
    "minMonthlyPrice": 5.6,
    "lineType": "经济型BGP网络",
    "protocols": [
      "Shadowsocks"
    ],
    "clientsSupported": [
      "全平台兼容"
    ],
    "nodesCoverage": "亚太主流地区",
    "speedtestImage": "/assets/speedtest/微风-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "高清流畅",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "轻量版",
        "price": "¥5.6/月",
        "period": "月付",
        "bandwidth": "60GB/月",
        "highlight": "零钱级月费"
      }
    ],
    "features": [
      "低门槛入门",
      "节点可用率良好"
    ],
    "pros": [
      "花一杯奶茶钱可用两个多月",
      "配置直观"
    ],
    "cons": [
      "不支持大并发"
    ],
    "summary": "云界线提供极简的5.6元60GB方案，满足备用手机或低频出海设备的基本连网需求。"
  },
  {
    "rank": 24,
    "name": "榴莲云",
    "slug": "liulianyun",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "5.6元/月超值尝鲜 // 实用60GB月配额",
    "affLink": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "coupon": "ll88",
    "couponDiscount": "特惠码",
    "entryPrice": "¥5.6/月",
    "minMonthlyPrice": 5.6,
    "lineType": "高速BGP优化线路",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "clientsSupported": [
      "全平台通用客户端"
    ],
    "nodesCoverage": "香港、新加坡、日本、美西",
    "speedtestImage": "/assets/speedtest/二猫云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K流畅",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "榴莲尝鲜",
        "price": "¥5.6/月",
        "period": "月付",
        "bandwidth": "60GB/月",
        "highlight": "极度实惠"
      }
    ],
    "features": [
      "平价套餐标杆",
      "支持主流代理客户端一键导入"
    ],
    "pros": [
      "省钱首选",
      "日常使用顺畅"
    ],
    "cons": [
      "无独享企业专线"
    ],
    "summary": "榴莲云同样以5.6元/月进入平价市场，日常浏览社媒、查收邮件非常划算。"
  },
  {
    "rank": 25,
    "name": "神行加速",
    "slug": "shenxing",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "14元120GB // 兼顾低价与大流量的性价比之选",
    "affLink": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "coupon": "xs0077",
    "couponDiscount": "专享折扣券",
    "entryPrice": "¥14/月",
    "minMonthlyPrice": 14,
    "lineType": "隧道BGP中继专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "clientsSupported": [
      "Clash",
      "Shadowrocket",
      "FlClash"
    ],
    "nodesCoverage": "亚太及欧美各重点节点",
    "speedtestImage": "/assets/speedtest/星岛梦-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K秒开",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "神行标准",
        "price": "¥14/月",
        "period": "月付",
        "bandwidth": "120GB/月",
        "highlight": "性价比极高"
      }
    ],
    "features": [
      "14元即可获得120GB月流量",
      "三网均衡调度中继"
    ],
    "pros": [
      "在15元以下档位中流量配额最慷慨",
      "延迟稳定"
    ],
    "cons": [
      "高峰期客服响应稍慢"
    ],
    "summary": "神行加速在15元以内价格区间中极具竞争力，14元提供120GB充裕流量，是预算适中用户的理想折中选择。"
  },
  {
    "rank": 26,
    "name": "环球梯",
    "slug": "huanqiuti",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "5.6元/月超实惠入门 // 多地区基础加速",
    "affLink": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "coupon": "HQ66",
    "couponDiscount": "特惠优惠码",
    "entryPrice": "¥5.6/月",
    "minMonthlyPrice": 5.6,
    "lineType": "多线中继加速",
    "protocols": [
      "Shadowsocks"
    ],
    "clientsSupported": [
      "全平台兼容客户端"
    ],
    "nodesCoverage": "亚太各基础机房",
    "speedtestImage": "/assets/speedtest/可信云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "基础支持",
      "disney": "基础支持",
      "youtube": "1080P/4K",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "环球体验",
        "price": "¥5.6/月",
        "period": "月付",
        "bandwidth": "60GB/月",
        "highlight": "零门槛"
      }
    ],
    "features": [
      "极低门槛开户体验",
      "日常基础网络访问覆盖"
    ],
    "pros": [
      "单价极低",
      "满足基本浏览"
    ],
    "cons": [
      "多设备并发受限"
    ],
    "summary": "环球梯以5.6元低资费为特色，适合个人多设备应急或海外网站轻量化浏览。"
  },
  {
    "rank": 27,
    "name": "隐形人",
    "slug": "yinxingren",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "60+节点详细清单 // 1小时节点修复承诺 // 自研专用客户端",
    "affLink": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "coupon": "yxr888",
    "couponDiscount": "专属折扣券",
    "entryPrice": "¥25/月起",
    "minMonthlyPrice": 25,
    "lineType": "高防独立专线网络",
    "protocols": [
      "专用安全加密协议"
    ],
    "clientsSupported": [
      "自研专用跨平台客户端 (不提供第三方订阅导入)"
    ],
    "nodesCoverage": "全球60+详尽透明机房列表",
    "speedtestImage": "/assets/speedtest/极连云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "全解锁",
      "disney": "全解锁",
      "youtube": "4K极速",
      "chatgpt": "原生隔离",
      "claude": "原生支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "隐形白银",
        "price": "¥25/月",
        "period": "月付",
        "bandwidth": "120GB/月",
        "highlight": "高防极速"
      }
    ],
    "features": [
      "官方公开60+节点透明清单",
      "做出全网少有的1小时内断线修复承诺",
      "全封闭自研专用客户端，严防节点泄露与嗅探"
    ],
    "pros": [
      "隐私隔离级别极高",
      "承诺1小时修复，运维极其负责",
      "绝无滥用"
    ],
    "cons": [
      "不提供Clash等第三方订阅链接，仅能使用自研客户端"
    ],
    "summary": "隐形人主打高防与严肃的隐私保护，承诺1小时修复断线节点，采用全封闭自研客户端，是注重商业数据私密性的特殊首选。"
  },
  {
    "rank": 28,
    "name": "梯子云",
    "slug": "tiziyun",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "自研全平台客户端一键登录 // 同时兼容通用订阅",
    "affLink": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "coupon": "tiziyun",
    "couponDiscount": "开业通用折扣",
    "entryPrice": "¥20/月起",
    "minMonthlyPrice": 20,
    "lineType": "IEPL/IPLC高速专线",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "clientsSupported": [
      "自研全平台客户端",
      "Clash",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCoverage": "全球核心机房集群",
    "speedtestImage": "/assets/speedtest/飞猫云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "全解锁",
      "disney": "全解锁",
      "youtube": "4K秒开",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "梯子入门",
        "price": "¥20/月",
        "period": "月付",
        "bandwidth": "130GB/月",
        "highlight": "双模兼备"
      }
    ],
    "features": [
      "既提供新手一键傻瓜式登录客户端，又完整开放第三方开源订阅",
      "多协议自适应调度"
    ],
    "pros": [
      "新手老手两相宜",
      "自研软件界面精美",
      "专线质量过硬"
    ],
    "cons": [
      "高峰期特定特价套餐可能售罄"
    ],
    "summary": "梯子云巧妙地兼顾了新手的傻瓜式一键客户端需求与资深极客的自定义开源订阅需求，节点稳定，体验上乘。"
  },
  {
    "rank": 29,
    "name": "WgetCloud",
    "slug": "wgetcloud",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "老牌高端专线代表 // 亚太延迟25ms实测 // 高可用企业架构",
    "affLink": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "WGET666",
    "couponDiscount": "尊享特惠",
    "entryPrice": "¥109/月起 (季付¥327/250GB起)",
    "minMonthlyPrice": 109,
    "lineType": "高规格精品BGP+IPLC专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "clientsSupported": [
      "全平台客户端支持",
      "Clash",
      "Surge"
    ],
    "nodesCoverage": "香港(25.9ms)、台湾(41.3ms)、新加坡(55.6ms)、日本(69.4ms)、美国(170.2ms)",
    "speedtestImage": "/assets/speedtest/光速云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "全解锁",
      "disney": "全解锁",
      "youtube": "8K极速",
      "chatgpt": "原生支持",
      "claude": "原生支持",
      "gemini": "原生支持"
    },
    "packages": [
      {
        "name": "优质专线服务",
        "price": "¥327/季",
        "period": "季付",
        "bandwidth": "250GB/月",
        "highlight": "高端商务"
      },
      {
        "name": "精品专线服务",
        "price": "¥357/季",
        "period": "季付",
        "bandwidth": "270GB/月",
        "highlight": "极致品质"
      }
    ],
    "features": [
      "高规格专线出口，实测香港下行超430Mbps",
      "多地自建机房专线"
    ],
    "pros": [
      "延迟极低，稳定性极强",
      "企业级售后支持"
    ],
    "cons": [
      "价格高昂，季付起步，不适合平价需求"
    ],
    "summary": "WgetCloud是网络代理中的高端商务代表，实测香港延迟低至25.9ms，适合对网络稳定性和品质有极高预算的高净值人群。"
  },
  {
    "rank": 30,
    "name": "白月光",
    "slug": "baiyueguang",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "6档多元套餐 // 季付66元起 // 大流量高规格",
    "affLink": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "coupon": "BYG888",
    "couponDiscount": "季度立减券",
    "entryPrice": "¥22/月 (季付¥66/100GB起)",
    "minMonthlyPrice": 22,
    "lineType": "优质专线集群",
    "protocols": [
      "Shadowsocks"
    ],
    "clientsSupported": [
      "全平台兼容"
    ],
    "nodesCoverage": "香港、美国、日本、台湾、新加坡、加拿大、韩国",
    "speedtestImage": "/assets/speedtest/幕光加速-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "小包",
        "price": "¥66/季",
        "period": "季付",
        "bandwidth": "100GB/月",
        "highlight": "季付轻量"
      },
      {
        "name": "中包",
        "price": "¥126/季",
        "period": "季付",
        "bandwidth": "250GB/月",
        "highlight": "常用推荐"
      },
      {
        "name": "大包",
        "price": "¥156/季",
        "period": "季付",
        "bandwidth": "400GB/月",
        "highlight": "大流量畅享"
      }
    ],
    "features": [
      "6档丰富套餐覆盖从100GB到2500GB",
      "季付阶梯透明"
    ],
    "pros": [
      "流量梯度宽广",
      "节点覆盖国家丰富"
    ],
    "cons": [
      "无纯单月月付选购"
    ],
    "summary": "白月光提供季付起步的多阶梯大容量套餐，节点覆盖美加日韩等主流地区，适合稳定长期订阅。"
  },
  {
    "rank": 31,
    "name": "飞鸟机场",
    "slug": "feiniao",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "全专线IPLC // 0倍率不限速 // 15元起步",
    "affLink": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "coupon": "FN888",
    "couponDiscount": "专享折扣",
    "entryPrice": "¥15/月起",
    "minMonthlyPrice": 15,
    "lineType": "全专线IPLC无倍率",
    "protocols": [
      "Shadowsocks"
    ],
    "clientsSupported": [
      "全平台兼容客户端"
    ],
    "nodesCoverage": "亚太及欧美各主流节点",
    "speedtestImage": "/assets/speedtest/飞猫云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K流畅",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "青铜套餐",
        "price": "¥15/月",
        "period": "月付",
        "bandwidth": "100GB/月",
        "highlight": "入门首推"
      },
      {
        "name": "白银套餐",
        "price": "¥30/月",
        "period": "月付",
        "bandwidth": "200GB/月",
        "highlight": "主力中端"
      },
      {
        "name": "黄金套餐",
        "price": "¥75/月",
        "period": "月付",
        "bandwidth": "500GB/月",
        "highlight": "大带宽享受"
      }
    ],
    "features": [
      "全专线IPLC节点，不计算倍率套路",
      "全节点开放最高速率"
    ],
    "pros": [
      "诚实无倍率",
      "月付15元门槛适中"
    ],
    "cons": [
      "客服响应主要在常规工作时间"
    ],
    "summary": "飞鸟机场主打全专线IPLC无倍率消耗，套餐流量是多少就能实打实用多少，绝无虚标扣除。"
  },
  {
    "rank": 32,
    "name": "CyberGuard",
    "slug": "cyberguard",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "全球跨国枢纽 // 拥有不限时流量包 // 欧洲中东覆盖",
    "affLink": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "coupon": "CG88",
    "couponDiscount": "优惠折扣",
    "entryPrice": "¥15.8/月 (半年付¥95/150GB)",
    "minMonthlyPrice": 15.8,
    "lineType": "国际多线专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "clientsSupported": [
      "全平台支持"
    ],
    "nodesCoverage": "日本(488Mbps)、澳大利亚(279Mbps)、阿联酋(342Mbps)、德国、法国",
    "speedtestImage": "/assets/speedtest/U1S1-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K流畅",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "150G轻量套餐",
        "price": "¥95/半年",
        "period": "半年付",
        "bandwidth": "150GB/月",
        "highlight": "折合15.8元/月"
      },
      {
        "name": "350G标准套餐",
        "price": "¥32/月",
        "period": "月付",
        "bandwidth": "350GB/月",
        "highlight": "超大月流量"
      },
      {
        "name": "220G流量包",
        "price": "¥79",
        "period": "一次性",
        "bandwidth": "220GB不过期",
        "highlight": "不限时备用"
      }
    ],
    "features": [
      "日本实测峰值达488Mbps，阿联酋超340Mbps",
      "提供不限时不过期流量包"
    ],
    "pros": [
      "中东和欧洲冷门节点速度极高",
      "不限时流量包灵活"
    ],
    "cons": [
      "部分远距离节点延迟波动"
    ],
    "summary": "CyberGuard在国际多地区节点上表现抢眼，特别是日本、澳洲及阿联酋实测带宽均突破200-400Mbps，适合外贸出海人员。"
  },
  {
    "rank": 33,
    "name": "龙猫云",
    "slug": "longmaoyun",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "IPLC全专线 // 最高2000Mbps带宽 // 15元入门",
    "affLink": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "coupon": "LMY66",
    "couponDiscount": "专享折扣",
    "entryPrice": "¥15/月起",
    "minMonthlyPrice": 15,
    "lineType": "IPLC全专线",
    "protocols": [
      "Shadowsocks"
    ],
    "clientsSupported": [
      "全平台兼容"
    ],
    "nodesCoverage": "亚太核心节点集群",
    "speedtestImage": "/assets/speedtest/二猫云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K流畅",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "VIP1",
        "price": "¥15/月",
        "period": "月付",
        "bandwidth": "100GB/月",
        "highlight": "入门首选"
      },
      {
        "name": "VIP2",
        "price": "¥30/月",
        "period": "月付",
        "bandwidth": "200GB/月",
        "highlight": "主力中端"
      }
    ],
    "features": [
      "IPLC全专线架构，单节点最高2Gbps规格",
      "教程资料完备"
    ],
    "pros": [
      "专线稳定抗干扰",
      "价格亲民"
    ],
    "cons": [
      "高峰期特定节点有设备连接数限制"
    ],
    "summary": "龙猫云以Shadowsocks与IPLC专线为底座，15元月付即可享受专线品质，是性价比较高的长青品牌。"
  },
  {
    "rank": 34,
    "name": "肥猫云(FATCAT)",
    "slug": "fatcat",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "企业级IEPL/IPLC内网专线 // 96元年付包 // 抗干扰强",
    "affLink": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "coupon": "FAT888",
    "couponDiscount": "年付立减",
    "entryPrice": "¥8/月 (年付¥96/60GB起)",
    "minMonthlyPrice": 8,
    "lineType": "企业级IEPL/IPLC内网专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clientsSupported": [
      "全平台主流客户端"
    ],
    "nodesCoverage": "亚太及欧美核心",
    "speedtestImage": "/assets/speedtest/微风-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "年付加强版",
        "price": "¥96/年",
        "period": "年付",
        "bandwidth": "60GB/月",
        "highlight": "年付8元/月"
      },
      {
        "name": "标准套餐",
        "price": "¥40/月",
        "period": "月付",
        "bandwidth": "300GB/月",
        "highlight": "300GB大流量"
      }
    ],
    "features": [
      "企业级双专线接入",
      "年付低至8元每月"
    ],
    "pros": [
      "抗封锁能力优异",
      "大流量套餐充裕"
    ],
    "cons": [
      "月付套餐起步价格为40元"
    ],
    "summary": "肥猫云专注于企业级内网专线，年付加强版折合仅8元/月，兼具抗干扰与超高性价比。"
  },
  {
    "rank": 35,
    "name": "TNT Cloud",
    "slug": "tntcloud",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "原3A加速器 // IPLC内网专线 // 2000Mbps超大宽带",
    "affLink": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "coupon": "TNT666",
    "couponDiscount": "特惠减免券",
    "entryPrice": "¥10/月起 (季付¥30/60GB起)",
    "minMonthlyPrice": 10,
    "lineType": "IPLC内网专线集群",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "clientsSupported": [
      "全平台兼容客户端"
    ],
    "nodesCoverage": "亚太及海外电商核心区",
    "speedtestImage": "/assets/speedtest/极连云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速",
      "chatgpt": "电商专属",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "轻量包",
        "price": "¥30/季",
        "period": "季付",
        "bandwidth": "60GB/月",
        "highlight": "月折合10元"
      },
      {
        "name": "VIP1",
        "price": "¥20/月",
        "period": "月付",
        "bandwidth": "110GB/月",
        "highlight": "常用主力"
      }
    ],
    "features": [
      "曾用名3A加速器，历经多年网络迭代",
      "支持跨境电商与TikTok专享定制"
    ],
    "pros": [
      "电商直播低卡顿",
      "季付套餐极其平民"
    ],
    "cons": [
      "仅支持季付及以上轻量包"
    ],
    "summary": "TNT Cloud以成熟的IPLC内网专线和跨境电商、TikTok直播定制见长，对出海从业者支持完善。"
  },
  {
    "rank": 36,
    "name": "青云梯",
    "slug": "qingyunti",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "运营六年老品牌 // 企业级IPLC三网优化 // 80+节点覆盖",
    "affLink": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "coupon": "QYT888",
    "couponDiscount": "老牌专享折扣",
    "entryPrice": "¥8/月 (年付¥96/60GB起)",
    "minMonthlyPrice": 8,
    "lineType": "企业级IPLC三网直连",
    "protocols": [
      "Shadowsocks"
    ],
    "clientsSupported": [
      "全平台客户端"
    ],
    "nodesCoverage": "全球10+地区，80+节点深度布局",
    "speedtestImage": "/assets/speedtest/光年梯-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "全解锁",
      "disney": "全解锁",
      "youtube": "4K秒开",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "年付小包",
        "price": "¥96/年",
        "period": "年付",
        "bandwidth": "60GB/月",
        "highlight": "年付8元/月"
      },
      {
        "name": "VIP1",
        "price": "¥25/月",
        "period": "月付",
        "bandwidth": "150GB/月",
        "highlight": "主力中端"
      }
    ],
    "features": [
      "六年稳定运营资质，信誉坚如磐石",
      "全球覆盖80多个高防节点"
    ],
    "pros": [
      "经得起长周期考验",
      "节点数量多，负载分布均匀"
    ],
    "cons": [
      "高峰期工单排队稍长"
    ],
    "summary": "青云梯是运营超过六年的资深老牌专线机场，节点多达80余个，对于追求极致不折腾的用户是非常稳妥的选择。"
  },
  {
    "rank": 37,
    "name": "山水云",
    "slug": "shanshuiyun",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "6档套餐月付15元起 // 实测下行稳定超180Mbps",
    "affLink": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "coupon": "SSY888",
    "couponDiscount": "折扣优惠码",
    "entryPrice": "¥15/月",
    "minMonthlyPrice": 15,
    "lineType": "高速BGP专线中继",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "clientsSupported": [
      "全平台兼容"
    ],
    "nodesCoverage": "美国(180Mbps)、日本(160Mbps)、香港(152Mbps)、新加坡(142Mbps)",
    "speedtestImage": "/assets/speedtest/SOGO云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K流畅",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "100G/月-琴",
        "price": "¥15/月",
        "period": "月付",
        "bandwidth": "100GB/月",
        "highlight": "古风高性价"
      },
      {
        "name": "200G/月-棋",
        "price": "¥25/月",
        "period": "月付",
        "bandwidth": "200GB/月",
        "highlight": "主力常用"
      }
    ],
    "features": [
      "美日港新四地实测均突破150Mbps下行速率",
      "套餐命名富有文化韵味"
    ],
    "pros": [
      "实测性能真实透明",
      "月付15元起步轻松"
    ],
    "cons": [
      "欧洲小众节点较少"
    ],
    "summary": "山水云以扎实的四国骨干网测速表现和15元月付方案赢得用户青睐，影音和办公表现均衡。"
  },
  {
    "rank": 38,
    "name": "灵动云",
    "slug": "lingdongyun",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "2025新秀IEPL专线 // VLESS协议 // AI全解锁表现出色",
    "affLink": "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
    "coupon": "LDY888",
    "couponDiscount": "新秀优惠券",
    "entryPrice": "¥20/月 (100GB)",
    "minMonthlyPrice": 20,
    "lineType": "IEPL专线 + VLESS协议",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "clientsSupported": [
      "全平台支持",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box"
    ],
    "nodesCoverage": "香港、台湾、日本、新加坡、美国各机房",
    "speedtestImage": "/assets/speedtest/唯兔云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K流畅",
      "chatgpt": "全区解锁亮点",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "灵动·拂风",
        "price": "¥20/月",
        "period": "月付",
        "bandwidth": "100GB/月",
        "highlight": "入门首推"
      },
      {
        "name": "灵动·穿云",
        "price": "¥99/年",
        "period": "年付",
        "bandwidth": "70GB/月",
        "highlight": "年付8.25元/月"
      },
      {
        "name": "灵动·闲云",
        "price": "¥199",
        "period": "一次性",
        "bandwidth": "150GB不过期",
        "highlight": "单次不限时"
      }
    ],
    "features": [
      "IEPL+VLESS原生专线",
      "珠海联通9Gbps测速下主流AI全量解锁通过",
      "包含年付、周期与不限时完整谱系"
    ],
    "pros": [
      "OpenAI多地区测试全绿",
      "不限速不限设备"
    ],
    "cons": [
      "个别冷门节点识别位置偏欧需手动切换"
    ],
    "summary": "灵动云是2025年开业的高素质VLESS专线新品牌，实测AI解锁极为亮眼，套餐结构健全，非常适合前沿技术尝鲜者。"
  },
  {
    "rank": 39,
    "name": "浪网",
    "slug": "langwang",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "企业级IEPL专线定位 // 入门到商业多层级 // 定制线路支持",
    "affLink": "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
    "coupon": "WAVE888",
    "couponDiscount": "尊享特惠",
    "entryPrice": "¥30/月 (入门档)",
    "minMonthlyPrice": 30,
    "lineType": "IEPL企业级专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clientsSupported": [
      "全平台兼容客户端"
    ],
    "nodesCoverage": "核心跨境商业枢纽网络",
    "speedtestImage": "/assets/speedtest/宇宙云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K流畅",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "浪网 入门",
        "price": "¥30/月",
        "period": "月付",
        "bandwidth": "150GB/月",
        "highlight": "企业级试用"
      },
      {
        "name": "浪网 年付标准",
        "price": "¥119/年",
        "period": "年付",
        "bandwidth": "80GB/月",
        "highlight": "年付实惠包"
      },
      {
        "name": "浪网 高端",
        "price": "¥120/月",
        "period": "月付",
        "bandwidth": "800GB/月",
        "highlight": "商务大流量"
      }
    ],
    "features": [
      "纯IEPL专线定位，抗干扰与可用性优先",
      "支持超大流量定制商业专线"
    ],
    "pros": [
      "专线抗封锁",
      "支持大带宽定制"
    ],
    "cons": [
      "入门价格为30元/月"
    ],
    "summary": "浪网主打企业级IEPL专线，面向外贸企业与高吞吐需求客户，服务架构成熟稳重。"
  },
  {
    "rank": 40,
    "name": "EdgeNova",
    "slug": "edgenova",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "边缘高速直连 + IPLC // 多线路自动智能分配 // 8折优惠",
    "affLink": "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
    "coupon": "TH888",
    "couponDiscount": "新用户8折优惠",
    "entryPrice": "¥15/月 (限时月付72GB)",
    "minMonthlyPrice": 15,
    "lineType": "高速直连 + IPLC多线路调度",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "clientsSupported": [
      "全平台通用客户端"
    ],
    "nodesCoverage": "多国边缘节点自动化分布",
    "speedtestImage": "/assets/speedtest/速界-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K流畅",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "限时月付",
        "price": "¥15/月",
        "period": "月付",
        "bandwidth": "72GB/月",
        "highlight": "低门槛限时"
      },
      {
        "name": "极界·标准",
        "price": "¥25/月",
        "period": "月付",
        "bandwidth": "120GB/月",
        "highlight": "智能调度主力"
      },
      {
        "name": "限时年付",
        "price": "¥108/年",
        "period": "年付",
        "bandwidth": "45GB/月",
        "highlight": "年付小包"
      }
    ],
    "features": [
      "多线路自动智能分配，根据本地ISP路由最佳边缘",
      "新用户输入TH888即享8折"
    ],
    "pros": [
      "自动分配机制省心",
      "支持主流支付与USDT"
    ],
    "cons": [
      "小包月流量偏紧凑"
    ],
    "summary": "EdgeNova以多线路自动调度和限时15元优惠切入市场，适合喜欢省心自动分流的个人用户。"
  },
  {
    "rank": 41,
    "name": "萤火虫",
    "slug": "yinghuochong",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "IPLC+VLESS双核心 // 8年老团队运维 // 原生IP支持主流AI",
    "affLink": "https://vip02.fireflyaff.com/#/?code=jTp9wSgZ",
    "coupon": "firefly",
    "couponDiscount": "新用户8折 (最高64折)",
    "entryPrice": "¥8/月 (年付¥96/60GB起)",
    "minMonthlyPrice": 8,
    "lineType": "IPLC专线 + VLESS协议",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clientsSupported": [
      "全平台主流客户端"
    ],
    "nodesCoverage": "香港、台湾、日本、新加坡、欧美",
    "speedtestImage": "/assets/speedtest/飞猫云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "全解锁",
      "disney": "全解锁",
      "youtube": "4K极速",
      "chatgpt": "原生IP",
      "claude": "原生支持",
      "gemini": "原生支持"
    },
    "packages": [
      {
        "name": "Firefly年付版",
        "price": "¥96/年",
        "period": "年付",
        "bandwidth": "60GB/月",
        "highlight": "折合8元/月"
      },
      {
        "name": "Firefly Lite",
        "price": "¥25/月",
        "period": "月付",
        "bandwidth": "150GB/月",
        "highlight": "常规主力"
      },
      {
        "name": "Firefly不限时",
        "price": "¥100",
        "period": "一次性",
        "bandwidth": "100GB不过期",
        "highlight": "不限时备用"
      }
    ],
    "features": [
      "8年老团队运维，IPLC+VLESS原生架构",
      "提供原生IP，ChatGPT与Gemini全量支持",
      "不限速不限设备数量"
    ],
    "pros": [
      "8年经验底蕴深厚",
      "不限设备数量",
      "优惠力度大，长周期折算性价比高"
    ],
    "cons": [
      "支持支付宝与USDT，暂无微信直接支付通道"
    ],
    "summary": "萤火虫（Firefly同源体系）依托8年专业团队运维经验，以IPLC专线和原生IP打造无忧出海体验，原生IP解锁AI能力极佳。"
  },
  {
    "rank": 42,
    "name": "sslar",
    "slug": "sslar",
    "isTop10": false,
    "isFeatured": false,
    "tagline": "企业级IEPL+多线BGP // 自研Win/Mac/安卓端 // 远程桌面协助",
    "affLink": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "ko3eTt0w",
    "couponDiscount": "专属8折码",
    "entryPrice": "¥17/月 (100GB)",
    "minMonthlyPrice": 17,
    "lineType": "企业级IEPL + 多线BGP",
    "protocols": [
      "Shadowsocks",
      "VLESS自适应"
    ],
    "clientsSupported": [
      "自研全平台客户端(Win/mac/安卓)",
      "第三方订阅导入"
    ],
    "nodesCoverage": "Eons/Akari/DigitalOcean 优质机房集群",
    "speedtestImage": "/assets/speedtest/光速云-节点测速实测.png",
    "streamingUnlock": {
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K流畅",
      "chatgpt": "支持",
      "claude": "支持",
      "gemini": "支持"
    },
    "packages": [
      {
        "name": "Basic",
        "price": "¥17/月",
        "period": "月付",
        "bandwidth": "100GB/月",
        "highlight": "入门首推"
      },
      {
        "name": "Standard",
        "price": "¥28/月",
        "period": "月付",
        "bandwidth": "200GB/月",
        "highlight": "高频办公"
      },
      {
        "name": "Premium",
        "price": "¥36/月",
        "period": "月付",
        "bandwidth": "300GB/月",
        "highlight": "商务重度"
      }
    ],
    "features": [
      "企业级IEPL+多线BGP，优质机房直接托管",
      "自研多平台客户端支持一键启动",
      "提供少有的远程桌面技术协助服务"
    ],
    "pros": [
      "支持远程桌面协助，新手零门槛",
      "企业级专线与多协议自适应",
      "月付17元性价比高"
    ],
    "cons": [
      "现有资料暂未支持USDT支付"
    ],
    "summary": "SSLAR面向商业与家庭用户，在企业级IEPL专线之上提供自研客户端与远程桌面协助，服务细致到位，是省心用户的可靠伴侣。"
  }
];

export const TOP10_AIRPORTS = AIRPORTS_DATA.filter(a => a.isTop10).sort((a, b) => a.rank - b.rank);
export const FEATURED_AIRPORT = AIRPORTS_DATA.find(a => a.isFeatured) || AIRPORTS_DATA[0];

export function getAirportBySlug(slug: string): AirportBrand | undefined {
  return AIRPORTS_DATA.find(a => a.slug === slug || a.name === slug);
}
