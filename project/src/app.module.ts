import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './models/users';
import { Product } from './models/product';
import {ProductController} from './product.controller'
import { ProductsService } from './product.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'apirest',
      entities: [Users,Product],//passa as tabelas para mapear
      synchronize: true//cria as tabelas no banco
    }),
    TypeOrmModule.forFeature([Users,Product])

  ],
  controllers: [AppController, ProductController],//controllers para mapear
  providers: [AppService, ProductsService],//services para mapear
})
export class AppModule {}
