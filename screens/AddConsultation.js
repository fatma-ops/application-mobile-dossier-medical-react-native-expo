import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, KeyboardAvoidingView, Keyboard, TextInput, TouchableOpacity, Alert, Platform, Image } from "react-native";
import DatePicker from 'react-native-datepicker';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { ActivityIndicator, Button } from 'react-native';
import { Octicons, Ionicons } from '@expo/vector-icons';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import { CredentialsContext } from '../components/CredentialsContext';
import RegularButton from '../components/Buttons/RegularButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';

import {
    InnerContainer,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledButton,
    StyledInputLabel2,
    StyledTextInput,
    ButtonText,
    Colors,
    MsgBox,
    ExtraView2,
    PageSignup,
    StyledContainer2,
    ViewImage,
    StyledContainer,
    ExtraView,
    TextLink,
    TextLinkContent,
} from '../components/styles';
import MessageModalImage from '../components/Modals/MessageModalImage';
import styled from 'styled-components';
import RegularButton2 from '../components/Buttons/RegularButton2';

const { green, brand, darkLight, primary } = Colors;

const AddConsultation = ({ navigation, ...props }) => {
  const showDatePicker = () => {
    setShow(true);
}

  const [show, setShow] = useState(false);
return(
    <ScrollView>
      <KeyboardAvoidingWrapper>
      <StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>
                   
                            <StyledFormArea>
                                <Text style={styles.label}>type</Text>
                                <StyledTextInput  {...props} 
                                    placeholder=" vaccin corona "
                                    placeholderTextColor={darkLight}
                                    value={props.vaccinName}
                                    onChangeText={(text) => props.setVaccinName(text)}                                   

                                />
                                
                                <Text style={styles.label}>Date</Text>
                                
                                <DatePicker StyledTextInput  {...props} 
                                    icon="calendar"
                                    placeholder="AAAA - MM - JJ"
                                    placeholderTextColor={darkLight}
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    editable={false}
                                    DatePicker={DatePicker}
                                    date={props.vaccinDate}
                                    mode="date"
                                    format="YYYY-MM-DD"
                                    customStyles={{
                                      dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                      },
                                      dateInput: {
                                        marginLeft: 36,
                                        marginBottom:10
                                      }, 
                                      
                                    }}
                                    onDateChange={(date) => props.setVaccinDate(date)}
                                />
                                <Text style={styles.label}>Résultat du Vaccin</Text>

                                <ViewImage onPress={pickImage}>

                               <Ionicons name='camera' onPress={pickImage} size={70} color={darkLight} style={{paddingTop: 40,paddingLeft:60, justifyContent:'center',alignItems:'center'}} />
                              <TouchableOpacity onPress={pickImage} style={{position:'absolute' ,padding:25,left:70, paddingRight:65 ,paddingLeft:15, borderRadius: 20 ,fontSize:16 ,height:200,width:'90%',zIndex:1,marginVertical:3 , justifyContent:'center' , alignSelf:'center',alignItems:'center'}}>
                             {props.vaccinImage && <Image source={{ uri: props.vaccinImage }} style={{height:200,width:'199%'}} />}

                               </TouchableOpacity> 

                              <Text style={{textAlign:'center', paddingRight:40, color:darkLight}}>Ajouter votre document</Text>

                              </ViewImage> 
                              
                                
                                <RegularButton2 style={{ justifyContent: 'center' , alignContent:'center' , alignSelf:'center', marginTop:20}} onPress ={() => {
                                    if (props.vaccinName === '' ||  props.vaccinImage === '') {
                                    Alert.alert('Please fill in all fields');
                                    } else {
                                    props.handleAdd();
                                    navigation.navigate('Vaccins');
                                    }
                                  }}>
                                      <ButtonText>
                                            Enregistrer
                                      </ButtonText>                                    
                                      </RegularButton2>
                                      <ExtraView>
                             
                              <TextLink onPress={() => navigation.goBack()}>
                                  <TextLinkContent style={{ justifyContent: 'center' , alignContent:'center' , alignSelf:'center'}} >
                                      Annuler
                                  </TextLinkContent>
                              </TextLink>
                          </ExtraView>
                                    
                                    
                                
                            </StyledFormArea>
                            
                              
        
                         </InnerContainer>
                         </StyledContainer>
                         </KeyboardAvoidingWrapper>    
                         </ScrollView>
    
  );
};
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
  },
  label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 0,

  },
  input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      borderRadius: 5,
      width: '100%',
      marginBottom: 20,
  },
  image: {
      width: 200,
      height: 200,
      marginTop: 20,
  },
});


export default AddConsultation;