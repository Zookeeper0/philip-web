import { logInAPI } from "@/apis/adminApi";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        adminId: { label: "Text", type: "text", placeholder: "id" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const { adminId, password } = credentials as {
          adminId: string;
          password: string;
        };

        try {
          const user: any = await logInAPI({
            adminId: adminId,
            password: password,
          });

          return user;
        } catch (error) {
          const { response } = error as unknown as any;
          throw new Error(response.data.message);
        }
      },
    }),
    // KakaoProvider({
    //   clientId: process.env.NEXT_PUBLIC_KAKAO_REST_API!,
    //   clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET!,
    // }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },

  pages: {
    signIn: "/admin/login",
    signOut: "/admin/login",
    // error: "/admin/login",
  },
};

export default NextAuth(authOptions);
