/**
 * 📱 全平台第三方代理客户端数据知识库 (Proxy Clients Database)
 * 来源：第三方代理客户端.txt
 */

export interface ProxyClient {
  name: string;
  platform: "Windows" | "Android" | "iOS" | "macOS" | "Linux" | "Router";
  category: string;
  kernel: string;
  tags: string[];
  features: string;
  pros: string[];
  cons?: string[];
  downloadUrl: string;
  isRecommended: boolean;
  tutorialSnippet: string;
}

export const PROXY_CLIENTS_DATA: ProxyClient[] = [
  // Windows
  {
    name: "Clash Verge Rev",
    platform: "Windows",
    category: "GUI 规则分流",
    kernel: "Mihomo (Meta) 内核",
    tags: ["新手友好", "TUN模式", "首选推荐", "持续维护"],
    features: "现代化颜值界面、内置最新 Mihomo 内核、支持一键全局 TUN 虚拟网卡模式、强大的分流覆写与订阅管理。",
    pros: ["界面现代化美观", "原生支持 TUN 虚拟网卡，游戏与全应用分流无死角", "社区活跃更新勤快"],
    downloadUrl: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
    isRecommended: true,
    tutorialSnippet: "1. 下载安装包运行；2. 进入「订阅」页面粘贴机场提供的订阅链接；3. 点击「导入并更新」；4. 在「代理」选项卡选择节点，开启系统代理或 TUN 模式即可连通。"
  },
  {
    name: "v2rayN",
    platform: "Windows",
    category: "多协议瑞士军刀",
    kernel: "Xray / sing-box 双核心",
    tags: ["老牌经典", "多协议全能", "免安装绿色版"],
    features: "全协议覆盖（VLESS、VMess、Trojan、Shadowsocks、Hysteria2），支持自定义路由规则与高级路由参数调整。",
    pros: ["协议支持最全面", "内存占用极低", "故障率低排查方便"],
    downloadUrl: "https://github.com/2dust/v2rayN/releases",
    isRecommended: true,
    tutorialSnippet: "1. 解压进入目录运行 v2rayN.exe；2. 点击顶部「订阅分组」->「订阅分组设置」粘贴机场链接；3. 点击「更新订阅」；4. 底部右键托盘图标选择「自动配置系统代理」即可。"
  },
  {
    name: "FlClash",
    platform: "Windows",
    category: "跨平台多端",
    kernel: "Mihomo 内核",
    tags: ["极简设计", "Flutter开发", "跨平台一致"],
    features: "基于 Flutter 构建的现代化代理客户端，UI 极度统一优雅，资源消耗极轻。",
    pros: ["多端操作逻辑一致", "轻量极速"],
    downloadUrl: "https://github.com/chen08209/FlClash/releases",
    isRecommended: false,
    tutorialSnippet: "1. 启动 FlClash；2. 点击配置，添加新订阅；3. 保存后切换到仪表盘选择节点连接。"
  },
  {
    name: "Hiddify",
    platform: "Windows",
    category: "多协议全自动",
    kernel: "sing-box 内核",
    tags: ["多协议", "全自动分流", "开箱即用"],
    features: "基于 sing-box 打造的新一代多协议代理工具，支持深度协议伪装与全自动测速优选。",
    pros: ["开箱即用无门槛", "自动选择低延迟节点"],
    downloadUrl: "https://github.com/hiddify/hiddify-next/releases",
    isRecommended: true,
    tutorialSnippet: "1. 打开 Hiddify 点击加号；2. 粘贴机场链接保存；3. 点击中央大圆环按钮即可一键连通。"
  },

  // Android
  {
    name: "v2rayNG",
    platform: "Android",
    category: "安卓首推",
    kernel: "Xray 核心",
    tags: ["安卓必备", "稳定省电", "分应用代理"],
    features: "安卓平台使用人数最多的客户端之一，支持分应用代理、绕过大陆局域网以及精准的节点延迟测试。",
    pros: ["省电抗杀后台能力强", "配置导入极快", "支持分应用代理排除微信钉钉"],
    downloadUrl: "https://github.com/2dust/v2rayNG/releases",
    isRecommended: true,
    tutorialSnippet: "1. 打开应用点击左上角侧边栏 ->「订阅分组设置」；2. 点右上角「+」粘贴订阅 URL；3. 返回主界面点击右上角三点 ->「更新订阅」；4. 选好节点点击右下角 V 图标连接。"
  },
  {
    name: "FlClash for Android",
    platform: "Android",
    category: "美学规则代理",
    kernel: "Mihomo 核心",
    tags: ["Material You", "界面优雅", "平板适配好"],
    features: "颜值极高的安卓客户端，完美适配动态取色与大屏平板交互，支持复杂的规则策略组切换。",
    pros: ["颜值出众", "策略组节点分类清晰"],
    downloadUrl: "https://github.com/chen08209/FlClash/releases",
    isRecommended: true,
    tutorialSnippet: "1. 导入订阅链接；2. 在策略组中点击测速并挑选绿色延迟节点；3. 允许系统 VPN 权限即可启动。"
  },
  {
    name: "Karing",
    platform: "Android",
    category: "sing-box系新秀",
    kernel: "sing-box 内核",
    tags: ["简单易用", "全协议", "跨设备同步"],
    features: "设计简洁专为新手定制的跨平台代理软件，订阅格式解析容错率极高。",
    pros: ["极少报错", "对复杂订阅兼容性强"],
    downloadUrl: "https://github.com/KaringX/karing/releases",
    isRecommended: false,
    tutorialSnippet: "1. 添加配置源粘贴订阅；2. 点击刷新；3. 点击启动开关。"
  },

  // iOS / iPad
  {
    name: "Shadowrocket (小火箭)",
    platform: "iOS",
    category: "iOS 首选国民神器",
    kernel: "自研多协议引擎",
    tags: ["iOS必备", "功能全面", "测速精准", "美区AppStore"],
    features: "iOS平台公认最好用的代理工具。支持扫描二维码导入、订阅自动更新、分流配置规则、HTTPS解密重写及详细流量统计。",
    pros: ["生态完备教程极多", "支持各种节点协议", "小巧省电"],
    downloadUrl: "https://apps.apple.com/us/app/shadowrocket/id932747118",
    isRecommended: true,
    tutorialSnippet: "1. 登录非国区 Apple ID 前往 App Store 下载；2. 打开点击右上角「+」，类型选择「Subscribe」粘贴链接；3. 下拉刷新出节点后选择低延迟节点；4. 打开第一行连接开关。"
  },
  {
    name: "Stash",
    platform: "iOS",
    category: "Clash for iOS",
    kernel: "Mihomo / Clash 规范",
    tags: ["Clash规则", "策略组丰富", "高端体验"],
    features: "iOS 平台上最完整的 Clash 规则兼容工具，提供优雅的策略组切换界面与本地 DNS 优化引擎。",
    pros: ["完美继承桌面端 Clash 配置习惯", "界面极其精致"],
    downloadUrl: "https://apps.apple.com/us/app/stash-rule-based-proxy/id1596063349",
    isRecommended: true,
    tutorialSnippet: "1. App Store 下载；2. 首页选择「从 URL 导入配置」；3. 粘贴订阅后在首页点击启动连接。"
  },
  {
    name: "Quantumult X (圈X)",
    platform: "iOS",
    category: "硬核极客神器",
    kernel: "深度自研引擎",
    tags: ["重写脚本", "分流专家", "极客定制"],
    features: "面向高阶用户的网络分析与分流工具，支持 JavaScript 脚本、BoxJS 生态与自定义策略分流。",
    pros: ["自动化脚本能力极强", "性能无敌"],
    downloadUrl: "https://apps.apple.com/us/app/quantumult-x/id1453926894",
    isRecommended: false,
    tutorialSnippet: "1. 底部右下角风车图标 -> 引用 (资源) -> 添加资源标签与订阅链接；2. 刷新后长按右下角小圆球启动。"
  },

  // macOS
  {
    name: "Clash Verge Rev for Mac",
    platform: "macOS",
    category: "Mac首选",
    kernel: "Mihomo 内核",
    tags: ["Apple Silicon", "TUN模式", "菜单栏控制"],
    features: "完美支持 M1/M2/M3/M4 系列 Apple 芯片与 Intel Mac，常驻顶部菜单栏，一键开启 TUN 增强模式与全局分流。",
    pros: ["M芯片能效比极高", "开机自启无感运行", "界面原生感强"],
    downloadUrl: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
    isRecommended: true,
    tutorialSnippet: "1. 拖入 Applications；2. 订阅管理导入机场链接；3. 开启系统代理或 TUN 模式即可畅游海外。"
  },
  {
    name: "Surge for Mac",
    platform: "macOS",
    category: "高端网络调试开发",
    kernel: "Surge 专有内核",
    tags: ["开发者首选", "抓包调试", "极致性能"],
    features: "Mac平台最专业、性能最顶级的网络分流与调试工具，支持增强模式、网关接管与脚本执行。",
    pros: ["性能卓越极其稳定", "开发调试神器"],
    downloadUrl: "https://nssurge.com/mac",
    isRecommended: false,
    tutorialSnippet: "适合有专业预算与抓包需求的开发者使用，导入机场 Surge 格式订阅即可接管全局网络。"
  }
];

export const PLATFORMS = ["Windows", "Android", "iOS", "macOS"] as const;
