import AsyncStorage from "@react-native-async-storage/async-storage"
import { IStorageData } from "./Storage.types"

export class StorageService {
   public static async getData (): Promise<IStorageData | null> {
      try {
         const data = await AsyncStorage.getItem("data")

         if (!data) {
            // Первое открытие приложения | данных нет
            return null
         }

         return JSON.parse(data)
      } catch (error) {
         throw new Error(`Ошибка чтения данных. ${error}`)
      }
   }

   public static async setData (data: IStorageData): Promise<void> {
      try {
         await AsyncStorage.setItem("data", JSON.stringify(data))
      } catch (error) {
         throw new Error(`Ошибка сохранения данных. ${error}`)
      }
   }
}
