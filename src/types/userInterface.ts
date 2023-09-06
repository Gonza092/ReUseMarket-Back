import { AuthUser } from "./registerUserInterface";

export type User = AuthUser & {
  user_id: number;
  username: string;
  email: string;
  password: string;
  avatar: string | null;
  bio: string | null;
  role: "admin" | "user";
  verification_code: string | null;
  verified_at: Date | null;
};
