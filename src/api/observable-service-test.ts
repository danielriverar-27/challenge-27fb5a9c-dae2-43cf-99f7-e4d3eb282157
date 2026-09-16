import { Test, TestingModule } from '@nestjs/testing';
import { ObservableService } from './observable-service';
import { CorrelationStrategy } from '../core/correlation-strategy';
import { ReactiveObservability } from '../infrastructure/reactive-observability';
import { ProactiveObservability } from '../infrastructure/proactive-observability';

describe('ObservableService', () => {
  let service: ObservableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ObservableService,
        CorrelationStrategy,
        ReactiveObservability,
        ProactiveObservability,
      ],
    }).compile();

    service = module.get<ObservableService>(ObservableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});