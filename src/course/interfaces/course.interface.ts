import { Document } from 'mongoose';

export interface Course extends Document {
  readonly name: string;
  readonly author: [string];
  readonly createdby: string;
}
