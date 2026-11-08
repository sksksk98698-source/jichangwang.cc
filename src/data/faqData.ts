/**
 * 机场 FAQ 专题知识库数据 (Airport FAQ Database)
 * 路由：/faq -> /faq/[category] -> /faq/[category]/[slug]
 */

export interface FAQArticle {
  slug: string;
  category: string;
  question: string;
  shortAnswer: string;
  summary: string;
  keywords: string[];
  datePublished: string;
  dateModified: string;
  readTime: string;
  content: string;
}

export interface FAQCategory {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: "protocols",
    name: "网络协议与线路原理",
    slug: "protocols",
    tagline: "IEPL、IPLC、BGP 与传输协议底层深度释疑",
    description: "从物理链路层与密码学特征出发，解答关于专线机房、倍率计算与协议抗审查的核心疑问。",
    icon: "🔬"
  },
  {
    id: "troubleshooting",
    name: "客户端排障与网络报错",
    slug: "troubleshooting",
    tagline: "解决节点超时、系统断网与端口冲突疑难杂症",
    description: "提供立竿见影的故障诊断方案，解决关掉代理无法上网、节点全部超时红字等典型报错。",
    icon: "🛠️"
  },
  {
    id: "streaming-ai",
    name: "流媒体与 AI 大模型风控",
    slug: "streaming-ai",
    tagline: "ChatGPT 报错 1020、Claude 封号与 Netflix 伪解锁全解",
    description: "聚焦 OpenAI、Anthropic 以及 Netflix、Disney+ 的反欺诈检测机制，指导如何使用原生 IP 完美避坑。",
    icon: "🤖"
  }
];

