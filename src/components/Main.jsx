import React from 'react';
import {StyleSheet,View} from 'react-native';
import {Route,Switch,Redirect} from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';

const styles=StyleSheet.create({
    constainer: {
        flexGrow:1,
        flexShrink:1,
        backgroundColor:'#e1e4e8'
    },
});

const Main = () => {
    return(
        <View style={styles.constainer}>
            <AppBar/>
            <Switch>
                <Route path='/signin' exact>
                    <SignIn />
                </Route>
                <Route path="/" exact>
                    <RepositoryList />
                </Route>
                <Redirect to='/'/>
            </Switch>
        </View>
    );
};

export default Main;