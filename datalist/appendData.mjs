export function appendData(datalist, adresses) {
    for (const adress of adresses) {
        const option = document.createElement("option");
        option.value = adress.formatted;
        datalist.appendChild(option);
    }
}
//# sourceMappingURL=appendData.mjs.map