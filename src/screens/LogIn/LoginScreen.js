import React, { useEffect, useState } from 'react';
import {
    TextInput,
    Text,
    View,
    Button
} from 'react-native';
import { Box, NativeBaseProvider, Spinner, useToast } from 'native-base';
import { Navigation } from "react-native-navigation";
import { mainRoot } from '../../..';
import { styles } from './LoginScreen_styles';

import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../store/ducks/user/thunks'
import { selectUser, selectUserLoadingStatus } from '../../store/ducks/user/selectors';
import { LoadingStatus } from '../../utils/utils';
import { LoginInput } from './components/LoginInput';
import { LoginButton } from './components/Button';
import { setLoadingStatus } from '../../store/ducks/user/actionCreators';


export const LoginScreen = () => {
    //utils
    const dispatch = useDispatch()
    //
    // global state
    const userLoadingStatus = useSelector(selectUserLoadingStatus)
    const userData = useSelector(selectUser)
    //
    // local state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //
    //handlers
    const onEmailChange = (text) => {
        setEmail(text)
    }
    const onPasswordChange = (text) => {
        setPassword(text)
    }
    //
    // life cicle methods
    useEffect(() => {
        if (userData) {
            Navigation.setRoot(mainRoot)
        }
        return () => {
            dispatch(setLoadingStatus(LoadingStatus.NEVER))
        }
    }, [userData])
    //
    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <Box style={styles.loginCard} shadow="6">
                    {userLoadingStatus === LoadingStatus.LOADING ?
                        <Spinner color="#137DD3" size='lg' style={{ height: "100%" }} /> :
                        <>
                            <Text style={styles.loginCard__title}>Вход</Text>
                            <View style={styles.loginCard__forms}>
                                <LoginInput
                                    type="email"
                                    value={email}
                                    onChange={onEmailChange}
                                />
                                <LoginInput
                                    type="password"
                                    value={password}
                                    onChange={onPasswordChange}
                                />
                            </View>
                            <LoginButton
                                // onPress={() => Navigation.setRoot(mainRoot)}
                                dispatch={dispatch}
                                email={email}
                                password={password}
                                userLoadingStatus={userLoadingStatus}
                                title='Login'
                            />
                        </>
                    }
                </Box>
            </View>
        </NativeBaseProvider>
    );
};