import { User } from './UserORM';
import { Session } from '@nestjs/common';

export { User, Session };

export const entities = [User, Session];