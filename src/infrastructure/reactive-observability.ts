import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ReactiveObservability {
  collectMetrics(): Observable<any> {
    // Lógica de recolección de métricas reactivas
    return of({});
  }
}