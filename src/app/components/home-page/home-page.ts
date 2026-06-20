import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { Book, Chapter } from '../../models/book';
import { BookService } from '../../services/book-service';
import { BookList } from "../book-list/book-list";
import { CharacterList } from "../character-list/character-list";
import { CharacterDetails } from "../character-details/character-details";
import { CharacterService } from '../../services/character-service';
import { DungeonOverview } from "../dungeon-overview/dungeon-overview";

@Component({
  selector: 'app-home-page',
  imports: [BookList, CharacterList, CharacterDetails, DungeonOverview],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  bookService: BookService = inject(BookService);
  characterService: CharacterService = inject(CharacterService);
  books: Book[] = [];

  // page state
  book: Book | undefined;
  chapter: Chapter | undefined;
  characters = signal<string[]>([]);

  ngOnInit(): void {
    this.books = this.bookService.getAllBooks();
  }

  onBookSelect(book: Book) {
    this.book = book;
    console.log(this.book);
  }

  onChapterSelect(chapter: Chapter): void {
    this.chapter = chapter;
    if (this.book !== undefined && this.chapter !== undefined) {
      const availableCharacters = this.characterService.getAvailableCharacters(this.book.seriesNumber, this.chapter.chapterNumber);
      this.characters.update(() => availableCharacters);
    }
  }
}
