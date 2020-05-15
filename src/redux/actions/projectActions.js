export const createProject = (project) => {
    return (dispatch, getState) => {
        //make async call to database
        dispatch({type: 'CREATE_PROJECT', project})
    }
}


//In normal case we use rturn object
// return {
//     type: 'ADD_PROJECT',
//     project: project
// }