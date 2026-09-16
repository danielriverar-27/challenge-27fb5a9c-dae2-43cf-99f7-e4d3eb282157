import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class ReactiveObservability {
  collectMetrics(): Observable<any> {
    // Lógica de recolección de métricas reactivas
    return of({});
  }
}
