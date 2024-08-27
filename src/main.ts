import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from './config';

async function bootstrap() {
 const logger=new Logger('maien prodcuto ')
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule
    ,{
      transport: Transport.TCP,
      options: {
        port:envs.port
      }
      
    }
  );
  app.useGlobalPipes()
  new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true,

   });
   
  
  
  await app.listen( );

  logger.log('estamos conectado en puerto '+ envs.port)
}
bootstrap();
