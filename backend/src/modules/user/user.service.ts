import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly jwtPrivateKey: string;
  constructor() {}
}
