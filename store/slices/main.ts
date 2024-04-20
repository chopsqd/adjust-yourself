import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ColorsEnum, FontSizeEnum, IStorageData } from "../../services/StorageService/Storage.types"

const initialState: IStorageData = {
   currentLevel: 0,
   settings: {
      theme: "light",
      fontSize: FontSizeEnum.Medium,
      accent: ColorsEnum.Blue
   }
}

const mainSlice = createSlice({
   name: "main",
   initialState,
   reducers: {
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
   setCurrentLevel,
   setSettingsTheme,
   setSettingsFontSize,
   setSettingsAccent
} = mainSlice.actions

export default mainSlice.reducer
