export const ACTIONS = {
    'SET_ONLINE_STATUS': 'SET_ONLINE_STATUS'
}

export const setOnlineStatus = (status: boolean) => {
    console.log('aaa')
    return {
        type: ACTIONS.SET_ONLINE_STATUS,
        status
    }
}
