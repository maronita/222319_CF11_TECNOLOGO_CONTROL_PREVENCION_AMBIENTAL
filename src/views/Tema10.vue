<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Carga contaminante

    p.mb-3 De acuerdo con el decreto 050 de 2018 por el cual  se modifica parcialmente el Decreto 1076 de 2015, Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible en relación con los Consejos Ambientales Regionales de la Macrocuencas (CARMAC), el Ordenamiento del Recurso Hídrico y Vertimientos y se dictan otras disposiciones"; La carga contaminante es el producto de la concentración másica de una sustancia por el caudal volumétrico del líquido que la contiene determinado en el mismo sitio. Se expresa en unidades de masa sobre tiempo (Ministerio de ambiente y desarrollo sostenible, 2018).

    p.mb-3 En el cálculo de la carga contaminante de cada sustancia, elemento o parámetro contaminante objeto del cobro de la tasa retributiva por vertimientos, se deberá descontar a la carga presente en el vertimiento puntual, las mediciones de la carga existente en el punto de captación, siempre y cuando se capte en el mismo cuerpo de agua receptor de la descarga objeto del pago de la tasa (Ministerio de ambiente y desarrollo sostenible, 2015).

    .row.justify-content-center.my-3
      .col-lg-12
        SlyderF.slyder-color.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in-down")
          .tarjeta-avatar.h-100  
            img(src='@/assets/curso/images/tema10/ico_1.svg' alt='imagen relacionada' style='width:150px')
            .tarjeta.tarjeta_grey-1
              .p-4 
                h3.text-center Caudal promedio (Q) 
                p.mb-0.text-center Corresponde al volumen de vertimientos por unidad de tiempo durante el período de muestreo. Para los efectos del presente capítulo, el caudal promedio se expresará en litros por segundo (1/s) (Ministerio de ambiente y desarrollo sostenible, 2015). 
          .tarjeta-avatar.h-100  
            img(src='@/assets/curso/images/tema10/ico_1.svg' alt='imagen relacionada' style='width:150px')
            .tarjeta.tarjeta_grey-1
              .p-4
                h3.text-center  Concentración (C)
                p.mb-0.text-center Es la masa de una sustancia, elemento o parámetro contaminante, por unidad de volumen del líquido que lo contiene. Para los efectos del presente capítulo, la concentración se expresará en miligramos por litro (mg/1) (Ministerio de ambiente y desarrollo sostenible, 2015).

          .tarjeta-avatar.h-100  
            img(src='@/assets/curso/images/tema10/ico_1.svg' alt='imagen relacionada' style='width:150px')
            .tarjeta.tarjeta_grey-1
              .p-4
                h3.text-center  Cuerpo de Agua
                p.mb-0.text-center  Sistema de origen natural o artificial, localizado sobre la superficie terrestre, conformado por elementos físicos-bióticos y masas o volúmenes de agua, contenidas o en movimiento (Ministerio de ambiente y desarrollo sostenible, 2015).
          .tarjeta-avatar.h-100  
            img(src='@/assets/curso/images/tema10/ico_1.svg' alt='imagen relacionada' style='width:150px')
            .tarjeta.tarjeta_grey-1   
              .p-4  
                h3.text-center  Límites permisibles de vertimiento
                p.mb-0.text-center Es el contenido permitido de una sustancia, elemento o parámetro contaminante, en forma individual, mezclado o en combinación, o sus productos de metabolismo establecidos en los permisos de vertimiento y/o en los Planes de Saneamiento y Manejo de Vertimientos – PSMV (Ministerio de ambiente y desarrollo sostenible, 2015).

          .tarjeta-avatar.h-100  
            img(src='@/assets/curso/images/tema10/ico_1.svg' alt='imagen relacionada' style='width:150px')
            .tarjeta.tarjeta_grey-1                  
              .p-4
                h3.text-center  Punto de captación
                p.mb-0.text-center Es el sitio o lugar donde el usuario toma el recurso hídrico para cualquier uso (Ministerio de ambiente y desarrollo sostenible, 2015).

          .tarjeta-avatar.h-100  
            img(src='@/assets/curso/images/tema10/ico_1.svg' alt='imagen relacionada' style='width:150px')
            .tarjeta.tarjeta_grey-1                  
              .p-4
                h3.text-center  Punto de descarga.
                p.mb-0.text-center  Sitio o lugar donde se realiza un vertimiento, de manera directa o indirecta al cuerpo de agua (Ministerio de ambiente y desarrollo sostenible, 2015).
          
          .tarjeta-avatar.h-100  
            img(src='@/assets/curso/images/tema10/ico_1.svg' alt='imagen relacionada' style='width:150px')
            .tarjeta.tarjeta_grey-1
              .p-4 
                h3.text-center  Tarifa de la tasa retributiva. 
                p.mb-0.text-centerEs El valor que se cobra por unidad de carga contaminante vertida al recurso hídrico (Ministerio de ambiente y desarrollo sostenible, 2015).
          .tarjeta-avatar.h-100  
            img(src='@/assets/curso/images/tema10/ico_1.svg' alt='imagen relacionada' style='width:150px')
            .tarjeta.tarjeta_grey-1
              .p-4
                h3.text-center  Usuario
                p.mb-0.text-center Es toda persona natural o jurídica, de derecho público o privado, que realiza vertimientos puntuales en forma directa o indirecta al recurso hídrico (Ministerio de ambiente y desarrollo sostenible, 2015).

          .tarjeta-avatar.h-100  
            img(src='@/assets/curso/images/tema10/ico_1.svg' alt='imagen relacionada' style='width:150px')
            .tarjeta.tarjeta_grey-1
              .p-4
                h3.text-center  Vertimiento puntual directo al recurso hídrico. 
                p.mb-0.text-center Es aquel vertimiento realizado en un punto fijo y directamente al recurso hídrico (Ministerio de ambiente y desarrollo sostenible, 2015).

          .tarjeta-avatar.h-100  
            img(src='@/assets/curso/images/tema10/ico_1.svg' alt='imagen relacionada' style='width:150px')
            .tarjeta.tarjeta_grey-1   
              .p-4
                h3.text-center  Vertimiento al recurso hídrico
                p.mb-0.text-center  Es cualquier descarga final al recurso hídrico de un elemento, sustancia o parámetro contaminante, que esté contenido en un líquido residual de cualquier origen (Ministerio de ambiente y desarrollo sostenible, 2015).

          .tarjeta-avatar.h-100  
            img(src='@/assets/curso/images/tema10/ico_1.svg' alt='imagen relacionada' style='width:150px')
            .tarjeta.tarjeta_grey-1                 
              .p-4
                h3.text-center  Vertimiento puntual indirecto al recurso hídrico. 
                p.mb-0.text-center  Es aquel vertimiento que se realiza desde un punto fijo a través de un canal natural o artificial o de cualquier medio de conducción o transporte a un cuerpo de agua superficial (Ministerio de ambiente y desarrollo sostenible, 2015). 
    
    .row.align-items-star.justify-content-center.mb-3
      .col-10.col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/images/tema10/img_new.svg').mb-3
      .col-lg-6(data-aos="fade-left")  

          p.mb-3 En si la carga contaminante a través de su cuantificación permite al usuario plantear estrategias de tratamiento para reducirla o controlarla de acuerdo con la tecnología de tratamiento de aguas residuales que desee implementar. Es así como este parámetro permite también desarrollar memorias de cálculo y proyecciones de diseño de un tren de tratamiento de aguas residuales de acuerdo con necesidades específicas.

          p.mb-3 La remoción de un porcentaje de carga contaminante, independientemente de la cantidad producida, permite permite también desarrollar memorias de cálculo y proyecciones de diseño de un tren de tratamiento de aguas residuales de acuerdo con necesidades específicas y exige tratamientos más estrictos para industrias que han implantado procesos o tecnologías limpias, así como a las industrias pequeñas para las cuales el volumen e impacto de los vertimientos no justifica una remoción de carga. Por eso es necesario plantear enfoques de control más efectivos y equitativos (MMAVDT, 2002). 
          p.mb-0 El vertimiento de grandes cantidades de contaminantes a las industrias de gran tamaño con tecnologías obsoletasy exige tratamientos más estrictos para industrias que han implantado procesos o tecnologías limpias, así como a las industrias pequeñas para las cuales el volumen e impacto de los vertimientos no justifica una remoción de carga. Por eso es necesario plantear enfoques de control más efectivos y equitativos (MMAVDT, 2002). 

    .row.align-items-center.justify-content-center
      .col-lg-10(data-aos="fade-right")  
        .jumbotron-9.p-4
          .row.align-items-center.justify-content-center
            .col-10.col-lg-2
              img(src='@/assets/curso/images/tema10/ico_2.svg' alt='', style="width:100px; display:block; margin:auto 0;").mb-3
            .col-lg-10
              p.mb-3 De acuerdo con el decreto único ambiental 1076 de 2015 la Carga Contaminante diaria (CC) es el resultado de multiplicar el caudal promedio por la concentración de una sustancia, elemento o parámetro contaminante por el factor de conversión de unidades y por el tiempo diario de vertimiento del usuario, medido en horas por día, es decir:
              .row
                .col-lg-6
                  a.anexo.mb-4(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias



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
