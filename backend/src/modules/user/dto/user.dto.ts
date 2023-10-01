import { ApiProperty } from '@nestjs/swagger';
import { Gender } from 'src/shared/enums/gender';
import { User } from '../entities/user.entity';

export class UserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly firstName: string;

  @ApiProperty()
  readonly lastName: string;

  @ApiProperty()
  readonly gender: Gender;

  @ApiProperty()
  readonly birthday: string;

  constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.gender = user.gender;
    this.birthday = user.birthday;
  }
}
