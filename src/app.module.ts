import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'fairShare.db',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
  }),
  UserModule,
  AuthModule,
],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}
