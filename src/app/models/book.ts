export interface Book {
  title: string;
  seriesNumber: number;
  chapters: Chapter[];
  bookEnabled: boolean;
}

export interface Chapter {
  title: string;
  chapterNumber: number;
}
