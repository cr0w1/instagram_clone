import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    height: 40,

    paddingLeft: 10,
    paddingRight: 10,

    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center',

    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)"
  },
  logo: {
    resizeMode: 'contain',
    height: 35
  }
})

export default styles;