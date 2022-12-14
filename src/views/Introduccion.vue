<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.cs
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.justify-content-center
      .col-lg-12(data-aos="fade-right")  
        img(src='@/assets/curso/images/tema1/img_intro.png').mb-3

    .row.align-items-center.justify-content-center
      .col-lg-10(data-aos="fade-right")  
        .jumbotron.p-3
          .row.align-items-center.justify-content-center
            .col-6.col-lg-2
              img(src='@/assets/curso/images/tema1/ico_intro.svg').mb-3
            .col-lg-10
              p.mb-0 En el desarrollo del presente contenido se establecen los requisitos para la identificación del vertimiento, recolección de información primaria a través de los parámetros de caracterización del agua residual y formulación de un diagnóstico de la calidad del agua para posteriormente controlar los vertimientos a través de la implementación de una planta de tratamiento de agua residual. 

 
    


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
