import { Controller, Get,Param } from '@nestjs/common';

@Controller('clients')
export class ClientsController {
    array=['asfdsa','xxx']
    // @Get()
    // getAllClients(){
    //     return['juan','marcos']
    // }

    @Get(':id')
    getClientById(@Param('id') id:string){
        console.log(this.array[id])
        return this.array[id]
    }
}
