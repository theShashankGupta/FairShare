import { GroupMembers } from "../groupMembers/groupMember.entity";
import { Column,ManyToMany,ManyToOne,OneToMany,PrimaryColumn,PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm";

@Entity()
export class TransactionEntity{
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  amount:number;

  @Column()
  GroupId:number;

  @Column()
  paidBy:GroupMembers;

  @Column()
  paidFor:GroupMembers[];
}