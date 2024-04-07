import { IsArray, IsNumber, IsString } from "class-validator";
import { UserService } from "src/users/user.service";
import { User } from "src/users/user.entity";
export class CreateGroupDTO {
  @IsString()
  name: string;

  @IsNumber()
  ownerId: number; 

  // @IsArray()
  // members: number[]; 

  // async validate(userService: UserService): Promise<boolean> {

  //   const ownerExists = await userService.findOne(this.ownerId);
  //   if (!ownerExists) {
  //     throw new Error('Invalid owner ID'); 
  //   }

  //   // Check if all member IDs exist (consider performance for large groups)
  //   for (const memberId of this.memberIds) {
  //     const memberExists = await userService.findOne(memberId);
  //     if (!memberExists) {
  //       throw new Error('Invalid member ID');
  //     }
  //   }

  //   return true
  // }
}