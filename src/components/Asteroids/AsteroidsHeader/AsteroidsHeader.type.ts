import { Dispatch, SetStateAction } from "react"

export type AsteroidsHeaderProps = {
    activeKilometers: boolean,
    setActiveKilometers: Dispatch<SetStateAction<boolean>>
}