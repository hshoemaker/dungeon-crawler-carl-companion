import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import {books} from './book-data.json'

@Injectable({
  providedIn: 'root',
})
export class BookService {
  getAllBooks(): Book[] {
    return books;
  }
}

