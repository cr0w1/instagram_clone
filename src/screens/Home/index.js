import React from 'react'

import { 
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

import { 
  SimpleLineIcons,
  Feather
} from '@expo/vector-icons'

import styles from './styles'
import Stories from './Stories/index'
import Posts from './Posts/index'

export default function HomeScreen() {
  return (
    <View style={{ 
      flex: 1,
      marginTop: 25
    }}>
        <View style={styles.header}>
            <TouchableOpacity>
              <SimpleLineIcons name="camera" size={25} color="#000"/>
            </TouchableOpacity>
            
            <TouchableOpacity>
              <Image source={require('../../../assets/images/logo.png')} style={styles.logo}/>
            </TouchableOpacity>

            <TouchableOpacity>
              <Feather name="send" size={25} color="#000"/>
            </TouchableOpacity>           
        </View>

        <ScrollView>
          <Stories />
          <Posts />
        </ScrollView>
    </View>
  )
}