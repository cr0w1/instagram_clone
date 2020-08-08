import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingBottom: 5,

    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)"
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: "space-between",
    
    padding: 8,
  },
  label: {
    fontSize: 14,
    padding: 5,
  },
  groupLabel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  containerScrollStory: {
    marginLeft: 10
  },
  myContainerItemStory: {
    width: 80,
    height: 80 ,

    justifyContent: "center",
    alignItems: "center",

    marginTop: 10,
  },
  myContainerPhoto: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    
    borderRadius: 30
  },
  myPhoto: {
    resizeMode: "cover",
    width: 56,
    height: 56,

    borderRadius: 30,
    borderWidth: 2,
  },
  containerItemStory: {
    width: 80,
    height: 80 ,

    justifyContent: "center",
    alignItems: "center",

    marginTop: 10,
  },
  ContainerPhoto: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    
    borderRadius: 30
  },
  photo: {
    resizeMode: "cover",
    width: 56,
    height: 56,

    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
  },
  name: {
    height: 25,
    fontSize: 12,

    padding: 5
  }
})

export default styles;