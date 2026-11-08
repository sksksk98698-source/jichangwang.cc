export interface CollabItem {
  id: string;
  partner: string;
  partnerType: "专线服务商" | "核心枢纽" | "测速实验室" | "出海生态";
  title: string;
  role: string;
  period: string;
  description: string;
  contributions: string[];
  techStack: string[];
  link?: string;
  affLink?: string;
  coupon?: string;
  status: "ACTIVE" | "COMPLETED" | "ONGOING";
  asciiLogo?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level: number; experience: string; tag: string }[];
}

export const PORTFOLIO_DATA = {
  developer: {
    name: "机场网 (JichangWang.cc)",
    handle: "jichangwang",
    title: "全球专线网络实测中心 // 42家机场品牌测评与选购智库",
    alias: "radar@jichangwang.cc",
    email: "contact@jichangwang.cc",
    github: "https://jichangwang.cc",
    linkedin: "https://jichangwang.cc",
    twitter: "https://x.com",
    location: "香港 / 东京 / 新加坡 / 洛杉矶 节点监测网 // UTC+8",
    status: " 42家机场全链路测速与AI解锁实时监测中",
    CLI_EMOJI: "⚡",
    palette: [
      "#0a120b",
      "#ef4444",
      "#00ff66",
      "#ffb000",
      "#00f0ff",
      "#bd93f9",
      "#ff79c6",
      "#f8fafc",
    ],
    bio: "机场网（JichangWang.cc）专注全球专线网络架构实测，深度评测全网 42 家主流机场。结合晚高峰带宽实测图、真实丢包率、流媒体 4K 与 ChatGPT/Claude/Gemini AI 全量解锁报告，为开发者、出海电商和跨境团队提供 100% 真实透明的选购决策支持。",
    quote:
      '"测速不看闲时跑分，专线唯有晚高峰见真章。" —— 机场网实测原则',
    asciiBanner: `
     _ ___ ____ _   _    _    _   _  ______        ___    _   _  ____ 
    | |_ _/ ___| | | |  / \\  | \\ | |/ ___\\ \\      / / \\  | \\ | |/ ___|
 _  | || | |   | |_| | / _ \\ |  \\| | |  _ \\ \\ /\\ / / _ \\ |  \\| | |  _ 
| |_| || | |___|  _  |/ ___ \\| |\\  | |_| | \\ V  V / ___ \\| |\\  | |_| |
 \\___/|___\\____|_| |_/_/   \\_\\_| \\_|\\____|  \\_/\\_/_/   \\_\\_| \\_|\\____|
 ─────────────────────────────────────────────────────────────────────
  [ 机场网 · JICHANGWANG.CC ]  全球 42 家机场品牌评测与晚高峰测速智库
`,
    specs: {
      Platform: "JichangWang GEO Radar v6.0",
      Monitored: "42 家主流机场品牌 (IEPL / IPLC / BGP)",
      Top_Pick: "光速云 (双专线 / 优惠码 AMM / 8元起)",
      Latency_Avg: "香港 22ms / 日本 57ms / 新加坡 46ms",
      Nodes_Tested: "全球 600+ 边缘加速节点实测",
      Speedtest_Bandwidth: "10Gbps 对称骨干测速探针",
      Unlock_Matrix: "ChatGPT, Claude, Gemini, Netflix, TikTok 4K",
      Updated: "2026-11 季度权威更新",
    },
  },

  skills: [
    {
      category: "专线线路架构评测",
      icon: "⚡",
      skills: [
        { name: "IEPL 企业内网专线", level: 98, experience: "企业级", tag: "最高优先级" },
        { name: "IPLC 国际专线", level: 95, experience: "敏感期稳健", tag: "抗封锁" },
        { name: "BGP 智能多线调度", level: 92, experience: "三网均衡", tag: "智能分流" },
        { name: "全网晚高峰防拥塞", level: 96, experience: "实测验证", tag: "零丢包" },
      ],
    },
    {
      category: "加密协议与传输支持",
      icon: "🛡️",
      skills: [
        { name: "VLESS + Reality 极速协议", level: 96, experience: "次世代", tag: "主流首选" },
        { name: "Shadowsocks-2022 规范", level: 92, experience: "抗干扰", tag: "成熟协议" },
        { name: "Trojan 伪装协议", level: 90, experience: "TLS 加密", tag: "稳定过墙" },
        { name: "Hysteria 2 / TUIC UDP优化", level: 88, experience: "弱网抗丢包", tag: "大带宽" },
      ],
    },
    {
      category: "出海场景与解锁支持",
      icon: "🌐",
      skills: [
        { name: "ChatGPT / Claude / Gemini 原生IP", level: 98, experience: "生产力", tag: "全量解锁" },
        { name: "Netflix / Disney+ / YouTube 4K", level: 96, experience: "影音追剧", tag: "8K秒开" },
        { name: "TikTok 跨境电商 / 直播矩阵", level: 94, experience: "出海专用", tag: "原生家宽" },
        { name: "Steam / PS5 外服联机加速", level: 90, experience: "低延迟", tag: "全绿连线" },
      ],
    },
    {
      category: "全平台代理客户端生态",
      icon: "📱",
      skills: [
        { name: "Windows: Clash Verge Rev / v2rayN", level: 98, experience: "全功能", tag: "TUN模式" },
        { name: "macOS: Clash Verge / Surge for Mac", level: 96, experience: "M芯片原生", tag: "系统级" },
        { name: "iOS: Shadowrocket / Stash / 圈X", level: 95, experience: "移动神器", tag: "全协议" },
        { name: "Android: v2rayNG / FlClash / Karing", level: 94, experience: "分应用代理", tag: "省电" },
      ],
    },
  ] as SkillCategory[],

  collabs: [
    {
      id: "collab-guangsu",
      partner: "光速云 (GuangSu Cloud)",
      partnerType: "专线服务商",
      title: "【主推第一】双专线架构 · 晚高峰实测 529Mbps",
      role: "2020年老牌口碑 · 镇站之宝首选",
      period: "2020 - 持续稳定在线",
      status: "ACTIVE",
      description:
        "光速云采用 IEPL + 企业级内网专线双冗余设计，VLESS 极速协议，晚高峰香港延迟低至 22ms。特别设立致敬斯诺克 147 永久套餐（247GB 不过期），年付轻量折合仅 8 元/月，是高性价比与极致稳定性的完美结合。",
      contributions: [
        "实测香港 529Mbps / 新加坡 387Mbps / 日本 135Mbps 满带宽下行",
        "ChatGPT、Claude 原生 IP 节点支持，Netflix / Disney+ 全区解锁",
        "支持 Windows / Mac / Android 自研客户端一键启动，免去复杂配置",
      ],
      techStack: ["IEPL 双专线", "VLESS", "自研客户端", "Clash", "Shadowrocket"],
      link: "/brands/guangsu",
      affLink: "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
      coupon: "AMM",
      asciiLogo: `+---------------------------------------+
|  🏆 机场网 TOP 1 主推：光速云         |
|  线路：IEPL + 企业内网专线 | 优惠码: AMM |
|  价格：年付折合 ¥8/月 | 永久套餐: ¥147  |
+---------------------------------------+`,
    },
    {
      id: "collab-muguang",
      partner: "暮光加速 (MuGuang)",
      partnerType: "专线服务商",
      title: "【TOP 2】BGP 智能调度 · 专线级出口 · 7×24 真人运维",
      role: "2023年黑马品质专线",
      period: "2023 - 持续稳定在线",
      status: "ACTIVE",
      description:
        "暮光加速主打 BGP 智能路由容灾调度，专线级低延迟出口，套餐跨度从 120GB 到 1500GB 充裕可选，覆盖主流五大操作系统，支持真人在线技术支持。",
      contributions: [
        "实测 BGP 智能多线动态避拥堵，全天抖动小于 4ms",
        "官方提供 7×24 小时真人客服，售后排障响应快速",
        "全平台客户端支持，流媒体与 AI 工具全解锁",
      ],
      techStack: ["BGP 智能调度", "专线出口", "全平台", "7x24运维"],
      link: "/brands/muguang",
      affLink: "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
      coupon: "muguang5555",
      asciiLogo: `+---------------------------------------+
|  🥈 机场网 TOP 2：暮光加速 (MuGuang)  |
|  特色：BGP 智能调度专线 | 优惠: muguang5555 |
|  规格：¥20/月 (120GB) | 7x24 真人客服  |
+---------------------------------------+`,
    },
    {
      id: "collab-feimao",
      partner: "飞猫云 (FlyCat)",
      partnerType: "专线服务商",
      title: "【TOP 3】IPLC 纯专线 · 7 元入门极低门槛 · 0% 丢包",
      role: "轻量试错与备用首选",
      period: "2022 - 持续稳定在线",
      status: "ACTIVE",
      description:
        "飞猫云全链路采用 IPLC 内网专线，实测香港节点下载突破 86.5 MB/s，丢包率 0%。提供 7 元超低入门尝鲜档，并有 200GB 不限时永久不过期流量包备用。",
      contributions: [
        "实测香港 IEPL 延迟 45ms，晚高峰满带宽无掉线",
        "网格化测试：ChatGPT 原生 IP 绿色直通，Claude 稳定可用",
        "控制台支持免翻墙直达访问，解决订阅断联痛点",
      ],
      techStack: ["IPLC 内网专线", "7元入门", "不限时套餐", "免翻墙官网"],
      link: "/brands/feimao",
      affLink: "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
      coupon: "flycat888",
      asciiLogo: `+---------------------------------------+
|  🥉 机场网 TOP 3：飞猫云 (FlyCat)    |
|  特色：IPLC 纯专线 | 7 元尝鲜 | 优惠: flycat888 |
|  实测：平均延迟 94ms | 0% 丢包率       |
+---------------------------------------+`,
    },
    {
      id: "collab-weifeng",
      partner: "微风网络 (BreezeNet)",
      partnerType: "专线服务商",
      title: "【TOP 4】全专线中继 · 7 元档高性价比 · 三网优化",
      role: "大众平民专线标杆",
      period: "2022 - 持续稳定在线",
      status: "ACTIVE",
      description:
        "微风网络拥有广泛的用户基数，专线中继节点覆盖亚太和欧美主力机房，套餐价格亲民，流媒体解锁稳定，适合学生与轻度用户。",
      contributions: [
        "全节点不限速，亚太核心机房低延迟连通",
        "与行业多家骨干网络深度互联，抗风险容灾能力强",
      ],
      techStack: ["全专线中继", "三网优化", "平价套餐"],
      link: "/brands/weifeng",
      affLink: "https://edp01.breezenetaff.com/#/?code=t3huofyI",
      coupon: "flat888",
      asciiLogo: `+---------------------------------------+
|  🌟 机场网 TOP 4：微风网络 (BreezeNet) |
|  特色：全专线中继架构 | 优惠码: flat888 |
|  价格：¥7/月 (入门档) | 4K 流媒体流畅 |
+---------------------------------------+`,
    },
  ] as CollabItem[],

  commands: [
    {
      name: "help",
      desc: "列出终端全部可用虚拟指令集",
      usage: "help",
    },
    {
      name: "top10",
      desc: "展示机场网权威评测前十名专线机场天梯榜",
      usage: "top10",
    },
    {
      name: "guangsu",
      desc: "查看第一主推【光速云】详细配置、专属优惠码与测速指标",
      usage: "guangsu [或 cat 光速云.txt]",
    },
    {
      name: "airports",
      desc: "查看全部 42 家机场品牌库完整清单与价格汇总",
      usage: "airports [或 jichang, brands]",
    },
    {
      name: "speedtest",
      desc: "调取 17 家实测测速大图与晚高峰下行带宽雷达",
      usage: "speedtest [或 speed, 测速]",
    },
    {
      name: "clients",
      desc: "查看 Windows/Mac/iOS/安卓 全平台代理客户端下载大全与配置教程",
      usage: "clients [或 client, 客户端]",
    },
    {
      name: "geo",
      desc: "查看 ChatGPT/Claude/Netflix/TikTok 跨国出海网络解锁与合规指引",
      usage: "geo [或 unlock, 出海]",
    },
    {
      name: "about",
      desc: "查看机场网（JichangWang.cc）实测原则与技术标准",
      usage: "about [或 cat bio.txt]",
    },
    {
      name: "skills",
      desc: "展示专线架构、加密协议、流媒体解锁指标仪表盘",
      usage: "skills [或 cat skills.sh]",
    },
    {
      name: "neofetch",
      desc: "打印终端复古 ASCII 徽标与节点监控探针参数",
      usage: "neofetch",
    },
    {
      name: "theme",
      desc: "切换 CRT 复古终端主题配色 (green, amber, cyan, dracula, mono)",
      usage: "theme <green|amber|cyan|dracula|mono>",
    },
    {
      name: "radio",
      desc: "播放极客 Lo-Fi / 8-Bit 芯片合成音乐电台",
      usage: "radio [play|pause|next|vol <n>]",
    },
    {
      name: "pong",
      desc: "启动 1972 年复古 Pong 弹球街机小游戏",
      usage: "pong [或 ./pong.sh]",
    },
    {
      name: "snake",
      desc: "启动经典复古贪吃蛇街机小游戏",
      usage: "snake [或 ./snake.sh]",
    },
    {
      name: "matrix",
      desc: "切换黑客帝国数字雨 CRT 动态流光特效",
      usage: "matrix",
    },
    { name: "crt", desc: "开启/关闭复古 CRT 扫描线与显像管边缘畸变", usage: "crt" },
    { name: "sfx", desc: "开启/关闭键盘按键机械音效与终端蜂鸣", usage: "sfx" },
    { name: "clear", desc: "清空当前终端屏幕缓冲区", usage: "clear [或 cls]" },
    { name: "gui", desc: "切换为图形化现代终端仪表盘模式", usage: "gui" },
    { name: "cli", desc: "切换为纯文本交互式命令行终端模式", usage: "cli" },
  ],
};
