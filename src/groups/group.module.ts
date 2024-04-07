import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './groups.entity';
import { GroupService } from './group.service';
import { GroupController } from './group.contoller';
import { UserService } from 'src/users/user.service';
import { UserModule } from 'src/users/user.module';
import { TransactionService } from './transaction/transaction.service';
import { TransactionController } from './transaction/transaction.controller';
import { TransactionModule } from './transaction/transaction.module';
import { GroupMemberService } from './groupMembers/groupMember.service';

@Module({
  imports: [TypeOrmModule.forFeature([Group]),
  UserModule,
  TransactionModule,
],
  providers: [GroupService, TransactionService, GroupMemberService],
  exports: [GroupService], 
  controllers: [GroupController, TransactionController],
})
export class GroupModule {}