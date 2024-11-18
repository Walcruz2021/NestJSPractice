import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientsService {
  private clients = [
    {
      id: '1',
      firstName: 'walter',
      lastName: 'cruz',
    },
    {
      id: '2',
      firstName: 'omar',
      lastName: 'Martinez',
    },
    {
      id: '3',
      firstName: 'maribel',
      lastName: 'Cervantes',
    },
  ];

  findAll() {
    return this.clients;
  }
  findById(id) {
    return this.clients[id].firstName;
  }
}
