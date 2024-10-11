import "next-auth";

declare module "next-auth" {
  interface User {
    id: number;
    email: string;
    name: string;
    access_token: string;
    refresh_token: string;
  }

  interface Session extends DefaultSession {
    user: User;
    expires_in: string;
    error: string;
  }
}
