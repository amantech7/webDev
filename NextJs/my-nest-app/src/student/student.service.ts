import { Injectable, Module } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student.name) private studentModel: Model<StudentDocument>  
    ) {}

    async createStudent(data: Partial<Student>): Promise<Student> {
        const newStudent = new this.studentModel(data);
        return  newStudent.save();
    }   

    async getAllStudents(): Promise<Student[]> {
        return this.studentModel.find().exec();
    }   



    async getStudentById(id: string): Promise<Student | null> {
        return this.studentModel.findById(id).exec();
    }   

    async updateStudent(id: string, data: Partial<Student>): Promise<Student | null> {
        return this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    async deleteStudent(id: string): Promise<Student | null> {
        return this.studentModel.findByIdAndDelete(id).exec();
    }   

    async deleteAllStudents(): Promise<{ deletedCount?: number }> {
        return this.studentModel.deleteMany().exec();
    }       

    async findStudentsByName(name: string): Promise<Student[]> {
        return this.studentModel.find({ name: new RegExp(name, 'i') }).exec();
    }

    async patchStudent(id: string, data: Partial<Student>): Promise<Student | null> {
        return this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    
}
