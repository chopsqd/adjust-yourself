import AsyncStorage, { AsyncStorageStatic } from "@react-native-async-storage/async-storage"
import { StorageService } from "./Storage.service"
import { ColorsEnum, FontSizeEnum, IStorageData } from "./Storage.types"

jest.mock("@react-native-async-storage/async-storage", () => ({
   getItem: jest.fn(),
   setItem: jest.fn()
}))

const mockedAsyncStorage = AsyncStorage as jest.Mocked<AsyncStorageStatic>

describe("StorageService", () => {
   beforeEach(() => {
      mockedAsyncStorage.getItem.mockClear()
      mockedAsyncStorage.setItem.mockClear()
   })

   describe("getData", () => {
      it("should return data when data is present in AsyncStorage", async () => {
         const testData = { key: "value" }
         mockedAsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify(testData))

         const result = await StorageService.getData()

         expect(result).toEqual(testData)
         expect(mockedAsyncStorage.getItem).toHaveBeenCalledWith("data")
      })

      it("should throw an error when data is not present in AsyncStorage", async () => {
         mockedAsyncStorage.getItem.mockResolvedValueOnce(null)

         await expect(StorageService.getData()).resolves.toEqual(null)
         expect(mockedAsyncStorage.getItem).toHaveBeenCalledWith("data")
      })

      it("should throw an error when AsyncStorage.getItem throws an error", async () => {
         const errorMessage = "AsyncStorage Error"
         mockedAsyncStorage.getItem.mockRejectedValueOnce(new Error(errorMessage))

         await expect(StorageService.getData()).rejects.toThrow(`Ошибка чтения данных. Error: ${errorMessage}`)
         expect(mockedAsyncStorage.getItem).toHaveBeenCalledWith("data")
      })
   })

   describe("setData", () => {
      it("should set data in AsyncStorage", async () => {
         const testData: IStorageData = {
            currentLevel: 1,
            settings: {
               theme: "dark",
               accent: ColorsEnum.Green,
               fontSize: FontSizeEnum.Small
            }
         }

         await StorageService.setData(testData)

         expect(mockedAsyncStorage.setItem).toHaveBeenCalledWith("data", JSON.stringify(testData))
      })

      it("should throw an error when AsyncStorage.setItem throws an error", async () => {
         const testData: IStorageData = {
            currentLevel: 1,
            settings: {
               theme: "dark",
               accent: ColorsEnum.Green,
               fontSize: FontSizeEnum.Small
            }
         }

         const errorMessage = "AsyncStorage Error"
         mockedAsyncStorage.setItem.mockRejectedValueOnce(new Error(errorMessage))

         await expect(StorageService.setData(testData)).rejects.toThrow(`Ошибка сохранения данных. Error: ${errorMessage}`)
         expect(mockedAsyncStorage.setItem).toHaveBeenCalledWith("data", JSON.stringify(testData))
      })
   })
})
