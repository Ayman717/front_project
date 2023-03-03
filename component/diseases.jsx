import React from 'react'
import { Text, View } from 'react-native';
import { Surface, Stack, AppBar, IconButton } from "@react-native-material/core";
import { Image } from 'react-native';

import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export function Diseases({navigation}) {
    return (
        <View style={{backgroundColor:"white" ,flex:1}}>
      <StatusBar backgroundColor='black' style="light" />

            <ScrollView>

                <AppBar style={{ marginTop: 39, backgroundColor: "#78A206" }} title="Diseases" leading={props => (
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
                        <Image style={{ marginLeft: 20 }}
                            source={{
                                width: 150,
                                height: 150,

                                uri: "https://i.pinimg.com/236x/5d/d9/e0/5dd9e0df72af466217b4d496b913e957.jpg"
                            }}
                        />
                        <TouchableOpacity
                        onPress={()=>{
                            navigation.push("Heart")
                        }}
                        >
                            <View style={{ width: 90, height: 50, backgroundColor: "#78A206", marginLeft: 70, borderRadius: 15 }}>
                                <Text style={{ textAlign: "center", fontSize: 15, color: "white", marginTop: 12 }}>Heart</Text>
                            </View>
                        </TouchableOpacity>

                    </Surface>
                    <Surface
                        elevation={8}
                        category="medium"
                        style={{ width: 370, height: 170, flexDirection: "row", alignItems: "center", marginTop: 50 }}
                    >
                        <Image style={{ marginLeft: 20 }}
                            source={{
                                width: 150,
                                height: 150,

                                uri: "https://i.pinimg.com/236x/7c/cf/e8/7ccfe87970980a7ef618b53f09867bb9.jpg"
                            }}
                        />
                        <TouchableOpacity
                        onPress={()=>{
                            navigation.push("Pressure")
                        }}
                        >
                        
                            <View style={{ width: 90, height: 50, backgroundColor: "#78A206", marginLeft: 70, borderRadius: 15 }}>
                                <Text style={{ textAlign: "center", fontSize: 15, color: "white", marginTop: 12 }}>Pressure</Text>
                            </View>
                        </TouchableOpacity>

                    </Surface>
                    <Surface
                        elevation={8}
                        category="medium"
                        style={{ width: 370, height: 170, flexDirection: "row", alignItems: "center", marginTop: 50 }}
                    >
                        <Image style={{ marginLeft: 20 }}
                            source={{
                                width: 150,
                                height: 150,

                                uri: "https://i.pinimg.com/236x/d5/50/50/d55050ee1a60283c26dabeeff1a1a9b4.jpg"
                            }}
                        />
                        <TouchableOpacity
                         onPress={()=>{
                            navigation.push("Diabetes")
                        }}>
                            <View style={{ width: 90, height: 50, backgroundColor: "#78A206", marginLeft: 70, borderRadius: 15 }}>
                                <Text style={{ textAlign: "center", fontSize: 15, color: "white", marginTop: 12 }}>Diabetes
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </Surface>
                    <Surface
                        elevation={8}
                        category="medium"
                        style={{ width: 370, height: 170, flexDirection: "row", alignItems: "center", marginTop: 50 }}
                    >
                        <Image style={{ marginLeft: 20 }}
                            source={{
                                width: 150,
                                height: 150,

                                uri: "https://i.pinimg.com/236x/b0/3b/ae/b03baee592b25b8d79bf33eb6d7151de.jpg"
                            }}
                        />
                        <TouchableOpacity
                         onPress={()=>{
                            navigation.push("Hepatitis C")
                        }}>
                            <View style={{ width: 90, height: 50, backgroundColor: "#78A206", marginLeft: 70, borderRadius: 15 }}>
                                <Text style={{ textAlign: "center", fontSize: 15, color: "white", marginTop: 12 }}>Hepatitis C
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </Surface>
                    <Surface
                        elevation={8}
                        category="medium"
                        style={{ width: 370, height: 170, flexDirection: "row", alignItems: "center", marginTop: 50, marginBottom: 50 }}
                    >
                        <Image style={{ marginLeft: 20 }}
                            source={{
                                width: 150,
                                height: 150,

                                uri: "https://i.pinimg.com/236x/2e/93/14/2e9314cff7ad953bb77f7a1f6d3860ab.jpg"
                            }}
                        />
                        <TouchableOpacity
                         onPress={()=>{
                            navigation.push("Kidney")
                        }}
                        >
                            <View style={{ width: 90, height: 50, backgroundColor: "#78A206", marginLeft: 70, borderRadius: 15 }}>
                                <Text style={{ textAlign: "center", fontSize: 15, color: "white", marginTop: 12 }}>Kidney </Text>
                            </View>
                        </TouchableOpacity>

                    </Surface>
                </Stack>
            </ScrollView>
        </View>
    )
}
