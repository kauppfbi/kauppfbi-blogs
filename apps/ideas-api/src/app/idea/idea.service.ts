import { Injectable } from '@nestjs/common';
import { CreateIdeaDto } from './dto/create-idea.dto';
import { UpdateIdeaDto } from './dto/update-idea.dto';

@Injectable()
export class IdeaService {
  create(createIdeaDto: CreateIdeaDto) {
    return 'This action adds a new idea';
  }

  findAll() {
    return `This action returns all idea`;
  }

  findOne(id: number) {
    return `This action returns a #${id} idea`;
  }

  update(id: number, updateIdeaDto: UpdateIdeaDto) {
    return `This action updates a #${id} idea`;
  }

  remove(id: number) {
    return `This action removes a #${id} idea`;
  }
}
