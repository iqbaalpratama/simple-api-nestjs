import { Challenge } from 'src/challenge/challenge.entity';
import { Org } from 'src/org/org.entity';
import { Profile } from 'src/profile/profile.entity';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';


  @Entity()
  export class Action extends BaseEntity {
    @PrimaryGeneratedColumn('increment', { type: 'bigint' })
    id: number;

    @Column({ name: 'name', type: 'varchar', length: 1000 })
    name: string;

    @Column({ name: 'description', type: 'varchar', length: 1000 })
    description: string;

    @Column({ type: 'bigint', name: 'challenge_id' })
    challengeId: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;

    @ManyToOne(()=> Challenge, challenge => challenge.actions, { createForeignKeyConstraints: false })
    @JoinColumn({ name: 'challenge_id' })
    challenge: Challenge;

    @ManyToMany(() => Profile)
    @JoinTable()
    users: Profile[];
  }