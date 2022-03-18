
import React, { useEffect, useState } from 'react';
import {
    TextInput,
    StyleSheet
} from 'react-native';


export const LoginInput = ({ type, value, onChange }) => {
    // local state
    const [focused, setFocused] = useState(false)
    const [placeholder, setPlaceholder] = useState('')
    //
    // handlers
    const inputOnFocus = () => {
        setFocused(true)
    }
    const inputFocusOut = () => {
        setFocused(false)
    }
    //
    //life cicle methods
    useEffect(() => {
        if (type === 'password') {
            setPlaceholder('Пароль')
        }
        if (type === 'email') {
            setPlaceholder('Email')
        }
    }, [])
    //
    return (
        <TextInput
            value={value}
            onChangeText={onChange}
            onEndEditing={inputFocusOut}
            onFocus={inputOnFocus}
            selectionColor='black'
            style={focused ? styles.inputFocused : styles.input}
            placeholder={placeholder}
            secureTextEntry={type === 'password'}
        />
    )
}


const styles = StyleSheet.create({
    input: {
        paddingStart: 10,
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#BABABA'
    },
    inputFocused: {
        paddingStart: 10,
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'rgb(16,65,251)'
    }
})