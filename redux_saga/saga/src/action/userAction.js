export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED'
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS'
export const USER_FETCH_FAILURE= 'USER_FETCH_FAILURE'


export const fetchUserData = () => (
    {type: 'USER_FETCH_REQUESTED'})



export const fetchUserSuccess = (user) => (
    {type: 'USER_FETCH_SUCCESS', payload: user})


export const fetchUserFailure = (error) => (   
    {type: 'USER_FETCH_FAILURE', payload: error})      






