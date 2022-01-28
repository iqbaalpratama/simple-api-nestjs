import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileController } from './profile/profile.controller';
import { ProfileModule } from './profile/profile.module';
import { OrgController } from './org/org.controller';
import { OrgModule } from './org/org.module';
import { ActionController } from './action/action.controller';
import { ActionModule } from './action/action.module';
import { ChallengeController } from './challenge/challenge.controller';
import { ChallengeModule } from './challenge/challenge.module';

@Module({
  imports: [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: 'mysql',
      host: configService.get('DATABASE_HOST'),
      port: +configService.get<number>('DATABASE_PORT'),
      username: configService.get('DATABASE_USERNAME'),
      password: configService.get('DATABASE_PASSWORD'),
      database: configService.get('DATABASE_NAME'),
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: true,
      autoLoadEntities: false,
    }),
    inject: [ConfigService],
  }),
  ConfigModule.forRoot(),
  ProfileModule,
  OrgModule,
  ActionModule,
  ChallengeModule
],
  controllers: [AppController, ProfileController, OrgController, ActionController, ChallengeController],
  providers: [AppService],
})
export class AppModule {}
