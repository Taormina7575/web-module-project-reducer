export const ADD_ONE = "ADD_ONE";
export const CLEAR = 'CLEAR';
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const MEMORY_SET = 'MEMORY_SET'
export const MEMORY_APPLY = 'MEMORY_APPLY'
export const MEMORY_CLEAR = 'MEMORY_CLEAR'

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (op) => {
    return({type:CHANGE_OPERATION, payload:op})
}

export const clearTotal = () => {
    return({type:CLEAR})
}

export const setMemory = () => {
    return({type:MEMORY_SET})
}

export const clearMemory = () => {
    return({type:MEMORY_CLEAR})
}

export const applyMemory = () => {
    return({type:MEMORY_APPLY})
}