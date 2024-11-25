import { appendData } from "./datalist/appendData.mjs";
import { clearData } from "./datalist/clearData.mjs";
import { fetchAdresses } from "./datalist/fetchAdresses.mjs";
import { filterAdresses } from "./datalist/filterAdresses.mjs";
async function autocomplete(event) {
    const datalist = document.querySelector("#city-list");
    if (datalist === null) {
        return;
    }
    const keyword = this.value;
    if (keyword.length < 3) {
        return;
    }
    clearData(datalist);
    const adresses = await fetchAdresses(keyword);
    const cities = filterAdresses(adresses);
    appendData(datalist, cities);
}
const input = document.querySelector("#city-choice");
if (input !== null) {
    input.addEventListener("change", autocomplete);
}
//# sourceMappingURL=script.mjs.map