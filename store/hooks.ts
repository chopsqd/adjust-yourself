import { useDispatch, useSelector } from "react-redux"
import type { RootStateType, AppDispatchType } from "./index"

export const useAppDispatch = useDispatch.withTypes<AppDispatchType>()
export const useAppSelector = useSelector.withTypes<RootStateType>()
