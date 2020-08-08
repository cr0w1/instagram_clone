import React from 'react'

import { 
  View,
  ScrollView,
  Text,
  Image
} from 'react-native'

import { 
  FontAwesome5
} from '@expo/vector-icons'

import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles'
import stories from './stories'

export default function Stories(){
  return (
    <View style={styles.container}> 
      <View style={styles.containerHeader}>
        <Text style={styles.label}>Stories</Text>
        <View style={styles.groupLabel}>
          <FontAwesome5 name="caret-right" size={18}/>
          <Text style={styles.label}>Watch all</Text>
        </View>
      </View>

      <ScrollView style={styles.containerScrollStory} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.myContainerItemStory}>
          <View style={styles.myContainerPhoto}>
            <Image
              source={{uri : 'https://i.imgur.com/gf6BsdT.jpg'}}
              style={styles.myPhoto}
            />
          </View>
          <Text style={styles.name}>My story</Text>
        </View>
        
        { stories && stories.map((storie , index) => (
            <View style={styles.containerItemStory}>
              <LinearGradient  key={index}
                colors={['#F2703F', '#E35157', '#CA1D7E']}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={styles.ContainerPhoto}
              >
                <Image
                  source={{uri : storie.photo }}
                  style={styles.photo}
                />
              </LinearGradient>
              <Text style={styles.name}>{storie.name}</Text>
            </View>
          ))   
        }
        
      </ScrollView>
    </View>
  )
}