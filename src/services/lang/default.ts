import { type LangModel } from "./model";

export function getLang_DEFAULT(): LangModel { 
    const object: LangModel = { 
        uz: '',
        ru: '',
        eng: '',
    }

    return object;
}