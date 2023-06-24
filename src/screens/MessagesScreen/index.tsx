import React from 'react'
import {View, Text, FlatList} from "react-native"
import messageData from "../../../assets/messages"
import MessageItem from "../../components/MessageItem"
function Index() {
  return (
      <View>
          <FlatList
              data={messageData}
              renderItem={({ item }) => <MessageItem item={item} />}/>
      </View>
  )
}

export default Index