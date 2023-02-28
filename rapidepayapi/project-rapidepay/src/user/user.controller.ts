import { Controller } from '@nestjs/common';
import { Routes } from 'src/utils/constants/routes';

@Controller(Routes.USERS)
export class UserController {}