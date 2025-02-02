import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { starshipService } from './ShipService'
import ShipDetail from './ShipDetail'
import Pop from "../utils/Pop";
import { shipsStore } from './ShipStore';

// export default function ShipDetailPage() {
//     const { starshipId } = useParams()
//     // const starship = shipsStore.activeStarship


//     useEffect(() => {

//         const retrieveStarship = async () => {

//             // if (!starshipId) {
//             //     Pop.error(new Error('Starship ID is missing!'));
//             //     return;
//             // }
//             try {

//                 await starshipService.getStarship(starshipId);
//                 await starshipService.getStarshipCrew(starshipId);
//                 await starshipService.getStarshipLogs(starshipId);
//             } catch (e) {
//                 Pop.error(e as Error);
//             }
//         }

//         retrieveStarship();
//     })
export default function ShipDetailPage() {
    const { starshipId } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const retrieveStarship = async () => {
            if (!starshipId) {
                Pop.error(new Error('Starship ID is missing!'));
                return;
            }

            try {
                await starshipService.getStarship(starshipId);
                await starshipService.getStarshipCrew(starshipId);
                await starshipService.getStarshipLogs(starshipId);
            } catch (e) {
                Pop.error(e as Error);
            } finally {
                setIsLoading(false);
            }
        };

        retrieveStarship();
    }, [starshipId]);

    if (isLoading || !starshipId) {
        return <div>Loading...</div>;
    }

    return (
        <div className="ShipDetailPage">
            🚀 - {starshipId} { }
            <ShipDetail />
        </div>
    )
}

