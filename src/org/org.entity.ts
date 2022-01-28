import { type } from 'os';
import { Action } from 'src/action/action.entity';
import { Challenge } from 'src/challenge/challenge.entity';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';

export enum SocialMission {
    PENDIDIKAN = "Pendidikan",
    LINGKUNGAN = "Lingkungan",
    KESETARAAN = "Kesetaraan",
    KESEHATAN = "Kesehatan"
}


  @Entity()
  export class Org extends BaseEntity {
    @PrimaryGeneratedColumn('increment', { type: 'bigint' })
    id: number;

    @Column({ name: 'name', type: 'varchar', length: 1000 })
    name: string;

    @Column({ name: 'address', type: 'varchar', length: 1000 })
    address: string;

    @Column({ name: 'telp', type: 'varchar', length: 13 })
    telp: string;

    @Column({ name: 'social_mission', type: 'enum', enum: SocialMission })
    socialMission: SocialMission;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;

    @OneToMany(() => Challenge, challenges => challenges.org)
    challenges: Challenge[];
  }