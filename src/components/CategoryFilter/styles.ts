import { StyleSheet,Dimensions } from "react-native";

const {height,width} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  center:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10

  },
  scrollStyle:{
    //   backgroundColor:'red',
       height:height*0.085,
       marginBottom:20,
       marginTop:20,
       paddingHorizontal:8
   },
  image: { height: 52, width: 52, borderRadius: 26 },
   
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryIcon: {
    marginTop: 10,
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  categoryTitle: {
    marginTop: 10,
    textAlign: 'center',
  },
});

export default styles;
