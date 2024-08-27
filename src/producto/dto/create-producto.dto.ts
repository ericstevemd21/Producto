import { Type } from "class-transformer"
import { IsOptional, IsString } from "class-validator"

export class CreateProductoDto {


   @IsString() 
    nombre_pro 
    @IsString()
    marca 
    @IsOptional()
    @Type(()=>Number) 
    stock:number 
    @IsOptional()
    @Type(()=>Number) 
    precio:number 
    @IsString()
    descricion 


}
