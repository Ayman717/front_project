import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { Button, Card, List } from 'react-native-paper';
import { AppBar, IconButton } from '@react-native-material/core';






export function Herbles({navigation}) {
  
  const [fruit, setfruits] = useState([])
  

async function getData(setfruits) {
		let {data} = await axios.get("http://192.168.1.10:5000/herbals")
		// console.log(res)
		setfruits(data )
	
	}
  useEffect(() => {
      
    getData(setfruits )
    },[])
console.log(fruit)

 
//   let data = fruits
//   console.log(data)
  return (
    <View style={{backgroundColor:"white",flex:1}}>
      <ScrollView>
          <AppBar style={{ marginTop: 39, backgroundColor: "#78A206" }} title="Herbles" leading={props => (
                    <IconButton icon={props => <Icon name="arrow-left" {...props} />} {...props} onPress={()=>{
                            navigation.push("Products")
                        }} />
        )} /> 
        {fruit.length  != 0 ? fruit.map((product, index) => {
          return (
            <Card style={styles.mycard} key={index}>
    
              <Card.Cover style={{width:390,height:400 ,padding:20,backgroundColor:"white"}} source={{ uri:product.src }} />
              <Card.Content>
                <Text style={{marginTop:10,fontSize:25,textAlign:"center" ,color:"#78A206"}} variant="titleLarge">{ product.name}</Text>
                <Text style={{ marginTop: 10, fontSize: 20 }} variant="bodyMedium">{product.desc}</Text>
                {  product.offer!=0 ?    <Text style={{marginTop:10,fontSize:20,color:"red"}} variant="bodyMedium">OFFER:  {product.offer}%</Text>:false}

                <Text style={product.offer != 0 ? { marginTop: 10, fontSize: 10, textDecorationLine: "line-through" } : { marginTop: 10, fontSize: 20 }} variant="bodyMedium">Price:{product.price}$</Text>
                {  product.offer!=0 ?    <Text style={{marginTop:10,fontSize:20}} variant="bodyMedium">Price:  {(product.price*product.offer)/100}$</Text>:false}

                      <Text style={{marginTop:10,fontSize:20}} variant="bodyMedium">Quantity:  {product.quantity}</Text>

    </Card.Content>
    <Card.Actions>
      <Button style={{backgroundColor:"#78A206"}}><Text style={{color:"white"}}>Add to cart</Text></Button>
    </Card.Actions>
            </Card>
          )
        }) : <ActivityIndicator style={{marginTop:50,marginLeft:"auto",marginRight:"auto"}} animating={true} color={MD2Colors.red800} />}

              
              
      </ScrollView>
    </View>
  )

      }
const styles = StyleSheet.create({
  title: {
    color:"#78A206",
    fontSize:22,
    textAlign:"center",

  },
  mycard:{
    marginTop: 15,
    marginBottom:15,
    padding: 10,
    backgroundColor:"white"
  }
})
