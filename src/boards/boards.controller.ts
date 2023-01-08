import { Controller, Get } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get() // url: /boards/
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
    //연결된 service의 return 값 형태 지정 :Board[]
  }
}
