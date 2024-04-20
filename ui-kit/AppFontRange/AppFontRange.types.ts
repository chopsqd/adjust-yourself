import { ColorsEnum, FontSizeEnum } from "../../services/StorageService/Storage.types"

export interface IAppFontRangeProps {
   value: number
   onChange: () => void
   fontSize: FontSizeEnum
   bgColor: ColorsEnum
}
