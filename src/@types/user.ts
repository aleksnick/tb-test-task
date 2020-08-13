export interface IUser {
  id: number;
  email: string;
  name: string;
  age: number;
}

export interface IUserStore extends IUser {}
