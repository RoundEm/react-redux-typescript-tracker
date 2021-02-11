import { AnyAction } from "redux"

interface UserEvent {
    id: number
    title: string
    dateStart: string
    dateEnd: string
}

// normalizes data making it easier to work with
interface UserEventsState {
    byIds: Record<UserEvent['id'], UserEvent>
    addIds: UserEvent['id'][]
}

const initialState: UserEventsState = {
    byIds: {},
    addIds: []
}

const userEventsReducer = (
    state: UserEventsState = initialState, 
    action: AnyAction
) => {
    switch (action.type) {
        default:
            return state
    }
}

export default userEventsReducer