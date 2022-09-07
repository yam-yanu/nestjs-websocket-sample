import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebSocketGatewayThing } from './WebSocketGatewayThing';
@Module({
  imports: [],
  controllers: [AppController], //, WebSocketGatewayThing],
  providers: [AppService, WebSocketGatewayThing],
})
export class AppModule {}
