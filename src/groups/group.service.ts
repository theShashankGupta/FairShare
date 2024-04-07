import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';
import { UserService } from 'src/users/user.service';
import { Group } from './groups.entity';
import { CreateGroupDTO } from './createGroup.dto';
import { GroupMemberService } from './groupMembers/groupMember.service';
import { GraphInspector } from '@nestjs/core';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group) private readonly GroupRepo: Repository<Group>,
    private readonly userService: UserService,
    private readonly groupMemberService: GroupMemberService
  ) {}
  async findOne(id: number) {
    return await this. GroupRepo.findOne({ where: { id: id } });
  }

  async findAll(){
    return await this. GroupRepo.find();
  }

  async create(createGroupDto: CreateGroupDTO) {
    // try{
    //   await createGroupDto.validate(this.userService);
    // }
    // catch(error){
    //   throw error;
    // }
    const ownerId= createGroupDto.ownerId
    const owner = await this.userService.findOne( ownerId  );   
    const groupName= createGroupDto.name
    // let group_members: Promise<User>[] = [];
    // createGroupDto.members.forEach(it => {
    //   const memberPromise = this.userService.findOne(it);
    //   group_members.push(memberPromise);
    // });

    // const resolvedGroupMembers = await Promise.all(group_members);
    
    const group = this.GroupRepo.create({
      owner: owner,
      name: groupName,
      // members: resolvedGroupMembers
    });
    // console.log(group.members,"2s")
    await this.GroupRepo.save(group);
    return group;
  }

  async addMemberToGroup(groupId: number, userId: number) {
    // 1. Find the Group and User entities
    try {
      const group = await this.GroupRepo.findOne({
        where: { id: groupId },
        relations: ['members'], // Preload members to avoid N+1 query issue
      });
  
      if (!group) {
        throw new Error('Group not found');
      }
  
      const user = await this.userService.findOne(userId);
  
      if (!user) {
        throw new Error('User not found');
      }
  
      // 2. Check if user is already a member (optional)
      // const isMember = group.members.some((member) => member.id === userId);
      // if (isMember) {
      //   throw new Error('User is already a member of the group');
      // }
  
      // 3. Add User to Group's members collection
      await this.groupMemberService.createGroupMember(user,group);
    
      return group; 
    } catch (error) {
      throw error;
    }
  }
  
  
  // async update(id: number, updateUserDto: UpdateDto) {
  //   return await this.GroupRepo.update(id, updateUserDto);
  // }

}