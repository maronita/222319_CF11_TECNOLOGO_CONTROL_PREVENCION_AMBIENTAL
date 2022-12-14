export default {
  global: {
    componenteFormativo: 'Evaluación de la ciberseguridad en la organización',
    descripcionCurso:
      'El componente aborda conceptos clave para la generación de métricas de seguridad: el <i>Testing</i>, y su propósito en la seguridad de la información, el SIEM, una forma de hacer gestión para prevenir problemas de seguridad, el SOC, sitio para centralizar la operación de seguridad de los sistemas computacionales, y por último el concepto de recopilación de información para el entorno de seguridad informática.',
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.svg'),
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/images/header/candado.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/images/header/punto_1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/images/header/punto_2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/images/header/circle.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/images/header/circle.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Métodos de métricas e indicadores de monitoreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<i>Testing</i> y monitoreo de la seguridad digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Características',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Software',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Fundamentos de SIEM - <i>Security Information and Event Management</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Características',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Aplicación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Fundamentos de SOC - <i>Security Operation Center</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Objetivos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Alcance',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Técnicas de recopilación de información (<i>Information gathering</i>)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Tipos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Características',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Aplicación',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Johnson, L. (2019). Security controls evaluation, testing, and assessment handbook. Academic Press.',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2010). Guide for assessing the security controls in federal information systems and organizations  U.S. Department of Commerce.',
    },
    {
      referencia:
        '<em>Harpersbazaar</em>. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx.',
      link: 'https://www.oracle.com/es/database/security/que-es-un-soc.html',
    },
  ],
  glosario: [
    {
      termino: 'AWS',
      significado: 'Nube de Amazon.',
    },
    {
      termino: 'AZURE',
      significado: 'Nube de Microsoft.',
    },
    {
      termino: 'DOS',
      significado: 'Ataque de negación de servicio.',
    },
    {
      termino: 'SCI',
      significado: 'Sistema de control interno.',
    },
    {
      termino: 'SCD',
      significado: 'Sistema de control distribuido..',
    },
    {
      termino: 'ACL',
      significado: 'Listas de control de acceso.',
    },
    {
      termino: 'AAA',
      significado: 'Autenticación, autorización y contabilidad.',
    },
    {
      termino: 'IDS',
      significado: 'Sistemas de detección de intrusos.',
    },
    {
      termino: 'Sistemas ERP',
      significado: 'Estaciones de trabajo de usuarios finales.',
    },
    {
      termino: 'PLC',
      significado: 'Controlador lógico programable.',
    },
    {
      termino: 'DNS',
      significado: 'Protocolo de sistema de nombres de dominio.',
    },
    {
      termino: 'DHCP',
      significado: 'Protocolo de configuración dinámica de host.',
    },
    {
      termino: 'UI',
      significado: 'Interfaz de usuario.',
    },
    {
      termino: 'Dockerfile',
      significado: 'Archivo para configurar contenedores de Docker.',
    },
  ],
  complementario: [
    {
      tema: 'Testing y monitoreo de la seguridad digital',
      referencia:
        'Mo, Y.  Hyun-Jin, T., Brancik, K., Dickinson, D., Lee, H., Perrig, A. and Sinopoli, B.  Cyber–Physical Security of a Smart Grid Infrastructure.  Proceedings of the IEEE, 100 (1), 195-209. ',
      tipo: 'Artículo',
      link:
        'https://www.researchgate.net/profile/Yilin-Mo/publication/224257991_Cyber-Physical_Security_of_a_Smart_Grid_Infrastructure/links/004635395d2f66a584000000/Cyber-Physical-Security-of-a-Smart-Grid-Infrastructure.pdf ',
    },
    {
      tema: 'Técnicas de recopilación de información',
      referencia:
        'Owasp Foundation. (2021). Vulnerability scanning tools. Owasp.',
      tipo: 'Página Web',
      link: 'https://owasp.org/www-community/Vulnerability_Scanning_Tools',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de Diseño Instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Joaquín Fernando Sánchez',
        cargo: 'Experto temático',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Maribel Avellaneda Nieves',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología. - Regional Distrito Capital ',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología. - Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Angelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Mayra Alejandra Alvarez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
