<script lang="ts" setup>
import { ref } from "vue"
import { rules } from "./rules";
import { createProduct_API, getProduct_DEFAULT, updateProduct_API, type ProductModel } from "@/services/product";

const _formRef = ref()
const _visible = ref(false)
const _tab_active = ref('first')
const emit = defineEmits(['update'])
const _formData = ref<ProductModel>(getProduct_DEFAULT())


function open(item = getProduct_DEFAULT()) {
    _visible.value = true;
    _tab_active.value = 'first';
    if (item && item.id) _formData.value = JSON.parse(JSON.stringify(item));
    _formData.value.image = 'https://images3.alphacoders.com/922/922680.jpg';
}

function close() {
    _visible.value = false
    _formRef.value?.resetFields()
    _formData.value = getProduct_DEFAULT()
}

async function submit() {
    _formRef.value?.validate(async (valid: boolean, message: any) => {
        if (valid) {
            const handler = _formData.value.id ? updateProduct_API : createProduct_API;
            const [error, response] = await handler(_formData.value);

            close();
            emit('update');
        } else {
            if(message["name.uz"]) {
                _tab_active.value = 'first'
            } else if(message["name.ru"]) {
                _tab_active.value = 'second'
            } else if(message["name.eng"]) {
                _tab_active.value = 'third'
            }
        }
    })
}

defineExpose({
    open
})
</script>

<template>
    <el-dialog v-model="_visible" :title="_formData.id ? 'Tahrirlash' : 'Yangi qo’shish'" style="width: 100%; max-width: 500px;" @close="close">
        <el-form label-position="top" @submit.prevent="submit" :model="_formData" :rules="rules" ref="_formRef">

            <div class="grid grid-cols-9 items-end gap-5 mb-2">
                <img class="col-span-4 aspect-[9/6] object-cover object-center rounded-xl mb-[18px]" :src="_formData.image" alt="">

                <el-form-item class="col-span-5" label="Narxi" prop="price">
                    <el-input v-model="_formData.price" type="number" />
                </el-form-item>
            </div>
            <div class="border border-strike p-3 py-2 rounded-xl mb-5">
                <el-tabs v-model="_tab_active">
                    <el-tab-pane label="O’zbekcha" name="first">
                        <el-form-item label="Product nomi" prop="name.uz">
                            <el-input v-model="_formData.name.uz" />
                        </el-form-item>
                        <el-form-item label="Batafsil" prop="description.uz">
                            <el-input type="textarea" v-model="_formData.description.uz" :rows="4" />
                        </el-form-item>
                    </el-tab-pane>

                    <el-tab-pane label="Русский" name="second">
                        <el-form-item label="Название продукта" prop="name.ru">
                            <el-input v-model="_formData.name.ru" />
                        </el-form-item>
                        <el-form-item label="Описание" prop="description.ru">
                            <el-input type="textarea" v-model="_formData.description.ru" :rows="4" />
                        </el-form-item>
                    </el-tab-pane>

                    <el-tab-pane label="English" name="third">
                        <el-form-item label="Product name" prop="name.eng">
                            <el-input v-model="_formData.name.eng" />
                        </el-form-item>
                        <el-form-item label="Description" prop="namedescriptioneng">
                            <el-input type="textarea" v-model="_formData.description.eng" :rows="4" />
                        </el-form-item>
                    </el-tab-pane>
                </el-tabs>
            </div>

            <div class="mt-4 flex items-end justify-between gap-6">
                

                <el-button type="primary" class="mb-4 !py-4" native-type="submit">Confirm</el-button>
            </div>
        </el-form>
    </el-dialog>
</template>