import { Inject, Injectable } from '@nestjs/common';
import supertokens from 'supertokens-node';
import Session from 'supertokens-node/recipe/session';
import EmailPassword from 'supertokens-node/recipe/emailpassword';
import Dashboard from 'supertokens-node/recipe/dashboard';
import { ConfigInjectionToken, AuthModuleConfig } from '../config.interface';
import jwt from 'supertokens-node/lib/build/recipe/jwt';
import { UserService } from 'src/v1/services/user.service';

@Injectable()
export class SupertokensService {
  constructor(
    @Inject(ConfigInjectionToken) private config: AuthModuleConfig,
    private readonly user: UserService,
  ) {
    supertokens.init({
      framework: 'express',
      appInfo: config.appInfo,
      supertokens: {
        connectionURI: config.connectionURI,
        apiKey: config.apiKey,
      },
      recipeList: [
        EmailPassword.init({
          override: {
            apis: (originalImplementation) => {
              return {
                ...originalImplementation,
                signUpPOST: async function (input) {
                  if (originalImplementation.signUpPOST === undefined) {
                    throw Error('Should never come here');
                  }

                  const response =
                    await originalImplementation.signUpPOST(input);
                  if (response.status == 'OK')
                    await user.fromSupertokens(response);

                  return response;
                },
              };
            },
          },
        }),
        jwt.init(),
        Dashboard.init({
          admins: ['rm88971@fiap.com.br'],
        }),
        Session.init({
          getTokenTransferMethod() {
            return 'cookie';
          },
        }),
      ],
    });
  }
}
