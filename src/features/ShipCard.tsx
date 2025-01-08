import { Starship } from "./Starship"
type ShipCardProps = {
    ship: Starship
}
export default function ShipCard({ ship }: ShipCardProps) {
    return (
        <div className="ShipCard card rounded">
            <img className='rounded' src={ship.image} alt={ship.id} />
        </div>
    )
}