import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/todos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/add')
  addTodo(@Body() body: any){
    return this.appService.addTodo(body);
  }

  @Get('/get-list')
  getTodos() {
    return this.appService.getTodos();
  }

  @Get('/:id/get-one')
  getTodo(@Param('id', ParseIntPipe) id: number) {
    return this.appService.getTodo(id);
  }

  @Put('/:id/update')
  updateTodo(@Param('id', ParseIntPipe) id: number, @Body() body: any){
    return this.appService.updateTodo(id, body);
  }

  @Delete('/:id/remove')
  deleteTodo(@Param('id', ParseIntPipe) id: number){
    return this.appService.deleteTodo(id);
  }
}
