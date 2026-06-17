export interface Book {
  title: string;
  seriesNumber: number;
  chapters: Chapter[];
}

export interface Chapter {
  title: string;
  chapterNumber: number;
}
