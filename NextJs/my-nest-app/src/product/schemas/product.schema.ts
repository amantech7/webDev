import {Prop , Schema, SchemaFactory} from "@nestjs/mongoose";
import { Tag } from "./tagschema";

@Schema()
export class Product {
    @Prop()
    name: string;
    @Prop({type: [Tag]})
    tags: Tag[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
    