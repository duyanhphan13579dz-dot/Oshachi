export type JlptLevelCode = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

export type ExamSectionCode = 'vocabulary' | 'grammar_reading' | 'listening';

export interface JlptMondai {
  id: number | string;
  exam_id?: number;
  section_code?: string;
  title: string;
  instructions?: string | null;
  type?: string;
  audio_url?: string | null;
  audio_size?: number | null;
  image_url?: string | null;
  passage?: string | null;
  points?: number;
  format?: string | null;
  position?: number;
}

export interface JlptQuestion {
  id: number;
  mondai_id: number | string;
  question_text: string;
  choices: string[];
  correct_answer_index: number;
  score?: string | number;
  audio_url?: string | null;
  image_url?: string | null;
  position?: number;
}

export interface JlptSectionData {
  title: string;
  timeLimit: number; // in seconds
  mondais: JlptMondai[];
  questions: Record<string | number, JlptQuestion[]>;
}

export interface JlptExam {
  id: number;
  level: JlptLevelCode;
  title: string;
  year: number;
  month: number | string;
  is_mock?: boolean;
  slug?: string;
  sections: {
    vocabulary: JlptSectionData;
    grammar_reading: JlptSectionData;
    listening: JlptSectionData;
  };
}

export interface JlptVocabFrequency {
  word: string;
  reading: string;
  meaning: string;
  level: JlptLevelCode;
  frequency: number;
}

export interface KanjiRadical {
  num: number;
  char: string;
  pinyin: string;
  meaning: string;
  strokes: number;
}
