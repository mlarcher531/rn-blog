import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id')

    const { state, updateBlogPost } = useContext(Context)

    const post = state.find((post) => post.id === id)

    return <BlogPostForm
        postToEdit={{ title: post.title, content: post.content }}
        onSubmit={(title, content) => {
            updateBlogPost(id, title, content, () => navigation.pop())
        }}
    />

}

const styles = StyleSheet.create({})

export default EditScreen