import axios from 'axios'
import { baseURL } from '../env'
export const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/",
  timeout: 8000
})
