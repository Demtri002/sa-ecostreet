import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cadastro from '../components/Cadastro'
import Login from '../components/Login'
import Drawer from './indexDrawer'
import Categoria from '../components/Categoria'
import Post from '../components/Post'
import Local from '../components/Local'
import Admin from '../components/Admin'
import Usuario from '../components/Usuario'
import Denuncia from '../components/Denuncia'
import PaginaInicial from '../components/PaginaInicial'
import SemDenuncia from '../components/SemDenuncia'
import ComDenuncia from '../components/ComDenuncia'
import PaginaSec from '../components/PaginaSec'
import CadastroEmpresa from '../componentsEmpresa/CadastroEmpresa'
import LoginEmpresa from '../componentsEmpresa/LoginEmpresa'


const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator initialRouteName='PaginaSec'>
            
            
            <Stack.Screen 
                name='Login'
                component ={Login}
                options = {{
                    headerShown: true
                }}
            />

            <Stack.Screen
                name= 'Categoria'
                component={Categoria}
                options={{
                    headerShown: true
                }}
            />

            <Stack.Screen 
                name='Cadastro'
                component ={Cadastro}
                options = {{
                    headerShown: true
                }}
            />

            <Stack.Screen 
                name='SuasDenuncias'
                component={Drawer}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name='AboutUs'
                component={Drawer}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name='Post'
                component={Post}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name='Local'
                component={Local}
                options={{
                    headerShown: true
                }}
            />
            <Stack.Screen 
                name='Admin'
                component={Admin}
                options={{
                    headerShown: true
                }}
            />
               <Stack.Screen
                name= 'Usuario'
                component={Usuario}
                options={{
                    headerShown: true
                }}
            />
            
            <Stack.Screen
                name= 'Denuncia'
                component={Denuncia}
                options={{
                    headerShown: true
                }}
            />

            <Stack.Screen
                name= 'PaginaInicial'
                component={PaginaInicial}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name= 'SemDenuncia'
                component={SemDenuncia}
                options={{
                    headerShown: true
                }}
            />
            <Stack.Screen
                name= 'ComDenuncia'
                component={ComDenuncia}
                options={{
                    headerShown: true
                }}
            />
             <Stack.Screen 
                name='PaginaSec'
                component ={PaginaSec}
                options = {{
                    headerShown: false
                }}
            />
               <Stack.Screen 
                name='CadastroEmpresa'
                component ={CadastroEmpresa}
                options = {{
                    headerShown: true
                }}
            />
               <Stack.Screen 
                name='LoginEmpresa'
                component ={LoginEmpresa}
                options = {{
                    headerShown: true
                }}
            />

        </Stack.Navigator>
    )
}