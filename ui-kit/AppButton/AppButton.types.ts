import { ColorsEnum, FontSizeEnum } from "../../services/StorageService/Storage.types"

export interface IAppButtonProps {
   onPress: () => void
   title: string
   bgColor: ColorsEnum
   fontSize: FontSizeEnum
   disabled?: boolean
}
