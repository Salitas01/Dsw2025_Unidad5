import { instance } from "../../shared/api/axiosInstance";

export const getMainProducts = async () => {
    const response = await instance.get(`api/products`);

    return {data: response.data.items, error:null}
}
