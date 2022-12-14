<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Diagramas de proceso para identificación de los vertimientos

    p.mb-3 Se denomina diagrama de flujo a una representación gráfica de distintos procedimientos lógicos que tiene como finalidad brindar una simplificación y comprensión de éstos. Se usa especialmente en el área de la informática para el desarrollo de programas, como para el establecimiento de distintos procesos técnicos en el área industrial. 

    p.mb-3 No obstante, su comprensión y utilización puede ser de enorme utilidad en cualquier área técnica que busque tener un reflejo pertinente de alguna secuencia lógica. Los diagramas de flujo existen desde hace muchos años y su utilización coincide con el desarrollo de la tecnología como una introducción crítica para el incremento de la producción en cualquier sector que se considere. Es por ello por lo que este tipo de registros gráficos suelen enseñarse en carreras técnicas que hacen un uso más intensivo de ellos, ver figura 5.

    .row.align-items-star.justify-content-center
      .col-10.col-lg-6(data-aos="fade-right")
        .row.justify-content-center.align-items-star
          .col-lg-12
            .titulo-sexto.color-acento-contenido
              h5 Figura 5
              span  Práctica de supervisión de insumos 
        img(src='@/assets/curso/images/tema7/img_1.png').mb-3      
      .col-lg-6(data-aos="fade-left")  
        .row.align-items-center.mb-4
          .col-lg-10(data-aos="fade-left") 
            .jumbotron-4.p-2
              p.text-white.text-center.mb-0 <b>Diagrama de flujo de entrada y salida de mercancía. </b>
        .jumbotron-1.p-4.mb-3
            p.mb-0 Todo proceso productivo es un sistema formado por personas, equipos y procedimientos de trabajo. El proceso genera una salida (output), que es el producto que se quiere fabricar. La calidad del producto fabricado está determinada por sus características de calidad, es decir, por sus propiedades físicas, químicas, mecánicas, estéticas, durabilidad, funcionamiento, etc. que en conjunto determinan el aspecto y el comportamiento del mismo. El cliente quedará satisfecho con el producto si esas características se ajustan a lo que esperaba, es decir, a sus expectativas previas (Educaguía, 2005).

    p.mb-3 Es así como aparecen en escena los diagramas de proceso, pues son una herramienta útil para todo procedimiento, ya sea en productos, servicios, o hasta en la misma vida diaria. Para continuar con la idea de diagramación en procesos productivos, hablaremos de algunos de los diagramas más representativos:

    ul.lista-ul
      li.mb-0 
        i.fas.fa-circle.circle
        p.mb-0 Diagramas de causa y efecto

    p.mb-3 La variabilidad de las características de calidad es un efecto observado que tiene múltiples causas. Cuando ocurre algún problema con la calidad del producto, debemos investigar para identificar las causas del mismo. Para ello nos sirven los Diagramas de Causa - Efecto, conocidos también como Diagramas de Espina de Pescado por la forma que tienen. Estos diagramas fueron utilizados por primera vez por Kaoru Ishikawa (Educaguía, 2005). 

    .row.justify-content-center.align-items-star
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 6
          span  Diagrama causa-efecto

    .row.align-items-star.justify-content-center
      .col-10.col-lg-8(data-aos="fade-right")
          img(src='@/assets/curso/images/tema7/fig_1.svg').mb-3

    p.mb-3 Para hacer un Diagrama de Causa-Efecto se sugieren estos pasos:

    .row.justify-content-center.align-items-center.my-5.p-3
      .tarjeta.bg_grad-02.p-4.mb-5(data-aos="zoom-in-up")
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 a.) Paso 1. 
              p.mb-3 Se decide cuál va a ser la característica de calidad que se va a analizar. Por ejemplo, si se considera hablar de un producto: “la mayonesa” y sus características que podrían ser el peso del frasco lleno, la densidad del producto, el porcentaje de aceite, etc., ver figura 7. Se traza una flecha gruesa que representa el proceso y a la derecha escribimos la característica de calidad (Educaguía, 2005).
            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema7/fig_2.svg").mb-0
              .jumbotron-6.p-2.mb-3
                p.mb-0 Figura 7 Paso de diagrama causa-efecto

          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 b.) Paso 2.
              p.mb-3 Indicamos los factores causales más importantes y generales que puedan generar cambios de la característica de calidad, trazando flechas secundarias hacia la principal, ver figura 8. Por ejemplo, Materias Primas, Equipos, Operarios, Método de Medición, etc. (Educaguía, 2005).

            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema7/fig_3.svg").mb-3
              .jumbotron-3.p-2.mb-3
                p.mb-0 Figura 8 paso de diagrama causa-efecto 2

          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 c.) Paso 3.
              p.mb-3 Se incorporan en cada rama factores más detallados que se puedan considerar causas de cambio o variación. Ver figura 9.
                            
            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema7/fig_4.svg").mb-3
              .jumbotron-3.p-2.mb-3
                p.mb-0 Figura 9  Paso diagrama causa-efecto 3

          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 d.) Paso 4. 
              p.mb-3 Finalmente verificamos que todos los factores que puedan causar variación hayan sido incorporados al diagrama. Las relaciones Causa-Efecto deben quedar claramente establecidas y en ese caso, el diagrama está terminado. Revise un ejemplo de la Guía de Control de Calidad de Kaoru Ishikawa, publicada por UNIPUB (N. York). Se trata de una máquina en la cual se produce un defecto de rotación oscilante, ver figura 10. La característica de calidad es la oscilación de un eje durante la rotación (Educaguía, 2005).
            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema7/fig_5.svg").mb-3
              .jumbotron-3.p-2.mb-3
                p.mb-0 Figura 10 Paso diagrama causa-efecto 4 

    p.mb-3 Un diagrama de Causa-Efecto es de por si educativo, sirve para que la gente conozca en profundidad el proceso con que trabaja, visualizando con claridad las relaciones entre los Efectos y sus Causas. Sirve también para guiar las discusiones, al exponer con claridad los orígenes de un problema de calidad. Y permite encontrar más rápidamente las causas asignables cuando el proceso se aparta de su funcionamiento habitual (Educaguía, 2005).

    p.mb-3 En la siguiente figura 11 se puede apreciar un ejemplo de diagrama en cuanto al tema ambiental:

    .row.justify-content-center.align-items-star
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 11
          span  Pasos diagrama –causa efecto 5

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-8
        .jumbotron-1.p-4
          .row.align-items-star.justify-content-center
            .col-10.col-lg-8(data-aos="fade-right")
                img(src='@/assets/curso/images/tema7/fig_6.svg').mb-3

    p.mb-3 En este ejemplo se señalan los factores causales más importantes y generales que puedan ocasionar la generación de tales residuos, trazando flechas secundarias hacia la principal. Por ejemplo, materias primas, equipos, operarios, mantenimiento, proveedores, etc. Se Incorpora en cada rama factores más detallados que se pueden considerar causas de la generación. 

    p.mb-3 Para hacer esto, se pueden formular las siguientes preguntas: 

    .row.align-items-star.justify-content-center.mb-3
      .jumbotron-5.p-5
        .row.align-items-center.justify-content-center
          .col-10.col-lg-3(data-aos="fade-right")
            img(src='@/assets/curso/images/tema7/img_2.svg').mb-0
          .col-lg-9(data-aos="fade-left")  
              ul.lista-ul
                li.mb-0 
                  i.fas.fa-angle-right.c-check
                  p.mb-0 ¿Qué materias primas son responsables de generar residuos de carácter peligroso? Ejemplo ácido sulfúrico, cloruro de níquel, estas materias primas se adicionarían a la rama de materias primas. 
                li.mb-0 
                  i.fas.fa-angle-right.c-check
                  p.mb-0 ¿Por qué hay problemas en el mantenimiento de la planta? Ejemplo frecuencia del mantenimiento, malas prácticas en el mantenimiento, estos elementos se incorporan a la rama de mantenimiento.
                li.mb-0 
                  i.fas.fa-angle-right.c-check
                  p.mb-0 ¿Por qué las prácticas de los operarios ocasionan la generación de residuos peligrosos? Porque no siguen las instrucciones para la operación de equipos, hace falta capacitación, etc. (Alcaldía de Santiago de Cali, 2005).

    p.mb-3 Así se sigue ampliando el Diagrama de Causa-Efecto hasta que contenga todas las causas posibles de la generación de residuos.

    p.mb-3 Finalmente, se verifica que todos los factores que puedan causar la generación de residuos hayan sido incorporados al diagrama. Las relaciones Causa-Efecto deben quedar claramente establecidas y en ese caso, el diagrama está terminado (Alcaldía de Santiago de Cali, 2005).

    ul.lista-ul
      li.mb-0 
        i.fas.fa-circle.circle
        p.mb-0 Diagramas de Flujo

    .row.align-items-center.justify-content-center
      .col-10.col-lg-6(data-aos="fade-right")
        .jumbotron-1.p-5.mb-3
          p.mb-0 El diagrama de Flujo es una representación gráfica de la secuencia de etapas, operaciones, movimientos, decisiones y otros eventos que ocurren en un proceso. Esta representación se efectúa a través de formas y símbolos gráficos utilizados usualmente, ver figura 12 (Educaguía, 2005)
      .col-lg-6(data-aos="fade-left")  
        .row.justify-content-center.align-items-star
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 12
              span  Diagramas de flujo
        .row.justify-content-center.align-items-star
          .col-lg-12
            .row.align-items-star.justify-content-center
              .col-10.col-lg-8(data-aos="fade-right")
                  img(src='@/assets/curso/images/tema7/fig_8.svg').mb-3

    p.mb-5 Los símbolos gráficos, ver figura 13, para dibujar un diagrama de flujo están más o menos normalizados:

    .row.justify-content-center.align-items-star
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 13
          span  Símbolos gráficos
    .row.justify-content-center.align-items-star
      .col-lg-12
        .row.align-items-star.justify-content-center
          .col-10.col-lg-10(data-aos="fade-right")
              img(src='@/assets/curso/images/tema7/fig_9.svg').mb-3

    p.mb-3 Existen otros símbolos que se pueden utilizar. Lo importante es que su significado se entienda claramente a primera vista. En el ejemplo siguiente de la figura 14, se observa un diagrama de flujo para representar el proceso de fabricación de una resina (Reacción de Polimerización) (Educaguía, 2005).

    .row.align-items-center.justify-content-center
      .col-lg-6(data-aos="fade-left")  
        .row.justify-content-center.align-items-star
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 14
              span  Diagrama de flujo 2
        .row.justify-content-center.align-items-star
          .col-lg-12
            .row.align-items-star.justify-content-center
              .col-10.col-lg-8(data-aos="fade-right")
                  img(src='@/assets/curso/images/tema7/fig_10.svg').mb-3
      .col-10.col-lg-6(data-aos="fade-right")
        p.my-3 Algunas recomendaciones para construir Diagramas de Flujo son las siguientes:
        .jumbotron-5.p-5.mb-3
          p.mb-3 Conviene realizar un Diagrama de Flujo que describa el proceso real y no lo que está escrito sobre el mismo (lo que se supone debería ser el proceso).

          p.mb-3 Si hay operaciones que no siempre se realizan como está en el diagrama, anotar las excepciones en el diagrama.

          p.mb-3 Probar el Diagrama de Flujo tratando de realizar el proceso como está descrito en el mismo, para verificar que todas las operaciones son posibles tal cual figuran en el diagrama.

          p.mb-3 Si se piensa en realizar cambios al proceso, entonces se debe hacer un diagrama adicional con los cambios propuestos. Educaguía (2005, p. 30). 

    .row.align-items-center.justify-content-center.mb-3
      ul.lista-ul
        li.mb-0 
          i.fas.fa-circle.circle
          p.mb-0 Diagrama de entrada-proceso-salida (EPS): 

    .row.align-items-center.justify-content-center.mb-5
      .col-10.col-lg-6(data-aos="fade-right")
        .jumbotron-7.p-5.mb-3
          p.mb-3 Un diagrama EPS es un conjunto de datos organizados en donde se pueden expresar de manera gráfica procesos unitarios a nivel industrial en la elaboración de un producto y porque no, en la prestación de un servicio. Este tipo de diagramas pueden llegar a tener diversas aplicaciones dependiendo de las necesidades específicas de cada caso. 

          p.mb-3 A modo de ejemplo: se muestra un diagrama de flujo simplificado en la figura 15 que incluye la descripción general de las operaciones unitarias y el flujo de materiales involucrados en una actividad de servicios, desarrollada por una central térmica de generación de energía, que utiliza como fuente combustible el carbón (Alcaldía de Santiago de Cali, 2005).
      .col-lg-6(data-aos="fade-left")  
        .row.justify-content-center.align-items-star
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 15 
              span  Diagrama de flujo estación termoeléctrica ejemplo
        .row.justify-content-center.align-items-star
          .col-lg-12
            .row.align-items-star.justify-content-center
              .col-10.col-lg-8(data-aos="fade-right")
                  img(src='@/assets/curso/images/tema7/fig_13.svg').mb-3
      
    p.mb-5 Para el tema de manejo de aguas residuales los diagramas de flujo (EPS) son muy útiles para estimar caudales, cargas contaminantes, concentraciones contaminantes, origen de las aguas residuales y predecir el nivel de contaminación que determinada actividad puede generar en un cuerpo de agua. En la siguiente figura 16 se muestra un ejemplo en aguas residuales domésticas:

    .row.justify-content-center.align-items-star
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 16
          span  Diagrama de flujo vertimientos domésticos

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-10
        .jumbotron-1.p-4.mb-3
          .row.align-items-star.justify-content-center
            .col-10.col-lg-8(data-aos="fade-right")
                img(src='@/assets/curso/images/tema7/fig_14.svg').mb-3
        .jumbotron-3.p-2.mb-3
          p.mb-0 Nota. Proceso de generación de vertimientos domésticos. Pedraza, S. (2017). 

        p.mb-0 Como se puede evidenciar en el esquema anterior, el diagrama de entrada, proceso y salida es una herramienta que permite determinar diversos factores a la hora de estimar el nivel de contaminación de una o varias actividades o procesos, partiendo de la identificación de los puntos de vertimiento, hasta la formulación de alternativas para el manejo del mismo.


















</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>
