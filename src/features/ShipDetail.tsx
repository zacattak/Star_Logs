// import React from 'react'
import { observer } from 'mobx-react'
// import { AppState } from '../AppState'
import { shipsStore } from './ShipStore'

function StarshipDetail() {
    const starship = shipsStore.activeStarship

    if (!starship) {
        return <div>Locating starship withing the vastness of space. 🌠</div>
    }

    return (
        <div>
            <h2>{starship.name}</h2>
            <p>{starship.model}</p>
            <p>{starship.manufacturer}</p>
            <p>{starship.status}</p>
            <img src={starship.image} alt={starship.name} />
        </div>
    )
}

export default observer(StarshipDetail)