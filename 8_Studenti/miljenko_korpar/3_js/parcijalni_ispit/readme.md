# iTunes tražilica — Build upute

## Development build

Za lokalni development pokrenite jednu od sljedećih naredbi:

```shell
npm run build
```

```shell
npm run build:dev
```

Nakon builda, datoteke aplikacije nalaze se u **root direktoriju projekta**. Dovoljno je otvoriti `index.html` u pregledniku ili koristiti lokalni development server.

**Struktura root direktorija projekta:**

```text
<project-root>/
├── build
│   ├── build-prod.js
│   └── generate-index-html.js
├── bundle.js
├── config
│   └── config-provider.js
├── images
│   ├── favicon.ico
│   └── logo.png
├── index.html                   ← generirano
├── index.js
├── index.template.html
├── package.json
├── package-lock.json
├── readme.md
├── src
│   ├── api-client.js
│   ├── app.js
│   ├── mapper.js
│   └── renderer.js
└── style.css
```

---

## Production build

Za production build pokrenite:

```shell
npm run build:prod
```

Ova naredba:
1. Briše sadržaj `public/` direktorija
2. Bundlea i minificira JavaScript pomoću Browserify + UglifyJS u `public/bundle.js`
3. Generira `index.html` s referencom na bundleani script (`<script src="bundle.js">`)
4. Kopira statičke resurse (`style.css`, `images/`) u `public/`

Nakon builda, sve production-ready datoteke nalaze se u **`public/`** direktoriju:

```text
<project-root>/public/
├── index.html        ← generirano
├── bundle.js         ← minificirani i bundleani JS
├── style.css
└── images/
```

Na web server potrebno je deployati sadržaj `public/` direktorija.

---

## Sažetak

| Naredba | Način rada | Lokacija datoteka aplikacije |
|---|---|---|
| `npm run build` | Development | `<project-root>/` |
| `npm run build:dev` | Development | `<project-root>/` |
| `npm run build:prod` | Production | `<project-root>/public/` |