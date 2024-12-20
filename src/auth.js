import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { userValidation } from "./app/utils/auth";
import { checkTokenValidity } from "./app/utils/tokens";

// Your own logic for dealing with plaintext password strings; be careful!

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "Credentials",
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        let user = { credentials };

        // logic for user validation
        const response = await userValidation(email, password);

        if (response.status === false) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("Please check your credentials1");
        }

        // return user object with their profile data
        return {
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
          userId: response.data.id,
          username: response.data.username,
          email: response.data.email,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, account, user }) {
      if (account && user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.id = user.userId;
        token.username = user.username;

        return token;
      }

      return token;
    },

    async session({ session, token }) {
      try {
        const responseToken = await checkTokenValidity(
          token.accessToken,
          token.refreshToken
        );

        if (responseToken.accessToken) {
          session.user.accessToken = responseToken.accessToken;
          session.user.id = token.id;
          session.user.username = token.username;

          return session;
        }

        return (session = { ...session, user: null, ...responseToken });
      } catch (error) {
        throw new Error("Unable to verify token");
      }
    },
  },
  pages: {
    signIn: "/login",
  },
});
