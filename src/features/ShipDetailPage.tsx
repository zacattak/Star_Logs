import React from 'react'
import { useParams } from 'react-router-dom'

function StarshipPage() {
    const { starshipId } = useParams()

    return (
        <div className="ShipDetailPage">
            🚀 - {starshipId}
        </div>
    )
}

export default StarshipPage