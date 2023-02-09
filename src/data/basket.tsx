import {clothes, ClotheType} from "./clothes";

export type BasketWareType = {
    id: number,
    num: number,
    size: string,
    clothe: ClotheType
}

export let basketWares: BasketWareType[] = [
    {
        id: 0,
        num: 1,
        size: 'XXS',
        clothe: clothes[0]
    }
]

export const setBasketWares = (list: BasketWareType[]) => {
    basketWares = list
}