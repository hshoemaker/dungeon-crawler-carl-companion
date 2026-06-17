import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import {books} from './book-data.json'

@Injectable({
  providedIn: 'root',
})
export class BookService {
  getAllBooks(): Book[] {
    // const books: Book[] = [
    //   {
    //     title: 'Dungeon Crawler Carl',
    //     seriesNumber: 1,
    //     chapters: [{chapterNumber: 1, title: 'Chapter 1'}]
    //   }
    // ];
    return books;
  }
}

