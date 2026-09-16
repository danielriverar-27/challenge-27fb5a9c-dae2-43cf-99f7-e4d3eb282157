import { Module } from '@nestjs/common';
import { ObservableController } from './api/observable-controller';
import { ObservableService } from './api/observable-service';
import { CorrelationStrategy } from './core/correlation-strategy';
import { ReactiveObservability } from './infrastructure/reactive-observability';
import { ProactiveObservability } from './infrastructure/proactive-observability';

@Module({
  imports: [],
  controllers: [ObservableController],
  providers: [
    ObservableService,
    CorrelationStrategy,
    ReactiveObservability,
    ProactiveObservability,
  ],
})
export class AppModule {}
