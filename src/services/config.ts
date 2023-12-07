import prisma from "@/libs/prisma"

export const serviceConfig = {
    getOne: async (id: String) => {
        const config = await prisma.users.findUnique({
            where: {
                id: Number(id)
            },
            include: {
                userConfig: true,
                achievements: true,
                usersCosmetics: true,
            }
        })
        return config;     
    },
    getAll: async () => {
        const config = await prisma.users.findMany({   
            include: {
                userConfig: true,
                achievements: true,
                usersCosmetics: true
            }         
        })       
        return config
    }
    
}