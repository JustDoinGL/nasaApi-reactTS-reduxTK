import { ActionCreatorWithPayload } from "@reduxjs/toolkit"
import { IAsteroidsDate } from "../../interface/asteroids"

export type ButtonStart = {
    style: "default" | "aside",
    asteroid?: IAsteroidsDate
}

type ButtonChoose = ButtonStart & {
    click: ActionCreatorWithPayload<IAsteroidsDate, "asteroids/incrementAsteroids">,
    text: "choose"
}

type ButtonDestroy = ButtonStart & {
    click: () => void,
    text: "destroy"
}


export type ButtonProps = ButtonChoose | ButtonDestroy