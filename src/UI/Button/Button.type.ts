import { ActionCreatorWithPayload, ActionCreatorWithoutPayload, AsyncThunk } from "@reduxjs/toolkit"
import { IAsteroidsDate } from "../../interface/asteroids"
import { ISearch } from "../../interface/searchPictures"

export type ButtonStart = {
    styleProps: "default" | "aside" | "search",
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

type ButtonSearch = ButtonStart & {
    click: AsyncThunk<ISearch, string[], any>,
    text: "Search"
}

export type ButtonProps = ButtonChoose | ButtonDestroy | ButtonDelete | ButtonSearch