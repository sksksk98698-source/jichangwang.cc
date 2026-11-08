/**
 * 梯子工具与客户端专题知识库数据 (Tools & Clients Database)
 * 路由：/clients -> /clients/[platform] -> /clients/[platform]/[slug]
 */

export interface ToolArticle {
  slug: string;
  platform: string;
  title: string;
  subtitle: string;
  summary: string;
  keywords: string[];
  datePublished: string;
  dateModified: string;
  readTime: string;
  difficulty: '入门' | '进阶' | '极客';
  content: string;
}

export interface ToolPlatform {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  recommendedApp: string;
}

export const TOOL_PLATFORMS: ToolPlatform[] = [
  {
    id: "windows",
    name: "Windows 客户端",
    slug: "windows",
    tagline: "Win 10/11 平台现代化代理客户端与 TUN 模式调优",
    description: "全面涵盖 Clash Verge Rev、Sing-box 等主流开源内核在 Windows 系统下的安装、分流配置与服务模式排障。",
    icon: "🪟",
    recommendedApp: "Clash Verge Rev"
  },
  {
    id: "macos",
    name: "macOS 客户端",
    slug: "macos",
    tagline: "Apple Silicon 与 Intel 架构 Mac 增强分流实战",
    description: "深度剖析 Clash Verge Rev、Surge Mac 以及 Loon Mac 在苹果生态中的系统级网络接管与代理冲突处理。",
    icon: "🍎",
    recommendedApp: "Clash Verge Rev / Surge"
  },
  {
    id: "ios",
    name: "iOS / iPadOS 客户端",
    slug: "ios",
    tagline: "iPhone 与 iPad 经典小火箭与现代化内核生态",
    description: "指导从外区 Apple ID 注册下载 Shadowrocket（小火箭）、Loon，到一键导入订阅与流媒体去广告插件配置。",
    icon: "📱",
    recommendedApp: "Shadowrocket / Loon"
  },
  {
    id: "android",
    name: "Android 客户端",
    slug: "android",
    tagline: "安卓手机、电视盒子与车机极简客户端指南",
    description: "解析 Flclash、Clash Meta for Android 等在安卓各定制系统（MIUI/ColorOS/OriginOS）下的后台保活与分流调优。",
    icon: "🤖",
    recommendedApp: "Flclash / Clash Meta"
  }
];

