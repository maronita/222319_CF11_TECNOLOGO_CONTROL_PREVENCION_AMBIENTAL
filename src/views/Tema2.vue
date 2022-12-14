<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Introducción vertimientos


    p.mb-3 Gran parte de los contaminantes que se encuentran en las aguas residuales están distribuidos en forma de sólidos en distintas escalas de tamaño, ver figura 1, los más fáciles de separar son aquellos que decantan por la acción gravitacional los cuales se encuentran en el rango de 1 micra hasta los 5 mm, encontrando en orden creciente de diámetro de partícula, sólidos suspendidos, sólidos sedimentables, arenas o partículas discretas y sólidos gruesos, que en su conjunto se remueven mediante dispositivos de separación sólido – líquido por fenómenos netamente físicos.

    .row.align-items-star.justify-content-center
      .col-10.col-lg-6(data-aos="fade-right")
          img(src='@/assets/curso/images/tema2/img_1.png').mb-3
      .col-lg-6(data-aos="fade-left")  
        p.mb-3 En una menor escala de tamaño, el peso de los sólidos en el agua es tan bajo que no decantan y priman sobre ellos, repulsiones eléctricas por las cargas que se conforman en su superficie, éstos son los que denominan sólidos coloidales, que se extienden en el rango de tamaño desde los 100 nm hasta los 0,1 micrómetros, este tipo particular de contaminantes del agua son removidos a través de tratamiento físico químico, haciendo uso de unidades combinadas donde se ponen en contacto agentes químicos que modifican las propiedades de los contaminantes en reactores con mezclado seguido de unidades de separación física sólido líquido.
        .jumbotron.p-4
          p.mb-3 Aún existe un tamaño inferior, correspondiente a los sólidos disueltos, comprende los contaminantes disueltos en el agua y que aportan color verdadero, en tamaños menores de 100 nanómetros, donde son efectivos los sistemas de tratamiento de refinación como las conocidas membranas y materiales adsorbentes entre otras tecnologías.
          p.mb-0 Cuando la naturaleza de estos sólidos es orgánica, son eficaces los sistemas de tratamiento biológico, donde los microorganismos se convierten en aliados efectivos del tratamiento en sus condiciones aerobias o anaerobias.





















      


</template>

<script>
export default {
  name: 'Tema2',
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
