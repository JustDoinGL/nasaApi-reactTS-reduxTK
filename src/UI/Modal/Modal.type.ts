import { SetStateAction, Dispatch } from "react"
import { IPictures } from "../../interface/pictures"

export type ModalProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  picture: IPictures
}