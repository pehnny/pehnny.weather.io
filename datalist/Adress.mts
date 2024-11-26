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
    name: string;
    local_names: Object;
    lat: number;
    lon: number;
    country: string;
    state: string;
    format: string;

    static from(adress: TAdress, id: number): Adress
    {
        const newAdress = new Adress();
        newAdress.name = adress.name;
        newAdress.local_names = adress.local_names;
        newAdress.lat = adress.lat;
        newAdress.lon = adress.lon;
        newAdress.country = adress.country;
        newAdress.state = adress.state;
        newAdress.format = `${id}. ${newAdress.name}, ${newAdress.state}, ${newAdress.country}`
        return newAdress;
    }
}