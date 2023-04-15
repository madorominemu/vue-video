import {post} from "./http";

export const getVideos = (params) => post(`https://bdb24c6d-8c19-4f80-8e7e-c9c9f037f131.bspapp.com/video`,params);
