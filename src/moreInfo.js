import React, { useState, useRef } from "react";
import { View, ScrollView, Text, StyleSheet, Dimensions, ImageBackground, TextInput, TouchableOpacity, Image } from "react-native";
import Carousel from 'react-native-snap-carousel';

import Icon from 'react-native-vector-icons/MaterialIcons';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default ({route, navigation}) => {
  const carouselRef = useRef(null);
  
  const { title, text, release, img, img1, img2, img3 } = route.params;

  const [lista, setLista] = useState([
    {
      imag: img1
    },
    {
      imag: img2
    },
    {
      imag: img3
    },
  ])

  const _renderItem = ({item}) => {
    return(
      <View>
          <Image source={{uri: item.imag}} style={styles.caroImg}/>
      </View>
    );
  };

  //const [fundo, setFundo] = useState(lista[0].img);

  return (
    <ScrollView>
      <View style={{flex:1, height: screenHeight}}>
        <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
          <ImageBackground source={{uri: img}} style={styles.imgFundo} blurRadius={8}>
        
         
          <Text style={styles.gameTitle}>{title}</Text>
            <View style={styles.slideView}>
            <Carousel style={styles.carousel}
              ref={carouselRef}
              data={lista}
              renderItem={_renderItem}
              sliderWidth={screenWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.5}
              />
            </View>

          </ImageBackground>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  imgFundo:{
    flex:1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: "flex-start",
    backgroundColor: '#000'
  },
  
  slideView:{
    marginTop:'30%',
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  carousel:{
    flex:1,
    overflow: 'visible'
  },
  caroImg:{
    alignSelf: 'center',
    width: 350,
    height: '80%',
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  gameTitle:{
    alignSelf: 'center',   
    marginTop: '20%',
    paddingLeft: 15,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
  }
});