import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

// import SuasDenuncias from '../components/SuasDenuncias'
import AboutUs from '../components/AboutUs'
import CustomDrawer from '../componentsEmpresa/CustomDrawerAdmin'

import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Admin  from '../components/Admin';



const Drawer = createDrawerNavigator()

const RotaDrawer = () => {

    return(

            <Drawer.Navigator
                drawerContent={props => <CustomDrawer {...props}/>}
                //Estilizar todos os links do Drawer
                screenOptions={{
                    headerShown: false,
                    drawerActiveBackgroundColor: '#DFEEEA',
                    drawerActiveTintColor: 'black',
                    drawerInactiveTintColor: 'black',
                    drawerLabelStyle:
                     {fontSize: 16, marginLeft:-32, padding:10}}}
            >
                  <Drawer.Screen 
                    name='Admin'
                    component={Admin}
                    options={{
                        drawerIcon: ({color}) => (
                           <SimpleLineIcons
                              name="question"
                              size={25}
                              color={color}
                           />
                        ),
                     }} 
                />
               
                
                <Drawer.Screen 
                    name='Sobre'
                    component={AboutUs}
                    options={{
                        drawerIcon: ({color}) => (
                           <SimpleLineIcons
                              name="question"
                              size={25}
                              color={color}
                           />
                        ),
                     }} 
                />
                    
                    <Drawer.Screen 
                    name='Empresa'
                    component={Empresa}
                    options={{
                        drawerIcon: ({color}) => (
                           <SimpleLineIcons
                              name="question"
                              size={25}
                              color={color}
                           />
                        ),
                     }} 
                />
               
            </Drawer.Navigator>
    )
}

export default RotaDrawer