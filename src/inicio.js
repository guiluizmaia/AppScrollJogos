import React, { useState, useRef } from "react";
import { View, ScrollView, Text, StyleSheet, Dimensions, ImageBackground, TextInput, TouchableOpacity, Image } from "react-native";
import Carousel from 'react-native-snap-carousel';

import Icon from 'react-native-vector-icons/MaterialIcons';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default ({navigation}) => {
  const carouselRef = useRef(null);

  const [lista, setLista] = useState([
    {
        title:"Spider-Man: Miles Morales",
        text: "Spider-Man: Miles Morales é um jogo eletrônico de ação-aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment para o PlayStation 4 e PlayStation 5.",
        release: 2020,
        img: 'https://upload.wikimedia.org/wikipedia/pt/7/74/Spider-Man_Miles_Morales_capa.png',
        img1: 'https://www.jornadageek.com.br/wp-content/uploads/2020/11/Spider-Man-Miles-Morales.jpg',
        img2: 'https://www.gamerview.com.br/wp-content/uploads/2020/11/Review-Marvel-Spider-Man-Miles-Morales-CAPA-1.jpg',
        img3: 'https://img.ibxk.com.br/2020/10/14/14161516222286.jpg?w=704&h=264&mode=crop&scale=both',
    },
    {
        title:"Cyberpunk 2077",
        text: "Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e publicado pela CD Projekt. Lançado em 10 de dezembro de 2020 para Google Stadia, Microsoft Windows, PlayStation 4 e Xbox One, e previsto para 2021 para PlayStation 5 e Xbox Series X/S, sendo que nesses já está disponível via retrocompatibilidade.",
        release: 2020,
        img: 'https://bdjogos.com.br/capas/3425-Cyberpunk-2077-capa-1.jpg',
        img1: 'https://www.cyberpunk.net/build/images/home3/screen-image-mercenary-49f166ed.jpg',
        img2: 'https://s2.glbimg.com/EQ3bjs_3ZGzir3eLcA-ihhHsvlc=/0x0:1920x1080/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/h/G/zQAxAhQy6L1xkhLds3Aw/cyberpunk-2077-20201222191256.jpg',
        img3: 'https://www.windowsclub.com.br/wp-content/uploads/2019/06/Cyberpunk-2077-keanu-reeves.jpg',
    },
    {
        title:"Sackboy: Uma Grande Aventura",
        text: "Traduzido do inglês-Sackboy: A Big Adventure é um jogo de plataforma de 2020 desenvolvido pela Sumo Digital e publicado pela Sony Interactive Entertainment para PlayStation 5 e PlayStation 4. Um spinoff da série LittleBigPlanet, segue Sackboy e apresenta plataforma 3D em oposição a 2.5D em entradas anteriores.",
        release: 2020,
        img: 'https://image.api.playstation.com/vulcan/img/rnd/202011/0517/tO2VJKlZdyrYiGnHA1J38ZdR.png',
        img1: 'https://cdn.ome.lt/P3-lBl3BkqYVCAu6REjevGw5txU=/770x0/smart/uploads/conteudo/fotos/Sackboy-A-Big-Adventure1.jpg',
        img2: 'https://www.outerspace.com.br/wp-content/uploads/2020/06/sackboy.jpg',
        img3: 'https://nyc3.digitaloceanspaces.com/gamersegames/2020/11/SackBoy-05.jpg',
    }]);

  const [fundo, setFundo] = useState(lista[0].img);
  const [indexAtivo, setIndexAtivo] = useState(0);

  const _renderItem = ({ item, index }) => {
    return(
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('moreInfo', { 
          title: lista[indexAtivo].title,
          text: lista[indexAtivo].text,
          release: lista[indexAtivo].release,
          img: lista[indexAtivo].img,
          img1: lista[indexAtivo].img1,
          img2: lista[indexAtivo].img2,
          img3: lista[indexAtivo].img3,
          })}>
          <Image source={{uri: item.img}} style={styles.caroImg}/>
          <Text style={styles.caroText}>{item.title}</Text>
          <Icon name="play-circle-outline" size={30} color="#fff" style={styles.caroIcon}/>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={{flex:1, height: screenHeight}}>
        <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
          <ImageBackground source={{uri: fundo}} style={styles.imgFundo} blurRadius={8}>
            <View style={styles.viewSearch}>
              <TextInput style={styles.input} placeholder="Nome"/>
              <TouchableOpacity style={styles.icon}>
                <Icon name="search" color="#000" size={25}/>
              </TouchableOpacity>
            </View>

            <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold', marginLeft: 10, marginVertical: 10}}>
              Novidades
            </Text>
            
            <View style={styles.slideView}>
              <Carousel style={styles.carousel}
              ref={carouselRef}
              data={lista}
              renderItem={_renderItem}
              sliderWidth={screenWidth}
              itemWidth={200}
              inactiveSlideOpacity={0.5}
              onSnapToItem={ (index) => {
                setFundo(lista[index].img);
                setIndexAtivo(index);
              }}/>
            </View>
            <View style={styles.moreInfo}>
              <View style={{marginTop: 10}}>
                <Text style={styles.gameTitle}>{lista[indexAtivo].title}</Text>
                <Text style={styles.gameDesc}>{lista[indexAtivo].text}</Text>
              </View>
              <TouchableOpacity 
              style={{ marginRight: 15, marginTop: 10 }} 
              onPress={() => navigation.navigate('moreInfo', { 
                title: lista[indexAtivo].title,
                text: lista[indexAtivo].text,
                release: lista[indexAtivo].release,
                img: lista[indexAtivo].img,
                img1: lista[indexAtivo].img1,
                img2: lista[indexAtivo].img2,
                img3: lista[indexAtivo].img3,
                })}
              >
                <Icon 
                name="queue" 
                color="#131313" 
                size={30} 
                />
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
    marginTop: 35,
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
  gameTitle:{
    paddingLeft: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#131313',
    marginBottom: 5,
  },
  gameDesc:{
    paddingLeft: 15,
    color: '#131313',
    fontSize: 14,
    fontWeight: 'bold'
  }
});