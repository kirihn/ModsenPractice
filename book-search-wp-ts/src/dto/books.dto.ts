export interface GoogleBooksResponse {
    kind?: string;
    totalItems?: number;
    items?: Volume[];
  }
  
  export interface Volume {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
    accessInfo: AccessInfo;
  }
  
  export interface VolumeInfo {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: IndustryIdentifier[];
    pageCount: number;
    categories: string[];
    imageLinks: ImageLinks;
    language: string;
  }
  
  export interface IndustryIdentifier {
    type: string;
    identifier: string;
  }
  
  export interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
  }
  
  export interface SaleInfo {
    country: string;
    saleability: string;
    isEbook: boolean;
  }
  
  export interface AccessInfo {
    country: string;
    viewability: string;
    webReaderLink: string;
  }