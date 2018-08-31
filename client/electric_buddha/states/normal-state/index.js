import React from "react";
import { View } from "react-360";
import { 
    Title, 
    Menu, 
    States,
} from "./components";

const NormalState = () => (
    <View>
        <Menu>
            <Title>
               <Title>Choose your state</Title> 
            </Title>
        </Menu>
    </View>
)

export default NormalState;