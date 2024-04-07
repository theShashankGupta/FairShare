import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { GroupModule } from './groups/group.module';
import { UserService } from './users/user.service';
import { CategoryModule } from './category/category.module';
import { TransactionService } from './groups/transaction/transaction.service';
import { CategoryService } from './category/category.service';


@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'fairShare.db',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
  }), 
  UserModule,
  AuthModule,
  GroupModule,
  CategoryModule,
],
  
  controllers: [AppController,],
  providers: [AppService, TransactionService,CategoryService
  ],
})
export class AppModule {}
