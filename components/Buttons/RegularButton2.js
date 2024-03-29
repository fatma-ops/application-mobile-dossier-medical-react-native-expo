import React from 'react';

// styled components
import styled from 'styled-components';
import { Colors } from '../styles';
import RegularText from '../Texts/RegularText';
const {primary , brand} = Colors;
const ButtonView = styled.TouchableOpacity`

padding: 15px;
background-color:${brand};
width : 45%
justify-content:center;
align-items:center;
border-radius:10px;
height:50px;
flex-direction:row;
justify-content: space-between;
margin-top:10px;
shadow-Opacity:0.25;
shadow-offset:2px;
shadow-radius:1px;
elevation:5;






`;
const RegularButton2 = (props) => {
    return <ButtonView onPress={props.onPress} {...props}>
        <RegularText style = {[{color : primary} , {...props?.texStyle}]}> {props.children} </RegularText>
   
    </ButtonView>
};
export default RegularButton2;