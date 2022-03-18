import { Button, ChevronLeftIcon, ChevronRightIcon, IconButton } from "native-base"
import React, { useState } from "react"
import { StyleSheet, View } from "react-native"



export const Paginator = ({
    totalItemsCount,
    pageSize = 10,
    portionSize = 5,
    onPageChange,
    currentPage
}) => {
    const pages = []                                            // номера страниц
    const pagesCount = Math.ceil(totalItemsCount / pageSize)    // кол-во страниц
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    
    const portionsCount = Math.ceil(pagesCount / portionSize)       // кол-во страниц, отображаемых на странице в данный момент
    const [portionNumber, setPortionNumber] = useState(1);            // текущая отображаемая порция
    const leftPortionBorder = (portionNumber - 1) * portionSize + 1;
    const portionRightBorder = portionNumber * portionSize;
    return (
        <View style={styles.container}>
            {pages.length > 5 &&
                <IconButton
                    icon={<ChevronLeftIcon />}
                    onPress={() => setPortionNumber(portionNumber - 1)}
                    isDisabled={portionNumber === 1}>
                </IconButton>
            }
            <View style={styles.pages}>
                {pages.filter(page => page >= leftPortionBorder && page <= portionRightBorder)
                    .map(p => {
                        return (
                            <Button
                                color='primary'
                                style={styles.pageButton}
                                onPress={() => onPageChange(p)}
                                key={p}
                                isDisabled={currentPage === p}
                            >{p}</Button>
                        )
                    }
                    )
                }
            </View>
            {pages.length > 5 &&
                <IconButton
                    icon={<ChevronRightIcon />}
                    onPress={() => setPortionNumber(portionNumber + 1)}
                    isDisabled={portionNumber === portionsCount}>
                </IconButton>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 8,
        marginBottom: 14,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    pages: {
        flexDirection: 'row'
    },
    pageButton: {
        marginHorizontal: 6
    }
})