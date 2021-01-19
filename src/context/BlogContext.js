import jsonServer from '../api/jsonServer'
import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'GET_POSTS':
            return action.payload
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

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogposts')
        //response.data = {[],[],[]}
        dispatch({ type: 'GET_POSTS', payload: response.data })
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', { title, content })
        if (callback) {
            callback()
        }
    }


    // return (title, content, callback) => {
    //     dispatch({ type: 'ADD_POST', payload: { title: title, content: content } })
        // if (callback) {
        //     callback()
        // }
    // }
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
    { getBlogPosts, addBlogPost, deleteBlogPost, updateBlogPost },
    []
)
