import { ref } from "vue"
import type { FormRules } from 'element-plus'

export const rules = ref<FormRules>({
    'name.uz': [
        { required: true, message: 'Please input name uz', trigger: 'blur' }
    ],
    'name.ru': [
        { required: true, message: 'Please input name ru', trigger: 'blur' }
    ],
    'name.eng': [
        { required: true, message: 'Please input name en', trigger: 'blur' }
    ],
    'description.uz': [
        { required: true, message: 'Please input description uz', trigger: 'blur' }
    ],
    'description.ru': [
        { required: true, message: 'Please input description ru', trigger: 'blur' }
    ],
    'description.eng': [
        { required: true, message: 'Please input description en', trigger: 'blur' }
    ],
    'image': [
        { required: true, message: 'Please input priority', trigger: 'blur' }
    ],
    'price': [
        { required: true, message: 'Please input Bg Color', trigger: 'blur' }
    ],
})