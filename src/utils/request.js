import axios from "axios";
// 基准地址进行抽离
// axios.defaults.baseURL = 'http://localhost:3000'
// axios.defaults.baseURL = 'http://43.142.37.253:8080/'

// axios.create 可以创建一个新的实例
// 可以通过参数对象 进行自定义配置

// 得到的request 具备axios同样的功能
const request = axios.create({
  baseURL: "http://localhost:3000",
});

// export const request2 = axios.create({
//   baseURL: 'http://43.142.37.253:8080/'
// })

export default request;
