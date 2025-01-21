import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
			session.idToken = token.idToken;
			session.accessToken = token.access_token;
			return session;
		},
	},
	debug: true
});
