import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordsModule } from './modules/records/records.module';
import { ConfigModule } from '@nestjs/config';
import { FormsModule } from './modules/forms/forms.module';
import { ActasModule } from './modules/actas/actas.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}?authSource=${process.env.MONGODB_AUTH_SOURCE}`,
    ),
    RecordsModule,
    FormsModule,
    ActasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
