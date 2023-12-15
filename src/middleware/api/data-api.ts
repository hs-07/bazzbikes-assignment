import axiosClient from "../axios/axios-client/axios-client-public";
import { dataRoutes } from "./routes";

export const GetData = async () => {
  try {
    const res: any = await axiosClient.get(dataRoutes.GET_DATA_ROUTE);
    return res.data;
  } catch (error: any) {
    return error;
  }
};
