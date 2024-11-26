export class Adress {
    name;
    local_names;
    lat;
    lon;
    country;
    state;
    format;
    static from(adress, id) {
        const newAdress = new Adress();
        newAdress.name = adress.name;
        newAdress.local_names = adress.local_names;
        newAdress.lat = adress.lat;
        newAdress.lon = adress.lon;
        newAdress.country = adress.country;
        newAdress.state = adress.state;
        newAdress.format = `${id}. ${newAdress.name}, ${newAdress.state}, ${newAdress.country}`;
        return newAdress;
    }
}
//# sourceMappingURL=Adress.mjs.map