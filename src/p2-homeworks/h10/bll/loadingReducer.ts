export type InitialStateType = {
    loading: boolean
}

const initState: InitialStateType = {
    loading: false
}

const LOADING = 'LOADING'

export type ActionType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case LOADING: {
            return {
                ...state,
                loading: !state.loading
            }
        }
        default:
            return state
    }
}

export const loadingAC = () => ({type: LOADING} as const)// fix any