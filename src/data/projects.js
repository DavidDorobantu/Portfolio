// ─────────────────────────────────────────────────────────────
// My featured projects. Each card shows a "Code" button (github)
// and a "Live demo" button (demo) when set; the cover and title
// link to the demo if present, otherwise to the repo.
//
//  - title:        project name
//  - description:  { en, it } short description shown on the card
//  - tags:         tech stack badges
//  - github:       repository URL ('' to hide the Code button)
//  - demo:         live deploy URL ('' to hide the Live demo button)
//  - image:        screenshot placed in /public/projects, referenced
//                  from the root (e.g. '/projects/name.png');
//                  leave '' to show an auto-generated cover
// ─────────────────────────────────────────────────────────────
export const projects = [
  {
    title: 'TrentoParking',
    description: {
      en: 'A full-stack web application built with React and Express. TrentoParking is a web platform for managing and booking private parking spots in the city of Trento. It allows users to search for available spots on a map, book them by time slot, and complete the payment. Parking spot owners can list their spaces, manage incoming bookings, and communicate with customers via chat.',
      it: "Un'applicazione web full-stack costruita con React ed Express. TrentoParking è una piattaforma web per la gestione e prenotazione di posti auto privati nella città di Trento. Permette agli utenti di cercare posti disponibili sulla mappa, prenotarli per fasce orarie e pagarli. I proprietari di posti auto possono pubblicare i propri spazi, gestire le prenotazioni ricevute e comunicare con i clienti tramite chat.",
    },
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Gonzo04/TrentoParking',
    demo: 'https://trentoparking-frontend.onrender.com/',
    image: '/projects/TrentoParking.png',
  },
  {
    title: 'IoT Cocktail Maker',
    description: {
      en: 'IoT Cocktail Maker is an automated cocktail dispenser controlled entirely by voice commands through Amazon Alexa. By simply saying the name of a cocktail, the system activates a sequence of peristaltic pumps that deliver each ingredient in the exact measured dose directly into the glass — hands free. The firmware, running on an Arduino UNO R4 WiFi, implements an asynchronous Finite State Machine driven by millis() to keep the cloud connection alive throughout the entire dispensing cycle.',
      it: "Il IoT Cocktail Maker è una macchina automatica per cocktail controllata tramite comandi vocali ad Amazon Alexa. Pronunciando il nome del cocktail desiderato, il sistema attiva una sequenza di pompe peristaltiche che erogano gli ingredienti nelle dosi esatte direttamente nel bicchiere — senza toccare nulla. Il firmware, sviluppato su Arduino UNO R4 WiFi, implementa una Finite State Machine asincrona basata su millis() che garantisce la connessione cloud sempre attiva durante l'intera erogazione.",
    },
    tags: ['C', 'C++', 'Arduino'],
    github: 'https://github.com/DavidDorobantu/cocktail-maker',
    demo: '',
    image: '/projects/IoT_drink_maker.jpg',
  },
  {
    title: 'E-commerce fulfillment center',
    description: {
      en: 'Fulfillment Center is a C and Bash simulation of an automated e-commerce fulfillment center (Amazon-warehouse style). A central, heavily multi-threaded Warehouse process manages the inventory and processes customer orders through a three-stage pipeline — Receive → Pick → Pack → Ship — using dedicated thread pools (Receivers, Pickers, Packers) and two bounded buffers synchronized with mutexes and condition variables. In parallel, external Supplier processes periodically restock the inventory, communicating via IPC (named pipes/FIFOs). Simple Bash scripts let clients place orders, managers monitor and control the system, and analysts inspect the logs.',
      it: "Fulfillment Center è una simulazione in C e Bash di un centro di smistamento e-commerce automatizzato (in stile magazzino Amazon). Un processo Warehouse centrale, fortemente multi-thread, gestisce l'inventario ed elabora gli ordini dei clienti attraverso una pipeline a tre stadi — Ricezione → Prelievo → Imballaggio → Spedizione — usando pool di thread dedicati (Receiver, Picker, Packer) e due code limitate (bounded buffer) sincronizzate con mutex e variabili di condizione. In parallelo, processi Supplier esterni riforniscono periodicamente le scorte comunicando via IPC (named pipe/FIFO). Semplici script Bash permettono ai clienti di inviare ordini, ai gestori di monitorare e controllare il sistema e agli analisti di consultare i log.",
    },
    tags: ['C', 'Bash'],
    github: 'https://github.com/DavidDorobantu/OS-project',
    demo: '',
    image: '/projects/Warehouse.jpg',
  },
]
