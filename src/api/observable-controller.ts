import { Controller, Get, Post, Body } from '@nestjs/common';
import { ObservableService } from './observable-service';
import { ObservableDto } from './observable-dto';

@Controller('observability')
export class ObservableController {
  constructor(private readonly observableService: ObservableService) {}

  @Post('correlate')
  correlateEvent(@Body() event: ObservableDto) {
    return this.observableService.correlateEvent(event);
  }

  @Get('metrics')
  collectMetrics() {
    return this.observableService.collectMetrics();
  }

  @Get('health')
  performHealthCheck() {
    return this.observableService.performHealthCheck();
  }
}