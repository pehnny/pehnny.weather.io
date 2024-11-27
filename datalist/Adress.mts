export type TAdress =
{
    name: string,
    local_names: Object,
    lat: number,
    lon: number,
    country: string,
    state: string
}

export class Adress implements TAdress
{
    name: string
    local_names: Object
    lat: number
    lon: number
    country: string
    state: string

    constructor(name: string, local_names: Object, lat: number, lon: number, country: string, state: string)
    {
        this.name = name;
        this.local_names = local_names;
        this.lat = lat;
        this.lon = lon;
        this.country = country;
        this.state = state;
    }

    static from(adress: TAdress): Adress
    {
        return new Adress(
            adress.name,
            adress.local_names,
            adress.lat,
            adress.lon,
            adress.country,
            adress.state
        );
    }
}
