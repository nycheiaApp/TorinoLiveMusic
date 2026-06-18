/**
 * 📝 TORINOLIVE — FILE DATI
 * 
 * ISTRUZIONI:
 * 1. Modifica gli array qui sotto aggiungendo/rimuovendo oggetti.
 * 2. Le date degli eventi DEVONO essere in formato "YYYY-MM-DD" (es: "2026-06-18").
 * 3. I "venueId" negli eventi devono corrispondere a un "id" nei locali.
 * 4. Salva il file e ricarica il browser.
 * 
 * Per le immagini dei locali puoi usare:
 * - Gradienti CSS: 'linear-gradient(135deg, #7B61FF, #FF3CAC)'
 * - URL di immagini: 'https://esempio.com/foto.jpg'
 */

const DATA = {
  venues: [
    {
      id: 'cafe-liberta',
      name: 'Caffè della Libertà',
      district: 'San Salvario',
      address: 'Via Vico 10',
      capacity: '150 pax',
      image: 'linear-gradient(135deg, #7B61FF, #FF3CAC)',
      description: 'Locale storico nel cuore di San Salvario, palco piccolo ma acustica impeccabile. Punto di riferimento per la scena indie torinese.',
      instagram: '@cafeliberita'
    },
    {
      id: 'blank',
      name: 'BLANK',
      district: 'Aurora',
      address: 'Via Ponzio 34',
      capacity: '300 pax',
      image: 'linear-gradient(135deg, #FF3CAC, #D4FF00)',
      description: 'Spazio industriale riconvertito. Suono potente, luci immersive, programmazione elettronica e sperimentale.',
      instagram: '@blank_torino'
    },
    {
      id: 'jazz-club',
      name: 'Jazz Club Torino',
      district: 'Centro',
      address: 'Via San Francesco da Paola 24',
      capacity: '120 pax',
      image: 'linear-gradient(135deg, #D4FF00, #7B61FF)',
      description: 'Atmosfera intima, cocktail curati, programmazione jazz e fusion quotidiana. Palco a forma di U.',
      instagram: '@jazzclubtorino'
    },
    {
      id: 'murazzi',
      name: 'Caffè Murazzi',
      district: 'Vanchiglia',
      address: 'Lungo Po Armando Diaz',
      capacity: '200 pax',
      image: 'linear-gradient(135deg, #FF3CAC, #7B61FF)',
      description: 'Terrazza sul Po. Serate a tema, live acustici e DJ set con vista mozzafiato.',
      instagram: '@caffemurazzi'
    }
    // 📝 AGGIUNGI ALTRI LOCALI QUI
  ],

  events: [
    { id: 1, title: 'Madrilena', date: '2026-06-18', time: '21:30', venueId: 'cafe-liberta', genre: 'Indie', price: '€ 12' },
    { id: 2, title: 'Noise Collective', date: '2026-06-18', time: '22:00', venueId: 'blank', genre: 'Techno', price: '€ 8' },
    { id: 3, title: 'Jazz in Piazza', date: '2026-06-18', time: '20:00', venueId: 'jazz-club', genre: 'Jazz', price: 'Free' },
    { id: 4, title: 'Post-Punk Night', date: '2026-06-18', time: '23:00', venueId: 'murazzi', genre: 'Rock', price: '€ 10' },
    { id: 5, title: 'Synthwave Revival', date: '2026-06-19', time: '22:30', venueId: 'blank', genre: 'Elettronica', price: '€ 15' }
    // 📝 AGGIUNGI ALTRI EVENTI QUI
  ],

  genres: [
    { name: 'Indie', color: 'var(--lime)' },
    { name: 'Techno', color: 'var(--violet)' },
    { name: 'Jazz', color: 'var(--pink)' },
    { name: 'Rock', color: '#00E5FF' },
    { name: 'Hip-Hop', color: '#FF5252' },
    { name: 'Elettronica', color: '#FFD740' },
    { name: 'Punk', color: '#FF4081' },
    { name: 'World', color: '#69F0AE' }
    // 📝 AGGIUNGI ALTRI GENERI QUI
  ]
};
