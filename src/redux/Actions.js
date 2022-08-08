export const addCart =(id) => {
    return {
        type: 'ADD_TO_CART',
        id
    }
}

export const addQty =(id) => {
    return {
        type: 'ADD_QUANTITY',
        id
    }
}

export const minusQty =(id) => {
    return {
        type: 'MINUS_QUANTITY',
        id
    }
}
export const removeCart =(id) => {
    return {
        type: 'REMOVE_CART',
        id
    }
}

export const like =(id) => {
    return {
        type: 'LIKE',
        id
    }
}

export const unlike =(id) => {
    return {
        type: 'UNLIKE',
        id
    }
}