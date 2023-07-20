import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import categoriesFields from "./categoriesFields.json";
import componentRegistry from "./componentRegistry";
import { useRoute } from "@react-navigation/native";
import { TryContext } from "../../context/tryoutCont";
const OptionalData = (props) => {
  const pickedCategory = props.route.params.pickedCategory;
  const componentInfo = categoriesFields[pickedCategory];
  // const [allDataGathered, setAllDataGathered] = useState(false);
  const componentName = componentInfo?.componentName || null;
  const componentProps = {
    ...componentInfo?.props,
  };
  const { userSub, category, subcategory } = useContext(TryContext);
  const route = useRoute();
  const { handleSetAllDataGathered, allDataGathered, setAllDataGathered } =
    route.params;

  if (!componentName) {
    return (
      <View>
        <Text>No component found for the picked category.</Text>
      </View>
    );
  }

  useEffect(() => {
    console.log("Category selected", category);
    console.log("SubCategory selected", subcategory);
    console.log("UserSub selected", userSub);
  }, []);
  const ComponentToRender = componentRegistry[componentName];

  if (!ComponentToRender) {
    return (
      <View>
        <Text>Component not found in the registry.</Text>
      </View>
    );
  }

  return (
    <View>
      <ComponentToRender
        {...componentProps}
        setAllDataGathered={setAllDataGathered}
      />
    </View>
  );
};

export default OptionalData;
