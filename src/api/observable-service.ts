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

  summarizeConcepts(){
    //Resumen: la observabilidad mide el estado interno de un sistema basandose en los datos, que este genera, ayuda a entender el porque de los problemas
    // Tiene 3 pilares que son logs, que es el historial detallado de eventos que se generan en la APP, metricas, que es la medición numerica/cuantitativa del sistema(uso de CPU, memoria, red, etc) y tracing, que es el registro o identificador de las solicitudes a traves de todo el sistema
    // La importancia en sistemas distribuidos, como por ejm los microservicios, en donde son varios componentes desacoplados que interactuan entre si, es porque permite rastrear las peticiones entre los diferentes ms, da una visibilidad completa a lo largo de todo el sistema
  }


  identifyDifferences(){
    //Proactiva:esta busca reducir que se presenten los problemas(incidentes, eventos, etc) utilizando los datos para analizar tendencias o patrones que podrian
    //Reactiva: esta espera a que ocurra algo, por ejm un incidente, y ya se busca resolver, buscando trazas, peticiones fallidas y se solventa dicho indicente, el problema con este es que genera una interrupcion o mala experiencia para los usuarios
  }


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