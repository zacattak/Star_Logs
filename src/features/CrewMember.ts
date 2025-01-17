export class CrewMember {
    id: string
    name: string
    role: string
    rank: string
    avatar: string

    constructor(data: CrewMember) {
        this.id = data.id;
        this.name = data.name;
        this.role = data.role;
        this.rank = data.rank;
        this.avatar = data.avatar;
    }
}