import React, { useState, useRef } from "react";
import { View, ScrollView, Text, StyleSheet, Dimensions, ImageBackground, TextInput, TouchableOpacity, Image } from "react-native";
import Carousel from 'react-native-snap-carousel';

import Icon from 'react-native-vector-icons/MaterialIcons';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default () => {
  const carouselRef = useRef(null);

  const [lista, setLista] = useState([
    {
        title:"Spider-Man: Miles Morales",
        text: "Spider-Man: Miles Morales é um jogo eletrônico de ação-aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment para o PlayStation 4 e PlayStation 5.",
        release: 2020,
        img: 'https://upload.wikimedia.org/wikipedia/pt/7/74/Spider-Man_Miles_Morales_capa.png'
    },
    {
        title:"Cyberpunk 2077",
        text: "Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e publicado pela CD Projekt. Lançado em 10 de dezembro de 2020 para Google Stadia, Microsoft Windows, PlayStation 4 e Xbox One, e previsto para 2021 para PlayStation 5 e Xbox Series X/S, sendo que nesses já está disponível via retrocompatibilidade.",
        release: 2020,
        img: 'https://bdjogos.com.br/capas/3425-Cyberpunk-2077-capa-1.jpg'
    },
    {
        title:"Sackboy: Uma Grande Aventura",
        text: "Traduzido do inglês-Sackboy: A Big Adventure é um jogo de plataforma de 2020 desenvolvido pela Sumo Digital e publicado pela Sony Interactive Entertainment para PlayStation 5 e PlayStation 4. Um spinoff da série LittleBigPlanet, segue Sackboy e apresenta plataforma 3D em oposição a 2.5D em entradas anteriores.",
        release: 2020,
        img: 'https://image.api.playstation.com/vulcan/img/rnd/202011/0517/tO2VJKlZdyrYiGnHA1J38ZdR.png'
    }]);

    const [fundo, setFundo] = useState(lista[0].img);

  return (
    <ScrollView>
      <View style={{flex:1, height: screenHeight}}>
        <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
          <ImageBackground source={{uri: fundo}} style={styles.imgFundo} blurRadius={8}>
        
            
            <View style={styles.slideView}>
              <Carousel          
              />
            </View>

            <View style={styles.moreInfo}>
              <View style={{marginTop: 10}}>
                <Text style={styles.movieTitle}>{lista[indexAtivo].title}</Text>
                <Text style={styles.movieDesc}>{lista[indexAtivo].text}</Text>
              </View>
              <TouchableOpacity 
              style={{ marginRight: 15, marginTop: 10 }} 
              onPress={() => alert('CLICOU')}
              >
                
              </TouchableOpacity>
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
  viewSearch:{
    marginTop: 20,
    backgroundColor: '#FFF',
    elevation: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  input:{
    width: '90%',
    padding: 13,
    paddingLeft: 20,
    fontSize: 17,
  },
  icon:{
    position: 'absolute',
    right: 20,
    top: 15,
  },
  slideView:{
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },
  carousel:{
    flex:1,
    overflow: 'visible'
  },
  caroImg:{
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  caroText:{
    padding: 15,
    color: '#FFF',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  caroIcon:{
    position:'absolute',
    top: 15,
    right: 15,
  },
  moreInfo:{
    backgroundColor: '#FFF',
    width: screenWidth,
    height: screenHeight,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  movieTitle:{
    paddingLeft: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#131313',
    marginBottom: 5,
  },
  movieDesc:{
    paddingLeft: 15,
    color: '#131313',
    fontSize: 14,
    fontWeight: 'bold'
  }
});