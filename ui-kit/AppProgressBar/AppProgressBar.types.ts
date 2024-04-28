import { FontSizeEnum } from "../../services/StorageService/Storage.types"

export interface IAppProgressBarProps {
   title: string
   complete: number
   fontSize: FontSizeEnum
   total: number
}
