import { JsonValue } from '@prisma/client/runtime/library';
import { Exclude } from 'class-transformer';

export class userDtoUpdate {
  name: string;
  imageProfile: string;
  email: string;
  cpf: string;
  job: string;

  constructor(partial: Partial<userDto>) {
    Object.assign(this, partial);
  }
}

export class userDtoSingle extends userDtoUpdate {
  id: number;
  score: number;
  supertokenId: string;

  @Exclude()
  createdAt: Date;
  @Exclude()
  config: JsonValue;

  constructor(partial: Partial<userDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}

export class userDto extends userDtoSingle {
  @Exclude()
  email: string;
  @Exclude()
  supertokenId: string;
  @Exclude()
  cpf: string;
  @Exclude()
  job: string;
  @Exclude()
  createdAt: Date;
  @Exclude()
  config: JsonValue;

  constructor(partial: Partial<userDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}
