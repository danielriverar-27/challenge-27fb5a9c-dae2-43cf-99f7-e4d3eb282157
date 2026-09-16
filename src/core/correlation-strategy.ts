import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class CorrelationStrategy {
  correlateEvents(event: any): Observable<any> {
    // Lógica de correlación de eventos
    return of(event);
  }
}
