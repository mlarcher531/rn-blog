
import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...state,
            {
                id: Math.floor(Math.random() * 99999),
                title: action.payload.title,
                content: action.payload.content
            }
            ]
        case 'DELETE_POST':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'EDIT_POST':
            return state.map((post) => {
                return post.id === action.payload.id
                    ? action.payload
                    : post
            })
        default:
            return state
    }
}

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'ADD_POST', payload: { title: title, content: content } })
        if (callback) {
            callback()
        }
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'DELETE_POST', payload: id })
    }
}

const updateBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({ type: 'EDIT_POST', payload: { id: id, title: title, content: content } })
        if (callback) {
            callback()
        }
    }
}






export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, updateBlogPost },
    []
)
