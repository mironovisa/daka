import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { TryContext } from '../../context/tryoutCont';
import ComponentA from './addItemPhotoNameDescPriceComp';

interface ComponentBProps {
  text: string;
}

const ComponentB: React.FC<ComponentBProps> = ({ text }) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

function MyComponent() {
  const { value, userSub, category, subcategory } = useContext(TryContext);

  const renderSubcategoryComponent = () => {
    if (subcategory === 'daa3ccc4-2edc-4cbc-a986-e7deb2d3520e') {
      return <ComponentA text="Wow, you wanna sell a car!" />;
    } else if (subcategory === 'd856d8e6-e1d1-46db-9d04-d4656669573e') {
      return <ComponentB text="SELL YOUR F O NE" />;
    } else {
      return null;
    }
  };

  return (
    <View>
      {/* <Text>Value from Context: {value}</Text>
      <Text>UserSub: {userSub}</Text>
      <Text>Category: {category}</Text>
      <Text>Subcategory: {subcategory}</Text> */}
      
      {renderSubcategoryComponent()}
    </View>
  );
}

export default MyComponent;
