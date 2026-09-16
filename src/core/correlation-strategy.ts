import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class CorrelationStrategy {

  describeCorrelation() {
    // ¿Qué es la correlación de eventos? es la capacidad de conectar los diferentes puntos, entre logs y comportamientos del servicio, es decir, que en vez de ver los errores como algo independiente, se busca la conexion entre las diferentes partes para buscar causa raiz de un problema, es en si en palabras mas simples, en vez de ver sola una pieza del rompecabezas, verlo como un todo de las diferentes partes que lo componen  
    // ¿Por qué es importante en sistemas distribuidos? porque en los sistemas distribuidos un error puede surgir en un servicio y tener efecto en otro, por lo tanto es importante saber cómo se relacionan los eventos para poder hacer un seguimiento y diagnóstico adecuado del error, porque asi aislamos y entendemos el flujo de los diferentes sistemas en la APP
    // ¿Cómo rastreamos eventos relacionados entre microservicios? mediante la propagacion del contexto, o de un correlation ID a través de las llamadas entre servicios, que sirve como identificador de dicha peticion
  }
  
  discussImplementation() {
    // Estrategias para implementar correlación (correlation IDs, distributed tracing): usar un correlationId que acompañe cada solicitud desde el inicio al final, se podría propagar por medio de headers, y ya incluirlo en los logs con fecha y hora, operacion y resultado, o tambien con algun campo que identifique la transaccion de manera unica en todo el sistema, por ejm, en un servicio que trabajé, que era un orquestador entre diferentes sistemas, dentro del json, contaba con un id de seguimiento, con este identificador mostraba en logs, las diferentes operaciones, resultados, y asi analizar que pasaba con cada transacción en caso de que reportaran errores
    // Herramientas comunes: OpenTelemetry para instrumentar la metricas, logs y trazas, Jaeger para la visualizacion y analisis de trazas en sistemas distribuidos, muestra el ciclo de vida de la peticion a lo largo del sistema
    // Cómo las aplicaciones distribuidas se benefician de esto: se puede rastrear el flujo completo de una solicitud a través de múltiples servicios, facilitando el diagnóstico de problemas, análisis de rendimiento y comprensión del comportamiento del sistema en tiempo real
  }

  correlateEvents(event: any): Observable<any> {
    // Lógica de correlación de eventos
    return of(event);
  }
}
