import { EntityRepository, Repository } from 'typeorm';
import { Org } from './org.entity';

@EntityRepository(Org)
export class OrgRepository extends Repository<Org>{

}