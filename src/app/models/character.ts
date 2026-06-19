export interface Character {
  name: string;
  title: string;
  isCrawler: boolean;
  crawlerNumber: number | undefined;
  race: string;
  class: string | undefined;
  level: number | undefined;
  crawlerStats: CrawlerStats | undefined;
  socialStats: CrawlerRatings | undefined;
  skills: Skill[] | undefined;
  inventory: Item[] | undefined;
  crawlerKillerCount: number | undefined;
}

export interface CrawlerStats {
  strength: number | undefined;
  constitution: number | undefined;
  intellegence: number | undefined;
  dexterity: number | undefined;
  charisma: number | undefined;
}

export interface CrawlerRatings {
  views: number;
  followers: number;
  favorits: number;
  patrons: number;
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

export interface Buff {
  name: string;
  description: string;
}

export interface Spell {
  name: string;
  description: string;
  level: number;
}

export interface Party {
  name: string;
  members: Character[];
}
