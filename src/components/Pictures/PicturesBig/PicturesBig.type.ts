import { Dispatch, SetStateAction } from "react"
import { IPictures } from "../../../interface/pictures"

export type PicturesBigProps = {
  picture: IPictures
  setIsOpen: Dispatch<SetStateAction<boolean>>
}