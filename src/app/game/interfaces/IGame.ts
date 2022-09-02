export interface IGame {
  Id?: number;
  Genre: string;
  Title: string;
  Price?: number;
  Age: number;
  Info: string;
  src?: string;
  Available?: boolean;
  ReleaseDate?:string
}
