import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async redirect({ baseUrl }: { baseUrl: string }) {
      return `${baseUrl}/dashboard`; // Ensure `baseUrl` is correct
    },
  },
  debug: true, // Add this line
};

export const auth = NextAuth(authOptions);
export default auth;
