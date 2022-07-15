export interface IProduct {
  ID: number;
  Name:string;
  Quantity:number;
  Price:number;
  Img?:string; // optional
  CategoryID: number;

}
// export enum
export enum DiscountOffers {'No Discount', '10%', '15%'}


