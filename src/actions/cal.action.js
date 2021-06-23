import { ACTION_ADD, ACTION_REM, ACTION_CLR } from "../Constants";

export const setStateToADD = () => ({
    type: ACTION_ADD,
})

export const setStateToREM = () => ({
    type: ACTION_REM,    
})

export const setStateToCLR = (payload) => ({
    type: ACTION_CLR,
    payload
})

export const add = ()=>{
    // do something
    return dispatch=>{
        setTimeout(()=>{
            dispatch(setStateToADD())
        }, 100)
    }
}

export const remove = ()=>{
    // do something
    return dispatch=>{
        setTimeout(()=>{
            dispatch(setStateToREM())
        }, 1000)
    }
}

export const clear = (payload)=>{
    return dispatch=>{
        dispatch(setStateToCLR(payload))
    }
}
