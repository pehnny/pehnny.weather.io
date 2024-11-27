export class Adress {
    name;
    local_names;
    lat;
    lon;
    country;
    state;
    constructor(name, local_names, lat, lon, country, state) {
        this.name = name;
        this.local_names = local_names;
        this.lat = lat;
        this.lon = lon;
        this.country = country;
        this.state = state;
    }
    static from(adress) {
        return new Adress(adress.name, adress.local_names, adress.lat, adress.lon, adress.country, adress.state);
    }
}
//# sourceMappingURL=Adress.mjs.map