import { Injectable } from '@nestjs/common';

@Injectable()
export class ProactiveObservability {
  performHealthCheck(): Promise<any> {
    // Lógica de verificación de salud proactiva
    return Promise.resolve({});
  }
}