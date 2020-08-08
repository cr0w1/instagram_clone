import React from 'react'

import { Entypo } from '@expo/vector-icons'

import {
    View,
    Text
} from 'react-native'

import styles from './styles'

export default function InstaButton() {
    return (
        <View style={styles.container}>
            <Entypo name="plus" size={22} color="#000" />
        </View>
    )
}