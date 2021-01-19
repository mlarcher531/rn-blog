import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, postToEdit }) => {

    const [title, setTitle] = useState(postToEdit.title)
    const [content, setContent] = useState(postToEdit.content)

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.inputs}
            />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput
                value={content}
                onChangeText={(content) => setContent(content)}
                style={styles.inputs}
            />
            <Button
                title={'Submit'}
                onPress={()=>onSubmit(title, content)}
            />
        </View>
    )
}

BlogPostForm.defaultProps = {
    postToEdit: {
        title: '',
        content: '',
    }
}

const styles = StyleSheet.create({
    inputs: {
        fontSize: 18,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    label: {
        margin: 5,
        fontSize: 20,
    }
})

export default BlogPostForm