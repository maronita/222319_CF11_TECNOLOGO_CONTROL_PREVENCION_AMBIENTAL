<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Normativa en control de vertimientos

    .row.justify-content-center.align-items-star
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3
          span  Conferencia

    .row.align-items-star.justify-content-center
      .col-10.col-lg-6(data-aos="fade-right")
          img(src='@/assets/curso/images/tema5/img_1.png').mb-3
     
          .jumbotron-3.p-2.mb-3
            p.mb-0 Nota. Conferencia en normativa para el tratamiento de agua lluvia y residual. Pedraza, S. (2018). 
      .col-lg-6(data-aos="fade-left")  
        p.mb-3 La normativa ambiental para el manejo de los vertimientos en Colombia es amplia, pero  ha sufrido una serie de cambios a través del tiempo a medida que el estado propone políticas más estrictas para el uso, aprovechamiento y vertimiento del recurso hídrico. 

        p.mb-3 En el siguiente resumen legislativo se pueden apreciar los cambios técnico-legales que se han presentado en el país en los últimos 20 años. 
        .jumbotron-1.p-4
          p.mb-3 <b>Constitución Política Nacional:</b>
          p.mb-0 El capítulo 3: De Los Derechos Colectivos y del Ambiente, en los artículos 78, 79 y 80 establece que el estado tiene, entre otros deberes, los de proteger la diversidad e integridad del ambiente; fomentar la educación ambiental; prevenir y controlar los factores de deterioro ambiental; imponer las sanciones legales y exigir la reparación de los daños causados al ambiente. Constitución Política de Colombia. (1991, p. 40). 
    
    .row.align-items-star.justify-content-center.mb-3
      .col-lg-12(data-aos="fade-right")
        .jumbotron-1.p-4
          p.mb-3  <b>Documentos para agua:</b>  Vertimientos Aguas Residuales.
          p.mb-0 En el anexo vertimientos de agua residuales, se visualiza la tabla donde se puede encontrar una descripción puntual de la legislación nacional en vertimientos de agua residual. Por favor abra el anexo y consulte su información.

    p.mb-3 En el material complementario revise el video “Norma de Vertimientos” para conocer más del tema.

    figure.mb-5(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video











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
