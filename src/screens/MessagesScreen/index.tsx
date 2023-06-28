import React, { useEffect, useState } from 'react'
import {View, Text, FlatList} from "react-native"
import MessageItem from "../../components/MessageItem"
import { Message } from '../../models'
import { DataStore } from 'aws-amplify'
function Index() {
  const [messages, setMessages] = useState<Message[]>([])
  useEffect((
  ) => { DataStore.query(Message).then(setMessages) }, [])
  if (!messages) return <ActivityIndicator/>
  return (
      <View>
          <FlatList
              data={messages}
              renderItem={({ item }) => <MessageItem item={item} />}/>
      </View>
  )
}

export default Index