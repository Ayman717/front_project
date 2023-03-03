import { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Card from './card';

const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + apiKey;

export  function MoviePage({navigation}) {
  const [movies,setMovies]=useState([]);
  getMovie(apiUrl)
  function getMovie(url){
    fetch(url)
    .then((res)=>{return res.json()})
    .then((data)=>{
      setMovies(data.results)
    })
  }
  return (
    <View style={styles.container}>
    <ScrollView>
    
     {movies.map((movie,index)=>{
      return(
        <TouchableOpacity
       onPress={()=>navigation.navigate("details",{moveid:movie.id})}
        >
        <Card
        key={index}
        mvName={movie.title}
        imageLink={imgPath+ movie.poster_path}
        />
        </TouchableOpacity>
      )
     })}

    </ScrollView>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
