import { Box, Center, Heading, Text } from 'native-base'
import React from 'react'
import Message from '../Components/Notifications/Message'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

function VerifyEmail({navigation}) {
  return (
    <Center flex={1} alignItems="center" justifyContent="center">
        <StatusBar style="dark" />

        <Heading fontSize={20}>Verify Email</Heading>
        <Text fontSize={14} italic>Click the link sent to your email to verify and continue</Text>
        <MaterialCommunityIcons name="gmail" size={60} color="black" />
    </Center>
  )
}

export default VerifyEmail