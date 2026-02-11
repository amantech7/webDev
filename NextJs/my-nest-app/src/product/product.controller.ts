import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @UseGuards(AuthGuard)
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id', ParseIntPipe) id: number) {
    return this.productService.getProductById(id);
  }

    @Get('search/:name')
    getProductsByName(@Param('name') name: string) {
        return this.productService.getProductsByName(name);
    }

}
