import { ColorsEnum, FontSizeEnum } from "../../services/StorageService/Storage.types"
import { INavigationProp } from "../../AppNavigator"

export interface IAppHeaderProps {
   onInfoPress: () => void
   navigation: INavigationProp
   title: string
   bgColor: ColorsEnum
   fontSize: FontSizeEnum
}
