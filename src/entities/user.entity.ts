import User from '../models/User.model';

export interface IUserEntity {
  id: string;
  firstName: string;
}

export function mapUserEntity(user: User): IUserEntity {
  return {
    id: user.id,
    firstName: user.first_name
  }
}

export function mapUserEntities(users: User[]): IUserEntity[] {
  return users.map(user => mapUserEntity(user));
}
