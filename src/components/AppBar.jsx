import React from 'react';
import {View,StyleSheet,ScrollView} from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';


const styles=StyleSheet.create({
    container:{
        paddingTop:Constants.statusBarHeight,
        display:'flex',        
        backgroundColor:'#24292e',       
    },
    scroll:{
        flexDirection:'row',
        
    },
});



const AppBar=()=>{
    return (
    <View style={styles.container}>
        <ScrollView horizontal style={styles.scroll}>
            <AppBarTab text='Repositories' link='/'/>
            <AppBarTab text='Sign in' link='/signin'/>
        </ScrollView>
    </View>
    );
};

export default AppBar;