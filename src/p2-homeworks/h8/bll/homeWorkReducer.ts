import {UserType} from "../HW8";

export type sortActionsType = {
    type: 'sort',
    payload: 'up' | 'down'
}
export type checkActionsType = {
    type: 'check',
    payload: number
}
export type ActionsType = sortActionsType | checkActionsType

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let newState = [...state];
            if (action.payload === 'up')
                return newState.sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1);
            else return newState.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? -1 : 1);

        }
        case 'check': {
            // need to fix

            return state.filter(a => a.age > action.payload);
        }
        default:
            return state
    }
}