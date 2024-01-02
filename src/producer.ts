import { producer } from "./configurations/kafka";

export const send = async (message: string) => {
    try {
        await producer.connect()
        await producer.send({ topic: "missileDataPSI-1", messages: [{ key:"alert", value: message }] });
    } catch (error) {
        return Promise.reject(error);
    }
}
