import React from "react"
import { View, Text, ScrollView } from "react-native"
import Slider from "@react-native-community/slider"
import { styles } from "./AppFontRange.style"
import { IAppFontRangeProps } from "./AppFontRange.types"
import { ThemeEnum } from "../../services/StorageService/Storage.types"

const AppFontRange: React.FC<IAppFontRangeProps> = (props) => {
   const { value, onChange, fontSize, bgColor, theme } = props

   return (
      <View style={styles.range}>
         <ScrollView style={styles.container}>
            <Text
               style={{
                  fontSize,
                  color: theme === ThemeEnum.dark ? "#FFF" : "#000"
               }}
            >
               JavaScript - это мощный язык программирования,
               который широко используется для создания интерактивных веб-сайтов и веб-приложений
            </Text>
         </ScrollView>

         <Slider
            value={value}
            onValueChange={onChange}
            style={{ width: 200, height: 40 }}
            step={1}
            minimumValue={0}
            maximumValue={3}
            minimumTrackTintColor={"#bebebe"}
            maximumTrackTintColor={"#000"}
            thumbTintColor={bgColor}
         />
      </View>
   )
}

export default AppFontRange
