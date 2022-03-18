import React, { useState } from 'react';
import {
  Text,
  Box,
  HStack,
  Spacer,
  Flex,
  Badge,
  Center,
  NativeBaseProvider,
  FlatList,
} from 'native-base';
import { ScrollView, Pressable } from 'react-native';
export const TestComponent = () => {
    const [pressed, setPressed] = useState(false)
  let data = [1, 2, 4, 5, 6, 7, 8];
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item}
      renderItem={
        (item) => (
        <Box alignItems="center">
          <Pressable unstable_pressDelay={10} onPressIn={() => setPressed(true)} onPressOut={() => setPressed(false)}>
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <Box
                  maxW="96"
                  borderWidth="1"
                  borderColor="coolGray.300"
                  shadow="3"
                  bg={
                    isPressed
                      ? 'coolGray.200'
                      : isHovered
                      ? 'coolGray.200'
                      : 'coolGray.100'
                  }
                  p="5"
                  rounded="8"
                  style={{
                    transform: [
                      {
                        scale: pressed ? 0.96 : 1,
                      },
                    ],
                  }}>
                  <HStack alignItems="center">
                    <Badge
                      colorScheme="darkBlue"
                      _text={{
                        color: 'white',
                      }}
                      variant="solid"
                      rounded="4">
                      Business
                    </Badge>
                    <Spacer />
                    <Text fontSize={10} color="coolGray.800">
                      1 month ago
                    </Text>
                  </HStack>
                  <Text
                    color="coolGray.800"
                    mt="3"
                    fontWeight="medium"
                    fontSize="xl">
                    Marketing License
                  </Text>
                  <Text mt="2" fontSize="sm" color="coolGray.700">
                    Unlock powerfull time-saving tools for creating email
                    delivery and collecting marketing data
                  </Text>
                  <Flex>
                    {isFocused ? (
                      <Text
                        mt="2"
                        fontSize={12}
                        fontWeight="medium"
                        textDecorationLine="underline"
                        color="darkBlue.600"
                        alignSelf="flex-start">
                        Read More
                      </Text>
                    ) : (
                      <Text
                        mt="2"
                        fontSize={12}
                        fontWeight="medium"
                        color="darkBlue.600">
                        Read More
                      </Text>
                    )}
                  </Flex>
                </Box>
              );
            }}
          </Pressable>
        </Box> )
      }
    />
  );
  // return <ScrollView><Box alignItems="center">
  //     <Pressable>
  //       {({
  //       isHovered,
  //       isFocused,
  //       isPressed
  //     }) => {
  //       return  <Box maxW="96" borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" rounded="8" style={{
  //         transform: [{
  //           scale: isPressed ? 0.96 : 1
  //         }]
  //       }}>
  //             <HStack alignItems="center">
  //               <Badge colorScheme="darkBlue" _text={{
  //             color: "white"
  //           }} variant="solid" rounded="4">
  //                 Business
  //               </Badge>
  //               <Spacer />
  //               <Text fontSize={10} color="coolGray.800">
  //                 1 month ago
  //               </Text>
  //             </HStack>
  //             <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
  //               Marketing License
  //             </Text>
  //             <Text mt="2" fontSize="sm" color="coolGray.700">
  //               Unlock powerfull time-saving tools for creating email delivery
  //               and collecting marketing data
  //             </Text>
  //             <Flex>
  //               {isFocused ? <Text mt="2" fontSize={12} fontWeight="medium" textDecorationLine="underline" color="darkBlue.600" alignSelf="flex-start">
  //                   Read More
  //                 </Text> : <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
  //                   Read More
  //                 </Text>}
  //             </Flex>
  //           </Box>;
  //     }}
  //     </Pressable>
  //   </Box>
  //   </ScrollView>;
}