import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book-service';
import { BookList } from "../book-list/book-list";
import { CharacterList } from "../character-list/character-list";
import { CharacterDetails } from "../character-details/character-details";

@Component({
  selector: 'app-home-page',
  imports: [BookList, CharacterList, CharacterDetails],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  bookService: BookService = inject(BookService);
  books: Book[] = [];

  ngOnInit(): void {
    this.books = this.bookService.getAllBooks();
  }
}
