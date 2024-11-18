import { Controller, Get, Param } from '@nestjs/common';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientService: ClientsService) {}
  @Get()
  getAllClients() {
    return this.clientService.findAll();
  }
  @Get(':id')
  getClientById(@Param('id') id: string) {
    return this.clientService.findById(id);
  }
}
