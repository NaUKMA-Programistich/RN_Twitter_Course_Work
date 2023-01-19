import {User} from './User';
import {ExtendedEntities} from './Entities';

export interface Tweet {
  created_at: string;
  id_str: string;
  text: string;
  user: User;
  extended_entities: ExtendedEntities | undefined;
}
