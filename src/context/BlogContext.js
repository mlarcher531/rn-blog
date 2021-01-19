import jsonServer from '../api/jsonServer'
import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'GET_POSTS':
            return action.payload
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
}

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'DELETE_POST', payload: id })
    }
}

const updateBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, {title: title, content: content})
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
