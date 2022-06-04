const INITIAL_STATE = {
    articles: []
}

export function articleReducer (state = INITIAL_STATE, action) {

    switch(action.type) {
        case "LOADARTICLES" : {
            return {
                articles: action.payload
            }
        }

        case "ADDARTICLE" : {
            const newArr = [...state.articles]
            newArr.unshift(action.payload)
            return {
                articles: newArr
            }
        }
    }
    return state;
}



export const getArticles = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: 'LOADARTICLES',
                payload: data
            })
        })
}