import { IUser } from '../interfaces/auth.interface'

export class User implements IUser {
  constructor (
    public id: number,
    public name: string,
    public email: string,
    public password: string
  ) { }
}
