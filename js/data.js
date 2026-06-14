/**
 * Mandalas de Ilza Abad Barbosa Rovai
 *
 * Para adicionar uma nova mandala, copie um bloco e preencha:
 *   id          — identificador único, ex: 'DEZ-04-09'
 *   divisoes    — número de divisões geométricas (6 a 12)
 *   data        — data no formato 'DD/MM'
 *   mao         — caminho da imagem colorida à mão  (ou null)
 *   illustrator — caminho da imagem colorida no Illustrator (ou null)
 *   pb          — caminho da imagem preto e branco para download (ou null)
 *
 * Caminhos são relativos à raiz do site.
 */

const MANDALAS = [

  // ══════════════════════════════════════════
  // SETE — 7 divisões
  // ══════════════════════════════════════════
  {
    id: 'SETE-05-31',
    divisoes: 7,
    data: '31/05',
    mao:         'SETE/MandalaSETE_05_31/Screenshot 2026-06-07 at 23.01.08.png',
    illustrator: 'SETE/MandalaSETE_05_31/Screenshot 2026-06-07 at 23.01.47.png',
    pb:          'SETE/MandalaSETE_05_31/Screenshot 2026-06-08 at 15.05.07.png'
  },

  // ══════════════════════════════════════════
  // DEZ — 10 divisões
  // ══════════════════════════════════════════
  {
    id: 'DEZ-04-01',
    divisoes: 10,
    data: '01/04',
    mao:         'DEZ/MandalaDEZ_04_01/MandalaDEZ01ABR.jpg',
    illustrator: 'DEZ/MandalaDEZ_04_01/Screenshot 2026-06-11 at 23.25.39.png',
    pb:          null
  },
  {
    id: 'DEZ-04-02',
    divisoes: 10,
    data: '02/04',
    mao:         'DEZ/MandalaDEZ_04_02/MandalaDEZ02ABRIL2.jpg',
    illustrator: 'DEZ/MandalaDEZ_04_02/Screenshot 2026-06-12 at 14.59.47.png',
    pb:          null
  },
  {
    id: 'DEZ-04-10',
    divisoes: 10,
    data: '10/04',
    mao:         'DEZ/MandalaDEZ_04_10/IMG_8130.jpg',
    illustrator: 'DEZ/MandalaDEZ_04_10/Screenshot 2026-06-11 at 17.53.22.png',
    pb:          null
  },
  {
    id: 'DEZ-04-11',
    divisoes: 10,
    data: '11/04',
    mao:         'DEZ/MandalaDEZ_04_11/mandalaDEZ11ABRIL.jpg',
    illustrator: 'DEZ/MandalaDEZ_04_11/Screenshot 2026-06-13 at 00.38.18.png',
    pb:          null
  },
  {
    id: 'DEZ-04-13',
    divisoes: 10,
    data: '13/04',
    mao:         'DEZ/MandalaDEZ_04_13/13ABRIL.png',
    illustrator: 'DEZ/MandalaDEZ_04_13/Screenshot 2026-06-12 at 22.57.25.png',
    pb:          null
  },
  {
    id: 'DEZ-04-18',
    divisoes: 10,
    data: '18/04',
    mao:         null,
    illustrator: 'DEZ/MandalaDEZ_04_18/Screenshot 2026-06-10 at 14.24.34.png',
    pb:          null
  },
  {
    id: 'DEZ-04-22',
    divisoes: 10,
    data: '22/04',
    mao:         null,
    illustrator: 'DEZ/MandalaDEZ_04_22/Screenshot 2026-06-09 at 20.38.42.png',
    pb:          null
  },
  {
    id: 'DEZ-04-22-B',
    divisoes: 10,
    data: '22/04',
    mao:         null,
    illustrator: 'DEZ/MandalaDEZ_04_22_B/Screenshot 2026-06-05 at 14.17.22.png',
    pb:          null
  },
  {
    id: 'DEZ-04-23',
    divisoes: 10,
    data: '23/04',
    mao:         'DEZ/MandalaDEZ_04_23/MandalaDEZ_04_23.jpg',
    illustrator: null,
    pb:          null
  },
  {
    id: 'DEZ-04-24',
    divisoes: 10,
    data: '24/04',
    mao:         null,
    illustrator: 'DEZ/MandalaDEZ_04_24/Screenshot 2026-06-05 at 19.38.55.png',
    pb:          null
  },
  {
    id: 'DEZ-04-28',
    divisoes: 10,
    data: '28/04',
    mao:         null,
    illustrator: 'DEZ/MandalaDEZ_04_28/Screenshot 2026-06-09 at 12.15.50.png',
    pb:          null
  },
  {
    id: 'DEZ-04-29',
    divisoes: 10,
    data: '29/04',
    mao:         null,
    illustrator: 'DEZ/MandalaDEZ_04_29/Screenshot 2026-06-09 at 00.57.01.png',
    pb:          null
  },
  {
    id: 'DEZ-06-02',
    divisoes: 10,
    data: '02/06',
    mao:         null,
    illustrator: 'DEZ/MandalaDEZ_06_2/Screenshot 2026-06-04 at 17.26.23.png',
    pb:          null
  },

  // ══════════════════════════════════════════
  // ONZE — 11 divisões
  // ══════════════════════════════════════════
  {
    id: 'ONZE-05-08',
    divisoes: 11,
    data: '08/05',
    mao:         'ONZE/MandalaONZE_05_08/Screenshot 2026-06-08 at 15.09.26.png',
    illustrator: 'ONZE/MandalaONZE_05_08/Screenshot 2026-06-08 at 21.15.24.png',
    pb:          'ONZE/MandalaONZE_05_08_B/ONZE_08MAIO.png'
  },
  {
    id: 'ONZE-05-08-B',
    divisoes: 11,
    data: '08/05',
    mao:         'ONZE/MandalaONZE_05_08_B/Screenshot 2026-06-05 at 23.38.42.png',
    illustrator: 'ONZE/MandalaONZE_05_08_B/Screenshot 2026-06-05 at 23.44.16.png',
    pb:          null
  },
  {
    id: 'ONZE-05-09',
    divisoes: 11,
    data: '09/05',
    mao:         'ONZE/MandalaONZE_05_09/Screenshot 2026-06-07 at 01.12.39.png',
    illustrator: 'ONZE/MandalaONZE_05_09/Screenshot 2026-06-07 at 01.37.06.png',
    pb:          null
  },

  // ══════════════════════════════════════════
  // DOZE — 12 divisões
  // ══════════════════════════════════════════
  {
    id: 'DOZE-05-10',
    divisoes: 12,
    data: '10/05',
    mao:         'DOZE/MandalaDOZE_05_10/IMG_8119.jpg',
    illustrator: 'DOZE/MandalaDOZE_05_10/Screenshot 2026-06-09 at 21.49.49.png',
    pb:          null
  },
  {
    id: 'DOZE-05-24',
    divisoes: 12,
    data: '24/05',
    mao:         'DOZE/MandalaDOZE_05_24/Screenshot 2026-06-08 at 23.01.39.png',
    illustrator: 'DOZE/MandalaDOZE_05_24/Screenshot 2026-06-08 at 23.04.05.png',
    pb:          null
  },
  {
    id: 'DOZE-06-04',
    divisoes: 12,
    data: '04/06',
    mao:         'DOZE/MandalaDOZE_06_04_B/Screenshot 2026-06-04 at 12.24.17.png',
    illustrator: 'DOZE/MandalaDOZE_06_04_B/Screenshot 2026-06-04 at 12.24.40.png',
    pb:          null
  }

];
