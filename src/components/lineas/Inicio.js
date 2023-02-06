import React, { Component } from "react";
import { Pressable, VStack, Box, Divider, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider, View } from 'native-base';
import { StyleSheet } from 'react-native';

import vida from '../../assets/icon_vida.png';
import fisic from '../../assets/icon_fisic.png';
import ali from '../../assets/icon_ali.png';
import nutri from '../../assets/icon_nutri.png';


function HomeScreen({ navigation }) {
    
    return ( 

    
    <View top={'10px'}>

        <View zIndex={2} top={'240px'} left={'130px'} width={90} height={90} borderColor={'amber.100'}>
            <Box width={'auto'} height={'auto'}>
                <Image source={require('../../assets/log_blanck.png')} alt="image" width={'auto'} height={20}/>
            </Box>
        </View>
        {
            //botones de Inicio
        }
            <View marginTop={1} zIndex={1}>
                <HStack space={3}  >

                    <Box width={170} height={180}  rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                        borderColor: "white",
                        backgroundColor: "#00C15E",
                        borderBottomRightRadius: 100,
                        }} _web={{
                        shadow: 2,
                        borderWidth: 0,
                        borderBottomRightRadius: 100,
                        }} _light={{
                        backgroundColor: "white",
                        borderBottomRightRadius: 100,
                        
                        
                    }}>
                        <Pressable>
                            {({
                            isHovered,
                            isFocused,
                            isPressed
                            }) => {
                            return <Box 
                                width={'100%'} height={'100%'} 
                                borderWidth="0" 
                                borderColor="coolGray.200" 
                                
                                shadow="3" 
                                bg={isPressed ? '#009870' : isHovered ? 'white' : '#009881'} p="5" rounded="8" style={{
                                    //backgroundColor: "#79D70F",
                                    transform: [{
                                scale: isPressed ? 0.96 : 1
                                }]
                            }}>
                                
                                <Box>
                                    <AspectRatio w="100%" ratio={16 / 9}>
                                        <Image source={vida} alt="image"/>
                                    </AspectRatio>
                                </Box>
                                <Stack p="4" space={3}> 
                                    <Stack space={2}>
                                        <Heading fontSize={15} ml="-1" alignContent='center' style={
                                            {color: 'white'}
                                        }>
                                            Con sentido UAO
                                        </Heading>
                                        
                                    </Stack>
                                </Stack>
                                </Box>
                        }}
                        </Pressable>
                        
                        </Box>
                        
                            <Box  width={170} height={180} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                            borderColor: "white",
                            backgroundColor: "white",
                            borderBottomStartRadius: 100,
                            }} _web={{
                            shadow: 2,
                            borderWidth: 0,
                            borderBottomStartRadius: 100,
                            }} _light={{
                            backgroundColor: "white",
                            borderBottomStartRadius: 100,
                            }}>
                            <Pressable>
                            {({
                            isHovered,
                            isFocused,
                            isPressed
                            }) => {
                            return <Box 
                                width={'100%'} height={'100%'}
                                borderWidth="0" 
                                borderColor="coolGray.300" 
                                shadow="3" 
                                bg={isPressed ? '#00C15E' : isHovered ? 'white' : '#79D70F'} 
                                p="5" rounded="8" style={{
                                transform: [{
                                scale: isPressed ? 0.96 : 1
                                }]
                                }}
                                _web={{
                                    shadow: 2,
                                    borderWidth: 0
                                }}>
                                    <Box alignContent='center'>
                                        <AspectRatio w="100%" ratio={16 / 9}>
                                            <Image source={nutri} alt="image" />
                                        </AspectRatio>
                                    </Box>
                                    <Stack p="4" space={3}>
                                        <Stack space={2}>
                                            <Heading fontSize={15} ml="-1" style={
                                            {color: 'white'}
                                            }>
                                                AliMENTE
                                            </Heading>
                                        </Stack>
                                    </Stack>
                                    </Box>
                                    }}
                                </Pressable>
                            </Box>
                    </HStack>     

                </View>

                    <Stack direction="row" space={3} marginTop={5}>

                    <Box width={170} height={180}  rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                        borderColor: "white",
                        backgroundColor: "white",
                        borderTopRightRadius: 20,
                        }} _web={{
                        shadow: 2,
                        borderWidth: 0,
                        borderTopRightRadius: 20,
                        }} _light={{
                        backgroundColor: "white",
                        borderTopRightRadius: 100,
                    }}>
                        <Pressable>
                            {({
                            isHovered,
                            isFocused,
                            isPressed
                            }) => {
                            return <Box 
                                width={'100%'} height={'100%'}
                                borderWidth="0" 
                                borderColor="coolGray.300" 
                                shadow="3" 
                                bg={isPressed ? '#D32630' : isHovered ? 'white' : '#D32626'} p="5" rounded="8" style={{
                                transform: [{
                                scale: isPressed ? 0.96 : 1
                                }]
                            }}>
                                
                                <Box>
                                    <AspectRatio w="100%" ratio={16 / 9}>
                                        <Image source={fisic} alt="image" />
                                    </AspectRatio>                                   
                                </Box>
                                <Stack p="4" space={3}> 
                                    <Stack space={2}>
                                        <Heading fontSize="15" ml="-1"style={
                                            {color: 'white'}
                                        }>
                                            Autonomos en movimiento
                                        </Heading>                                        
                                    </Stack>
                                </Stack>
                                </Box>
                        }}
                        </Pressable>
                        
                        </Box>
                        
                            <Box  width={170} height={180} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                            borderColor: "white",
                            backgroundColor: "white",
                            borderTopLeftRadius: 100,
                            }} _web={{
                            shadow: 2,
                            borderWidth: 0,
                            borderTopLeftRadius: 100,
                            }} _light={{
                            backgroundColor: "white",
                            borderTopLeftRadius: 100,
                            }}>
                            <Pressable>
                            {({
                            isHovered,
                            isFocused,
                            isPressed
                            }) => {
                            return <Box width={'100%'} height={'100%'} 
                                borderWidth="0" 
                                borderColor="coolGray.300" 
                                shadow="3" 
                                bg={isPressed ? 'coolGray.200' : isHovered ? 'coolGray.200' : '#F5A31A'} p="5" rounded="8" style={{
                                transform: [{
                                scale: isPressed ? 0.96 : 1
                                }]
                            }}>
                                    <Box 
                                        >
                                        <AspectRatio w="100%" ratio={16 / 9}>
                                            <Image source={ali} alt="image" />
                                        </AspectRatio>                                        
                                    </Box>
                                    <Stack p="4" space={3}>
                                        <Stack space={2}>
                                            <Heading fontSize="15" ml="-1"style={
                                            {color: 'white'}
                                            }>
                                                Vida UAO
                                            </Heading>                                                
                                        </Stack>
                                    </Stack>
                                    </Box>
                                    }}
                                </Pressable>
                            </Box>
                    </Stack>       
    </View>
);

};
    
export default function () {
    return (
        <NativeBaseProvider>
            <Center>
                <HomeScreen />
            </Center>
        </NativeBaseProvider>
        );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
    },
    header: {
        flex: 1,
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    body: {
        flex: 9,
    },
});

