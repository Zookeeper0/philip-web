import { AdminPage } from "@/components/templates/AdminPage";
import { requireAuthentication } from "@/lib/utils/requireAuthentication";
import { getSession } from "next-auth/react";

const Admin = () => {
  return <AdminPage />;
};

// export async function getServerSideProps(context: any) {
//   console.log("context", context);
//   return requireAuthentication(context, ({ session }: any) => {
//     return {
//       props: { session },
//     };
//   });
// }

export default Admin;
