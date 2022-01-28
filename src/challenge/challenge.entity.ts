import { Action } from 'src/action/action.entity';
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
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';


  @Entity()
  export class Challenge extends BaseEntity {
    @PrimaryGeneratedColumn('increment', { type: 'bigint' })
    id: number;

    @Column({ name: 'name', type: 'varchar', length: 1000 })
    name: string;

    @Column({ name: 'description', type: 'varchar', length: 1000 })
    description: string;

    @Column({ name: 'target_donation', type: 'int' })
    targetDonation: number;

    @Column({ name: 'donation_per_user', type: 'int' })
    donationPerUser: number;

    @Column({ name: 'deadline', type: 'date' })
    deadline: Date;

    @Column({ type: 'bigint', name: 'org_id' })
    orgId: number;


    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;

    @ManyToOne(()=> Org, org => org.challenges, { createForeignKeyConstraints: false })
    @JoinColumn({ name: 'org_id' })
    org: Org;

    @OneToMany(() => Action, actions => actions.challenge)
    actions: Action[];

  }