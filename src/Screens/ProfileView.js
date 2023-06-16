import { StatusBar } from 'expo-status-bar';
import { Box, Center, Heading, Image, Text } from 'native-base';
import React from 'react'
import Colors from '../color';
import Tabs from '../Components/Profile/Tabs';

function ProfileView() {
  return (
    <>
    <StatusBar style="light" />
        <Center bg={Colors.main} pt={5} pb={6} safeAreaTop>
          <Image source={{uri:"https://res.cloudinary.com/dcqeviqye/image/upload/v1667221693/samples/people/smiling-man.jpg"}}
          alt="profile-pic"
          w={24}
          h={24}
          rounded="full"
          resizeMode="cover"
          
          />
          <Heading bold fontSize={15} isTruncated my={2} color="white">
            King David
          </Heading>

          <Text italic fontSize={10} color="white" letterSpacing={2}>
            king.david@gmail.com
          </Text>
        </Center>

{/* Tabs */}
<Tabs />
    </>
  )
}

export default ProfileView;