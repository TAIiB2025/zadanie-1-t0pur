export class Product {
  constructor(
    public nazwa: string,
    public cena: number,
    public dataUtworzenia: Date,
    public czyPromocja: boolean,
    public liczbaSztukWKoszyku: number = 0
  ) {}
}
