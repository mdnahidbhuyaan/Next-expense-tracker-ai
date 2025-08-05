import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";



export default async function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const user = await currentUser();
if(!user){
  return <Guest/>
}



  return (
<div>
  <h2 className="text-red-500">Hello HomePage</h2>
</div>
  );
}
