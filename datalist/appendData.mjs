export function appendData(datalist, adresses) {
    for (const adress of adresses) {
        const option = document.createElement("option");
        option.value = `${adress.name}, ${adress.state}, ${adress.country}`;
        option.dataset.lat = String(adress.lat);
        option.dataset.lon = String(adress.lon);
        datalist.appendChild(option);
    }
}
//# sourceMappingURL=appendData.mjs.map