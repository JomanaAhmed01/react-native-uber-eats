import * as React from "react";
import { View, ScrollView } from "react-native";
import styled from 'styled-components';

export default function RestScreen() {
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
                </Container>
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