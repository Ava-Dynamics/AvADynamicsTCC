import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { NewspaperService } from '../services/newspaper.service';
import { AuthGuard } from '../commons/authentication/auth.guard';

@Controller('newspapers')
export class NewspaperController {
  constructor(private readonly newspaperService: NewspaperService) {}

  @Get()
  @UseGuards(new AuthGuard())
  getNewspapers(@Query() query: { page: number; quantity: number }) {
    return this.newspaperService.getNewspapers(query?.page, query?.quantity);
  }
}
