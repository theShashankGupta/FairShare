import { Body, Controller, Get , Param, Post} from "@nestjs/common";
import { GroupService } from "./group.service";
import { CreateGroupDTO } from "./createGroup.dto";
import { Group } from "./groups.entity";

@Controller('group')
export class GroupController{
  constructor(
    private readonly groupServices: GroupService,
  ) {}

  @Get()
  async getAllGroup(){
    return this.groupServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log(id);
    return this.groupServices.findOne(id);
  }

  @Post()
  async create(@Body() createGroupDto: CreateGroupDTO){
    return this.groupServices.create(createGroupDto);
  }

  @Post(':id')
  async addGroupMember(@Param('id') id:number, @Body('userId') userId: number ){
    return this.groupServices.addMemberToGroup(id,userId);
  }
}