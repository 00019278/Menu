import { _basketProductStore, _productStore } from "./store"
import { type ProductModel } from "./model"


export async function getProducts_API(): Promise<[any, null] | [null, ProductModel[]]> {
    try {
        return [null, _productStore.value]
    } catch (error) {
        return [error, null]
    }
}

export async function createProduct_API(payload: ProductModel): Promise<[any, null] | [null, ProductModel[]]> {    
    try {
        payload.id = String(new Date().getTime())
        _productStore.value.push(payload);

        return [null, _productStore.value]
    } catch (error) {
        return [error, null]
    }
}

export async function updateProduct_API(payload: ProductModel): Promise<[any, null] | [null, ProductModel[]]> {
    try {
        _productStore.value.forEach((product, index) => {
            if(product.id === payload.id) {
                _productStore.value[index] = payload;
            }
        })

        return [null, _productStore.value]
    } catch (error) {
        return [error, null]
    }
}

export async function deleteProduct_API(payload: ProductModel): Promise<[any, null] | [null, ProductModel[]]> {
    try {
        _productStore.value = _productStore.value.filter(product => product.id != payload.id)

        return [null, _productStore.value]
    } catch (error) {
        return [error, null]
    }
}


export async function addBacket_API(payload: ProductModel): Promise<[any, null] | [null, ProductModel[]]> {
    try {
        _basketProductStore.value.push(payload);

        return [null, _basketProductStore.value]
    } catch (error) {
        return [error, null]
    }
}

export async function removeBacket_API(payload: ProductModel): Promise<[any, null] | [null, ProductModel[]]> {
    try {
        _basketProductStore.value = _basketProductStore.value.filter(product => product.id != payload.id);

        return [null, _basketProductStore.value]
    } catch (error) {
        return [error, null]
    }
}

export async function clearBacket_API(): Promise<[any, null] | [null, ProductModel[]]> {
    try {
        _basketProductStore.value = [];
        _productStore.value.forEach((product, index) => {
            _productStore.value[index].count = 0;
        });

        return [null, _basketProductStore.value]
    } catch (error) {
        return [error, null]
    }
}