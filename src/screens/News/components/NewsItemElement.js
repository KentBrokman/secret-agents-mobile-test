import { Box, Spinner } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    ScrollView,
    Pressable
} from 'react-native';
import HTMLView from 'react-native-htmlview';




export const NewsItemElement = ({item, onNewsItemPress}) => {
    const [pressed, setPressed] = useState(false)
    let newsId = item.id
    return (
        <Pressable
            key={item.id}
            onPress={() => onNewsItemPress(newsId)}
            unstable_pressDelay={100}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
        >
            {() => {
                return <Box
                    // maxW="96" borderWidth="1" p="5" rounded="8" h='120'
                    style={{
                        ...styles.container,
                        transform: [{
                            scale: pressed ? 0.96 : 1
                        }],
                    }} >
                    <Image
                        style={styles.image}
                        source={{
                            uri: item.image_url,
                        }}
                    />
                    <View style={styles.textWrapper}>
                        <Text style={styles.title}>{item.title}</Text>
                        <HTMLView value={item.short_text} />
                    </View>
                </Box>
            }}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        marginHorizontal: 10,
        marginBottom: 10,

        flexDirection: 'row',

        borderRadius: 6,
        backgroundColor: '#788EF1',
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '40%'
    },
    textWrapper: {
        padding: 8,
        width: '60%',
        flexWrap: 'nowrap'
    },
    title: {
        fontSize: 18,
        fontWeight: '600'
    }
})