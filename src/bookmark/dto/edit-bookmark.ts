import { IsOptional, IsString } from 'class-validator';

export class EditBookmarkDto {
  @IsString()
  @IsOptional()
  tite?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  link?: string;
}
