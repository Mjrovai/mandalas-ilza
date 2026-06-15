# Projeto Mandalas — Ilza Abad Barbosa Rovai

Site estático SPA publicado em **mjrovai.github.io/mandalas-ilza** (repo `mjrovai/mandalas-ilza`, branch `main`).

## Estrutura do repositório

```
site/
├── index.html          # SPA única — não editar a estrutura de views
├── js/
│   ├── data.js         # ÚNICO arquivo a editar ao adicionar mandalas
│   └── app.js          # Lógica SPA (roteamento hash, galeria, detalhe)
├── css/
│   └── style.css       # Estilos — paleta dourada + fundo creme
├── SETE/               # Mandalas de 7 divisões
├── DEZ/                # Mandalas de 10 divisões
├── ONZE/               # Mandalas de 11 divisões
├── DOZE/               # Mandalas de 12 divisões
└── .nojekyll           # Impede Jekyll no GitHub Pages
```

## Convenção de imagens (obrigatória)

Cada pasta de mandala contém **exatamente até 3 arquivos**, com nomes fixos:

| Arquivo | Significado |
|---|---|
| `mao.jpg` / `mao.png` | Foto da mandala colorida à mão |
| `illustrator.jpg` / `illustrator.png` | Versão digital (Adobe Illustrator) |
| `pb.jpg` / `pb.png` | Preto e branco — disponível para download/impressão |

- A extensão (jpg ou png) vem do arquivo original.
- Se uma versão não existe, o campo correspondente em `data.js` é `null`.
- **Nunca** deixar outros arquivos de imagem nessas pastas.

## Como adicionar uma nova mandala

1. Criar pasta: `site/GRUPO/NomeDaPasta/` (ex: `SEIS/MandalaSEIS_06_20/`)
2. Colocar as imagens renomeadas: `mao.ext`, `illustrator.ext`, `pb.ext`
3. Adicionar bloco em `js/data.js`:

```js
{
  id: 'SEIS-06-20', divisoes: 6, data: '20/06',
  mao:         'SEIS/MandalaSEIS_06_20/mao.jpg',   // ou null
  illustrator: 'SEIS/MandalaSEIS_06_20/illustrator.png',
  pb:          'SEIS/MandalaSEIS_06_20/pb.png'
}
```

4. `git add` + `git commit` + `git push`

## Grupos de divisões

| Divisões | Nome exibido | Pasta | Status |
|---|---|---|---|
| 6 | Seis | `SEIS/` | aguardando mandalas |
| 7 | Sete | `SETE/` | 1 mandala |
| 8 | Oito | `OITO/` | aguardando mandalas |
| 9 | Nove | `NOVE/` | aguardando mandalas |
| 10 | Dez | `DEZ/` | 13 mandalas |
| 11 | Onze | `ONZE/` | 3 mandalas |
| 12 | Doze | `DOZE/` | 3 mandalas |

Grupos sem mandalas ficam **automaticamente ocultos** na galeria.

## Paleta visual

```
--gold:     #B8956A   (dourado — cor de destaque)
--gold-lt:  #D4B88C
--gold-dk:  #8E7340
--bg:       #FAFAF7   (creme — fundo principal)
--bg-warm:  #F5F3EE
```

Fontes: **Playfair Display** (títulos), **Inter** (corpo), **IBM Plex Mono** (datas/labels) — carregadas via Google Fonts no `index.html`.

## Roteamento SPA

| URL hash | View exibida |
|---|---|
| `#gallery` ou vazio | Galeria com todos os grupos |
| `#mandala=DEZ-04-10` | Detalhe da mandala com esse id |
| `#about` | Página sobre a artista |

## Classificação das versões (referência)

Ao receber novas imagens sem classificação, o critério é:
- **pb**: saturação HSV média < 8 → preto e branco
- **mao**: arquivo `IMG_*.jpg` (foto de câmera) ou saturação alta com alta variância (σ > 62)
- **illustrator**: imagem colorida com cores planas e baixa variância (σ ≤ 62)

Casos ambíguos devem ser confirmados visualmente pelo usuário.
