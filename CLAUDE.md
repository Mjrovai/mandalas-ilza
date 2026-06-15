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

---

## ⚠️ PRÓXIMA SESSÃO — Migração pendente

A convenção de nomes está sendo reformulada. **Não adicionar novas mandalas antes de concluir esta migração.**

### Nova convenção (em preparação)

Cada pasta de mandala terá até **4 arquivos**, todos com o nome da pasta como prefixo:

| Arquivo | Significado | Tamanho alvo |
|---|---|---|
| `{Pasta}_mao.jpg` | Foto colorida à mão | 1200×1200 px JPG |
| `{Pasta}_vetor.png` | Versão digital (Illustrator) | 1200×1200 px PNG |
| `{Pasta}_pb.png` | P&B para exibição no site | 1200×1200 px PNG |
| `{Pasta}_pb_print.pdf` | P&B vetorial para impressão A4 | PDF A4 do Illustrator |

**Exemplo** — pasta `MandalaDEZ_04_11`:
```
MandalaDEZ_04_11_mao.jpg
MandalaDEZ_04_11_vetor.png
MandalaDEZ_04_11_pb.png
MandalaDEZ_04_11_pb_print.pdf
```

### O que fazer na próxima sessão

1. Confirmar que todas as pastas já foram renomeadas pela Ilza
2. Atualizar `js/data.js`: trocar campos `illustrator` → `vetor`, adicionar `pb_print`
3. Atualizar `js/app.js`: suporte ao `pb_print` (botão de download aponta para o PDF)
4. Atualizar `css/style.css` se necessário
5. Git commit + push

---

## Convenção atual (em vigor até a migração)

Cada pasta contém até 3 arquivos com nomes fixos:

| Arquivo | Significado |
|---|---|
| `mao.jpg` / `mao.png` | Foto da mandala colorida à mão |
| `illustrator.jpg` / `illustrator.png` | Versão digital (Adobe Illustrator) |
| `pb.png` | Preto e branco para download/impressão |

## Como adicionar uma nova mandala (convenção atual)

1. Criar pasta: `site/GRUPO/NomeDaPasta/`
2. Colocar as imagens renomeadas: `mao.ext`, `illustrator.ext`, `pb.ext`
3. Adicionar bloco em `js/data.js`:

```js
{
  id: 'SEIS-06-20', divisoes: 6, data: '20/06',
  mao:         'SEIS/MandalaSEIS_06_20/mao.jpg',
  illustrator: 'SEIS/MandalaSEIS_06_20/illustrator.png',
  pb:          'SEIS/MandalaSEIS_06_20/pb.png'
}
```

4. `git add` + `git commit` + `git push`

---

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
- **vetor/illustrator**: imagem colorida com cores planas e baixa variância (σ ≤ 62)

Casos ambíguos devem ser confirmados visualmente pelo usuário.
