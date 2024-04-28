import React from "react"
import { ThemeEnum } from "../../services/StorageService/Storage.types"

export interface IAppLayoutProps {
   children: React.ReactNode
   theme: ThemeEnum
}
