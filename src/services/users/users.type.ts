export type UsersType = ErrorType & {
  id: string;
  email: string;
  name: string;
  username: string;
  avatar: string | null;
  createdAt: Date;
  updatedAt: Date;
}