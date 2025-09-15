export const POST_USER = 'POST_USER'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_FAILURE= 'POST_FAILURE'


export const postUserData = () => (
    {type: 'POST_USER'})    



export const postUserSuccess = (newData) => (
    {type: 'POST_SUCCESS', payload: newData})


export const postUserFailure = (error) => (   
    {type: 'POST_FAILURE', payload: error})        