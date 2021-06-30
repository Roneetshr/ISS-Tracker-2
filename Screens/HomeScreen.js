import React,{ Component } from "react";
import { Text,View,TouchableOpacity,SafeAreaView,StyleSheet,Image,ImageBackground, Platform, StatusBar } from "react-native";

export default class HomeScreen extends Component{
render(){
    return(
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }}>
            <View>
            <SafeAreaView style = {styles.droidSafeArea}></SafeAreaView>
            <Text style = {styles.titleBar}>
               ISS Tracker App
            </Text>
            </View>

            <TouchableOpacity style = {styles.routeCard}>
            <Text style = {styles.routeText}> ISS Location </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.routeCard}>
            <Text style = {styles.routeText}> Meteor </Text>
            </TouchableOpacity>

        </View>
    )
}


};
const styles = StyleSheet.create({
container: {
flex:1,
},
droidSafeArea: {
marginTop: Platform.OS==="android"? StatusBar.currentHeight : 0
}, 
titleBar: {
flex:0.15,
justifyContent:'center',
alignItems:'center',
},
routeCard: {
flex:0.25,
marginLeft:50,
marginRight:50,
marginTop:50,
borderRadius:30,
backgroundColor:'white',
},
routeText: {
fontSize:35,
fontWeight:'bold',
color:'black',
marginTop:75,
marginLeft:30,
}

})