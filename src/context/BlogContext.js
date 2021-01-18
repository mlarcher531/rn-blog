import React from 'react'

const BlogContext = React.createContext()

export const BlogProvider = ({ children }) => {

    const blogPosts = [
        {title: 'Post #1'},
        {title: 'Post #2'},
        {title: 'Post #3'},
        {title: 'Post #4'},
    ]
    return (
        <BlogContext.Provider value={blogPosts}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext