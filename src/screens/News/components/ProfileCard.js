import { Box, Avatar, HamburgerIcon, IconButton, useDisclose, Actionsheet } from 'native-base';
import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';
import { loginRoot } from '../../../..';
import { setLoadingStatus, setUserData } from '../../../store/ducks/user/actionCreators';
import { selectUser } from '../../../store/ducks/user/selectors';
import { LoadingStatus } from '../../../utils/utils';


export const ProfileCard = () => {
    // utils
    const dispatch = useDispatch()
    //
    // global state
    const userData = useSelector(selectUser)
    //
    // local state
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();
    //
    // handlers
    const onLogOutClick = () => {
        dispatch(setUserData({user: null, authData: null}))
        dispatch(setLoadingStatus(LoadingStatus.NEVER))  
        // Navigation.setRoot(loginRoot)
    }
    //
    return (
        <>
            <Box style={styles.container} rounded={'xl'} >
                <View style={styles.leftSide}>
                    <Avatar source={{ uri: userData && userData.avatar_url }} size='lg' />
                    <Text style={styles.name}>{userData && userData.username}</Text>
                </View>
                <IconButton icon={<HamburgerIcon />} onPress={onOpen} />
            </Box>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                    <Box w="100%" h={60} px={4} justifyContent="center">
                        <Text fontSize="16" color="gray.500" _dark={{
                            color: 'gray.300'
                        }}>
                            Настройки
                        </Text>
                    </Box>
                    <Actionsheet.Item onPress={onLogOutClick}>Выйти</Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        // width: '90%',
        paddingHorizontal: 16,
        margin: 10,
        height: 100,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        backgroundColor: "white",
        elevation: 10,
        borderRadius: 12
    },
    leftSide: {
        // marginLeft: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',

        marginLeft: 10
    }
})