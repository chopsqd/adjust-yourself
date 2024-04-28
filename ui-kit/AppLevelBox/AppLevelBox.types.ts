import { FontSizeEnum } from "../../services/StorageService/Storage.types"

export interface IAppLevelBoxProps {
   onPress: () => void
   title: string
   disabled: boolean
   fontSize: FontSizeEnum
}
