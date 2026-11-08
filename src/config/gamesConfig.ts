export interface GameActivity {
  isPlaying: boolean;
  gameName: string;
  details?: string;
  state?: string;
  icon?: string;
  largeImage?: string;
  smallImage?: string;
  elapsedMs?: number;
  startTimestamp?: number;
}

export interface GamesConfig {
  enabled: boolean;
  lanyardUserId?: string; // Optional Discord User ID for Lanyard live Game Activity RPC
}

/**
 * 🎮 游戏状态与终端街机模块配置 (Gaming & Arcade Configuration)
 * 100% 独立无外部商业 API 密钥外泄
 */
export const GAMES_CONFIG: GamesConfig = {
  enabled: false,
  lanyardUserId: "",
};

// 纯本地内联 SVG 游戏图标（零外部依赖、零网络追踪）
const DEFAULT_RETRO_GAME_ICON = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300ff66"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5S17.67 9 18.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`;

export async function fetchGameIconByName(gameName: string): Promise<string> {
  return DEFAULT_RETRO_GAME_ICON;
}

export function parseGameAsset(game: any): string {
  if (!game) return DEFAULT_RETRO_GAME_ICON;

  const asset = game.assets?.large_image || game.assets?.small_image;
  if (asset) {
    if (game.application_id && !asset.startsWith("http")) {
      return `https://cdn.discordapp.com/app-assets/${game.application_id}/${asset}.png`;
    }
  }

  return DEFAULT_RETRO_GAME_ICON;
}

/**
 * Helper to fetch live Game activity from Lanyard API
 */
export async function getLiveGameActivity(): Promise<GameActivity | null> {
  if (GAMES_CONFIG.enabled && GAMES_CONFIG.lanyardUserId) {
    try {
      const res = await fetch(`https://api.lanyard.rest/v1/users/${GAMES_CONFIG.lanyardUserId}`);
      const data = await res.json();
      if (data.success && data.data?.activities) {
        const game = data.data.activities.find(
          (a: any) => a.type === 0 && a.name.toLowerCase() !== "spotify"
        );

        if (game) {
          const now = Date.now();
          const start = game.timestamps?.start || now;
          const largeImg = parseGameAsset(game);

          return {
            isPlaying: true,
            gameName: game.name,
            details: game.details || "Retro Gaming Session",
            state: game.state || "Active",
            largeImage: largeImg,
            startTimestamp: start,
            elapsedMs: Math.max(0, now - start),
          };
        }
      }
    } catch {
      // Network fallback
    }
  }

  return null;
}