export const TOOL_ARTICLES: ToolArticle[] = [
  // Windows
  {
    slug: "clash-verge-rev-guide",
    platform: "windows",
    title: "Windows 下 Clash Verge Rev 深度配置与 TUN 虚拟网卡全量接管指南",
    subtitle: "从零安装、一键导入光速云订阅，到解决系统代理未释放与 UWP 应用回路穿透",
    summary: "Clash Verge Rev 是当前 Windows 平台最受欢迎的开源客户端。本文详细介绍如何开启 Service Mode 服务模式、激活 TUN 虚拟网卡实现无死角全局接管，并彻底修复浏览器提示‘无网络连接’的常见故障。",
    keywords: ["Clash Verge Rev教程", "Clash Verge TUN模式", "Windows科学上网配置", "Clash服务模式安装", "Clash导入光速云订阅"],
    datePublished: "2026-02-05",
    dateModified: "2026-03-01",
    readTime: "9 分钟",
    difficulty: "进阶",
    content: `
### 一、为什么 Clash Verge Rev 是 Windows 平台的最佳选择？

在 Clash for Windows 停止维护后，基于 Tauri 框架打造的 **Clash Verge Rev** 迅速成为全网事实上的新标准。相比老旧的 Electron 客户端，它具备以下不可替代的核心优势：
- **内存占用减少 60%：** 空载常驻内存仅为 30MB~50MB，对笔记本电池续航极其友好；
- **原生内置 Clash.Meta (Mihomo) 内核：** 完整支持 VLESS Reality、Trojan、Shadowsocks 2022 以及 Hysteria 2 等全套前沿协议；
- **开源纯净无后门：** 代码完全在 GitHub 开源，杜绝任何第三方商业广告与后门捆绑。

### 二、标准配置 3 步全流程（配合光速云订阅实测）

1. **第一步：下载并安装正式发行版**
   访问 GitHub Releases 页面，根据您的 CPU 架构下载 \`Clash.Verge_x64-setup.exe\`。安装时建议勾选“为所有用户安装”。
2. **第二步：一键导入光速云订阅**
   登录光速云用户中心（优惠码 \`AMM\`），复制专属订阅链接。在 Clash Verge Rev 左侧导航栏点击“订阅 (Profiles)”，将链接粘贴在顶部输入框并点击“导入”。导入成功后，右键将该配置设置为当前活跃配置。
3. **第三步：开启服务模式与 TUN 模式（核心步骤）**
   在“设置 (Settings)”中找到“服务模式 (Service Mode)”，点击安装（需授予 Windows 管理员权限）。安装成功后，勾选**“TUN 模式 (TUN Mode)”**。此时系统会虚拟出一块专用网卡，彻底接管包括游戏、命令行终端以及 Windows 商店（UWP）的所有网络请求。

### 三、经典排障：为什么关掉软件后电脑突然无法上网？

这是 Windows 用户最常遇到的问题。其根本原因在于软件非正常退出（如直接拔电源关机或任务管理器强杀进程），导致 Windows 注册表中的“系统代理（System Proxy）”开关仍处于开启状态，但本地监听端口已关闭。<br />
**极速恢复命令：**
按下 \`Win + R\`，输入 \`cmd\` 回车，执行以下命令即可秒级重置代理状态：
\`\`\`cmd
reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings" /v ProxyEnable /t REG_DWORD /d 0 /f
\`\`\`
    `
  },
  {
    slug: "sing-box-windows-setup",
    platform: "windows",
    title: "Sing-box Windows 客户端零基础实战：通用规则集与极简图形界面配置",
    subtitle: "下一代通用网络代理内核 Sing-box 在 Win10/11 平台的安装、订阅转换与分流",
    summary: "全面解析新一代性能怪兽 Sing-box。相比传统 Clash，其在多核并发与高吞吐下拥有更高的 CPU 效率。本文手把手教您如何通过 GUI 客户端导入专线订阅。",
    keywords: ["Sing-box Windows教程", "Sing-box图形客户端", "Sing-box规则集", "Sing-box配置指南", "Sing-box导入订阅"],
    datePublished: "2026-02-12",
    dateModified: "2026-03-01",
    readTime: "8 分钟",
    difficulty: "极客",
    content: `
### 一、Sing-box 的架构优势与性能跃迁

Sing-box 是近年来异军突起的通用网络核心，其采用纯 Go 语言重写了全部路由逻辑，不携带任何历史技术包袱：
- **更低的内存开销：** 在处理 1000M 满带宽下行吞吐时，CPU 占用率相比旧版 Clash 降低约 25%；
- **原生支持二进制 Rule-Set 规则集：** 规则集在编译阶段被预处理为二进制 SRS 格式，使得包含数万条域名的广告拦截列表可以在毫秒内完成内存加载与哈希匹配。

### 二、图形界面客户端推荐与一键导入

对于普通用户，直接编写 JSON 配置文件门槛极高。建议下载 **Sing-box for Windows GUI** 版本：
1. 在客户端的 Profiles 界面点击“New Profile”；
2. 类型选择“Remote”，填入光速云控制台提供的专属 Sing-box 订阅 URL；
3. 将出站规则（Outbounds）的默认路由设置为“Rule 规则分流”，确保国内 IP 直连、海外专线走高速出口。
    `
  },
  // macOS
  {
    slug: "clash-verge-mac-config",
    platform: "macos",
    title: "macOS 下 Clash Verge Rev 最佳实践：增强模式与系统冲突完美解决",
    subtitle: "适配 M1/M2/M3/M4 Apple Silicon 芯片，解决 Safari 扩展冲突与终端 Git 走代理问题",
    summary: "详细讲解在 macOS 系统下如何配置 Clash Verge Rev，利用 TUN 内核无感接管终端 Terminal 与开发工具，并解决与 Surge、企业 VPN 的端口竞争冲突。",
    keywords: ["macOS Clash Verge教程", "Mac科学上网配置", "Apple Silicon代理工具", "Mac终端走代理", "Clash Mac增强模式"],
    datePublished: "2026-02-08",
    dateModified: "2026-03-01",
    readTime: "8 分钟",
    difficulty: "进阶",
    content: `
### 一、针对 Apple Silicon 芯片的专属优化

在 macOS 运行 Clash Verge Rev 时，请务必从官网下载带有 **\`arm64\`** 标识的 DMG 安装包（如 \`Clash.Verge_x.x.x_aarch64.dmg\`），以确保充分利用 M 系列芯片的硬件加密指令集（AES-NI 与 SHA 硬件加速），避免通过 Rosetta 2 转译造成的额外电量消耗与发热。

### 二、让 Mac 终端 Terminal 与 VS Code 完美走专线代理

许多开发者在 Mac 终端中运行 \`git clone\` 或 \`npm install\` 时依然极其缓慢。通过在 \`~/.zshrc\` 文件末尾追加以下快捷指令，即可实现一键开关终端代理：
\`\`\`bash
# 快速开启终端代理 (默认本地端口 7897)
alias proxy='export http_proxy="http://127.0.0.1:7897"; export https_proxy="http://127.0.0.1:7897"; echo "Proxy Mode: ON"'
# 快速关闭终端代理
alias unproxy='unset http_proxy; unset https_proxy; echo "Proxy Mode: OFF"'
\`\`\`
保存后在终端运行 \`source ~/.zshrc\` 即可生效。连接光速云专线后，实测 GitHub 仓库克隆速度可从数十 KB/s 飙升至 50MB/s 以上。
    `
  },
  // iOS
  {
    slug: "shadowrocket-beginner-tutorial",
    platform: "ios",
    title: "Shadowrocket（小火箭）iOS 极简上手教程：从外区 ID 下载到一键导入专线",
    subtitle: "全网最清晰的小火箭新手图文指引：扫码导入、节点测速、分流规则与去广告模块",
    summary: "Shadowrocket 是 iOS 生态中最经典的代名词。本文专为新手打造，提供海外 Apple ID 注册获取、小火箭扫码一键导入光速云订阅、规则分流与省电技巧全流程操作路线。",
    keywords: ["小火箭教程", "Shadowrocket下载", "小火箭添加节点", "iOS翻墙配置", "小火箭规则模式"],
    datePublished: "2026-02-14",
    dateModified: "2026-03-01",
    readTime: "7 分钟",
    difficulty: "入门",
    content: `
### 一、准备工作：获取海外 App Store 账号

由于国内政策限制，Shadowrocket 无法在大陆 App Store 搜索下载。您需要准备一个美区或港区 Apple ID：
1. 打开苹果官网自行注册一个免税区（如美国阿拉斯加）的 Apple ID，付款方式选择“None”；
2. 在 App Store 搜索购买 \`Shadowrocket\`（认准开发者为 Pan Guo，图标为白底小火箭）；
3. 购买完成后，随时可以切换回国内日常 Apple ID，软件已永久买断在设备上，正常享受更新。

### 二、一键导入光速云专线节点

1. 在手机 Safari 浏览器中登录光速云官网控制台；
2. 找到“一键导入订阅”按钮，在弹出的选项中直接点击“导入到 Shadowrocket”；
3. 页面会自动唤醒小火箭客户端并完成全节点解析；
4. 全局路由务必选择**“配置 (Config)”**模式（切勿选“代理”或“直连”），点击右上角开关开启连接，首次运行时根据系统提示输入锁屏密码允许添加 VPN 配置即可。
    `
  },
  // Android
  {
    slug: "flclash-android-tutorial",
    platform: "android",
    title: "Flclash 安卓极简客户端使用指南：极速加载、Material You 视觉与后台保活",
    subtitle: "基于 Flutter 打造的高颜值跨平台客户端在 MIUI / ColorOS / 鸿蒙系统下的完美适配",
    summary: "深度体验现代安卓代理神器 Flclash。界面优雅支持动态取色，内存占用极低。本文手把手教您解决安卓系统杀后台、息屏断流等系统级限制问题。",
    keywords: ["Flclash安卓教程", "Flclash配置指南", "安卓翻墙客户端推荐", "安卓代理后台保活", "Flclash导入订阅"],
    datePublished: "2026-02-18",
    dateModified: "2026-03-01",
    readTime: "8 分钟",
    difficulty: "入门",
    content: `
### 一、为什么推荐 Flclash 代替老旧的安卓客户端？

传统的 Clash for Android 界面陈旧且已多年不更新。基于 Flutter 开发的 **Flclash** 拥有现代化的 Material 3 设计风格，支持随壁纸自动变色，且后台待机耗电量极低，非常适合各类国产品牌手机与 Android TV 电视盒子。

### 二、解决国产安卓系统“息屏杀后台”的设置要点

国内厂商的系统（如小米 HyperOS、OPPO ColorOS、vivo OriginOS）具备激进的后台杀进程机制。为了避免息屏几分钟后代理自动断开，请务必进行以下设置：
1. **锁定后台任务卡片：** 在多任务切换界面，长按 Flclash 应用卡片，点击“加锁”图标；
2. **电池优化设为无限制：** 进入系统设置 -> 应用管理 -> Flclash -> 省电策略，将其改为“无限制 / 允许后台高耗电”；
3. **开启自启动权限：** 允许 Flclash 在开机后以及后台被系统自动唤醒。
    `
  }
];
