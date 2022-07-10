import request from "@/utils/request.js";

export const getRecommendList = (params) =>
  request({
    url: "/personalized",
    params,
  });
