<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Parámetros físicos, químicos y microbiológicos del agua residual

  
    p.mb-3 Los parámetros fisicoquímicos del agua residual son mediciones que nos permiten determinar la calidad de un vertimiento ya sea para el tratamiento de este, para la descarga al alcantarillado o también a un cuerpo de agua, ver figura 2.

    .row.justify-content-center.align-items-star
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          span Laboratorio de parámetros físico, químicos del agua
    .row.align-items-center.justify-content-center
      .col-10.col-lg-8(data-aos="fade-left")
          img(src='@/assets/curso/images/tema4/img_1.png'  alt='')
    .row.align-items-center.justify-content-center
      .col-lg-8.mt-3
        .jumbotron-3.p-2.mb-3
          p.mb-0 Nota. Medición de pH, Oxígeno disuelto y turbidez en planta de tratamiento de artes gráficas. Pedraza, S. (2016). - SENA.  

    p.mb-3 De acuerdo con Pedraza (2016), se puede señalar:
    
    .row.justify-content-center.align-items-star.mb-5
      .col-lg-8(data-aos="fade-left") 
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-down")
          .row.justify-content-center.align-items-center(titulo="Potencial de Hidrógeno pH")
            .col-md-12.col-lg-12.mb-4.mb-md-0
              p.mb-0 El pH es una medida de la concentración de iones Hidrógeno. Se define como el Logaritmo del inverso de la concentración de iones H+ pH = Log 1/[H+]. Su interpretación va relacionada con la alcalinidad o acidez fitulable, los cuales tienen relevancia por encima de 9.6 o por debajo de 4.4 respectivamente.

          .row.justify-content-center.align-items-center(titulo="Demanda Bioquímica de Oxígeno (DBO)")
            .col-md-12.col-lg-12.mb-4.mb-md-0
              p.mb-3 Demanda Bioquímica de Oxígeno (DBO)

              p.mb-3 Es la cantidad de oxígeno usado por la actividad respiratoria de los microorganismos que utilizan la materia orgánica del agua residual para crecer y para metabolizar a partir de ella y de otros microorganismos sus componentes celulares. Es necesario distinguir entre el ensayo de la DBO y otros ensayos que se les realizan a las aguas contaminadas como los ensayos del TOC (Carbón Orgánico Total) y de la DQO (Demanda Química de Oxígeno). Los resultados de estos ensayos guardan ciertas relaciones entre sí, pero tienen significados diferentes. La DBO5 se mide como mg/lt o ppm de O2 consumidas durante un período de 5 días a 20 °C en la oscuridad. La DBO es la medida por excelencia utilizada por las agencias reguladoras en todo el mundo para medir el impacto de la contaminación causada por las aguas residuales. 

              p.mb-3 Además, a título meramente indicativo se pueden dar los siguientes parámetros:

              p.mb-0 Estado.............................................................. DBO5; mg/L
              p.mb-0 Agua Pura...........................................................0 - 20 mg/L    
              p.mb-0 Agua Levemente Contaminada......................20 - 100 mg/L
              p.mb-0 Agua Medianamente Contaminada .............100 - 500 mg/L
              p.mb-0 Agua Muy Contaminada ........................... 500 - 3000 mg/L
              p.mb-0 Agua Extremadamente Contaminada.....3000 - 15000 mg/L
          .row.justify-content-center.align-items-center(titulo="La Demanda Química de Oxígeno (DQO):")
            .col-md-12.col-lg-12.mb-4.mb-md-0
              p.mb-0 Es la cantidad de oxígeno necesario para oxidar la totalidad de la materia oxidable, tanto Orgánica como Mineral. Se mide en ppm o mg/lt. Es el resultado de una oxidación química en húmedo por medio de mezcla Sulfo-Crómica en Caliente. Guarda cierta relación con la DBO5, siendo esta última una fracción de la primera que oscila entre el 2 y el 70 %. En deshechos poco biodegradables como la gasolina y los Hidrocarburos, se dan las relaciones más bajas. En Aguas poco contaminadas deberá ser inferior a 50 ppm. 

          .row.justify-content-center.align-items-center(titulo="Nitritos:")
            .col-md-12.col-lg-12.mb-4.mb-md-0
              p.mb-0 Suelen ser el resultado de la contaminación con estiércol de ganado y orinas. Se acepta un valor inferior a 0.5 ppm.

          .row.justify-content-center.align-items-center(titulo="Nitratos")
            .col-md-12.col-lg-12.mb-4.mb-md-0
              p.mb-0 Suelen ser el resultado de la contaminación con residuos de fertilizantes o con aguas residuales de las composteras. Deberá ser inferior a 10 ppm. 

          .row.justify-content-center.align-items-center(titulo="Fosfatos")
            .col-md-12.col-lg-12.mb-4.mb-md-0
              p.mb-0 Son el resultado de la contaminación con detergentes, aunque también con estiércol y heces. Producen eutrofización de los cuerpos de agua. Deberá ser inferior a 0.2 ppm. 

          .row.justify-content-center.align-items-center(titulo="Conductividad eléctrica")
            .col-md-12.col-lg-12.mb-4.mb-md-0
              p.mb-0 Este parámetro mide el contenido total de sales en el agua. Deberá ser inferior a 0.5 mmhos/cm. 

          

      .col-8.col-lg-4(data-aos="fade-right") 
          img(src='@/assets/curso/images/tema4/img_2.png'  alt='')
     
    .row.justify-content-center.align-items-star.mb-5
      .col-8.col-lg-4(data-aos="fade-left") 
          img(src='@/assets/curso/images/tema4/img_3.png'  alt='').mb-3
      .col-lg-8(data-aos="fade-right") 
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-down")
          .row.justify-content-center.align-items-center(titulo="Sólidos Disueltos Totales TDS")
            .col-md-12.col-lg-12.mb-4.mb-md-0
              p.mb-0 Es la cantidad total de sólidos disueltos en el agua. Está relacionada con la conductividad eléctrica mediante la fórmula TDS = C.E. (mmhos/cm) x 700; ppm Ss++se mide en ppm. El Decreto 475 de 1998 del Ministerio de Salud establece que para agua potable la conductividad deberá estar comprendida entre 50 y 1000 micromhos/cm. 

          .row.justify-content-center.align-items-center(titulo="Sólidos Suspendidos Totales SST:")
            .col-md-12.col-lg-12.mb-4.mb-md-0
              p.mb-0 Es la cantidad de Sólidos que el agua conserva en suspensión después de 10 minutos de asentamiento. Se mide en ppm. El Decreto 475 de 1998 del Ministerio de Salud establece que para agua potable los Sólidos Totales deberán ser inferiores a 500 ppm, sin especificar si son solamente los Sólidos Suspendidos Totales o si incluyen los Sólidos Disueltos Totales. 

          .row.justify-content-center.align-items-center(titulo="Sólidos sedimentables")
            .col-md-12.col-lg-12.mb-4.mb-md-0
              p.mb-0 Son aquellos sólidos que sedimentan cuando el agua se deja en reposo durante 1 hora. Se determinan volumétricamente mediante el uso del cono Imhoff. 

          .row.justify-content-center.align-items-center(titulo="Turbidez")
            .col-md-12.col-lg-12.mb-4.mb-md-0
              p.mb-0 Su unidad de medida es NTU (Nephelometric Turbidity Units) Es una opalescencia que le confieren al agua los sólidos suspendidos de tamaño coloidal. Se mide en NTU. El Decreto 475 de 1998 del Ministerio de Salud establece que para agua potable la turbidez deberá ser inferior a 5 NTU. 

          .row.justify-content-center.align-items-center(titulo="Hidrocarburos")
            .col-md-12.col-lg-12.mb-4.mb-md-0
              p.mb-0 Para vertimientos y escorrentías de estaciones de Servicio, se deberán determinar además los siguientes parámetros: contenido de hidrocarburos. (Grasas, Aceites, Combustibles como Gasolina y ACPM). 

          .row.justify-content-center.align-items-center(titulo="Metales pesados totales")
            .col-md-12.col-lg-12.mb-4.mb-md-0
              p.mb-0 Ejemplo de estos son el Cobre, Zinc, Cadmio, Mercurio y Plomo. Aparecen en el agua como desechos especiales de ciertos tipos de industria y también como productos de corrosión de las partes electrónicas de los automóviles. Sus niveles están regulados por las diversas agencias dependiendo del tipo de efluente. 









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
