import React from "react"
import { Button, Text, View } from "react-native"
import { INavigationProp } from "../../AppNavigator"
import AppProgressBar from "../../ui-kit/AppProgressBar/AppProgressBar.component"
import { ColorsEnum, FontSizeEnum } from "../../services/StorageService/Storage.types"
import AppHeader from "../../ui-kit/AppHeader/AppHeader.component"
import AppLevelBox from "../../ui-kit/AppLevelBox/AppLevelBox.component"
import AppFontRange from "../../ui-kit/AppFontRange/AppFontRange.component"
import AppAnswerBox from "../../ui-kit/AppAnswerBox/AppAnswerBox.component"
import AppLayout from "../../ui-kit/AppLayout/AppLayout.component"

interface IHomeProps {
   navigation: INavigationProp
}

const Home: React.FC<IHomeProps> = ({ navigation }) => {
   return (
      <View
         style={{ backgroundColor: "#fff" }}
      >
         <AppHeader
            onInfoPress={() => {}}
            navigation={navigation}
            title={"уцупуцп"}
            bgColor={ColorsEnum.Blue}
            fontSize={FontSizeEnum.Medium}
         />
         <AppLayout>
            <AppProgressBar
               fontSize={FontSizeEnum.Medium}
               title={"Пройдено тем"}
               complete={5}
            />
            <AppLevelBox
               fontSize={FontSizeEnum.Medium}
               title={"Введение в JS"}
               disabled={true}
            />
            <AppLevelBox
               fontSize={FontSizeEnum.Medium}
               title={"Введение в JS"}
               disabled={false}
            />
            <AppAnswerBox
               fontSize={FontSizeEnum.Medium}
               question={"Когда?"}
               answer={"Бумага"}
               isCorrect={true}
            />
            <AppFontRange
               value={2}
               onChange={() => {
               }}
               fontSize={FontSizeEnum.ExtraLarge}
               bgColor={ColorsEnum.Blue}
            />
            <Text>Home</Text>
            <Button
               title={"Go to Creators screen"}
               onPress={() =>
                  navigation.navigate("Creators")
               }
            />
         </AppLayout>
      </View>
   )
}

export default Home
