import { observer } from 'mobx-react-lite';
import { shipsStore } from './ShipStore';
import { useEffect } from 'react';
import { starshipService } from './ShipService'
import ShipCard from './ShipCard';
import { Link } from 'react-router-dom';
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
// function StarshipDetail (){
//     const starship = shipsStore.activeStarship
//     useEffect(() => {
//         starshipService.getStarship(starshipId)
//       }, [])
// }
export default observer(ShipsList)