import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function Index({ averageRating }: { averageRating: number }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("OtherUsersProfile")}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View>
            <View style={{ paddingLeft: 15 }}>
              <Image
                style={{ height: 50, width: 50, borderRadius: 20 }}
                source={{
                  uri:
                    'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
                }}
              />
            </View>
            <View
              style={{ position: 'absolute', left: 50, top: 40 }}
            >
              <AntDesign name="checkcircle" size={14} color="green" />
            </View>
          </View>
          <View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  paddingLeft: 8,
                  marginTop: 8,
                  fontSize: 16,
                }}
              >
                John Riblich
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 4,
                marginTop: 4,
              }}
            >
              {[...Array(5)].map((_, i) => (
                <View style={{ padding: 3 }} key={i}>
                  <FontAwesome
                    name="star"
                    size={20}
                    color={
                      i < Math.floor(averageRating)
                        ? '#FFD200'
                        : '#DFDFDF'
                    }
                  />
                </View>
              ))}
            </View>
          </View>
        </View>
        <View>
          <Feather name="chevron-right" size={28} color="grey" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Index;
