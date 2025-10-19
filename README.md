# Task Management Angular App

Un'applicazione moderna di gestione task personali sviluppata con Angular, che permette di assegnare e organizzare attività per diversi utenti.

## 📋 Descrizione del Progetto

Questa applicazione web permette di gestire task per utenti multipli in modo semplice ed intuitivo. Ogni utente può avere una lista personalizzata di attività, che possono essere visualizzate, create e completate dinamicamente.

### Caratteristiche principali:

- **Gestione multi-utente**: Seleziona un utente per visualizzare e gestire i suoi task
- **CRUD completo**: Crea nuovi task, visualizza quelli esistenti e completali
- **Interfaccia intuitiva**: Design pulito e user-friendly con componenti riutilizzabili
- **Persistenza dati**: I task vengono salvati nel localStorage del browser
- **Architettura modulare**: Componenti standalone Angular per massima flessibilità

## 🚀 Tecnologie Utilizzate

- **[Angular 20.0.0](https://angular.dev/)** - Framework frontend principale
- **TypeScript 5.8.2** - Linguaggio di programmazione type-safe
- **RxJS 7.8.0** - Gestione della programmazione reattiva
- **Angular Router** - Navigazione (se necessaria)
- **Angular Forms** - Gestione form e validazione
- **Standalone Components** - Architettura moderna senza NgModules
- **Dependency Injection** - Pattern per servizi condivisi (TasksService)

### Struttura del Progetto

```
src/
├── app/
│   ├── header/         # Componente intestazione
│   ├── user/           # Componente per la visualizzazione utente
│   ├── tasks/          # Componente principale gestione task
│   │   ├── task/       # Singolo task
│   │   ├── new-task/   # Form creazione task
│   │   └── tasks.service.ts  # Servizio per la logica dei task
│   └── shared/         # Componenti condivisi (card, ecc.)
└── public/             # Asset statici
```

## 📦 Requisiti

Prima di iniziare, assicurati di avere installato:

- **Node.js** (versione 18.x o superiore)
- **npm** (versione 9.x o superiore)
- **Angular CLI** (versione 20.0.5)

Per installare Angular CLI globalmente:

```bash
npm install -g @angular/cli@20.0.5
```

## 🛠️ Installazione

1. Clona il repository:

```bash
git clone https://github.com/Giordi9902/todo-list-angular-app.git
cd todo-list-angular-app
```

2. Installa le dipendenze:

```bash
npm install
```

## 💻 Development Server

Per avviare un server di sviluppo locale:

```bash
npm start
```

oppure

```bash
ng serve
```

L'applicazione sarà disponibile all'indirizzo `http://localhost:4200/`. Il server si riavvierà automaticamente ad ogni modifica dei file sorgente.

## 🏗️ Build

Per compilare il progetto per la produzione:

```bash
npm run build
```

oppure

```bash
ng build
```

Gli artifact della build saranno salvati nella directory `dist/`. La build di produzione ottimizza automaticamente l'applicazione per performance e velocità.

### Build in modalità watch

Per compilare in modalità watch durante lo sviluppo:

```bash
npm run watch
```

## 🧪 Test

Per eseguire i test unitari con [Karma](https://karma-runner.github.io):

```bash
npm test
```

oppure

```bash
ng test
```

## 📝 Code Scaffolding

Angular CLI include strumenti potenti per la generazione di codice. Per generare un nuovo componente:

```bash
ng generate component nome-componente
```

Per visualizzare la lista completa degli schematici disponibili (componenti, direttive, pipe, servizi, ecc.):

```bash
ng generate --help
```

## 🎯 Scopo del Progetto

Questo progetto è stato sviluppato come applicazione didattica per apprendere e dimostrare:

- L'utilizzo di **Angular standalone components**
- **Dependency injection** e servizi condivisi
- **Component communication** (Input/Output)
- Gestione dello stato locale con servizi
- **Template-driven forms** e **reactive forms**
- Best practices di Angular moderne
- Architettura scalabile e manutenibile

## 📚 Risorse Aggiuntive

- [Documentazione Angular](https://angular.dev)
- [Angular CLI Reference](https://angular.dev/tools/cli)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev/)

## 📄 Licenza

Questo progetto è stato generato con [Angular CLI](https://github.com/angular/angular-cli) versione 20.0.5.
