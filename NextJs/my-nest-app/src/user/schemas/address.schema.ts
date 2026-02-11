import {Prop , Schema} from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Address extends Document {
  
    @Prop({ required: true })
    city: string
    @Prop({ required: true })
    state: string   

    @Prop({ required: true })
    zipCode: string
}