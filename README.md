# Portfolio

Sito portfolio personale di David Dorobantu — costruito con **React + Vite**, dark theme, bilingue (EN/IT) e completamente responsive.

## Comandi

```bash
npm install      # installa le dipendenze
npm run dev      # server di sviluppo (http://localhost:5173)
npm run build    # build di produzione in /dist
npm run preview  # anteprima della build
```

## Personalizzazione

Tutti i contenuti modificabili sono centralizzati in pochi file:

| File | Contenuto |
| --- | --- |
| `src/data/profile.js` | Nome, email, GitHub, LinkedIn |
| `src/data/projects.js` | I progetti in evidenza (titolo, descrizione EN/IT, tag, link GitHub/demo, screenshot) |
| `src/data/skills.js` | Linguaggi, database, framework |
| `src/i18n.js` | Tutti i testi del sito in inglese e italiano |

### Aggiungere uno screenshot a un progetto

1. Metti l'immagine in `public/projects/` (es. `public/projects/mio-progetto.png`)
2. In `src/data/projects.js` imposta `image: '/projects/mio-progetto.png'`

Se `image` è vuoto, la card mostra una cover "terminale" generata automaticamente.

### Lingua

Il sito parte in italiano o inglese in base alla lingua del browser del visitatore; il toggle EN/IT nella navbar salva la preferenza.

## Deploy

Il sito è statico: dopo `npm run build` la cartella `dist/` può essere pubblicata su GitHub Pages, Vercel o Netlify (per Vercel/Netlify basta collegare la repo, rilevano Vite automaticamente).
