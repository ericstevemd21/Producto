
import { Controller, ParseIntPipe, Query } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { pagination } from 'src/common/indix';

@Controller()
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @MessagePattern('createProducto')
  create(@Payload() createProductoDto: CreateProductoDto) {
    return this.productoService.create(createProductoDto);
  }

  @MessagePattern('findAllProducto')
  findAll(@Payload() pagination:pagination) {
    return this.productoService.findAll(pagination);
  }

  @MessagePattern('findOneProducto')
  findOne(@Payload('id',ParseIntPipe) id: number) {
    return this.productoService.findOne(id);
  }

  @MessagePattern('updateProducto')
  update(@Payload() updateProductoDto: UpdateProductoDto) {
    return this.productoService.update(updateProductoDto.id, updateProductoDto);
  }

  @MessagePattern('removeProducto')
  remove(@Payload('id',ParseIntPipe) id: number) {
    return this.productoService.remove(id);
  }
}
