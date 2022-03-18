import React, { useEffect } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useSelector } from 'react-redux';
import { loginRoot, mainRoot } from '../../..';
import { selectUser } from '../../store/ducks/user/selectors';


export const InitScreen = () => {
    // global state
    const userData = useSelector(selectUser)
    //
    // life cicle methods
    useEffect(() => {
        if (userData) {
            Navigation.setRoot(mainRoot)
        } else {
            Navigation.setRoot(loginRoot)
        }
    }, [userData])
    //
    return (
        <View style={styles.container}>
        </View>
    );
};

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'rgb(16,65,251)'
    }
})