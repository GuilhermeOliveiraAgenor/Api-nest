import { Controller, Get, Res} from '@nestjs/common';
import { AppService } from './app.service';
import {Response} from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/user")
  getUser(@Res() res: Response): any {
    return res.status(200).json({
        msg: 'Opaa',
      });
  }
}
