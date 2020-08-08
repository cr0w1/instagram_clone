import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: 26,
        height: 26,

        borderWidth: 1,
        borderRadius: 13,
    },
    image: {
        width: 26,
        height: 26,

        borderRadius: 13,
        borderWidth: 1,

        resizeMode: 'cover',
        justifyContent: "center"
    }
})

export default styles;