import NextAuth, { Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

declare module "next-auth" {
  interface Session {
	idToken?: string;
	accessToken?: string;
  }
}

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
			authorization: {
				params: {
					redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URL,
				},
			},
		}),
	],
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token.idToken = account.id_token;
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token }) {
			session.idToken = token.idToken as string | undefined;
			session.accessToken = token.accessToken as string | undefined;
			return session;
		},
	},
	debug: true,
});
