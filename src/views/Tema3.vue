<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Bases conceptuales

    p.mb-3 Con el propósito de tener un orden consecutivo para el entendimiento y desarrollo de este material, es relevante tener presente los siguientes conceptos a partir de lo dispuesto por el Ministerio de Desarrollo Económico Dirección de Agua Potable y Saneamiento Básico (2002).

    .row.align-items-star.justify-content-center
      .jumbotron-1.p-4
        ul.lista-ul
          li.mb-0 
              i.fas.fa-check.c-check
              p.mb-0 <b>Aguas crudas:</b> aguas naturales que no han sido tratadas, por lo general provienen de una fuente o cuerpo de agua. 
          li.mb-0 
              i.fas.fa-check.c-check
              p.mb-0 <b>Aguas residuales:</b> aguas que contienen material disuelto y en suspensión, luego de ser usada por una comunidad o industria.
          li.mb-0 
              i.fas.fa-check.c-check
              p.mb-0 <b>Aguas servidas:</b> aguas de desecho provenientes de lavamanos, tinas de baño, duchas, lavaplatos, y otros artefactos que no descargan materias fecales. 
          li.mb-0 
              i.fas.fa-check.c-check
              p.mb-0 <b>Carga orgánica:</b> producto de la concentración media de DBO por el caudal medio determinado en el mismo sitio; se expresa en kilogramos por día (kg/d).
          li.mb-0 
              i.fas.fa-check.c-check
              p.mb-0 Caja de inspección domiciliaria: cámara localizada en el límite de la red pública de alcantarillado y la privada, que recoge las aguas residuales, lluvias o combinadas provenientes de un inmueble.

        .row.align-items-star.justify-content-center
          .col-10.col-lg-3(data-aos="fade-right")
              img(src='@/assets/curso/images/tema3/img_1.svg').mb-3
          .col-lg-9(data-aos="fade-left")  
            ul.lista-ul
              li.mb-0 
                  i.fas.fa-check.c-check
                  p.mb-0 <b>Concentración:</b> se denomina concentración de una sustancia, elemento o compuesto en un líquido, la relación existente entre su peso y el volumen del líquido que lo contiene.   
              li.mb-0 
                  i.fas.fa-check.c-check
                  p.mb-0 <b>Descomposición anaerobia:</b> degradación de la materia orgánica en ausencia de oxígeno molecular por efecto de microorganismos. Usualmente va acompañada de la generación de ácidos y gas metano. 
              li.mb-0 
                  i.fas.fa-check.c-check
                  p.mb-0 <b>Digestión aerobia:</b> descomposición biológica de la materia orgánica de un lodo en presencia de oxígeno. 
              li.mb-0 
                  i.fas.fa-check.c-check
                  p.mb-0 <b>Efluente:</b> líquido que sale de un proceso de tratamiento.
              li.mb-0 
                  i.fas.fa-check.c-check
                  p.mb-0 <b>Efluente final:</b> líquido que sale de una planta de tratamiento de aguas residuales. 



























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
