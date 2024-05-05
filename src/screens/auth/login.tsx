import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import Background from '../../components/backGroud.tsx';
import Btn from '../../components/btn.tsx';
import {Orange} from '../../components/constants.tsx';
import Field from '../../components/fields.tsx';
import { COLORS } from '../../theme/theme.ts';

interface LoginProps {
  navigation: any;
}

const Login: FC<LoginProps> = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setEmailError('');
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setPasswordError('');
  };

  return (
    <Background>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
        <View style={{alignSelf: 'center', width: 460, alignContent: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 64,
              fontWeight: 'bold',
              marginVertical: 20,
              textAlign: 'center',
              paddingRight: 40,
            }}>
            Login
          </Text>
          <View
            style={{
              backgroundColor: COLORS.primaryBlackHex,
              height: '100%',
              alignContent: 'center',
              width: '100%',
              borderTopLeftRadius: 120,
              paddingRight: 40,
              paddingTop: 80,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 40, color: "white", fontWeight: 'bold'}}>
              Welcome Back
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 19,
                marginBottom: 30,
              }}>
              Login to your account
            </Text>
            <Field
              placeholder="Email / Username"
              keyboardType={'email-address'}
              onChangeText={handleEmailChange}
              value={email}
            />
            {emailError ? (
              <Text style={{color: '#D17842'}}>{emailError}</Text>
            ) : null}
            <Field
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={handlePasswordChange}
              value={password}
            />
            {passwordError ? (
              <Text style={{color: '#D17842'}}>{passwordError}</Text>
            ) : null}
            <View
              style={{
                alignItems: 'center',
                width: '78%',
                paddingRight: 26,
                paddingTop: 25,
                marginBottom: 45,
              }}>
              <Text
                style={{
                  color: 'grey',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Forgot Password ?
              </Text>
            </View>
            <Btn
              textColor="white"
              bgColor={Orange}
              btnLabel="Login"
              onPress={() => {
                if (email.trim() === '') {
                  setEmailError('Please enter your email');
                } else {
                  setEmailError('');
                }

                if (password.trim() === '') {
                  setPasswordError('Please enter your password');
                } else {
                  setPasswordError('');
                }

                if (email.trim() !== '' && password.trim() !== '') {
                  props.navigation.navigate('Tab');
                }
              }}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingTop: 10,
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'grey'}}>
                Don't have an account ?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('SignUp')}>
                <Text
                  style={{color: Orange, fontWeight: 'bold', fontSize: 16}}>
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Background>
  );
};

export default Login;
