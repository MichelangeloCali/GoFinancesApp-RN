import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import { Dashboard } from '../screens/Dashboard/Dashboard'
import { Register } from '../screens/Register/Register'

const { Navigator, Screen } = createBottomTabNavigator()

export const AppRoutes = () => {
  const theme = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 70,
        }
      }}
    >
      <Screen 
        name='Listagem'
        component={Dashboard}
        options={{
          tabBarIcon: (({ size, color }) => 
            <MaterialIcons 
              name='format-list-bulleted'
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen 
        name='Cadastrar'
        component={Register}
        options={{
          tabBarIcon: (({ size, color }) => 
            <MaterialIcons 
              name='attach-money'
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen 
        name='Resumo'
        component={Register}
        options={{
          tabBarIcon: (({ size, color }) => 
            <MaterialIcons 
              name='pie-chart'
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  )
}
