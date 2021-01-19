import React, { useContext } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {


  const id = navigation.getParam('id')
  const { state } = useContext(Context)

  const post = state.find((post) => post.id === id)

  return (
    <View style={styles.wrapper}>
      <View style={styles.titleWrapper}>
      <Text style={styles.title}>{post.title}</Text>
      </View>
      <Text style={styles.content}>{post.content}</Text>
      <Text style={styles.id}> ID#{id}</Text>
    </View>

  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
}

const styles = StyleSheet.create({
  wrapper:{
    flexDirection: 'column'
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
  },
  titleWrapper: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginHorizontal: 20,
  },
  content:{
    margin: 15,
    paddingTop: 20,
    fontSize: 18,
  },
  id: {
    justifyContent: 'flex-end',
    color: 'grey'
  }
})

export default ShowScreen