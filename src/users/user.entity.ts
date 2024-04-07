// user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Group } from 'src/groups/groups.entity';
import { GroupMembers } from 'src/groups/groupMembers/groupMember.entity';


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Group, (group) => group.owner)
  groups: Group[];

  @OneToMany(() => GroupMembers, (groupMember) => groupMember.user)
  groupMember: GroupMembers[];
}
