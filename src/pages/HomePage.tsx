// import { useState } from "react";
// import { AppState } from '../AppState';
import ShipsList from "../features/ShipsList"
// import { shipsStore } from "../features/ShipStore";
// import { useEffect, useState } from "react";
// import { starshipService } from "../features/ShipService";
// import Pop from "../utils/Pop";
// import { shipsStore } from "../features/ShipStore";

export default function HomePage() {
  // const [count, setCount] = useState(0)

  return (
    <div className="home-page">
      <ShipsList />
    </div>
  )
}
// export default function HomePage() {
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const retrieveStarships = async () => {
//       try {
//         setLoading(true);
//         await starshipService.getStarships();

//         setLoading(false)
//       } catch (e) {
//         Pop.error(e as Error);
//       }
//     }

//     retrieveStarships();
//   }, [])

//   const ships = shipsStore.ships;

//   return (
//     <section className="container">
//       <div className="row gy-2">
//         {loading ? <h1 className="text-center loading-design">loading</h1> : ships.map(s => (<ShipsList key={s.id} ship={s} />))}
//       </div>
//     </section>
//   )
// }