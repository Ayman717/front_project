import React from 'react'
import { Text, View } from 'react-native';
import { Surface, Stack, AppBar, IconButton } from "@react-native-material/core";
import { Image } from 'react-native';

import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export function Products({navigation}) {
    return (
        <View style={{backgroundColor:"white" ,flex:1}}>
      <StatusBar backgroundColor='black' style="light" />

            <ScrollView>

                <AppBar style={{ marginTop: 39, backgroundColor: "#78A206" }} title="Products" leading={props => (
                    <IconButton icon={props => <Icon name="arrow-left" {...props} />} {...props} onPress={()=>{
                            navigation.push("Home")
                        }} />
                )} /> 
                <Stack center >

                    <Surface
                        elevation={8}
                        category="medium"
                        style={{ width: 370, height: 170, flexDirection: "row", alignItems: "center", marginTop: 50 }}
                    >
                        <Image style={{   marginLeft: 10, padding:10 , borderRadius:4 }}
                            source={{
                                width: 190,
                                height: 160,
                                

                                uri: "https://i.pinimg.com/564x/81/79/c6/8179c6bae60dfab5d4d97d26a49240dd.jpg"
                            }}
                        />
                        <TouchableOpacity
                        onPress={()=>{
                            navigation.push("Fruits")
                        }}
                        >
                            <View style={{ width: 90, height: 50, backgroundColor: "#78A206", marginLeft: 60, borderRadius: 15 }}>
                                <Text style={{ textAlign: "center", fontSize: 15, color: "white", marginTop: 12 }}>Fruits</Text>
                            </View>
                        </TouchableOpacity>

                    </Surface>
                    <Surface
                        elevation={8}
                        category="medium"
                        style={{ width: 370, height: 170, flexDirection: "row", alignItems: "center", marginTop: 50 }}
                    >
                        <Image style={{marginLeft: 10, padding:10 , borderRadius:4 }}
                            source={{
                               width: 190,
                                height: 160,

                                uri: "https://i.pinimg.com/564x/6f/e3/52/6fe352f70a3346ceefdaaa8738caf4a9.jpg"
                            }}
                        />
                        <TouchableOpacity
                        onPress={()=>{
                            navigation.push("Herbles")
                        }}
                        >
                        
                            <View style={{ width: 90, height: 50, backgroundColor: "#78A206", marginLeft: 60, borderRadius: 15 }}>
                                <Text style={{ textAlign: "center", fontSize: 15, color: "white", marginTop: 12 }}>Herbles</Text>
                            </View>
                        </TouchableOpacity>

                    </Surface>
                    <Surface
                        elevation={8}
                        category="medium"
                        style={{ width: 370, height: 170, flexDirection: "row", alignItems: "center", marginTop: 50 }}
                    >
                        <Image style={{ marginLeft: 10, padding:10 , borderRadius:4  }}
                            source={{
                                width: 190,
                                height: 160,

                                uri: "https://i.pinimg.com/564x/ed/61/f4/ed61f42d2493fbd866e25eea72aa2a3c.jpg"
                            }}
                        />
                        <TouchableOpacity
                         onPress={()=>{
                            navigation.push("Meats")
                        }}>
                            <View style={{ width: 90, height: 50, backgroundColor: "#78A206", marginLeft: 60, borderRadius: 15 }}>
                                <Text style={{ textAlign: "center", fontSize: 15, color: "white", marginTop: 12 }}>Meats
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </Surface>
                    <Surface
                        elevation={8}
                        category="medium"
                        style={{ width: 370, height: 170, flexDirection: "row", alignItems: "center", marginTop: 50 }}
                    >
                        <Image style={{ marginLeft: 10, padding:10 , borderRadius:4  }}
                            source={{
                                width: 190,
                                height: 160,

                                uri: "https://i.pinimg.com/736x/b6/3a/cb/b63acb5e34ad39f6e19326dc373eadbe.jpg"
                            }}
                        />
                        <TouchableOpacity
                         onPress={()=>{
                            navigation.push("Milks")
                        }}>
                            <View style={{ width: 90, height: 50, backgroundColor: "#78A206", marginLeft: 60, borderRadius: 15 }}>
                                <Text style={{ textAlign: "center", fontSize: 15, color: "white", marginTop: 12 }}>Milks
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </Surface>
                    <Surface
                        elevation={8}
                        category="medium"
                        style={{ width: 370, height: 170, flexDirection: "row", alignItems: "center", marginTop: 50, marginBottom: 50 }}
                    >
                        <Image style={{ marginLeft: 10, padding:10 , borderRadius:4  }}
                            source={{
                                width: 190,
                                height: 160,

                                uri: "https://i.pinimg.com/564x/2f/7e/4e/2f7e4e252d4fcc4e56569a2700336b36.jpg"
                            }}
                        />
                        <TouchableOpacity
                         onPress={()=>{
                            navigation.push("Vegetable")
                        }}
                        >
                            <View style={{ width: 90, height: 50, backgroundColor: "#78A206", marginLeft: 60, borderRadius: 15 }}>
                                <Text style={{ textAlign: "center", fontSize: 15, color: "white", marginTop: 12 }}>Vegetables</Text>
                            </View>
                        </TouchableOpacity>

                    </Surface>
                </Stack>
            </ScrollView>
        </View>
    )
}
