export class Starship {
    id: string
    name: string
    model: string
    manufacturer: string
    status: boolean
    image: string

    constructor(data: Starship) {
        this.id = data.id
        this.name = data.name
        this.model = data.model
        this.manufacturer = data.manufacturer
        this.status = data.status
        this.image = data.image
        // TODO add additional properties if needed
    }
}

// {
//     "id": 1,
//     "name": "CR90 corvette",
//     "model": "CR90 corvette",
//     "manufacturer": "Corellian Engineering Corporation",
//     "status": "active",
//     "image": "https://starwars-visualguide.com/assets/img/starships/2.jpg"
//   }