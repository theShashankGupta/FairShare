import { Injectable } from "@nestjs/common";
import { GroupMembers } from "./groupMember.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/users/user.entity";
// import { UserService } from "src/users/user.service";
// import { GroupService } from "../group.service";
import { Group } from "../groups.entity";
import { warn } from "console";

@Injectable()
export class GroupMemberService{
  constructor(
    @InjectRepository(GroupMembers) private readonly GroupMemberRepo: Repository<GroupMembers>,
    // private readonly userService: UserService,
    // private readonly groupService:GroupService
  ) {}

  async getGroupAndUserIdByGroupMemberId(groupMemberId: number){
    try {
      const groupMember= await this.GroupMemberRepo.findOne({
        where : {id: groupMemberId},
        relations: ['group', 'user']
      })

      return {
        userId: groupMember.user.id,
        groupId: groupMember.group.id
      };
    } catch (error) {
      throw error;
    }
  }

  async createGroupMember(user: User, group: Group){
    try {
      const groupMember= this.GroupMemberRepo.create({
        user: user,
        group: group
      })

      await this.GroupMemberRepo.save(groupMember);
    } catch (error) {
      throw new error
    }
  }

}