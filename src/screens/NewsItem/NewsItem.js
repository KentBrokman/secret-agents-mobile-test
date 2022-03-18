import { NativeBaseProvider, Spinner } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from "react-native"
import HTMLView from 'react-native-htmlview';
import api from '../../api/api';





export const NewsItemScreen = ({ newsId }) => {
    // local state
    const [newsItem, setNewsItem] = useState(null)
    //
    // life cycle methods
    useEffect(() => {
        async function fetchData() {
            const { data } = await api.get(`/news/${newsId}`)
            setNewsItem(data.news)
        }
        fetchData()
    }, [newsId])
    //
    return (
        <NativeBaseProvider>
            <ScrollView>
                {newsItem ?
                    <>
                        <Image
                            style={styles.image}
                            source={{
                                uri: newsItem.image_url,
                            }}
                        />
                        <View style={styles.textWrapper}>
                            <Text style={styles.title}>{newsItem.title}</Text>
                            <HTMLView
                                value={newsItem.body}
                            />
                        </View>
                    </> :
                    <Spinner size={'lg'} style={{marginTop: 90}}/>
                }

            </ScrollView>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        margin: 10,

        flexDirection: 'row',

        borderRadius: 6,
        backgroundColor: '#788EF1',
        overflow: 'hidden'
    },
    image: {
        height: 200,
        width: '100%'
    },
    textWrapper: {
        padding: 8,
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10
    }
})