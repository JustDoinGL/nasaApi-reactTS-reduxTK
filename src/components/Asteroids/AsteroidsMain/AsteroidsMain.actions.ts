import { IAsteroidsDate } from "../../../interface/asteroids"

import BigAsteroid from '../../../img/asteroidBig.svg'
import SmallAsteroid from '../../../img/asteroidSmall.svg'

const getData = (el: IAsteroidsDate) => {
    const date = new Date(el.close_approach_data[0].close_approach_date);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' }).replace(/\./g, '');
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
}

const getActiveKilometers = (isActiveKilometers: boolean, el: IAsteroidsDate) => {
    if (isActiveKilometers) {
        const kilometers = el.close_approach_data[0].miss_distance.kilometers
            .split('.')[0]
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return `${kilometers} km`;
    } else {
        return `${el.close_approach_data[0].miss_distance.lunar.split('.')[0]} lunar orbits`;
    }
}

const getImageSrc = (el: IAsteroidsDate) => {
    return el.estimated_diameter.meters.estimated_diameter_max > 100 ? BigAsteroid : SmallAsteroid;
}

const getName = (el: IAsteroidsDate) => {
    return el.name
        .match(/\((.*?)\)/g)
        ?.map((match: string) =>
            match.substring(1, match.length - 1))
}

const getDiameter = (el: IAsteroidsDate) => {
    return Math.floor(
        el.estimated_diameter.meters.estimated_diameter_max
    )
}

export { getData, getActiveKilometers, getImageSrc, getName, getDiameter }