import prismaClient from "../../prisma";

interface DetailRequest{
    order_id: string;
}

class DetailOrderService{
    async execute({ order_id }: DetailRequest){
        const orders = await prismaClient.item.findMany({
            where:{
                order_id: order_id
            },
            //Como há uma relação do item com a order e com o produto vou incluir os detalhes deles no select
            include:{
                product: true,
                order: true
            }
        })

        return orders;
    }
}

export { DetailOrderService }