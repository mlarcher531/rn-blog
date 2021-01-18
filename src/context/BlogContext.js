import React, { useReducer } from 'react'
import { useContext } from 'react/cjs/react.development'

const BlogContext = React.createContext()

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...state, { title: `Blog Post #${state.length + 1}` }]
        default:
            return state
    }

}

export const BlogProvider = ({ children }) => {

    const [blogPosts, dispatch] = useReducer(blogReducer, [])
    
    const addBlogPost = () => {
        dispatch({ type: 'ADD_POST'})
    }

    return (
        <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext