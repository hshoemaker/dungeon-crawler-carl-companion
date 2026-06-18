import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { characters } from './test-data.json' ;

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  getAvailableCharacters(book: number, chapter: number): string[] {
    return ["Carl", "Princess Donut"];
  }

  getCharacterStats(name: string, book: number, chapter: number): Character {
    let selectedCharacter = characters.filter(x => x.name === name);
    let character: Character = {
      name: name,
      isCrawler: false,
      crawlerNumber: undefined,
      race: '',
      class: undefined,
      level: undefined,
      crawlerStats: undefined,
      socialStats: undefined,
      skills: undefined,
      inventory: undefined
    };

    return character;
  }
}
