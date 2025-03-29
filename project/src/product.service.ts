import { Body, Injectable, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './models/product';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly prodRepository: Repository<Product>,//utilizar a model product no repositorio
  ) {}

  async create(prod: Product): Promise<Product> {
   
    const p = this.prodRepository.create(prod);//executa o create do TypeORM
    return await this.prodRepository.save(p);
  }

  async get(): Promise<Product[]>{
    return await this.prodRepository.find()//executa o list do TypeORM
  }

  async put(id: number, prod: Partial<Product>): Promise<Product | null>{
    const product = await this.prodRepository.update(id, prod);
    return this.prodRepository.findOne({where : {id}});
  }

  async delete(id: number): Promise<boolean> {
  
    const product = await this.prodRepository.findOne({ where: { id } });
    if (product) {
      await this.prodRepository.remove(product);
      return true;
    }
    
    return false;

  }
}


