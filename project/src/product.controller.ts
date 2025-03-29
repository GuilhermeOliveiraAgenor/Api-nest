import { Controller, Post, Body, Get, Param, HttpStatus, Put, Res, Delete} from '@nestjs/common';
import {Response} from 'express';
import { Product } from './models/product';
import { ProductsService } from './product.service';

@Controller("/product")
export class ProductController {

  constructor(private readonly productsService: ProductsService) {}//importa a service

  @Post()//endpoint

  async create(@Body() prod: Product, @Res() res: Response){//corpo da requisicao é a model Product

    try {
        const product = await this.productsService.create(prod);
        return res.status(HttpStatus.CREATED).json({product});//retorna o produto criado
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Erro ao criar produto',
        error: error.message,
      });
    }
  }

  @Get()

  async List(@Res() res:Response){
    try {
        const prod = await this.productsService.get();
        return res.status(HttpStatus.OK).json(prod);
    } catch (error) {
        console.log(error);
    }
  }

  @Put(":id")//passa o id pela rota
  async put(
    @Param('id') id : number,
    @Body() prod: Partial<Product>,
    @Res() res: Response
  ){
    try {
        const product = await this.productsService.put(id, prod);
        return res.status(HttpStatus.OK).json(product);
    } catch (error) {
        console.log(error);
    }
  }

  @Delete(":id")
  async delete(@Param('id') id:number, @Res() res:Response){
    const product = await this.productsService.delete(id);    
    return res.status(HttpStatus.OK).json({ message: 'Produto excluído com sucesso' });
}

}
