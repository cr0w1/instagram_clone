import React from 'react'

import { ImageBackground , Image } from 'react-native'

import {
    View,
    Text
} from 'react-native'

import styles from './styles'

export default function InstaButton() {
    return (
        <View style={styles.container}>
            <Image
                source={{uri : 'https://i.imgur.com/gf6BsdT.jpg'}}
                style={styles.image}
            />
        </View>
    )
}