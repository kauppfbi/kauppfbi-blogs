import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateIdeaDto } from './dto/create-idea.dto';
import { UpdateIdeaDto } from './dto/update-idea.dto';
import { Idea } from './entities/idea.entity';

@Injectable()
export class IdeaService {
  constructor(
    @InjectRepository(Idea)
    private ideaRepository: Repository<Idea>
  ) {}

  async create(createIdeaDto: CreateIdeaDto): Promise<Idea> {
    return this.ideaRepository.save(createIdeaDto);
  }

  findAll(): Promise<Idea[]> {
    return this.ideaRepository.find();
  }

  findOne(id: string): Promise<Idea> {
    return this.ideaRepository.findOne(id);
  }

  async update(id: string, updateIdeaDto: UpdateIdeaDto): Promise<Idea> {
    try {
      const idea = await this.ideaRepository.findOneOrFail(id);

      await this.ideaRepository.update(id, updateIdeaDto);

      return idea;
    } catch (error) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
  }

  remove(id: string): Promise<DeleteResult> {
    return this.ideaRepository.delete(id);
  }
}
