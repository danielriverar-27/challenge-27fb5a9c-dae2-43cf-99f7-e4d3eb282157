## Estrategia observabilidad Global

Para sistemas distribuidos en multi  region global de observabilidad, usaria una instrumentacion estandar, 
al igual que lo hacemos en cliente que seria OpenTelemetry como capa comun en todas las regiones, para metricas 
y logs asociadas a la misma peticiones, para propagar contexto en diferentes componentes, como podria ser la comunicacion http, mensajeria,
o protocolos no convencionales como lo podria ser gRPC. En vez de tener un colector central al que vayan todos los eventos, se implementaria 
por region, este colector filtraria y agriparia los eventos, de esta manera garantizamos que no haya mayor latencia de red por estar en zonas geograficamente apartadas.

Pondria metricas agregadas, salud de los servicios, metadatos, y usaria datos de alta cardinalidad para realizar busquedas entre regiones. 
Las metricas y podria tener una retencion podria tener  de 7 a 30 dias, para efectos practicos en caso de necesitar dichas metricas para realizar
analisis de errores e incidentes, porque si es un tiempo mas corto, posiblemente se pierdan datos que necesite para analizar, ya para el cumplimiento normativo, 
dependera de las regulaciones del pais/zona geografica, pero por lo general, en  caso de AWS, cifrar los datos con KMS(porque los logs los almacenaria en S3, ademas de que podria colocarle una politica de ciclo de vida), ademas de no poner en logs datos sensibles de la peticion, por ejm, tokens, contraseñas, numero TdC o secretos.

Para los costos, mantendria logs recientes en un almacenamiento mas rapido, para que sea rapida su obtencion, y moveria registros un poco mas viejos, a clases de almacenamiento mas baratos. Para la escalabilidad, cada colector deberia escalar horizontalmente segun se requiere(no infinitamente, con un  maximo de instancias), y para esto monitorizariamos la plataforma de observabilidad para ver metrics del estado de salud de dicho sistema, porque no debe permitirse perder registros de telemetria porque seria quedar con un punto ciego

## Estrategia
Usaria logs para guardar que esta pasando en cada ms del sistema, metricas para medir como errores CPU, memoria, trafico, traces para seguir una peticion a lo largo del sistema, la correlacion para usar un mismo `trace-id` para relacionar logs y traces, alertas paara avisar cuando haya errores, o mucha latencia, SLOs, para definir el objetivo de disponiblidad,  para resiliencia, tener collectors y almacenamiento redundantes para que siga funcionando en caso de una falla y para costos, guardar solamente la data que nos interesa, para no tener data innecesaria y ya la retencion correspondientes, y dicha retencion, moverlas entre clases de almancenamientos segun sea necesitario, porque no es lo mismo tener un incidente/error en estos momentos, y necesito analizar y obtener todo casi que en tiempo real, a quiza en una semana  ver metricas, de un incidente pasado para analizar patrones y tendencias, entonces no necesito la informacion tan de inmediato, sino que puedo sacrificar un poco el tiempo de recuperacion, pero para garantizar eficiencia en los costos. 