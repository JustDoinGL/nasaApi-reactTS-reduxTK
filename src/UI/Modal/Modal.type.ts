import { SetStateAction, Dispatch } from "react"
import { IPictures } from "../../interface/pictures"
import { Daum, Link } from "../../interface/searchPictures"

type StartModalProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

type IPicturesModalProps = StartModalProps & {
  picture: IPictures
  item?: []
}

type LinkModalProps = StartModalProps & {
  picture: Link
  item: Daum[]
}

export type ModalProps = IPicturesModalProps | LinkModalProps