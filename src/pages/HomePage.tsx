import { useState } from "react";
import { AppState } from '../AppState';
import ShipsList from "../features/ShipsList";
import { shipsStore } from "../features/ShipStore";

export default function HomePage() {
  // const [count, setCount] = useState(0)

  return (
    <div className="home-page">
      <ShipsList />
    </div>
  )
}