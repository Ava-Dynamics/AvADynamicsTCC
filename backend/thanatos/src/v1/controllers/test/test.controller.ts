import { Controller, Get, Session, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/v1/commons/authentication/auth.guard';
import { SupertokensService } from 'src/v1/commons/authentication/supertokens/supertokens.service';
import { SessionContainer } from 'supertokens-node/recipe/session';

@Controller('test')
export class TestController {
  constructor(private readonly supertokensService: SupertokensService) {}

  @Get('')
  @UseGuards(new AuthGuard())
  getSession(@Session() session: SessionContainer) {
    return session.getUserId();
  }

  @Get('insert')
  insertUser() {
    return this.supertokensService;
  }

  @Get('import')
  async importUser() {
    return 20;
  }
}
