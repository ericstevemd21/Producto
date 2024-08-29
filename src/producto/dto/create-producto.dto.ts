import { Type } from "class-transformer"
import { IsNumber,  IsString } from "class-validator"

export class CreateProductoDto {


   @IsString() 
    nombre_pro:string
    @IsString()
    marca :string
    @IsNumber()
    @Type(()=>Number) 
    stock:number 
    @IsNumber()
    @Type(()=>Number) 
    precio:number 
    @IsString()
    descricion:string


}
