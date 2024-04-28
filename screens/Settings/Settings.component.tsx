import React from "react"
import { Alert, Switch, Text, View } from "react-native"
import { AppButton, AppFontRange, AppHeader, AppLayout } from "../../ui-kit"
import { INavigationProp } from "../../AppNavigator"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { selectSettings, setSettingsAccent, setSettingsFontSize, setSettingsTheme } from "../../store/slices/main"
import { ColorsEnum, FontSizeEnum, ThemeEnum } from "../../services/StorageService/Storage.types"
import { styles } from "./Settings.style"

interface ISettingsProps {
   navigation: INavigationProp
}

const Settings: React.FC<ISettingsProps> = ({ navigation }) => {
   const dispatch = useAppDispatch()
   const { fontSize, accent, theme } = useAppSelector(selectSettings)

   const fontSizeEnumValues = Object.keys(FontSizeEnum)

   const onInfoPress = () => {
      Alert.alert(
         "Раздел настроек",
         "В этом разделе можно изменить внешний вид приложения"
      )
   }

   const toggleSwitch = () => {
      if (theme === ThemeEnum.light) {
         dispatch(setSettingsTheme(ThemeEnum.dark))
      } else {
         dispatch(setSettingsTheme(ThemeEnum.light))
      }
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
            title={"НАСТРОЙКИ"}
            bgColor={accent}
            fontSize={fontSize}
         />
         <AppLayout theme={theme}>
            <View style={styles.row}>
               <Text
                  style={[
                     styles.text,
                     {
                        color: theme === ThemeEnum.dark ? "#FFF" : "#000"
                     }
                  ]}
               >
                  ТЕМА
               </Text>
               <Switch
                  trackColor={{
                     false: ThemeEnum.dark,
                     true: ThemeEnum.light
                  }}
                  thumbColor={accent}
                  ios_backgroundColor={"#3e3e3e"}
                  onValueChange={toggleSwitch}
                  value={theme === ThemeEnum.dark}
                  style={styles.switch}
               />
            </View>

            <View style={styles.row}>
               <Text
                  style={[
                     styles.text,
                     {
                        color: theme === ThemeEnum.dark ? "#FFF" : "#000"
                     }
                  ]}
               >
                  АКЦЕНТ
               </Text>
               <View style={styles.accents}>
                  {Object.keys(ColorsEnum).map((key, index) => {
                     const color = ColorsEnum[key as keyof typeof ColorsEnum]

                     return (
                        <AppButton
                           key={index}
                           style={{ maxHeight: 40 }}
                           onPress={() => {
                              dispatch(setSettingsAccent(color))
                           }}
                           title={"_"}
                           bgColor={color}
                           fontSize={FontSizeEnum.Medium}
                        />
                     )
                  })}
               </View>
            </View>

            <View style={styles.row}>
               <Text
                  style={[
                     styles.text,
                     {
                        color: theme === ThemeEnum.dark ? "#FFF" : "#000"
                     }
                  ]}
               >
                  ШРИФТ
               </Text>
               <AppFontRange
                  value={fontSizeEnumValues.indexOf(fontSize.toString())}
                  onChange={(e: number) => {
                     const selectedSize = fontSizeEnumValues[e]

                     if (selectedSize !== undefined) {
                        dispatch(setSettingsFontSize(+selectedSize))
                     }
                  }}
                  fontSize={fontSize}
                  bgColor={accent}
               />
            </View>
         </AppLayout>
      </View>
   )
}

export default Settings
