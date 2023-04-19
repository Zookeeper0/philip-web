import { getSession } from "next-auth/react";

export const requireAuthentication = async (context: any, cb: any) => {
  const session = await getSession(context);

  console.log("session", session);
  if (!session) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  return cb({ session });
};
