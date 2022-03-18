
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

import { Navigation } from 'react-native-navigation';
import { useSelector } from 'react-redux';
import api from '../../../api/api';
import { selectAuthData } from '../../../store/ducks/user/selectors';
import { NewsItemElement } from './NewsItemElement';
import { Paginator } from './Paginator';



export const News = (props) => {
    //global state
    const authData = useSelector(selectAuthData)
    //
    // local state
    const [news, setNews] = useState([])
    const [newsToDisplay, setNewsToDisplay] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 10
    //
    // handlers
    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const onNewsItemPress = (newsId) => {
        Navigation.push('NEWS_SCREEN', {
            component: {
                name: 'NewsItemScreen',
                options: {
                    topBar: {
                        title: {
                            text: ''
                        }
                    }
                },
                passProps: {
                    newsId: newsId
                }
            }
        })
    }
    //
    // life cycle methods
    useEffect(() => {
        if (authData) {
            async function fetchData() {
                const { data } = await api.get('/news')
                // let testArr = []
                // for (let i = 0; i < 14; i++) {
                //     testArr = [...testArr, ...data.news]
                // }
                // setNews(testArr)
                setNews(data.news)
            }
            fetchData()
        }
    }, [authData])
    useEffect(() => {
        setNewsToDisplay(news.slice(currentPage * pageSize - pageSize, currentPage * pageSize))
    }, [news, currentPage])
    //
    return (
        <ScrollView>
            {news.length > 0 ?
                <View>
                    {newsToDisplay.map((item) => {
                        return <NewsItemElement key={item.id} item={item} onNewsItemPress={onNewsItemPress}/>
                    })}
                </View> :
                <Spinner size={'lg'} style={{ marginTop: 30 }} />
            }
            {news.length > 10 &&
                <Paginator
                    pageSize={pageSize}
                    totalItemsCount={news.length}
                    onPageChange={onPageChange}
                    currentPage={currentPage}
                />
            }
        </ScrollView>
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