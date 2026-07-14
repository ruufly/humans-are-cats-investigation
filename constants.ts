export const GRAVITY = 0.6;
export const JUMP_FORCE = -13.5;
export const MOVE_SPEED = 6;
export const DASH_SPEED = 18;
export const DASH_DURATION = 200;
export const DASH_COOLDOWN = 800;
export const WALL_JUMP_FORCE_X = 10;
export const WALL_JUMP_FORCE_Y = -12;

export const COMBAT = {
  PLAYER_MAX_HP: 100,
  NPC_MAX_HP: 30,
  PLAYER_DMG: 10,
  NPC_DMG: 15,
  ATTACK_RANGE: 100,
  ATTACK_COOLDOWN: 300,
  SHOOT_COOLDOWN: 400,
  HIT_STUN: 200,
  HP_BAR_VISIBLE_TIME: 3000,
  INTERACTION_COOLDOWN: 1000,
  TOTAL_EVIDENCE_NEEDED: 3,
  HEALTH_PACK_HEAL: 40,
  ALERT_DAMAGE: 8,
  CONTACT_DAMAGE: 12,
  HAZARD_DAMAGE: 18,
};

export const COLORS = {
  skyTop: '#6DD5FA',
  skyBottom: '#FFFFFF',
  road: '#343a40',
  sidewalk: '#ced4da',
  zebra: '#ffffff',
  platform: 'rgba(76, 201, 240, 0.4)',
  platformBorder: '#4cc9f0',
  treeTrunk: '#5d4037',
  treeLeaves: '#2d6a4f',
  bush: '#40916c',
  bgTree: '#1b4332',
  panic: '#ff3333',
  safe: '#00cc44',
  hpBarBg: '#000000',
  hpBarFill: '#e63946',
  hpBarPlayer: '#4cc9f0',
  uiBg: 'rgba(255, 255, 255, 0.95)',
  uiBorder: '#007bff',
  projectile: '#00FFFF',
  projectileTrail: '#FFFFFF',
  evidence: '#FFD700',
  enemy: '#000000',
  officeBg: '#2c3e50',
  officeWall: '#34495e',
  door: '#e67e22',
};

export const ZONES = {
  STREET: { id: 'STREET', minX: -10000, maxX: 10000, background: COLORS.skyTop },
  OFFICE: { id: 'OFFICE', minX: 5000, maxX: 7000, background: COLORS.officeBg },
};

export const DOORS = [
  { x: 3800, y: 430, width: 60, height: 100, targetX: 5250, targetY: 430, targetZone: 'OFFICE', label: 'door_office_label' },
  { x: 5050, y: 430, width: 60, height: 100, targetX: 3600, targetY: 430, targetZone: 'STREET', label: 'door_exit_label' },
];

// 交互语录 – 每个元素是 i18n key
export const INTERACTION_QUOTES = [
  "interaction_quote_0",
  "interaction_quote_1",
  "interaction_quote_2",
  "interaction_quote_3",
  "interaction_quote_4",
];

// NPC 随机闲聊 – i18n key
export const RANDOM_NPC_CHAT_LINES = [
  "npc_chat_line_0",
  "npc_chat_line_1",
  "npc_chat_line_2",
  "npc_chat_line_3",
  "npc_chat_line_4",
  "npc_chat_line_5",
  "npc_chat_line_6",
  "npc_chat_line_7",
];

// 初音未来开场白 – i18n key
export const MIKU_CHAT_OPENING_LINES = [
  "miku_opening_0",
  "miku_opening_1",
  "miku_opening_2",
];

// 剧情文本 – i18n key
export const LYRICS = {
  intro: [
    "intro_line_0",
    "intro_line_1",
    "intro_line_2",
    "intro_line_3",
    "intro_line_4",
    "intro_line_5",
    "intro_line_6",
    "intro_line_7",
    "intro_line_8",
    "intro_line_9",
    "intro_line_10",
    "intro_line_11",
    "intro_line_12",
    "intro_line_13",
    "intro_line_14",
  ],
  ending: [
    "ending_line_0",
    "ending_line_1",
    "ending_line_2",
    "ending_line_3",
  ],
};

export const IDLE_SPRITE_URLS = [
  "/sprites/idle/idle_0.png",
  "/sprites/idle/idle_1.png",
  "/sprites/idle/idle_2.png",
  "/sprites/idle/idle_3.png",
];

export const WALK_SPRITE_URLS = [
  "/sprites/walk/walk_0.png",
  "/sprites/walk/walk_1.png",
  "/sprites/walk/walk_2.png",
  "/sprites/walk/walk_3.png",
  "/sprites/walk/walk_4.png",
  "/sprites/walk/walk_5.png",
  "/sprites/walk/walk_6.png",
  "/sprites/walk/walk_7.png",
];

export const NPC_SPRITE_URLS = [
  "/sprites/npc/npc_0.png",
  "/sprites/npc/npc_1.png",
  "/sprites/npc/npc_2.png",
  "/sprites/npc/npc_3.png",
];

export const NPC_VARIANT_2_URLS = [
  "/sprites/npc_v2/npc_v2_0.png",
  "/sprites/npc_v2/npc_v2_1.png",
  "/sprites/npc_v2/npc_v2_2.png",
  "/sprites/npc_v2/npc_v2_3.png",
  "/sprites/npc_v2/npc_v2_4.png",
  "/sprites/npc_v2/npc_v2_5.png",
  "/sprites/npc_v2/npc_v2_6.png",
  "/sprites/npc_v2/npc_v2_7.png",
];

export const SCENE_IMAGES = {
  cloud: "/scene/cloud.png",
  tree: "/scene/tree.png",
  house: "/scene/house.png",
  sky: "/scene/sky.png",
  farHouse: "/scene/farHouse.png",
  midHouse: "/scene/midHouse.png",
  sidewalk: "/scene/sidewalk.png",
  lamp: "/scene/lamp.png",
};

export const AUDIO_URLS = {
  death: "/audio/death.mp3",
  damage: "/audio/damage.mp3",
  hit: "/audio/hit.mp3",
  attack: "/audio/attack.mp3",
  jump: "/audio/jump_remote.mp3",
  dash: "/audio/dash.mp3",
  collect: "/audio/data.mp3",
};
