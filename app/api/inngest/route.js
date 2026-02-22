import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserUpdate, syncUserDelete } from "@/config/inngest";


export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        syncUserCreation,
        syncUserUpdate,
        syncUserDelete
    ],
});