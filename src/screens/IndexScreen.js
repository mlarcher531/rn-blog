import React, { useContext } from 'react'
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity, Touchable } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Context } from '../context/BlogContext'

const IndexScreen = () => {

    const { state, addBlogPost, deleteBlogPost } = useContext(Context)

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(post) => post.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                                <Feather name="trash" style={styles.icon} />
                            </TouchableOpacity>
                        </View>)
                }
                }
            />
            <Button
                title={'PRESS ME'}
                onPress={addBlogPost}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: 'grey',
        paddingHorizontal: 10,
    },
    icon: {
        fontSize: 24,
    },
    title: {
        fontSize: 18,
    }
})

export default IndexScreen
