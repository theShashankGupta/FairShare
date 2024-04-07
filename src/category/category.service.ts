import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity) private readonly CategoryRepo: Repository<CategoryEntity>,
    
  ) {}

  async getAll(){
    return await this.CategoryRepo.find();
  }

  async addCategory(name: string){
    const category = this.CategoryRepo.create({categoryList: name });
    return await this.CategoryRepo.save(category);
  }
}
