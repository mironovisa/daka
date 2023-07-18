import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Switch,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import carBrands from "../data/cars.en.json";
import styles from "@app/components/CategoryFilter/styles";
import { ScrollView } from "react-native-gesture-handler";
import { SegmentedButtons } from "react-native-paper";
const { width, height } = Dimensions.get("screen");

const CarComponent = ({ setAllDataGathered }) => {
  const [carData, setCarData] = useState({
    selectedBrand: "",
    selectedModel: "",
    carYear: "",
    carOwners: "",
    transmission: "",
    fuelType: "",
    mileage: "",
    cdPlayer: false,
    auxBuiltIn: false,
    mp3Player: false,
    radio: false,
    usbPort: false,
    tvPlayer: false,
    bluetooth: false,
    gpsNavigation: false,
    wheelMediaControls: false,
    powerSteering: "",
    climateControl: "",
    interiorType: "",
    powerWindows: "",
    powerDrive: "",
    drivingAssistance: "",
    multimediaNavigation: "", // Added field for Multimedia and Navigation
    audioSystem: "", // Added field for Audio System
    headlights: "", // Added field for Headlights
    additionalLighting: "", // Added field for Additional Lighting
    tiresAndWheels: "", // Added field for Tires and Wheels
  });
  const [value, setValue] = React.useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const years = Array.from(
    { length: 2023 - 1950 + 1 },
    (_, index) => 2023 - index
  );
  const owners = ["New", "1", "2", "3", "4", "5+"];
  const transMissions = ["AT", "MT"];
  const fuelTypes = ["92-98 Benz", "Diesel", "Electric", "Gas"];
  const handleBrandChange = (value) => {
    setCarData((prevState) => ({
      ...prevState,
      selectedBrand: value,
      selectedModel: "",
    }));
  };

  useEffect(() => {
    const requiredFields = [
      "selectedBrand",
      "selectedModel",
      "carYear",
      "carOwners",
      "transmission",
      "fuelType",
      "mileage",
    ];

    const allValuesPresent = requiredFields.every(
      (field) => carData[field] !== ""
    );
    if (allValuesPresent) {
      setAllDataGathered(true);
    }
  }, [carData, setAllDataGathered]);

  const handleRequiredValuesGathered = () => {
    
  }

  const handlePowerSteeringChange = (value) => {
    setCarData((prevState) => ({
      ...prevState,
      powerSteering: value,
    }));
  };
  const handleModelChange = (value) => {
    setCarData((prevState) => ({
      ...prevState,
      selectedModel: value,
    }));
  };

  const handleYearChoose = (value) => {
    setCarData((prevState) => ({
      ...prevState,
      carYear: value,
    }));
  };

  const handleCarOwnersChoose = (value) => {
    setCarData((prevState) => ({
      ...prevState,
      carOwners: value,
    }));
  };

  const handleChooseTransmission = (value) => {
    setCarData((prevState) => ({
      ...prevState,
      transmission: value,
    }));
  };

  const handleChooseFuelType = (value) => {
    setCarData((prevState) => ({
      ...prevState,
      fuelType: value,
    }));
  };

  const handleAddMileage = (value) => {
    setCarData((prevState) => ({
      ...prevState,
      mileage: value,
    }));
  };

  const toggleSwitch = (switchName) => {
    setCarData((prevState) => ({
      ...prevState,
      [switchName]: !prevState[switchName],
    }));
  };

  const handlePowerWindowsChoose = (value) => {
    setCarData((prevState) => ({
      ...prevState,
      powerWindows: value,
    }));
  };

  const handleInteriorChoose = (value) => {
    setCarData((prevState) => ({
      ...prevState,
      interiorType: value,
    }));
  };

  const handlePowerDriveChoose = (value) => {
    setCarData((prevState) => ({
      ...prevState,
      powerDrive: value,
    }));
  };

  const handleClimateChoose = (value) => {
    setCarData((prevState) => ({
      ...prevState,
      climateControl: value,
    }));
  };
  const handleDrivingAssistanceChoose = (value) => {
    setCarData((prevState) => ({
      ...prevState,
      drivingAssistance: value,
    }));
  };

  const handleMultimediaNavigationChoose = (value) => {
    setCarData((prevState) => ({
      ...prevState,
      multimediaNavigation: value,
    }));
  };

  const handleAudioSystemChoose = (value) => {
    setCarData((prevState) => ({
      ...prevState,
      audioSystem: value,
    }));
  };

  const handleHeadlightsChoose = (value) => {
    setCarData((prevState) => ({
      ...prevState,
      headlights: value,
    }));
  };

  const handleAdditionalLightingChoose = (value) => {
    setCarData((prevState) => ({
      ...prevState,
      additionalLighting: value,
    }));
  };

  const handleTiresAndWheelsChoose = (value) => {
    setCarData((prevState) => ({
      ...prevState,
      tiresAndWheels: value,
    }));
  };
  const handleCdChange = () => {
    setCarData((prevState) => ({
      ...prevState,
      cdPlayer: !prevState.cdPlayer,
    }));
  };
  const handleAuxChange = () => {
    setCarData((prevState) => ({
      ...prevState,
      auxBuiltIn: !prevState.auxBuiltIn,
    }));
  };
  const handleMP3Change = () => {
    setCarData((prevState) => ({
      ...prevState,
      mp3Player: !prevState.mp3Player,
    }));
  };
  const handleRadioChange = () => {
    setCarData((prevState) => ({
      ...prevState,
      radio: !prevState.radio,
    }));
  };
  const handleUSBPortChange = () => {
    setCarData((prevState) => ({
      ...prevState,
      usbPort: !prevState.usbPort,
    }));
  };
  const handleBTChange = () => {
    setCarData((prevState) => ({
      ...prevState,
      bluetooth: !prevState.bluetooth,
    }));
  };

  const handleGPSChange = () => {
    setCarData((prevState) => ({
      ...prevState,
      gpsNavigation: !prevState.gpsNavigation,
    }));
  };
  const handleTVChange = () => {
    setCarData((prevState) => ({
      ...prevState,
      tvPlayer: !prevState.tvPlayer,
    }));
  };
  const handleMediaControlsChange = () => {
    setCarData((prevState) => ({
      ...prevState,
      wheelMediaControls: !prevState.wheelMediaControls,
    }));
  };
  return (
    <View style={pickerSelectStyles.container}>
      <ScrollView style={{ height: height, marginBottom: 500 }}>
        <View style={pickerSelectStyles.containerTwo}>
          <Text style={pickerSelectStyles.text}>Select Car Brand:</Text>
          <View>
            <RNPickerSelect
              value={carData.selectedBrand}
              onValueChange={handleBrandChange}
              items={carBrands.carBrands.map((brand) => ({
                label: brand.name,
                value: brand.name,
              }))}
              style={pickerSelectStyles}
            />
          </View>
          {carData.selectedBrand !== "" && (
            <View>
              <Text style={pickerSelectStyles.text}>Select Model:</Text>
              <RNPickerSelect
                value={carData.selectedModel}
                onValueChange={handleModelChange}
                items={carBrands.carBrands
                  .find((brand) => brand.name === carData.selectedBrand)
                  .models.map((model) => ({ label: model, value: model }))}
                style={pickerSelectStyles}
              />
            </View>
          )}
          {carData.selectedBrand && carData.selectedModel && (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={pickerSelectStyles.inputHalves}>
                  <Text style={pickerSelectStyles.text}>Year:</Text>
                  <RNPickerSelect
                    value={carData.carYear}
                    onValueChange={handleYearChoose}
                    items={years.map((year) => ({
                      label: year.toString(),
                      value: year.toString(),
                    }))}
                    style={pickerSelectStyles}
                  />
                </View>
                <View style={pickerSelectStyles.inputHalves}>
                  <Text style={pickerSelectStyles.text}>Owners:</Text>
                  <RNPickerSelect
                    value={carData.carOwners}
                    onValueChange={handleCarOwnersChoose}
                    items={owners.map((year) => ({
                      label: year.toString(),
                      value: year.toString(),
                    }))}
                    style={pickerSelectStyles}
                  />
                </View>
              </View>
              <View>
                <Text style={pickerSelectStyles.text}>Mileage:</Text>
                <TextInput
                  style={pickerSelectStyles.input}
                  value={carData.mileage}
                  onChangeText={handleAddMileage}
                  placeholder="Type it here..."
                  keyboardType="number-pad"
                  keyboardAppearance="default"
                  returnKeyType="done" // Add returnKeyType prop with "done" value
                  onSubmitEditing={() => Keyboard.dismiss()} // Dismiss the keyboard when "Done" is pressed
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={pickerSelectStyles.inputHalves}>
                  <Text style={pickerSelectStyles.text}>Transmission:</Text>
                  <RNPickerSelect
                    value={carData.transmission}
                    onValueChange={handleChooseTransmission}
                    items={transMissions.map((tm) => ({
                      label: tm.toString(),
                      value: tm.toString(),
                    }))}
                    style={pickerSelectStyles}
                  />
                </View>
                <View style={pickerSelectStyles.inputHalves}>
                  <Text style={pickerSelectStyles.text}>Fuel:</Text>
                  <RNPickerSelect
                    value={carData.fuelType}
                    onValueChange={handleChooseFuelType}
                    items={fuelTypes.map((ft) => ({
                      label: ft.toString(),
                      value: ft.toString(),
                    }))}
                    style={pickerSelectStyles}
                  />
                </View>
              </View>
              <View style={{ marginHorizontal: 5, paddingTop: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    paddingTop: 10,
                    paddingBottom: 10,
                    fontWeight: "bold",
                  }}
                >
                  Multimedia and Navigation
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 12,
                    }}
                  >
                    <Text style={{ fontSize: 16 }}>CD</Text>
                    <View style={{ marginLeft: 16 }}>
                      <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={carData.cdPlayer ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={handleCdChange}
                        value={carData.cdPlayer}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 12,
                    }}
                  >
                    <Text style={{ fontSize: 16 }}>AUX</Text>
                    <View style={{ marginLeft: 16 }}>
                      <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={carData.auxBuiltIn ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={handleAuxChange}
                        value={carData.auxBuiltIn}
                      />
                    </View>
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 12,
                      }}
                    >
                      <Text style={{ fontSize: 16 }}>MP3</Text>
                      <View style={{ marginLeft: 16 }}>
                        <Switch
                          trackColor={{ false: "#767577", true: "#81b0ff" }}
                          thumbColor={carData.mp3Player ? "#f5dd4b" : "#f4f3f4"}
                          ios_backgroundColor="#3e3e3e"
                          onValueChange={handleMP3Change}
                          value={carData.mp3Player}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 12,
                    }}
                  >
                    <Text style={{ fontSize: 16 }}>Radio </Text>
                    <View style={{ marginLeft: 16 }}>
                      <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={carData.radio ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={handleRadioChange}
                        value={carData.radio}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 12,
                    }}
                  >
                    <Text style={{ fontSize: 16 }}>USB</Text>
                    <View style={{ marginLeft: 16 }}>
                      <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={carData.usbPort ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={handleUSBPortChange}
                        value={carData.usbPort}
                      />
                    </View>
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 12,
                      }}
                    >
                      <Text style={{ fontSize: 16 }}>GPS</Text>
                      <View style={{ marginLeft: 16 }}>
                        <Switch
                          trackColor={{ false: "#767577", true: "#81b0ff" }}
                          thumbColor={
                            carData.gpsNavigation ? "#f5dd4b" : "#f4f3f4"
                          }
                          ios_backgroundColor="#3e3e3e"
                          onValueChange={handleGPSChange}
                          value={carData.gpsNavigation}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 12,
                    }}
                  >
                    <Text style={{ fontSize: 16 }}>Wheel Controls</Text>
                    <View style={{ marginLeft: 16 }}>
                      <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={
                          carData.wheelMediaControls ? "#f5dd4b" : "#f4f3f4"
                        }
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={handleMediaControlsChange}
                        value={carData.wheelMediaControls}
                      />
                    </View>
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 12,
                      }}
                    >
                      <Text style={{ fontSize: 16 }}>Bluetooth</Text>
                      <View style={{ marginLeft: 16 }}>
                        <Switch
                          trackColor={{ false: "#767577", true: "#81b0ff" }}
                          thumbColor={carData.bluetooth ? "#f5dd4b" : "#f4f3f4"}
                          ios_backgroundColor="#3e3e3e"
                          onValueChange={handleBTChange}
                          value={carData.bluetooth}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <Text style={pickerSelectStyles.headings}>Power Steering</Text>
                <SegmentedButtons
                  value={carData.powerSteering}
                  onValueChange={handlePowerSteeringChange}
                  buttons={[
                    {
                      value: "Hydraulic",
                      label: "Hydraulic",
                    },
                    { value: "E-hydraulic", label: "E-hydraulic" },
                    {
                      value: "Electric",
                      label: "Electric",
                    },
                  ]}
                />
              </View>
              <View>
                <Text style={pickerSelectStyles.headings}>Climate Control</Text>
                <SegmentedButtons
                  value={carData.climateControl}
                  onValueChange={handleClimateChoose}
                  buttons={[
                    {
                      value: "A/C",
                      label: "A/C",
                    },
                    { value: "Single-zone", label: "Single-zone" },
                    {
                      value: "Multi-zone",
                      label: "Multi-zone",
                    },
                  ]}
                />
              </View>
              <View>
                <Text style={pickerSelectStyles.headings}>Interior</Text>
                <SegmentedButtons
                  value={carData.interiorType}
                  onValueChange={handleInteriorChoose}
                  buttons={[
                    {
                      value: "Leather",
                      label: "Leather",
                    },
                    { value: "Fabric", label: "Fabric" },
                    {
                      value: "Velour",
                      label: "Velour",
                    },
                    {
                      value: "Combined",
                      label: "Combined",
                    },
                  ]}
                />
              </View>
              <View>
                <Text style={pickerSelectStyles.headings}>Power windows</Text>
                <SegmentedButtons
                  value={carData.powerWindows}
                  onValueChange={handlePowerWindowsChoose}
                  buttons={[
                    {
                      value: "Front only",
                      label: "Front only",
                    },
                    {
                      value: "Front and Rear",
                      label: "Front and Rear",
                    },
                  ]}
                />
              </View>
              <View>
                <Text style={pickerSelectStyles.headings}>Power drive</Text>
                <SegmentedButtons
                  value={carData.powerDrive}
                  onValueChange={handlePowerDriveChoose}
                  buttons={[
                    {
                      value: "Front Seats",
                      label: "Front Seats",
                    },
                    { value: "Rear Seats", label: "Rear Seats" },
                    { value: "Mirrors", label: "Mirrors" },
                  ]}
                />
              </View>
              <View>
                <Text style={pickerSelectStyles.headings}>
                  Driving Assistance:
                </Text>
                <SegmentedButtons
                  value={carData.drivingAssistance}
                  onValueChange={handleDrivingAssistanceChoose}
                  buttons={[
                    {
                      value: "Auto Parking",
                      label: "Auto Parking",
                    },

                    { value: "Parking Sensors", label: "Parking Sensors" },
                  ]}
                  style={{
                    marginTop: 2,
                    marginBottom: 2,
                  }}
                />
                <SegmentedButtons
                  value={carData.drivingAssistance}
                  onValueChange={handleDrivingAssistanceChoose}
                  buttons={[
                    {
                      value: "Blind Spot Monitoring",
                      label: "Blind Spot Monitoring",
                    },
                    {
                      value: "Rain Sensor",
                      label: "Rain Sensor",
                    },
                  ]}
                />
              </View>
            </View>
          )}
        </View>
        <View>{/* <Text style={{ margin: 150 }}>End</Text> */}</View>
      </ScrollView>
    </View>
  );
};
const pickerSelectStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "white",
  },
  containerTwo: {
    backgroundColor: "white",
    height: "100%",
    paddingTop: 10,
    marginHorizontal: 5,
    paddingHorizontal: 5,
  },
  text: {
    fontSize: 16,
    padding: 10,
    fontWeight: "bold",
  },
  inputHalves: {
    width: width * 0.45,
    justifyContent: "space-between",
  },
  headings: {
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
    fontWeight: "bold",
  },
  input: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#97B858",
    color: "black",
    paddingRight: 30,
    backgroundColor: "#e3e3e3",
    marginBottom: 10, // Add any spacing you want between the TextInput and other elements
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#97B858",
    color: "black",
    // to ensure the text is never behind the icon
    backgroundColor: "#e3e3e3", // change the background color if needed// set a minimum width for the input on iOS
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: "black", // to ensure the text is never behind the icon
    backgroundColor: "#FFFFFC", // change the background color if needed // set a minimum width for the input on Android
  },
});
export default CarComponent;
