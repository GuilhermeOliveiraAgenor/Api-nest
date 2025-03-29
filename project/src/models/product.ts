import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome_do_produto: string;

  @Column()
  fornecedor: string;

  @Column()
  endereco_fornecedor: string;

  @Column()
  quantidade: number;

  @Column()
  descricao: number;

  @Column()
  data_registro: string;

  @Column()
  data_update: string;
 
}