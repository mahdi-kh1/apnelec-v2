import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async() => {
    const session = await getServerSession(authOptions);
    if(session?.user){
     return <div>Admin Page - welcome back {session?.user.name}</div> ;   
    }
    return <div>please login to see admin page</div> ;
};

export default page