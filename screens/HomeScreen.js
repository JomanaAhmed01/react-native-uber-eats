import * as React from "react";
import { useState } from 'react'
import { View, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import styled from 'styled-components';
// import FridayChicken from '../Images/friday-chicken'
import Chillis from '../Images/chilis.jpg'
import Mcdonalds from '../Images/mcdonalds.jpg'
import NileLounge from '../Images/nile-lounge.jpg'
import { NavigationContainer } from "@react-navigation/native";

export default function HomeScreen() {
  const [activeBtn, setActiveBtn] = useState('pickup')

  const rest = [
    // { name: 'Friday Chicken', image: FridayChicken, price: '$$' },
    { name: 'Chilli`s', image: Chillis, price: '$$$' },
    { name: 'Mcdonald`s', image: Mcdonalds, price: '$' },
    { name: 'Nile Lounge', image: NileLounge, price: '$$$$' }
  ]

  return (
    <>
      <ScrollView>
        <Container style={{
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.9,
          shadowRadius: 2,
          elevation: 1,
        }}>
          <DeliveryBtnWrapper onPress={() => setActiveBtn('delivery')} isButtonActive={activeBtn}>
            <DeliveryBtn isButtonActive={activeBtn}>Delivery</DeliveryBtn>
          </DeliveryBtnWrapper>
          <PickupButtonWrapper onPress={() => setActiveBtn('pickup')} isButtonActive={activeBtn}>
            <PickupButton isButtonActive={activeBtn}>Pickup</PickupButton>
          </PickupButtonWrapper>
        </Container>

        {rest.map((item, index) => {
          return (
            <RestCardWrapper key={index} >
              <TextWrapper>
                <Photo source={item.image} />
                <RestName>{item.name}</RestName>
                <RestPrice>{item.price}</RestPrice>
              </TextWrapper>
            </RestCardWrapper>
          )
        })}
      </ScrollView>
    </>
  );
}

const Container = styled(View)`
  /* border: 3px solid red; */
  flex-direction: row;
  justify-content: space-around;
  width: 200px;
  align-items: center;
  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;
`;

const DeliveryBtnWrapper = styled(TouchableOpacity)`
  /* border: 3px solid red; */
  padding: 20px;
  border-radius: 50px;
  background-color: ${(props) => (props.isButtonActive === 'delivery' ? 'black' : 'white')};
`;

const PickupButtonWrapper = styled(TouchableOpacity)`
  /* border: 3px solid red; */
  padding: 20px;
  border-radius: 50px;
  background-color: ${(props) => (props.isButtonActive === 'pickup' ? 'black' : 'white')};
`;

const DeliveryBtn = styled(Text)`
  /* border: 3px solid red; */
  color: ${(props) => (props.isButtonActive === 'delivery' ? 'white' : 'black')};
`;

const PickupButton = styled(Text)`
  /* border: 3px solid red; */
  color: ${(props) => (props.isButtonActive === 'pickup' ? 'white' : 'black')};
`;

const RestCardWrapper = styled(View)`
  border: 1px solid rgba(128, 128, 128, .2);
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 330px;
  flex-direction: row;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const Photo = styled(Image)`
  /* border: 3px solid yellow; */
  width: 300px;
  height: 250px;
  border-radius: 5px;
`;

const TextWrapper = styled(View)`
  /* border: 3px solid yellow; */
  width: 300px;
`;

const RestName = styled(Text)`
  /* border: 3px solid purple; */
  font-size: 30px;
`;

const RestPrice = styled(Text)`
  /* border: 3px solid black; */
  font-size: 17px;
`;