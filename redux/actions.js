import {ADD_ITEM,DELETE_ITEM,INCREASE_ITEM,DECREASE_ITEM} from './actionTypes'

export const addITEM = (item) => ({
    type:ADD_ITEM,
    item:item
})
export const delITEM = (item) => ({
    type:DELETE_ITEM,
    item:item
})
export const incITEM = (item) => ({
    type:INCREASE_ITEM,
    item:item
})
export const decITEM = (item) => ({
    type:DECREASE_ITEM,
    item:item
})
