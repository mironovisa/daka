import React from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function Index() {
  const averageRating = 3;
  return (
    <View style={{ flexDirection: 'row', padding: 4 }}>
      <View style={{paddingRight: 20, paddingLeft: 15}}>
        <Image
          style={{ height: 90, width: 90, borderRadius: 50 }}
          source={{
            uri:
              'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
          }}
        />
      </View>
      <View>
        <View style={{ paddingLeft: 10, paddingBottom: 5 }}>
          <Text style={{ fontSize: 19 }}>John Debusy</Text>
        </View>
        <View style={{ paddingLeft: 10, paddingBottom: 5 }}>
          <Text style={{ fontSize: 19, fontWeight: 'bold' }}>Ashdod</Text>
        </View>
        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: 'normal' }}>
            2 items on sale
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
              color={i < Math.floor(averageRating) ? '#FFD200' : '#DFDFDF'}
            />
          </View>
        ))}
      </View>
      </View>
    </View>
  );
}

export default Index;
