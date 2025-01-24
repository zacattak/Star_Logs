import { observer } from 'mobx-react-lite';
import { shipsStore } from './ShipStore';
import { useEffect } from 'react';
import { starshipService } from './ShipService'
import ShipCard from './ShipCard';
import { Link } from 'react-router-dom';
import { Starship } from './Starship';
function ShipsList() {
    const ships = shipsStore.ships
    useEffect(() => {
        starshipService.getStarships()
    }, [])
    return (
        <div className="ShipsList">
            <div className="container">
                <div className="row">
                    {
                        ships.map(s => <div className='col-md-4 my-2' key={s.id}>
                            <ShipCard ship={s} />
                            <div className="text-center">
                                <Link className="ShipDetailPage" to={`/starships/${s.id}`}>View {s.name}</Link>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default observer(ShipsList)

// type StarshipCardProps = {
//     ship: Starship
// }

// export const ShipsList = ({ ship }: StarshipCardProps) => {
//     return (
//         <div className="col-md-6 col-lg-4">
//             <div className="ShipCard">
//                 <img src={ship.image} alt={ship.name} />
//             </div>
//             <h3 className="text-center ship-name">{ship.name}</h3>
//             <div className="text-center">
//                 <Link className="ShipDetailPage" to={`/starships/${ship.id}`}>View {ship.name}</Link>
//             </div>
//         </div>
//     )
// }