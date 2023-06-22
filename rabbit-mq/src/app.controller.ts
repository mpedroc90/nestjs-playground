import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, RmqRecordBuilder } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { createProducer } from './producer';

@Controller()
export class AppController {


  private readonly producer = createProducer()
  constructor(
  ) {}

  @Get()
  async getHello(){
  
    await this.producer.sendMessage("hola", "*", {
      "hola": "hola"
    });

    return "ok-1"
  }
}
