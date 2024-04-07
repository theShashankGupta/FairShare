import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';
import { UserService } from 'src/users/user.service';
import { GroupMembers } from '../groupMembers/groupMember.entity';
import { GroupService } from '../group.service';
import { Group } from '../groups.entity';
import { CreateTransactionDTO } from './createTransaction.DTO';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionService) private readonly Transactions: Repository<TransactionService>,
    private readonly userService: UserService,
    private readonly groupService:GroupService
  ) {}

  async addTransaction(createTransactionDTO: CreateTransactionDTO ){
    try{
      const groupId = createTransactionDTO.groupId;
      const group= await this.groupService.findOne(groupId);  

      const  paidFor=createTransactionDTO.paidFor;
      const paidById=createTransactionDTO.paidBy;
      const paidBy=await this.userService

    }
    catch(error){
      throw error
    }
  }
}
