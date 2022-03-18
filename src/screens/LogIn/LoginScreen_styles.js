import {
    StyleSheet
} from 'react-native';



export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'rgb(16,65,251)'
    },

    loginCard: {
        height: 300,
        width: '80%',
        paddingVertical: 20,
        
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'white',
        borderRadius: 6,
    },
    loginCard__title: {
        fontSize: 34,
        fontWeight: "500",
        color: 'black'
    },
    loginCard__forms: {
        width: '70%',
        height: 120,

        justifyContent: 'space-between',
    }
});