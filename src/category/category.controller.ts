import { Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
  ) {}

  @Get()
  async getAllCategory(){
    return this.getAllCategory();
  } 

  @Post()
  async addCategory(name: String){
    return this.addCategory(name);
  }
}
