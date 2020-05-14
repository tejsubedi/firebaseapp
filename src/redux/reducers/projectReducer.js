const initState = {
    projects: [
        { id: 1, title: 'hello this is react', content: 'how is the course content' },
        { id: 2, title: 'writing the  title ', content: 'how is the writing skills ' },
        { id: 3, title: 'About the destiny ', content: 'how is the dummy data content' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log(`created project`, action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log(`create project error`, action.err);
            return state;
        default:
            return state;
    }

}

export default projectReducer