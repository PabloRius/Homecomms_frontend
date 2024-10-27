import { Hub } from "./Hub";

export interface User {
  username: string;
  email: string;
  password: string;
  hubs: Array<Hub>;
}
export interface registerPayload
  extends Pick<User, "password" | "email" | "username"> {}
export interface loginPayload extends Pick<User, "password" | "email"> {}
export interface loggedUser extends Pick<User, "username" | "email"> {}
