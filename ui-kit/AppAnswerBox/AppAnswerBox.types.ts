import { FontSizeEnum } from "../../services/StorageService/Storage.types"

export interface IAppAnswerBoxProps {
   question: string
   answer: string
   isCorrect: boolean
   fontSize: FontSizeEnum
}
