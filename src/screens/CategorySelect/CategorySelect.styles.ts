import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons'
import theme from "../../global/styles/theme";

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: ${RFValue(113)}px;
  padding-bottom: 19px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
`

export const Category = styled.TouchableOpacity<CategoryProps>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: ${RFValue(17)}px;
  background-color: ${({ isActive }) => isActive ? theme.colors.secondary_light : theme.colors.background};
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
`

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`