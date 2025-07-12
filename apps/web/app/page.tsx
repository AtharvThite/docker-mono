import { prismaClient } from "db/client";

export default async function Home() {
    const users = await prismaClient.user.findMany();
    if(!users){
        return <div>Loading...</div>;
    }
    return (
        <div>
            {JSON.stringify(users)}
        </div>
    );
}
