  /// <reference types="vite/client" />

  type LangType = "ja" | "ko" | "es" | "fr" |  "en" | "zh-Hans";

type WordType = {
  word: string;
  meaning: string;
  options: string[];
};

interface StateType {
  loading: boolean;
  result: string[];
  words: WordType[];
  error?: string;
}

type FetchedDataType = {  
  translations: {
    text: string;
  }[];
};