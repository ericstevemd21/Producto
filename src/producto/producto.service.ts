import { Injectable, Logger, NotFoundException, OnModuleInit } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { PrismaClient } from '@prisma/client';
import { pagination } from 'src/common/indix';
import { NotFoundError } from 'rxjs';

@Injectable()
export class ProductoService extends PrismaClient implements OnModuleInit{
 
 private readonly logger =new Logger('Producto ')
  onModuleInit() {
   this.$connect();
   this.logger.log('base de datos connectada ')
  }

  create(createProductoDto: CreateProductoDto) {
    return this.producto.create({
      data: createProductoDto
    });
  }

  async findAll(pagination:pagination) {
    const { page,limit }=pagination;
    const totalpage =await this.producto.count({where: {statu:true}});
    const lastpage= Math.ceil(totalpage/limit);

    return {
      data :await this.producto.findMany({
        skip: (page - 1)/ limit,
        take: limit,
        where:{
          statu:true
        }
        }),
        meta:{
          total:totalpage,
          page:page,
        lastpage:lastpage,
        }
    }
  }

  findOne(id: number) {
    const producto= this.producto.findFirst({
      where: { id ,statu: true}

    });
    if(! producto ){
      throw new NotFoundException('producto no se encuentra en base de datos ' + id)
    }
    return producto;
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
   const { id: _, ...data }=updateProductoDto;
   
    await this.findOne(id);
    return this.producto.update({
      where:{id },
      data:updateProductoDto,
    });
  }

 async remove(id: number) {
  await this.findOne(id);

    /* return this.producto.delete({
      where: { id}
    }); */
const producto =await this.producto.update({

  where:{id},
  data:{
    statu:false
  }
});

return producto



  }
}














