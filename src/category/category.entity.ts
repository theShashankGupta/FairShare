import { Column, PrimaryColumn } from "typeorm";
import { Entity } from "typeorm";

@Entity()
export class CategoryEntity{
  @PrimaryColumn()
  id: number

  @Column()
  categoryList: string
}