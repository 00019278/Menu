import type { LangModel } from "../lang";

export interface ProductModel {
    id: string;
    image: string;
    name: LangModel;
    description: LangModel;
    price: number;
    count: number;
}