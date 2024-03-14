import { type ProductModel } from ".";
import { useStorage } from "@vueuse/core";

export const _productStore = useStorage<ProductModel[]>('activeProductStore', []);
export const _basketProductStore = useStorage<ProductModel[]>('basketProductStore', []);