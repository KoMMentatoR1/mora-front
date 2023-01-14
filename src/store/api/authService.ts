import $api, { API_URL } from '../../http'
import axios, { AxiosResponse } from 'axios'
import { IUser } from '../../types/user'
export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<IUser>> {
    return axios.post<IUser>(`${API_URL}/auth/authentication`, {
      email,
      password,
    })
  }

  static async registration(
    email: string,
    password: string,
    username: string
  ): Promise<AxiosResponse<IUser>> {
    return axios.post<IUser>(`${API_URL}/auth/registration`, {
      email,
      password,
      username,
    })
  }

  static async forgotPassword(email: string): Promise<AxiosResponse<IUser>> {
    return $api.post<IUser>('/auth/forgotPassword', {
      email,
    })
  }

  static async newPassword(
    code: string,
    newPass: string
  ): Promise<AxiosResponse<IUser>> {
    return $api.post<IUser>('/auth/newPass', {
      code,
      newPass,
    })
  }

  static async refresh(): Promise<AxiosResponse<IUser>> {
    return await $api.get<IUser>(`/auth/refresh`, { withCredentials: true })
  }
}
