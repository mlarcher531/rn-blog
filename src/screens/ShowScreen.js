import React, { useContext } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {


    const id = navigation.getParam('id')
    const { state } = useContext(Context)

    const post = state.find((post) => post.id === id)

    return (
        <View>
            <Text>{post.title}</Text>
            <Text>Post #{id}</Text>
            <Text>{post.content}</Text>
        </View>

    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
            <EvilIcons name="pencil" size={35} />
          </TouchableOpacity>
        ),
      };
}

const styles = StyleSheet.create({})

export default ShowScreen