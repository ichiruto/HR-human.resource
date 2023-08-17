import {
  IsNotEmpty,
  IsEmail,
  IsInt,
  IsString,
  ArrayNotEmpty,
  IsBoolean,
} from 'class-validator';

export class CreateRegistroDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsInt()
  celular: number;

  @IsNotEmpty()
  @IsInt() // Altere para IsInt
  cpf: number;

  @ArrayNotEmpty()
  conhecimentos: string[];

  @IsNotEmpty()
  @IsBoolean()
  status: boolean;
}
