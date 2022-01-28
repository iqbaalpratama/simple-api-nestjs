import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';

export enum Gender {
    MALE = "L",
    FEMALE = "P",
}

export enum ProfileRole {
    USER = "user",
    ADMIN = "admin"
}

  @Entity()
  export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn('increment', { type: 'bigint' })
    id: number;

    @Column({ name: 'name', type: 'varchar', length: 1000 })
    name: string;

    @Column({ name: 'address', type: 'varchar', length: 1000 })
    address: string;

    @Column({ name: 'gender', type: 'enum', enum: Gender })
    gender: Gender;

    @Column({ name: 'role', type: 'enum', enum: ProfileRole, default: ProfileRole.USER})
    role: ProfileRole;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;

  }