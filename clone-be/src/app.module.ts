//Organizes Application Structure aka ROOT module
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookModule } from './webhook/webhook.module';
import { ClerkModule } from './clerk/clerk.module';
import { TypeOrmModule } from '@nestjs/typeorm';


//Marks the class as module
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname + '/../**/*.entity{.ts, .js}'],
        synchronize: true,
      }),
    }),
    WebhookModule,
    ClerkModule,
  ],
  controllers: [AppController], //for handling HTTPs
  providers: [AppService], //this is the provider ensuring availability for dependency
})
export class AppModule {}
//Structure for the root module, registers the controllers and providers, (entry point for apps config)
