import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  IsEmail,
  Model,
  Table,
  Unique,
  UpdatedAt,
} from 'sequelize-typescript';
import { Gender } from 'src/shared/enums/gender';

@Table({
  tableName: 'user',
})
export class User extends Model<User> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Unique
  @IsEmail
  @Column
  email: string;

  @Column
  password: string;

  @Column({ field: 'first_name' })
  firstName: string;

  @Column({ field: 'last_name' })
  lastName: string;

  @Column({ type: DataType.ENUM(Gender.female, Gender.male) })
  gender: Gender;

  @Column(DataType.DATEONLY)
  birthday: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  deletedAt: Date;
}
