# 🚀 Landing Page Kit

Un kit completo di componenti HTML/CSS/JS per creare landing page professionali in pochi minuti. Perfetto per bootcamp, progetti personali e prototipazione rapida.

## 📋 Indice

- [Caratteristiche](#caratteristiche)
- [Struttura del Progetto](#struttura-del-progetto)
- [Come Iniziare](#come-iniziare)
- [Componenti Disponibili](#componenti-disponibili)
- [Template Pronti](#template-pronti)
- [Personalizzazione](#personalizzazione)
- [Best Practices](#best-practices)
- [FAQ](#faq)

## ✨ Caratteristiche

- **100% Responsive**: Funziona perfettamente su desktop, tablet e mobile
- **Zero Dipendenze**: HTML, CSS e JavaScript puro - nessun framework richiesto
- **Componenti Modulari**: Riutilizza e combina componenti a piacimento
- **Facilmente Personalizzabile**: Variabili CSS per modificare colori, font e spaziature
- **Accessibile**: Codice semantico e ottimizzato per SEO
- **Pronto all'Uso**: 3 template completi già configurati

## 📁 Struttura del Progetto

```
vento-bootcamp/
├── css/
│   ├── variables.css      # Variabili CSS (colori, font, spacing)
│   ├── main.css          # Stili base e utility classes
│   └── components.css    # Stili specifici dei componenti
├── js/
│   └── main.js          # JavaScript per interattività
├── components/
│   ├── navbar.html      # Barra di navigazione
│   ├── hero.html        # Sezione hero principale
│   ├── features.html    # Griglia delle caratteristiche
│   ├── testimonials.html # Sezione testimonianze
│   ├── pricing.html     # Tabelle prezzi
│   ├── contact.html     # Form di contatto
│   ├── cta.html         # Call-to-action
│   └── footer.html      # Footer
├── templates/
│   ├── product-landing.html  # Landing page prodotto (completa)
│   ├── service-landing.html  # Landing page servizio
│   └── event-landing.html    # Landing page evento
├── assets/
│   └── images/          # Cartella per le tue immagini
└── README.md           # Questa documentazione
```

## 🚀 Come Iniziare

### Metodo 1: Usa un Template Pronto

1. Apri uno dei template nella cartella `templates/`
2. Apri il file HTML con il tuo browser
3. Personalizza i contenuti secondo le tue esigenze
4. Carica su un hosting (Netlify, Vercel, GitHub Pages, ecc.)

### Metodo 2: Crea la Tua Landing Page

1. Crea un nuovo file HTML nella root del progetto
2. Includi i file CSS nell'head:

```html
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>La Tua Landing Page</title>

  <!-- CSS -->
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/components.css">
</head>
<body>
  <!-- I tuoi componenti qui -->

  <!-- JavaScript -->
  <script src="js/main.js"></script>
</body>
</html>
```

3. Copia e incolla i componenti dalla cartella `components/`
4. Personalizza i contenuti

## 🧩 Componenti Disponibili

### 1. Navbar (Barra di Navigazione)

**File**: `components/navbar.html`

Barra di navigazione responsive con:
- Logo personalizzabile
- Menu di navigazione
- Pulsante CTA
- Menu hamburger per mobile
- Effetto scroll

**Come usare**:
```html
<!-- Copia il contenuto di components/navbar.html -->
```

### 2. Hero Section

**File**: `components/hero.html`

Sezione hero principale con:
- Titolo grande e accattivante
- Sottotitolo descrittivo
- Due pulsanti CTA
- Gradient background

**Personalizza**:
- Modifica titolo e sottotitolo
- Cambia i testi dei bottoni
- Aggiungi un'immagine hero se vuoi

### 3. Features (Caratteristiche)

**File**: `components/features.html`

Griglia di caratteristiche con:
- 6 card (modificabile)
- Icone emoji (sostituibili con SVG)
- Layout responsive 3 colonne → 1 colonna su mobile

**Personalizza**:
- Aggiungi o rimuovi feature card
- Sostituisci emoji con icone personalizzate
- Modifica titoli e descrizioni

### 4. Testimonials (Testimonianze)

**File**: `components/testimonials.html`

Sezione testimonianze con:
- Card con citazioni
- Avatar con iniziali
- Nome e ruolo del testimone

**Personalizza**:
- Aggiungi testimonianze reali
- Sostituisci avatar con immagini
- Modifica nomi e ruoli

### 5. Pricing (Prezzi)

**File**: `components/pricing.html`

Tabelle prezzi con:
- 3 piani (Starter, Professional, Enterprise)
- Piano featured evidenziato
- Lista caratteristiche
- Bottoni CTA

**Personalizza**:
- Modifica prezzi e feature
- Aggiungi/rimuovi piani
- Cambia il piano featured

### 6. Contact (Contatto)

**File**: `components/contact.html`

Form di contatto con:
- Validazione lato client
- Campi: nome, email, telefono, oggetto, messaggio
- Stili moderni
- Sistema di notifiche

**Integrazioni disponibili**:
- FormSpree (vedi commenti in `js/main.js`)
- EmailJS
- Netlify Forms
- Il tuo backend personalizzato

### 7. CTA (Call-to-Action)

**File**: `components/cta.html`

Sezione CTA con:
- Gradient background
- Titolo e testo
- Due bottoni CTA
- Design accattivante

### 8. Footer

**File**: `components/footer.html`

Footer completo con:
- 5 colonne di link
- Informazioni azienda
- Copyright
- Struttura responsive

## 📄 Template Pronti

### 1. Product Landing (`product-landing.html`)

**Quando usarlo**: Per lanciare un prodotto SaaS, app o servizio digitale

**Include**:
- Tutti i componenti (Navbar, Hero, Features, Testimonials, Pricing, CTA, Contact, Footer)
- Layout completo e bilanciato
- Focus su conversione

### 2. Service Landing (`service-landing.html`)

**Quando usarlo**: Per promuovere servizi professionali, consulenze, agenzie

**Include**:
- Layout focalizzato sui servizi
- Sezione clienti soddisfatti
- Form di richiesta preventivo
- Meno enfasi sul pricing, più sul valore

### 3. Event Landing (`event-landing.html`)

**Quando usarlo**: Per promuovere eventi, conferenze, workshop

**Include**:
- Informazioni evento (data, luogo)
- Statistiche evento
- Sezione speaker
- Biglietti/Ticket
- Countdown e urgency

## 🎨 Personalizzazione

### Colori

Modifica i colori in `css/variables.css`:

```css
:root {
  --primary-color: #2563eb;    /* Colore primario */
  --secondary-color: #7c3aed;  /* Colore secondario */
  --dark: #1f2937;             /* Testo scuro */
  /* ... altri colori */
}
```

### Font

Cambia i font in `css/variables.css`:

```css
:root {
  --font-primary: 'Inter', sans-serif;
  --font-heading: 'Poppins', sans-serif;
}
```

Poi aggiungi i font Google nell'HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@700&display=swap" rel="stylesheet">
```

### Spacing e Dimensioni

Modifica le variabili di spacing in `css/variables.css`:

```css
:root {
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  /* ... altri spacing */
}
```

### Bottoni

Crea nuovi stili di bottoni in `css/main.css`:

```css
.btn-custom {
  background-color: #your-color;
  color: white;
}
```

## 💡 Best Practices

### 1. Performance

- **Ottimizza le immagini**: Usa WebP quando possibile, comprimi le immagini
- **Lazy loading**: Aggiungi `loading="lazy"` alle immagini
- **Minifica CSS/JS**: Prima di andare in produzione

### 2. SEO

- **Meta tags**: Aggiungi sempre title, description, og:tags
- **Heading hierarchy**: Usa H1, H2, H3 correttamente
- **Alt text**: Descrivi tutte le immagini

Esempio:

```html
<head>
  <title>Il Tuo Prodotto - Descrizione Breve</title>
  <meta name="description" content="Descrizione completa del tuo prodotto o servizio">

  <!-- Open Graph per social media -->
  <meta property="og:title" content="Il Tuo Prodotto">
  <meta property="og:description" content="Descrizione del prodotto">
  <meta property="og:image" content="url-della-tua-immagine.jpg">
</head>
```

### 3. Accessibilità

- Usa tag semantici (`<nav>`, `<section>`, `<footer>`)
- Aggiungi `aria-label` dove necessario
- Mantieni un buon contrasto colori
- Testa con screen reader

### 4. Responsive Design

- Testa su diversi dispositivi
- Usa le DevTools di Chrome per simulare mobile
- Verifica che tutti i bottoni siano cliccabili facilmente su mobile

## 🔧 Integrazioni Comuni

### Form di Contatto con FormSpree

1. Vai su [formspree.io](https://formspree.io) e crea un account
2. Crea un nuovo form e ottieni il tuo form ID
3. In `js/main.js`, decommenta il codice FormSpree e inserisci il tuo ID:

```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

### Analytics con Google Analytics

Aggiungi prima del tag `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Deploy

#### Netlify (Consigliato)

1. Crea account su [netlify.com](https://netlify.com)
2. Drag & drop la cartella del progetto
3. Il tuo sito è live!

#### Vercel

1. Installa Vercel CLI: `npm i -g vercel`
2. Nella cartella del progetto: `vercel`
3. Segui le istruzioni

#### GitHub Pages

1. Crea repository su GitHub
2. Carica i file
3. Vai in Settings > Pages
4. Seleziona il branch e salva

## ❓ FAQ

### Posso usare questo kit per progetti commerciali?

Sì, il kit è libero da usare per qualsiasi scopo.

### Come aggiungo icone invece delle emoji?

Puoi usare:
- [Font Awesome](https://fontawesome.com)
- [Heroicons](https://heroicons.com)
- [Lucide Icons](https://lucide.dev)

Esempio con Font Awesome:

```html
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>

<!-- Sostituisci l'emoji con -->
<div class="feature-icon">
  <i class="fa-solid fa-rocket"></i>
</div>
```

### Come cambio il gradiente dell'hero?

In `css/components.css`, modifica:

```css
.hero {
  background: linear-gradient(135deg, #tuo-colore-1 0%, #tuo-colore-2 100%);
}
```

Generatori di gradienti:
- [cssgradient.io](https://cssgradient.io)
- [uigradients.com](https://uigradients.com)

### Posso usare Bootstrap o Tailwind insieme?

Puoi, ma non è necessario. Questo kit è completo e aggiungere framework potrebbe creare conflitti. Se vuoi usare Tailwind, è meglio ripartire da zero con Tailwind.

### Come faccio ad aggiungere animazioni?

Il kit include già animazioni base. Per animazioni avanzate, puoi usare:

- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- [GSAP](https://greensock.com/gsap/)
- CSS Animations personalizzate

### Il form di contatto funziona?

Il form include la validazione client-side e una simulazione di invio. Per farlo funzionare davvero, devi integrarlo con:
- FormSpree (più facile)
- EmailJS
- Il tuo backend
- Netlify Forms (se usi Netlify)

Vedi la sezione "Integrazioni Comuni" per i dettagli.

## 🎓 Consigli per il Bootcamp

### Workflow Consigliato

1. **Giorno 1**: Familiarizza con i componenti, prova i template
2. **Giorno 2**: Personalizza un template per il tuo progetto
3. **Giorno 3**: Crea una landing page da zero combinando componenti
4. **Giorno 4**: Aggiungi contenuti reali e ottimizza
5. **Giorno 5**: Deploy e condividi!

### Progetti Pratici da Provare

1. **Landing page per la tua startup idea**
2. **Portfolio personale** (adatta i componenti)
3. **Landing page per un evento del bootcamp**
4. **Pagina di coming soon** per un progetto futuro

### Esercizi di Personalizzazione

1. Cambia completamente lo schema colori
2. Aggiungi una nuova sezione (es: FAQ, Team, Gallery)
3. Integra un video nella hero section
4. Crea un tema dark mode
5. Aggiungi animazioni personalizzate

## 📚 Risorse Aggiuntive

- [MDN Web Docs](https://developer.mozilla.org) - Documentazione HTML/CSS/JS
- [CSS-Tricks](https://css-tricks.com) - Tutorial e guide CSS
- [Can I Use](https://caniuse.com) - Compatibilità browser
- [Coolors](https://coolors.co) - Generatore palette colori
- [Unsplash](https://unsplash.com) - Immagini gratuite

## 🤝 Contribuire

Hai miglioramenti o nuovi componenti da aggiungere? Sentiti libero di:
1. Forkare il progetto
2. Creare nuovi componenti
3. Condividere con la community del bootcamp

## 📝 Note Finali

Questo kit è stato creato per essere **semplice, pratico e veloce da usare**. Non è pensato per essere perfetto, ma per darti una base solida da cui partire.

Durante il bootcamp avrai poco tempo e molte cose da imparare. Questo kit ti permette di avere landing page professionali senza perdere giorni a scrivere CSS da zero.

**Buon coding e buon bootcamp!** 🚀

---

Creato con ❤️ per il Vento Bootcamp | 2024
