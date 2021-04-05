import React from 'react';
import {Pressable, View,StyleSheet} from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import {Formik} from 'formik';
import theme from '../theme';
import * as yup from 'yup';

const initialValues={
    username:'',
    password:''
};

const styles=StyleSheet.create({
    container:{
        padding:5
    },
    button:{
        textAlign:'center',
        backgroundColor:theme.colors.primary,
        color:'white'

    }
});

const validationSchema=yup.object().shape({
    username:yup
        .string()
        .required('username required'),
    password:yup
        .string()
        .required('password required')
});

const SignInForm=({onSubmit})=>{
    return(
        <View style={styles.container}>
            <FormikTextInput  name='username' placeholder='username'/>
            <FormikTextInput  name='password' placeholder='password' secureTextEntry={true}/>
            <Pressable onPress={onSubmit}>
                <View style={styles.button}>
                <Text style={styles.button}>Sign in</Text>
                </View>
            </Pressable>
        </View>
    );
};

const SignIn=()=>{
    const onSubmit=values=>{
        const username=values.username;
        const password=values.password;

        console.log(username,password);
    };
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({handleSubmit})=><SignInForm onSubmit={handleSubmit}/>}
        </Formik>
    );

};

export default SignIn;