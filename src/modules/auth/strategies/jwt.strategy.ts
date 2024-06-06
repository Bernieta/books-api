import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigType } from '@nestjs/config';
import { Strategy, ExtractJwt } from 'passport-jwt';
import config from 'src/config/config';
import { Payload } from '../interfaces/payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(@Inject(config.KEY) configService: ConfigType<typeof config>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.secretKey,
    });
  }

  public async validate(payload: Payload) {
    return { id: payload.sub, email: payload.email };
  }
}
