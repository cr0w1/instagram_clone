import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",

    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
  containerItemStory: { 
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  ContainerPhoto: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    
    borderRadius: 18.5
  },
  photo: {
    resizeMode: "cover",
    width: 32,
    height: 32,

    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#fff',
  },
  name: {
    height: 25,
    fontSize: 12,
    padding: 5
  },

  postPhoto: {
    height: 400,
    resizeMode: "cover",

    backgroundColor: '#000'
  },

  containerActions: {
    padding: 15
  },
  containerActionsIcons: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  groupIcons: {
    flexDirection: "row"
  },
  icon: {
    marginRight: 10
  }

})

export default styles;