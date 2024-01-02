import { send } from "./producer";
import { getData } from "./queryApi";


setInterval(async () => {
    const data = await getData()
    console.log(data);
    send(data)
},15000)

