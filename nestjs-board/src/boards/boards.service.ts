import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];
  //private 선정 이유 => 다른 컴포넌트에서 수정 불가능하도록

  getAllBoards(): Board[] {
    return this.boards;
    //return 값 타입 정해주기위해서 :Board[] 추가
  }
}
