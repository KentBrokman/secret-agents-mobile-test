import React from "react";
import { Alert, Collapse, VStack, HStack, IconButton, CloseIcon, Box, Text, Center, NativeBaseProvider } from "native-base";
import { LoadingStatus } from "../../utils/utils";


export const LoginAlert = ({loadingStatus, setShowAlert, showAlert}) => {
    return (
        <Collapse isOpen={!showAlert}>
            <Alert maxW="400" status="error" style={{position: 'absolute', top: 10}}>
                <VStack space={1} flexShrink={1} w="100%">
                    <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                        <HStack flexShrink={1} space={2} alignItems="center">
                            <Alert.Icon />
                            <Text fontSize="md" fontWeight="medium" _dark={{
                                color: "black"
                            }}>
                                {loadingStatus === LoadingStatus.ERROR ? 'Неверный email или пароль!' : 'Введите email и пароль!'}
                            </Text>
                        </HStack>
                        <IconButton variant="unstyled" icon={<CloseIcon size="3" color="coolGray.600" />} onPress={() => setShowAlert(false)} />
                    </HStack>
                </VStack>
            </Alert>
        </Collapse>
    )
}