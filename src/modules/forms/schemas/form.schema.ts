import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FormDocument = Form & Document;

@Schema({ collection: 'forms_collection' })
export class Form {
  @Prop()
  id: string;

  @Prop()
  codigo: string;

  @Prop([String])
  grupo: string[];

  @Prop()
  pic: string;

  @Prop()
  titulo: string;

  @Prop()
  icono: string;
}

export const FormSchema = SchemaFactory.createForClass(Form);
