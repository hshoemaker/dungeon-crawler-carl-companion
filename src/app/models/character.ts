export interface Character {
  name: string;
  isCrawler: boolean;
  crawlerNumber: number | undefined;
  race: string;
  class: string | undefined;
  level: number | undefined;
  crawlerStats: CrawlerStats | undefined;
  socialStats: CrawlerSocialStats | undefined;
  skills: Skill[] | undefined;
  inventory: Item[] | undefined;
}

export interface CrawlerStats {
  strength: number | undefined;
  constitution: number | undefined;
  intellegence: number | undefined;
}

export interface CrawlerSocialStats {
  views: number;
  followers: number;
  favorits: number;
}

export interface Skill {
  name: string;
  description: string;
  level: number;
}

export interface Item {
  name: string;
  type: string;
  rarity: string;
  equiped: string;
}
