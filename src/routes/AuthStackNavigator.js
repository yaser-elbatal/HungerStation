import React from "react";import { createStackNavigator } from '@react-navigation/stack';import {useSelector} from "react-redux";import Login                    from "../components/Login";import ActivationCode 			from "../components/ActivationCode";const AuthStack = createStackNavigator();export function AuthStackNavigator()  {	// const lang = useSelector(state => state.lang.lang);	return(		<AuthStack.Navigator mode={'modal'} screenOptions={{headerShown: false}}>			{/*{ lang == null ? <AuthStack.Screen name="language" component={Language} /> : null }*/}			<AuthStack.Screen name="login" component={Login} />			<AuthStack.Screen name="activationCode" component={ActivationCode} />		</AuthStack.Navigator>	);}