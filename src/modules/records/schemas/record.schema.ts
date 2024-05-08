import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type RecordDocument = Record & Document;

@Schema()
export class TeileItem {
  @Prop()
  tipo: string;

  @Prop()
  user: string;

  @Prop()
  mo: Date;

  @Prop()
  ix: number;

  @Prop()
  id: string;

  @Prop()
  json: string;

  @Prop()
  cre: Date;
}

@Schema({ collection: 'records_collection' })
export class Record {
  @Prop()
  id: string;

  @Prop()
  codigo: string;

  @Prop({ type: [String], default: [] })
  attachments: string[];

  @Prop({ type: [String], default: [] })
  pics: string[];

  @Prop({ type: [String], default: [] })
  rmaps2: string[];

  @Prop()
  user: string;

  @Prop()
  pid: string;

  @Prop({ type: [TeileItem], default: [] })
  teile: TeileItem[];

  @Prop()
  cre: Date;

  @Prop()
  sin: Date;

  @Prop()
  pages: number;

  @Prop()
  pag: boolean;

  @Prop()
  status: string;
}

export const RecordSchema = SchemaFactory.createForClass(Record);
