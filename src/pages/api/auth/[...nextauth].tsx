import { logInAPI } from "@/apis/adminApi";
import { NextApiRequest } from "next";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        adminId: { label: "아이디", type: "text" },
        password: { label: "비밀번호", type: "text" },
      },

      //로그인 유효성 검사
      // 로그인 요청인 "signIn("credentials", { id, password })"에서 넣어준 "id", "password"값이 그대로 들어옴
      async authorize(credentials, req): Promise<any> {
        // try {
        //   console.log("credentials", credentials);
        // const data: any = await logInAPI()
        //   const data: any = await request({
        //     method: "POST",
        //     url: "/stm-user/login",
        //     data: {
        //       userId: credentials?.userId,
        //       password: credentials?.password,
        //       ip: credentials?.ip,
        //     },
        //   });
        //   return credentials;
        // } catch (error) {
        //   const response = error as unknown as any;
        //   throw new Error(response.message);
        // }
        console.log(credentials);
      },
    }),
  ],

  pages: {
    signIn: "/admin/login",
  },
});
