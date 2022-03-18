import { Avatar, Box, NativeBaseProvider } from 'native-base';
import React, { useEffect } from 'react';
import {
    TextInput,
    Text,
    View,
    Button
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useSelector } from 'react-redux';
import { loginRoot } from '../../..';
import { TestComponent } from '../../components/TestComponent';
import { selectUser } from '../../store/ducks/user/selectors';
import { News } from './components/News';
import { ProfileCard } from './components/ProfileCard';
import { styles } from './NewsScreen_styles';


export const NewsScreen = () => {
    const userData = useSelector(selectUser)
    useEffect(() => {
        if(!userData) {
            Navigation.setRoot(loginRoot)
        }
    }, [userData])
    return (
        <NativeBaseProvider>
            <View style={styles.wrapper}>
                <ProfileCard />
                {/* <TestComponent /> */}
                <News />
            </View>
        </NativeBaseProvider>
    );
};


