import React from 'react'

import { 
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

import { 
  FontAwesome5,
  AntDesign,
  Feather
} from '@expo/vector-icons'

import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles'
import posts from './posts.json'

export default function Stories(){
  return (
    posts && posts.map((post , index) => (
        <View style={styles.container} key={index}>
          <View style={styles.containerHeader}>
            <View style={styles.containerItemStory}>
              <LinearGradient 
                colors={['#F2703F', '#E35157', '#CA1D7E']}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={styles.ContainerPhoto}
              >
                <Image
                  source={{ uri: post.profile.photo }}
                  style={styles.photo}
                />
              </LinearGradient>
              <Text style={styles.name}>{post.profile.name}</Text>
            </View>
            <FontAwesome5 name="ellipsis-v"  size={14} color="#888"/>
          </View>

          <Image
            source={{uri: post.postPhoto }}
            style={styles.postPhoto} 
          />

          <View style={styles.containerActions}>
            <View style={styles.containerActionsIcons}>
              <View style={styles.groupIcons}>
                <TouchableOpacity>
                  <AntDesign name="hearto" size={25} color="#000" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('../../../../assets/images/message-circle.png')} style={{
                    width: 25,
                    height: 25,
                    marginRight: 10
                  }}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="send" size={25} color="#000"/>
                </TouchableOpacity> 
              </View>
              <TouchableOpacity>
                <Feather name="bookmark" size={25} color="#000"/>
              </TouchableOpacity> 
            </View>
          </View>
        </View>
      ))
    
  ) 
}