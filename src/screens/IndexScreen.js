import React, { useContext } from 'react'
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity, Touchable } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Context } from '../context/BlogContext'

const IndexScreen = ({ navigation }) => {

    const { state, deleteBlogPost } = useContext(Context)

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(post) => post.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name="trash" style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }
                }
            />
        </View>
    )

}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={30} style={styles.plus}/>
          </TouchableOpacity>
        ),
      };
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
    },
    plus:{
        marginRight: 10,
    }
})

export default IndexScreen
