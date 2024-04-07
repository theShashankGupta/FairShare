import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,  } from 'typeorm';
import { User } from 'src/users/user.entity';
import { Group } from '../groups.entity';

@Entity()
export class GroupMembers{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: 0,
    nullable : true
  })
  balance : number

  @ManyToOne(() => Group, (group) => group.members)
  @JoinColumn({ name: 'groupId' }) 
  group: Group;

  @ManyToOne(() => User, (user) => user.groups)
  @JoinColumn({ name: 'userId' }) 
  user: User;

}
