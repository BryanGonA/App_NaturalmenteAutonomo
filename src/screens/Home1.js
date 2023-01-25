import React, { Component } from "react";
import { Pressable, VStack, Box, Divider, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from 'native-base';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Alimento from '../components/lineas/alimento';
import Fisic from '../components/lineas/fisic';
import Nutrition from '../components/lineas/nutricion';
import Vida from '../components/lineas/vidaArmonia';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/AntDesign';


function HomeScreen({ navigation }) {
    
    return ( <Box alignItems="center" width={100} height={100} marginTop={-300}>
    <HStack space={1} alignItems="center" >
        <Box width={200} height={220} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
            borderColor: "primary.400",
            backgroundColor: "primary.700"
            }} _web={{
            shadow: 2,
            borderWidth: 0
            }} _light={{
            backgroundColor: "primary.50"
        }}>
            <Pressable>
                {({
                isHovered,
                isFocused,
                isPressed
                }) => {
                return <Box maxW="96" borderWidth="0" borderColor="transparent" shadow="3" bg={isPressed ? 'primary.200' : isHovered ? 'coolGray.200' : 'coolGray.100'} p="5" rounded="8" style={{
                    transform: [{
                    scale: isPressed ? 0.96 : 1
                    }]
                }}>
                    
                    <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={require('../assets/btn_vida.png')} alt="image" />
                        </AspectRatio>
                        <Center bg="violet.500" _dark={{
                        bg: "violet.400"
                        }} _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs"
                        }} position="absolute" bottom="0" px="3" py="1.5">
                            UAO
                        </Center>
                    </Box>
                    <Stack p="4" space={3}> 
                        <Stack space={2}>
                            <Heading size="md" ml="-1">
                            AliMENTE
                            </Heading>
                            <Text fontSize="xs" _light={{
                            color: "violet.500"
                        }} _dark={{
                            color: "violet.400"
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            Loren ipsum dolor sit amet
                            </Text>
                        </Stack>
                    </Stack>
                    </Box>
            }}
            </Pressable>
            
            </Box>
            
                <Box width={200} height={220} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
                }} _web={{
                shadow: 2,
                borderWidth: 0
                }} _light={{
                backgroundColor: "gray.50"
                }}>
                <Pressable>
                {({
                isHovered,
                isFocused,
                isPressed
                }) => {
                return <Box maxW="96" borderWidth="0" borderColor="coolGray.300" shadow="3" bg={isPressed ? 'coolGray.200' : isHovered ? 'coolGray.200' : 'coolGray.100'} p="5" rounded="8" style={{
                    transform: [{
                    scale: isPressed ? 0.96 : 1
                    }]
                }}>
                        <Box>
                            <AspectRatio w="100%" ratio={16 / 9}>
                                <Image source={require('../assets/btn_nutri.png')} alt="image" />
                            </AspectRatio>
                            <Center bg="violet.500" _dark={{
                            bg: "violet.400"
                            }} _text={{
                            color: "warmGray.50",
                            fontWeight: "700",
                            fontSize: "xs"
                            }} position="absolute" bottom="0" px="3" py="1.5">
                                UAO
                            </Center>
                        </Box>
                        <Stack p="4" space={3}>
                            <Stack space={2}>
                                <Heading size="md" ml="-1">
                                    NUTRICIÓN
                                </Heading>
                                    <Text fontSize="xs" _light={{
                                        color: "violet.500"
                                    }} _dark={{
                                        color: "violet.400"
                                    }} fontWeight="500" ml="-0.5" mt="-1">
                                        Loren ipsum dolor sit amet
                                    </Text>
                            </Stack>
                        </Stack>
                        </Box>
                        }}
                    </Pressable>
                </Box>
        </HStack>        
        <HStack space={1} alignItems="center" >
        <Box width={200} height={220} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
            borderColor: "primary.400",
            backgroundColor: "primary.700"
            }} _web={{
            shadow: 2,
            borderWidth: 0
            }} _light={{
            backgroundColor: "primary.50"
        }}>
            <Pressable>
                {({
                isHovered,
                isFocused,
                isPressed
                }) => {
                return <Box maxW="96" borderWidth="0" borderColor="transparent" shadow="3" bg={isPressed ? 'primary.200' : isHovered ? 'coolGray.200' : 'coolGray.100'} p="5" rounded="8" style={{
                    transform: [{
                    scale: isPressed ? 0.96 : 1
                    }]
                }}>
                    
                    <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={require('../assets/btn_vida.png')} alt="image" />
                        </AspectRatio>
                        <Center bg="violet.500" _dark={{
                        bg: "violet.400"
                        }} _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs"
                        }} position="absolute" bottom="0" px="3" py="1.5">
                            UAO
                        </Center>
                    </Box>
                    <Stack p="4" space={3}> 
                        <Stack space={2}>
                            <Heading size="md" ml="-1">
                            AliMENTE
                            </Heading>
                            <Text fontSize="xs" _light={{
                            color: "violet.500"
                        }} _dark={{
                            color: "violet.400"
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            Loren ipsum dolor sit amet
                            </Text>
                        </Stack>
                    </Stack>
                    </Box>
            }}
            </Pressable>
            
            </Box>
            
                <Box width={200} height={220} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
                }} _web={{
                shadow: 2,
                borderWidth: 0
                }} _light={{
                backgroundColor: "gray.50"
                }}>
                <Pressable>
                {({
                isHovered,
                isFocused,
                isPressed
                }) => {
                return <Box maxW="96" borderWidth="0" borderColor="coolGray.300" shadow="3" bg={isPressed ? 'coolGray.200' : isHovered ? 'coolGray.200' : 'coolGray.100'} p="5" rounded="8" style={{
                    transform: [{
                    scale: isPressed ? 0.96 : 1
                    }]
                }}>
                        <Box>
                            <AspectRatio w="100%" ratio={16 / 9}>
                                <Image source={require('../assets/btn_nutri.png')} alt="image" />
                            </AspectRatio>
                            <Center bg="violet.500" _dark={{
                            bg: "violet.400"
                            }} _text={{
                            color: "warmGray.50",
                            fontWeight: "700",
                            fontSize: "xs"
                            }} position="absolute" bottom="0" px="3" py="1.5">
                                UAO
                            </Center>
                        </Box>
                        <Stack p="4" space={3}>
                            <Stack space={2}>
                                <Heading size="md" ml="-1">
                                    NUTRICIÓN
                                </Heading>
                                    <Text fontSize="xs" _light={{
                                        color: "violet.500"
                                    }} _dark={{
                                        color: "violet.400"
                                    }} fontWeight="500" ml="-0.5" mt="-1">
                                        Loren ipsum dolor sit amet
                                    </Text>
                            </Stack>
                        </Stack>
                        </Box>
                        }}
                    </Pressable>
                </Box>
        </HStack>        
    </Box>
    );

};
    
export default function () {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
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

