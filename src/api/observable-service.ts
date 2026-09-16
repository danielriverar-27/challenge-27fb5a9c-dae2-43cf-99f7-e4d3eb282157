import { Injectable } from '@nestjs/common';
import { CorrelationStrategy } from '../core/correlation-strategy';
import { ReactiveObservability } from '../infrastructure/reactive-observability';
import { ProactiveObservability } from '../infrastructure/proactive-observability';
import { Observable } from 'rxjs';

@Injectable()
export class ObservableService {
  constructor(
    private readonly correlationStrategy: CorrelationStrategy,
    private readonly reactiveObservability: ReactiveObservability,
    private readonly proactiveObservability: ProactiveObservability
  ) {}

  correlateEvent(event: any): Observable<any> {
    return this.correlationStrategy.correlateEvents(event);
  }

  collectMetrics(): Observable<any> {
    return this.reactiveObservability.collectMetrics();
  }

  performHealthCheck(): Promise<any> {
    return this.proactiveObservability.performHealthCheck();
  }
}