export type InitialStateType = {
    // theme:string
    theme:Theme
}

export type Theme='dark'| 'red'| 'some'|'crazy'

const initState = {
    theme:'some' as Theme
};

export type ActionType = ReturnType<typeof changeThemeC>

export const themeReducer = (state = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state,theme:action.theme}
        }
        default: return state;
    }
};

export const changeThemeC = (theme:Theme):{type:'CHANGE_THEME',theme:Theme} =>( {type:'CHANGE_THEME',theme} as const); // fix any