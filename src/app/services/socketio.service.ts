import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  constructor(private socket: Socket) { }

  on(eventName: string) {
    return this.socket.fromEvent(eventName).pipe(map((data:any)=>data));
  }

  emit(eventName: string, payload: any) {
    this.socket.emit(eventName, payload);
  }
}