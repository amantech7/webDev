import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    @Get()
    getEmployee() {
        return { name: 'Jane Smith', position: 'Developer' };
    }
}
