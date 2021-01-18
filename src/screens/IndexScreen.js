import React, { useContext } from 'react'
import { Text, View, StyleSheet, FlatList, Button } from 'react-native'

import BlogContext from '../context/BlogContext'

const IndexScreen = () => {

    const { data, addBlogPost } = useContext(BlogContext)

    return (
        <View>
            <Text>Index Screen</Text>
            <FlatList
                data={data}
                keyExtractor={(post) => post.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }
                }
            />
            <Button 
            title={'PRESS ME'}
            onPress={ addBlogPost }
            />
        </View>
    )

}

const styles = StyleSheet.create({})

export default IndexScreen
