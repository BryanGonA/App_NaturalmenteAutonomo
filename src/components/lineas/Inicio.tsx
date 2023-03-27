import React from "react";
import {
  Pressable,
  Box,
  Heading,
  Image,
  HStack,
  Stack,
  View,
} from "native-base";
import { StyleSheet } from "react-native";

const vida = require("../../assets/logo/icon_vida.png");
const fisic = require("../../assets/logo/icon_fisic.png");
const ali = require("../../assets/logo/icon_ali.png");
const nutri = require("../../assets/logo/icon_nutri.png");


function HomeScreen() {
  return (
    <View top={"10px"} style={{alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>
      <View
        zIndex={2}
        top={"240px"}
        left={"130px"}
        width={90}
        height={90}
        borderColor={"amber.100"}
      >
        <Box width={"auto"} height={"auto"}>
          <Image
            source={require("../../assets/logo/log_blanck.png")}
            alt="image"
            width={"auto"}
            height={20}
            position={"relative"}
          />
        </Box>
      </View>
      {
        //botones de Inicio
      }
      <View marginTop={1} zIndex={1}>
        <HStack space={3}>
          <Box
            width={170}
            height={180}
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "white",
              backgroundColor: "#00C15E",
              borderBottomRightRadius: 100,
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
              borderBottomRightRadius: 100,
            }}
            _light={{
              backgroundColor: "white",
              borderBottomRightRadius: 100,
            }}
          >
            <Pressable>
              {({ isHovered, isFocused, isPressed }) => {
                return (
                  <Box
                    width={"100%"}
                    height={"100%"}
                    borderWidth="0"
                    borderColor="coolGray.200"
                    shadow="3"
                    bg={isPressed ? "#009895" : isHovered ? "white" : "#009881"}
                    p="5"
                    rounded="8"
                    style={{
                      //backgroundColor: "#79D70F",
                      transform: [
                        {
                          scale: isPressed ? 0.96 : 1,
                        },
                      ],
                    }}
                  >
                    <Box
                      style={{
                        alignSelf: "center",
                        top: 10,
                      }}
                    >
                      <Image source={vida} alt="image" />
                    </Box>
                    <Stack p="4" space={3}>
                      <Stack space={2}>
                        <Heading
                          fontSize={15}
                          ml="-1"
                          alignContent="center"
                          style={{
                            color: "white",
                            alignSelf: "center",
                            top: 0,
                          }}
                        >
                          Con sentido UAO
                        </Heading>
                      </Stack>
                    </Stack>
                  </Box>
                );
              }}
            </Pressable>
          </Box>

          <Box
            width={170}
            height={180}
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "white",
              backgroundColor: "white",
              borderBottomLeftRadius: 100,
            }}
            _web={{
              borderWidth: 0,
              borderBottomLeftRadius: 100,
            }}
            _light={{
              backgroundColor: "white",
              borderBottomLeftRadius: 100,
            }}
          >
            <Pressable>
              {({ isHovered, isFocused, isPressed }) => {
                return (
                  <Box
                    width={"100%"}
                    height={"100%"}
                    borderWidth="0"
                    borderColor="coolGray.300"
                    shadow="3"
                    bg={isPressed ? "#79D760" : isHovered ? "white" : "#79D70F"}
                    p="5"
                    rounded="8"
                    style={{
                      transform: [
                        {
                          scale: isPressed ? 0.96 : 1,
                        },
                      ],
                    }}
                    _web={{
                      borderWidth: 0,
                      borderBottomLeftRadius: 100,
                    }}
                  >
                    <Box
                      style={{
                        alignSelf: "center",
                        top: 10,
                      }}
                    >
                      <Image source={nutri} alt="image" />
                    </Box>
                    <Stack p="4" space={3}>
                      <Stack space={2}>
                        <Heading
                          fontSize={15}
                          ml="-1"
                          style={{
                            color: "white",
                            alignSelf: "center",
                            top: 1,
                          }}
                        >
                          AliMENTE
                        </Heading>
                      </Stack>
                    </Stack>
                  </Box>
                );
              }}
            </Pressable>
          </Box>
        </HStack>
      </View>

      <Stack direction="row" space={3} marginTop={5}>
        <Box
          width={170}
          height={180}
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "white",
            backgroundColor: "white",
            borderTopRightRadius: 20,
          }}
          _web={{
            borderTopRightRadius: 20,
          }}
          _light={{
            backgroundColor: "white",
            borderTopRightRadius: 100,
          }}
        >
          <Pressable>
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <Box
                  width={"100%"}
                  height={"100%"}
                  borderWidth="0"
                  borderColor="coolGray.300"
                  shadow="3"
                  bg={isPressed ? "#D32660" : isHovered ? "white" : "#D32626"}
                  p="5"
                  rounded="8"
                  style={{
                    transform: [
                      {
                        scale: isPressed ? 0.96 : 1,
                      },
                    ],
                  }}
                >
                  <Box
                    style={{
                      alignSelf: "center",
                      top: 10,
                    }}
                  >
                    <Image source={fisic} alt="image" />
                  </Box>
                  <Stack p="4" space={3}>
                    <Stack space={2}>
                      <Heading
                        fontSize="13"
                        ml="-1"
                        style={{ color: "white", alignSelf: "center", top: 1 }}
                      >
                        Autonomos en movimiento
                      </Heading>
                    </Stack>
                  </Stack>
                </Box>
              );
            }}
          </Pressable>
        </Box>

        <Box
          width={170}
          height={180}
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "white",
            backgroundColor: "white",
            borderTopLeftRadius: 100,
          }}
          _web={{
            borderTopLeftRadius: 100,
          }}
          _light={{
            backgroundColor: "white",
            borderTopLeftRadius: 100,
          }}
        >
          <Pressable>
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <Box
                  width={"100%"}
                  height={"100%"}
                  borderWidth="0"
                  borderColor="coolGray.300"
                  shadow="3"
                  bg={
                    isPressed
                      ? "#F5A364"
                      : isHovered
                      ? "coolGray.200"
                      : "#F5A31A"
                  }
                  p="5"
                  rounded="8"
                  style={{
                    transform: [
                      {
                        scale: isPressed ? 0.96 : 1,
                      },
                    ],
                  }}
                >
                  <Box
                    style={{
                      alignSelf: "center",
                      top: 10,
                    }}
                  >
                    <Image source={ali} alt="image" />
                  </Box>
                  <Stack p="4" space={3}>
                    <Stack space={2}>
                      <Heading
                        fontSize="15"
                        ml="-1"
                        style={{
                          color: "white",
                          alignSelf: "center",
                          top: 10,
                        }}
                      >
                        Vida UAO
                      </Heading>
                    </Stack>
                  </Stack>
                </Box>
              );
            }}
          </Pressable>
        </Box>
      </Stack>
    </View>
  );
}

export default HomeScreen();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    flex: 9,
  },
});
