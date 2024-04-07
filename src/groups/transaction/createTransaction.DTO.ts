import { IsArray, IsNumber, IsString, isString } from "class-validator";
import { User } from "src/users/user.entity";

export class CreateTransactionDTO {
  
  @IsNumber()
  amount:number;

  @IsString()
  catagory:{
    type: string,
    nullable: true
  }

  @IsNumber()
  groupId: number; 
  
  @IsNumber()
  paidBy: number; 

  @IsArray()
  paidFor: number[]; 
}