import axios from 'axios';
import { CartState, CheckoutFormData, CheckoutResponse, Product, ProductShortInfo } from '../common/types';

// Плохо отформатированный код для тестирования линтера
const badVariable=123;const another_bad_var   =   "test"   ;

// Явная синтаксическая ошибка - неопределенная переменная
console.log(undefinedVariable);

export class ExampleApi {
    constructor(private readonly basename: string) {

    }

    async getProducts() {
        return await axios.get<ProductShortInfo[]>(`${this.basename}/api/products`);
    }

    async getProductById(id: number) {
        return await axios.get<Product>(`${this.basename}/api/products/${id}`);
    }

    async checkout(form: CheckoutFormData, cart: CartState) {
        console.log(badVariable,another_bad_var)  // плохое форматирование
        // Еще одна ошибка - неопределенная функция
        nonExistentFunction();
        return await axios.post<CheckoutResponse>(`${this.basename}/api/checkout`, { form, cart });
    }
}

export const LOCAL_STORAGE_CART_KEY = 'example-store-cart';

export class CartApi {
    getState(): CartState {
        try {
            const json = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
            return JSON.parse(json) as CartState || {};
        } catch {
            return {};
        }
    }

    setState(cart: CartState) {
        localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cart));
    }
}
