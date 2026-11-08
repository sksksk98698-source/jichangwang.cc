/**
 * 🌐 站点核心独立配置 (Site Core Configuration)
 * 100% 原创、解耦、纯净化体系
 */

export const SITE_CONFIG = {
  // 核心域名与 URL 体系（支持环境变量覆盖）
  siteUrl: (typeof process !== "undefined" && process.env?.SITE_URL) || "https://jichangwang.cc",
  siteName: "机场网 (JichangWang.cc)",
  brandName: "机场网",
  
  // SEO 核心元数据
  defaultTitle: "机场网 (JichangWang.cc) - 全球专线网络实测中心 // 42家机场品牌测评与选购智库",
  titleTemplate: "%s | 机场网",
  defaultDescription: "机场网（JichangWang.cc）专注全球专线网络架构实测，深度评测全网 42 家主流机场。结合晚高峰带宽实测图、真实丢包率、流媒体 4K 与 ChatGPT/Claude/Gemini AI 全量解锁报告，为开发者、出海电商和跨境团队提供 100% 真实透明的选购决策支持。",
  keywords: [
    "机场推荐",
    "翻墙机场",
    "科学上网",
    "梯子推荐",
    "IEPL专线",
    "IPLC专线",
    "Clash节点",
    "Shadowrocket",
    "ChatGPT解锁",
    "TikTok跨境电商",
    "机场测速",
    "机场网"
  ],
  author: "机场网测评实验室",
  authorEmail: "contact@jichangwang.cc",
  
  // 社交与外部引用配置（完全自主可控）
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    email: "contact@jichangwang.cc",
  },

  // 国际化与区域
  locale: "zh_CN",
  alternateLocale: "en_US",
  
  // 主题与视觉默认值
  themeColor: "#00ff66",
  backgroundColor: "#0a120b",
  
  // 资源规范化助手
  getCanonicalUrl(path: string = "/"): string {
    const base = this.siteUrl.replace(/\/+$/, "");
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${base}${cleanPath}`;
  }
};
