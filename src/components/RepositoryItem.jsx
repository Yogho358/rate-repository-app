import React from 'react';
import {View,StyleSheet,Image} from 'react-native';
import Text from './Text';
import theme from '../theme';


const numberFormatter=(num)=>{
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
};

const RepositoryItem=({item})=>{

    const styles=StyleSheet.create({
        item:{
            backgroundColor:'white',
            padding:20
        },
        center:{
            display:'flex',
            flex:1,
        },
        language:{
            display:'flex',
            backgroundColor:theme.colors.primary,
            flexGrow:0,
            color:'white',
        },
        row:{
            display:'flex',
            flexDirection:'row'
        }
    });

    const Center=()=>{
        
        return (
            <View style={styles.center}>              
                <Text fontSize='subheading' fontWeight='bold'>
                    {item.fullName}
                </Text>
                <Text color='textSecondary'>
                    {item.description}
                </Text>
                <View style={styles.row}>
                
                    <Text style={styles.language}>
                        {item.language}
                    </Text>
                
                </View>
            </View>
        );
    };

    const Img=()=>{
        return (
            <View>
                <Image style={{width:30,height:30}} source={{uri:item.ownerAvatarUrl}}/>
            </View>
        );
    };

    const Stars=()=>{
        const starAmount=numberFormatter(item.stargazersCount);
        return(
            <View style={styles.center}>
                <Text fontSize='subheading' fontWeight='bold'>{starAmount}</Text>
                <Text color='textSecondary'>Stars</Text>
            </View>
        );
    };

    const Forks=()=>{
        const forkAmount=numberFormatter(item.forksCount);
        return (
            <View style={styles.center}>
                <Text fontSize='subheading' fontWeight='bold'>{forkAmount}</Text>
                <Text color='textSecondary'>Forks</Text>
            </View>
        );
    };

    const Reviews=()=>{
        const reviewAmount=numberFormatter(item.reviewCount);
        return(
            <View style={styles.center}>
                <Text fontSize='subheading' fontWeight='bold'>{reviewAmount}</Text>
                <Text color='textSecondary'>Reviews</Text>
            </View>
        );
    };

    const Rating=()=>{
        return(
            <View style={styles.center}>
                <Text fontSize='subheading' fontWeight='bold'>{item.ratingAverage}</Text>
                <Text color='textSecondary'>Rating</Text>
            </View>
        );
    };

    return(
        <View style={styles.item}>
        <View style={styles.center}>
            <View style={styles.row}>
                <Img/>
                <Center/>
            </View>
            <View style={styles.row}>
                <Stars/>
                <Forks/>
                <Reviews/>
                <Rating/>
            </View>
        </View>
        </View>
       
    );
};

export default RepositoryItem;