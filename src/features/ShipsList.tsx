import { observer } from 'mobx-react-lite';
import { shipsStore } from './ShipStore';
import { useEffect } from 'react';
import { starshipService } from './ShipService'
import ShipCard from './ShipCard';
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
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default observer(ShipsList)