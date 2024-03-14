import { type ProductModel } from "./model";
import { getLang_DEFAULT } from "../lang";

export function getProduct_DEFAULT(): ProductModel { 
    const object: ProductModel = {
        id: '',
        image: '',
        price: 0,
        count: 0,
        name: getLang_DEFAULT(),
        description: getLang_DEFAULT(),
    }

    return object;
}