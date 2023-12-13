import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as express from 'express'
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import * as session from 'express-session';
import { User } from './entities/user.entity';
import * as passport from 'passport'

async function bootstrap() {

  const server = express();


  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(server)
  );
  const configService = app.get(ConfigService)

  app.enableCors({
    origin: [
      'http://10.104.11.171:3000',
      'https://10.104.11.171:3000',
      'http://localhost:3000',
      'http://localhost:8888',
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  });

  app.use(session({
    secret: 'banSingGoGo@_',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

  passport.serializeUser((user: User, done) => {
    done(null, user)
  })
  passport.deserializeUser((obj: User, done) => {
    done(null, obj)
  })

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(configService.get<number>('port'), () => {
    console.log("Listening port: " + configService.get<number>('port')) 
 });

}
bootstrap();
