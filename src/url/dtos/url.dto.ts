import { IsString, IsNotEmpty } from 'class-validator';

export class ShortenURLDto {
  @IsString()
  @IsNotEmpty()
  longUrl: string;
}