export const FAQ_ARTICLES: FAQArticle[] = [
  {
    slug: "iepl-vs-iplc-difference",
    category: "protocols",
    question: "IEPL 专线与 IPLC 专线到底有什么区别？外服游戏与 4K 视频应该怎么选？",
    shortAnswer: "IEPL 是以太网二层内网，弹性带宽大且性价比高；IPLC 是传统私有硬租用电路，路由跳数最少，延迟锁定物理光速极限。两者晚高峰均完全绕开 GFW 审查路由，丢包率均趋近于 0.00%。",
    summary: "全面解剖 IEPL（以太网专线）与 IPLC（国际私有专线）在传输介质、物理时延、带宽成本与抗干扰能力上的异同，给出不同业务场景下的精准选型建议。",
    keywords: ["IEPL和IPLC区别", "IEPL专线是什么", "IPLC专线是什么", "游戏专线推荐", "专线机场对比"],
    datePublished: "2026-02-02",
    dateModified: "2026-03-01",
    readTime: "7 分钟",
    content: `
### 一、核心定义：物理层面的通道差异

在讨论机场专线时，用户最常听到的就是 IEPL 和 IPLC。两者的本质区别在于**物理封装层级与网络拓扑结构**：

1. **IEPL（International Ethernet Private Line 国际以太网私网专线）：**
   - **技术本质：** 运营商在二层（MAC 数据链路层）为客户划分的以太网专用虚电路（Virtual Circuit）。
   - **网络路径：** 数据在进入国内机房后，直接被封装进二层光纤网络，全程走运营商的物理内网过境，**完全不经过公网骨干路由器与防火墙审查节点**。
   - **优势：** 弹性带宽充沛，单端口可扩展至 2.5Gbps~10Gbps，单位成本相对合理，抖动极低。

2. **IPLC（International Private Leased Circuit 国际私有租用线路）：**
   - **技术本质：** 传统的点对点物理硬专线（类似于在两地机房之间直接拉了一条专属光纤电路）。
   - **网络路径：** 物理端到端直通，中间没有任何交换和路由跳转。
   - **优势：** 物理距离最短，延迟绝对锁定光速极限（如深港 IPLC 延迟稳定在 5ms 物理极限），是顶级跨国银行与高频量化交易的首选。缺点是租金极其昂贵。

### 二、晚高峰性能与实际体验对比

在实际使用中，两者的体验差异主要取决于您的核心诉求：
- **对于日常 4K/8K 蓝光流媒体与 AI 大模型交互：** IEPL 与 IPLC 没有任何肉眼可感知的差别。光速云配备的 IEPL 企业内网专线由于具备更高的并发吞吐能力，在加载高码率 8K 视频时的爆发力甚至优于传统小带宽 IPLC；
- **对于极端外服 FPS 电竞玩家（Apex / CS2 / COD）：** 如果您对 5ms 的延迟差异极度敏感，选择光速云极速版或暮光加速的 IPLC 节点能获得物理层面的最低延迟。
    `
  },
  {
    slug: "vless-reality-vs-trojan",
    category: "protocols",
    question: "VLESS Reality 与 Trojan 协议谁更能抵抗防火墙的主动探测？",
    shortAnswer: "VLESS Reality 凭借借用真实合规大厂证书与 SNI 特征，在抗主动探针嗅探能力上达到行业天花板；Trojan 则是将数据包装为标准 HTTPS，移动端兼容性最佳。",
    summary: "从网络探针探测机制深入解析 VLESS Reality 为何能彻底消灭自建证书指纹，以及 Trojan 协议在各大移动端生态中的兼容性优势。",
    keywords: ["VLESS Reality原理", "Trojan和VLESS对比", "防封锁协议推荐", "Xray Reality配置", "科学上网协议比较"],
    datePublished: "2026-02-09",
    dateModified: "2026-03-01",
    readTime: "8 分钟",
    content: `
### 一、防火墙主动探测的技术机制

防火墙在识别代理流量时，除了被动分析流量统计特征（如数据包大小、发送频率），最致命的手段是**“主动探针（Active Probing）”**：
- 当检测到某个境外 IP 正在接收大量加密数据流时，探针会伪装成普通客户端向该服务器的指定端口发送握手请求；
- 如果服务器返回了一个自签名的、或者与域名不匹配的 TLS 证书，防火墙会在数秒内判定其为非法代理，立即下发 TCP RST 或将 IP 加入黑洞路由。

### 二、VLESS Reality 是如何实现“降维打击”的？

传统的 Trojan 协议要求运营者自建域名并申请正规的 Let's Encrypt 证书。虽然能够通过基础握手，但探针可以通过抓取该域名的证书透明度日志（CT Log）进行交叉比对。

而 **VLESS Reality** 实现了革命性的机制突破：
1. **不需要自建域名与申请证书：** 它直接借用外部真实合规大厂（如 Apple、Microsoft、Cloudflare、Yahoo）的真实服务器作为借用靶标；
2. **完美伪装握手过程：** 当探针向 Reality 端口发送未携带私钥认证的普通探测包时，Reality 服务端会原封不动地将探针的数据包透明转发给真实的 Apple/Microsoft 服务器，探针拿到的是 Apple 官方的真实签名证书，从而彻底认为该端口是一个普通的合规 Web 资源，有效终结了主动探测。
    `
  },
  {
    slug: "proxy-turned-off-no-internet",
    category: "troubleshooting",
    question: "为什么关掉代理软件后电脑突然无法上网，但手机连 Wi-Fi 正常？",
    shortAnswer: "因为软件非正常退出导致 Windows 系统的全局代理开关未被释放，系统仍在将请求发送到已经关闭的本地端口。在设置中关闭手动代理或运行一行注册表重置命令即可秒级修复。",
    summary: "手把手指导如何解决 Windows 平台关掉 Clash 或 V2Ray 后网页提示‘无法访问此网站’的经典故障，附带一键修复命令。",
    keywords: ["关掉代理打不开网页", "Clash关了没网", "Windows代理未释放", "代理服务器没有响应", "系统代理修复命令"],
    datePublished: "2026-02-16",
    dateModified: "2026-03-01",
    readTime: "6 分钟",
    content: `
### 一、故障发生的根本原因剖析

绝大多数 Windows 代理客户端在启动“系统代理（System Proxy）”时，会在注册表 \`HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\` 中写入两项配置：
- \`ProxyEnable = 1\`（开启系统代理）
- \`ProxyServer = 127.0.0.1:7897\`（所有流量发给本地 7897 端口）

当您在任务栏中直接退出软件，或者电脑突然断电关机时，软件来不及执行“清理退出钩子”，导致注册表里的代理开关依然是“开启状态”，但本地代理核心已经停止运行。任何浏览器打开网页时，向本地 127.0.0.1 发送请求均被直接拒绝，从而报出“代理服务器没有响应”或“ERR_PROXY_CONNECTION_FAILED”。

### 二、极速修复两步法

#### 方法 1：图形界面两步关闭
1. 按下快捷键 \`Win + I\` 打开 Windows 设置；
2. 依次点击“网络和 Internet” -> “代理”；
3. 在“手动设置代理”选项下，将**“使用代理服务器”**的开关切换为**“关 (Off)”**，网页即可瞬间恢复正常。

#### 方法 2：CMD 命令行一秒恢复
按下 \`Win + R\`，输入 \`cmd\` 回车，粘贴以下命令后回车执行：
\`\`\`cmd
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings" /v ProxyEnable /t REG_DWORD /d 0 /f
\`\`\`
    `
  },
  {
    slug: "chatgpt-access-denied-1020",
    category: "streaming-ai",
    question: "访问 ChatGPT 频繁出现 Access Denied 报错 1020 是为什么？如何彻底解决？",
    shortAnswer: "因为当前节点出口 IP 属于廉价机房数据中心（IDC），且该 IP 曾有大量用户并发访问触发了 Cloudflare 企业级反爬虫质询。切换到光速云提供的原生住宅 ISP 出口节点即可 100% 豁免拦截。",
    summary: "深度分析 OpenAI 针对代理流量的安全风控模型，详解 Cloudflare WAF 质询触发机制，并给出通过住宅原生 IP 彻底根治 1020 报错的具体方法。",
    keywords: ["ChatGPT 1020报错", "ChatGPT Access Denied", "OpenAI封号原因", "ChatGPT住宅IP专线", "Cloudflare人机验证循环"],
    datePublished: "2026-02-22",
    dateModified: "2026-03-01",
    readTime: "8 分钟",
    content: `
### 一、1020 报错的技术真相：您被 Cloudflare WAF 拦截了

当浏览器访问 \`chatgpt.com\` 并看到黑底的 **“Access Denied // Error 1020”** 时，您的请求实际上根本没有到达 OpenAI 的业务服务器，而是在最外层的 Cloudflare 企业级防火墙就遭到了直接丢弃。

触发该拦截的核心指标包括：
1. **IP 归属 ASN 为机房（Hosting）：** 如 DigitalOcean、Vultr 等公网主机，在风控库中被列为黑客/脚本高危区；
2. **并发会话数超标：** 一个共享节点有数百人同时在问 ChatGPT，瞬时请求速率突破了阈值；
3. **欺诈评分（Fraud Score）偏高：** IP 在过去 30 天内有参与垃圾邮件或端口扫描的历史记录。

### 二、彻底根治实操方案

要永久告别 1020 报错，必须完成以下闭环：
- **选择具备原生住宅出口的服务商：** 首推【光速云】（全节点配备家庭宽带 ISP 原生出口，欺诈评分低于 5 分）；
- **客户端分流锁定美国或日本固定节点：** 切勿使用“自动测速轮换”策略，避免每问一个问题 IP 跨国漂移一次；
- **清理浏览器 Cookie：** 报错被拦截后，浏览器内会残留被标记的 CF 追踪 Cookie。在设置中清除 \`chatgpt.com\` 的所有 Cookie 与站点数据，重启浏览器后再次连接专线即可顺畅进入。
    `
  }
];
