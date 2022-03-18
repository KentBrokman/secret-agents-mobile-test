import React, { useEffect } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useToast } from 'native-base';
import { getUserData } from '../../../store/ducks/user/thunks';
import { LoadingStatus } from '../../../utils/utils';
import { setLoadingStatus } from '../../../store/ducks/user/actionCreators';

export const LoginButton = ({ dispatch, title, email, password, userLoadingStatus }) => {
  const toast = useToast()
  const onLoginPress = () => {
    if (!email || !password) {
      toast.show({
        title: "Введите email и пароль!",
        status: "error",
        placement: "top",
      })
      return
    }
    dispatch(getUserData(email, password))
  }
  useEffect(() => {
    if (userLoadingStatus === LoadingStatus.ERROR) {
      toast.show({
        title: "Неверный email или пароль!",
        status: "error",
        placement: "top",
      })
    }
  }, [userLoadingStatus])
  return (
    <TouchableOpacity onPress={onLoginPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
};


const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 8,
    backgroundColor: "#137DD3",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
})