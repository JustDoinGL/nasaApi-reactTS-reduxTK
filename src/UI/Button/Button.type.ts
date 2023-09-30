import { ActionCreatorWithPayload, ActionCreatorWithoutPayload } from "@reduxjs/toolkit"
import { IAsteroidsDate } from "../../interface/asteroids"

export type ButtonStart = {
    styleProps: "default" | "aside",
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


type ButtonDelete = ButtonStart & {
    click: ActionCreatorWithoutPayload<"asteroids/deleteAsteroids">,
    text: "delete"
}


export type ButtonProps = ButtonChoose | ButtonDestroy | ButtonDelete