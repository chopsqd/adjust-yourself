import React from "react"
import { View, Text, Alert } from "react-native"
import { useAppSelector } from "../../store/hooks"
import { selectSettings } from "../../store/slices/mainSlice"
import { AppHeader, AppLayout } from "../../ui-kit"
import { INavigationProp } from "../../AppNavigator"
import { styles } from "./Creators.style"
import { ThemeEnum } from "../../services/StorageService/Storage.types"

interface ICreatorsProps {
   navigation: INavigationProp
}

const Creators: React.FC<ICreatorsProps> = ({ navigation }) => {
   const { fontSize, accent, theme } = useAppSelector(selectSettings)

   const onInfoPress = () => {
      Alert.alert(
         "Adjust Yourself",
         "Добро пожаловать!\nВ этом приложении ты можешь изучить основы языка JavaScript"
      )
   }

   const baseStyle = {
      fontSize,
      color: theme === ThemeEnum.dark ? "#FFF" : "#000"
   }

   return (
      <View
         style={{
            backgroundColor: theme
         }}
      >
         <AppHeader
            onInfoPress={onInfoPress}
            navigation={navigation}
            title={"СОЗДАТЕЛИ"}
            bgColor={accent}
            fontSize={fontSize}
         />
         <AppLayout theme={theme}>
            <View style={styles.container}>
               <View>
                  <Text
                     style={[
                        styles.title,
                        {
                           color: theme === ThemeEnum.dark ? "#FFF" : "#000",
                           fontSize: fontSize * 1.3
                        }
                     ]}
                  >
                     Данное приложение было разработано в качестве курсового проекта дисциплины
                     “Программирование и операционные системы для мобильных платформ”
                  </Text>
               </View>

               <View style={styles.creatorsList}>
                  <Text
                     style={[
                        styles.subtitle,
                        baseStyle
                     ]}
                  >
                     Команда состоит из студентов ДонНТУ, факультета ИСП, группы ПОИСм-23:
                  </Text>
                  <Text style={baseStyle}>
                     <Text style={{ fontWeight: "bold" }}>Чоп М.Ю.</Text> - Проектировщик, программист
                  </Text>
                  <Text style={baseStyle}>
                     <Text style={{ fontWeight: "bold" }}>Мисников В.Э.</Text> - Проектировщик, дизайнер
                  </Text>
                  <Text style={baseStyle}>
                     <Text style={{ fontWeight: "bold" }}>Брылёв В.О.</Text> - Тестировщик
                  </Text>
               </View>

               <View>
                  <Text style={[
                     styles.copyrights,
                     baseStyle
                  ]}>© TwoPlusOne Team, 2024</Text>
               </View>
            </View>
         </AppLayout>
      </View>
   )
}

export default Creators
