import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly model?: string;
}
