/* Mandalas de Ilza Abad Barbosa Rovai
 *
 * Para adicionar uma nova mandala, copie um bloco e preencha:
 *   id          — identificador único, ex: 'DEZ-04-09'
 *   divisoes    — número de divisões geométricas (6 a 12)
 *   data        — data no formato 'DD/MM'
 *   mao         — caminho da imagem colorida à mão  (ou null)
 *   illustrator — caminho da imagem colorida no Illustrator (ou null)
 *   pb          — caminho da imagem preto e branco para download (ou null)
 *
 * Caminhos são relativos à raiz do site (sempre: PASTA/Subpasta/mao.ext etc.)
 */

const MANDALAS = [

  // ══════════════════════════════════════════
  // SETE — 7 divisões
  // ══════════════════════════════════════════
  {
    id: 'SETE-05-31', divisoes: 7, data: '31/05',
    mao:         'SETE/MandalaSETE_05_31/mao.png',
    illustrator: 'SETE/MandalaSETE_05_31/illustrator.png',
    pb:          'SETE/MandalaSETE_05_31/pb.png'
  },

  // ══════════════════════════════════════════
  // DEZ — 10 divisões
  // ══════════════════════════════════════════
  {
    id: 'DEZ-04-01', divisoes: 10, data: '01/04',
    mao:         'DEZ/MandalaDEZ_04_01/mao.jpg',
    illustrator: 'DEZ/MandalaDEZ_04_01/illustrator.png',
    pb:          null
  },
  {
    id: 'DEZ-04-02', divisoes: 10, data: '02/04',
    mao:         'DEZ/MandalaDEZ_04_02/mao.jpg',
    illustrator: 'DEZ/MandalaDEZ_04_02/illustrator.png',
    pb:          'DEZ/MandalaDEZ_04_02/pb.png'
  },
  {
    id: 'DEZ-04-10', divisoes: 10, data: '10/04',
    mao:         'DEZ/MandalaDEZ_04_10/mao.jpg',
    illustrator: 'DEZ/MandalaDEZ_04_10/illustrator.png',
    pb:          'DEZ/MandalaDEZ_04_10/pb.png'
  },
  {
    id: 'DEZ-04-11', divisoes: 10, data: '11/04',
    mao:         'DEZ/MandalaDEZ_04_11/mao.jpg',
    illustrator: 'DEZ/MandalaDEZ_04_11/illustrator.png',
    pb:          'DEZ/MandalaDEZ_04_11/pb.png'
  },
  {
    id: 'DEZ-04-13', divisoes: 10, data: '13/04',
    mao:         'DEZ/MandalaDEZ_04_13/mao.png',
    illustrator: 'DEZ/MandalaDEZ_04_13/illustrator.jpg',
    pb:          'DEZ/MandalaDEZ_04_13/pb.png'
  },
  {
    id: 'DEZ-04-18', divisoes: 10, data: '18/04',
    mao:         null,
    illustrator: 'DEZ/MandalaDEZ_04_18/illustrator.png',
    pb:          'DEZ/MandalaDEZ_04_18/pb.png'
  },
  {
    id: 'DEZ-04-22', divisoes: 10, data: '22/04',
    mao:         'DEZ/MandalaDEZ_04_22/mao.png',
    illustrator: 'DEZ/MandalaDEZ_04_22/illustrator.png',
    pb:          'DEZ/MandalaDEZ_04_22/pb.png'
  },
  {
    id: 'DEZ-04-22-B', divisoes: 10, data: '22/04',
    mao:         'DEZ/MandalaDEZ_04_22_B/mao.png',
    illustrator: 'DEZ/MandalaDEZ_04_22_B/illustrator.png',
    pb:          'DEZ/MandalaDEZ_04_22_B/pb.png'
  },
  {
    id: 'DEZ-04-23', divisoes: 10, data: '23/04',
    mao:         null,
    illustrator: 'DEZ/MandalaDEZ_04_23/illustrator.jpg',
    pb:          null
  },
  {
    id: 'DEZ-04-24', divisoes: 10, data: '24/04',
    mao:         null,
    illustrator: 'DEZ/MandalaDEZ_04_24/illustrator.png',
    pb:          'DEZ/MandalaDEZ_04_24/pb.png'
  },
  {
    id: 'DEZ-04-28', divisoes: 10, data: '28/04',
    mao:         null,
    illustrator: 'DEZ/MandalaDEZ_04_28/illustrator.png',
    pb:          'DEZ/MandalaDEZ_04_28/pb.png'
  },
  {
    id: 'DEZ-04-29', divisoes: 10, data: '29/04',
    mao:         null,
    illustrator: 'DEZ/MandalaDEZ_04_29/illustrator.png',
    pb:          'DEZ/MandalaDEZ_04_29/pb.png'
  },
  {
    id: 'DEZ-06-02', divisoes: 10, data: '02/06',
    mao:         null,
    illustrator: 'DEZ/MandalaDEZ_06_2/illustrator.png',
    pb:          'DEZ/MandalaDEZ_06_2/pb.png'
  },

  // ══════════════════════════════════════════
  // ONZE — 11 divisões
  // ══════════════════════════════════════════
  {
    id: 'ONZE-05-08', divisoes: 11, data: '08/05',
    mao:         'ONZE/MandalaONZE_05_08/mao.png',
    illustrator: 'ONZE/MandalaONZE_05_08/illustrator.png',
    pb:          'ONZE/MandalaONZE_05_08/pb.png'
  },
  {
    id: 'ONZE-05-08-B', divisoes: 11, data: '08/05',
    mao:         'ONZE/MandalaONZE_05_08_B/mao.png',
    illustrator: 'ONZE/MandalaONZE_05_08_B/illustrator.png',
    pb:          'ONZE/MandalaONZE_05_08_B/pb.png'
  },
  {
    id: 'ONZE-05-09', divisoes: 11, data: '09/05',
    mao:         null,
    illustrator: 'ONZE/MandalaONZE_05_09/illustrator.png',
    pb:          'ONZE/MandalaONZE_05_09/pb.png'
  },

  // ══════════════════════════════════════════
  // DOZE — 12 divisões
  // ══════════════════════════════════════════
  {
    id: 'DOZE-05-10', divisoes: 12, data: '10/05',
    mao:         'DOZE/MandalaDOZE_05_10/mao.jpg',
    illustrator: 'DOZE/MandalaDOZE_05_10/illustrator.png',
    pb:          'DOZE/MandalaDOZE_05_10/pb.png'
  },
  {
    id: 'DOZE-05-24', divisoes: 12, data: '24/05',
    mao:         null,
    illustrator: 'DOZE/MandalaDOZE_05_24/illustrator.png',
    pb:          'DOZE/MandalaDOZE_05_24/pb.png'
  },
  {
    id: 'DOZE-06-04', divisoes: 12, data: '04/06',
    mao:         'DOZE/MandalaDOZE_06_04_B/mao.png',
    illustrator: 'DOZE/MandalaDOZE_06_04_B/illustrator.png',
    pb:          'DOZE/MandalaDOZE_06_04_B/pb.png'
  }

];
