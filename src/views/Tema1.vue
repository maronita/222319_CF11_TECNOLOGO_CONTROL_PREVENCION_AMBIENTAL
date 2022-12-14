<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Presentación


    .row.align-items-star.justify-content-center
      .col-10.col-lg-7(data-aos="fade-left")  
        .cajon.color-custom.p-4.mb-3
          p.mb-3 <b>El aumento de la población, la expansión urbana y el acelerado crecimiento industrial, han determinado como uno de los problemas ambientales es la alta carga contaminante de los vertimientos;</b> situación que trae consigo una serie de impactos ambientales negativos que demandan un adecuado manejo. Es por ello que determinar la problemática de los vertimientos de acuerdo con su naturaleza, identificando por medio de un diagrama de procesos las fuentes generadoras, el tipo de contaminante, concentración y carga contaminante y aforo, son lo primordial para el diagnóstico, es una actividad fundamental para conocer en profundidad el manejo adecuado e inmediato que debe darse, según la actividad económica o fuente que lo genera y que actividades de tratamiento son requeridas para descontaminar el agua y preferiblemente prevenir su contaminación. Se abordarán herramientas básicas y fundamentales para el desarrollo de un buen diagnóstico de los vertimientos según la actividad generadora.
      .col-lg-5(data-aos="fade-right")
          img(src='@/assets/curso/images/tema1/img_1.png').mb-3
            

































</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
  }),
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
