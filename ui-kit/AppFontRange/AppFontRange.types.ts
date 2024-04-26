import { ColorsEnum, FontSizeEnum } from "../../services/StorageService/Storage.types"

export interface IAppFontRangeProps {
   value: number
   onChange: (e: number) => void
   fontSize: FontSizeEnum
   bgColor: ColorsEnum
}
