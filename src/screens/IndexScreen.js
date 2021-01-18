import React, { useContext } from 'react'
import { Text, View, StyleSheet, FlatList, Button } from 'react-native'

import { Context } from '../context/BlogContext'

const IndexScreen = () => {

    const { state, addBlogPost } = useContext(Context)

    return (
        <View>
            <Text>Index Screen</Text>
            <FlatList
                data={state}
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
