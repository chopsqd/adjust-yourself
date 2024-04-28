import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ColorsEnum, FontSizeEnum, IStorageData, ThemeEnum } from "../../services/StorageService/Storage.types"
import { RootStateType } from "../index"

const initialState: IStorageData = {
   currentLevel: 0,
   settings: {
      theme: ThemeEnum.light,
      fontSize: FontSizeEnum.Medium,
      accent: ColorsEnum.Blue
   }
}

const mainSlice = createSlice({
   name: "main",
   initialState,
   reducers: {
      setMainData (state: IStorageData, action: PayloadAction<IStorageData>) {
         state.settings = action.payload.settings
         state.currentLevel = action.payload.currentLevel
      },
      setCurrentLevel (state: IStorageData, action: PayloadAction<number>) {
         state.currentLevel = action.payload
      },
      setSettingsTheme (state: IStorageData, action: PayloadAction<IStorageData["settings"]["theme"]>) {
         state.settings.theme = action.payload
      },
      setSettingsFontSize (state: IStorageData, action: PayloadAction<IStorageData["settings"]["fontSize"]>) {
         state.settings.fontSize = action.payload
      },
      setSettingsAccent (state: IStorageData, action: PayloadAction<IStorageData["settings"]["accent"]>) {
         state.settings.accent = action.payload
      }
   }
})

export const {
   setMainData,
   setCurrentLevel,
   setSettingsTheme,
   setSettingsFontSize,
   setSettingsAccent
} = mainSlice.actions

export const selectMainData = (state: RootStateType) => state.main
export const selectSettings = (state: RootStateType) => state.main.settings
export const selectCurrentLevel = (state: RootStateType) => state.main.currentLevel

export default mainSlice.reducer
