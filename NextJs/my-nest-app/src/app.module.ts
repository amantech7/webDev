import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { CustomerService } from './customer/customer.service';
import { CustomerController } from './customer/customer.controller';
import { DatabaseService } from './database/database.service';
import { DatabaseController } from './database/database.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    EmployeeModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/nest',
    ),
    ProductModule,
    CategoryModule,
    StudentModule,
    UserModule,
  ],
  controllers: [
    AppController,
    UserController,
    ProductController,
    CustomerController,
    DatabaseController,
  ],
  providers: [AppService, ProductService, CustomerService, DatabaseService],
})
export class AppModule {
  
}
