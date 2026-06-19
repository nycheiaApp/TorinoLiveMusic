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
      instagram: '@cafeliberita',
      website: 'https://www.caffedellaliberta.it'
    },
    {
      id: 'blank',
      name: 'BLANK',
      district: 'Aurora',
      address: 'Via Ponzio 34',
      capacity: '300 pax',
      image: 'linear-gradient(135deg, #FF3CAC, #D4FF00)',
      description: 'Spazio industriale riconvertito. Suono potente, luci immersive, programmazione elettronica e sperimentale.',
      instagram: '@blank_torino',
      website: 'https://www.blanktorino.it'
    },
    {
      id: 'jazz-club',
      name: 'Jazz Club Torino',
      district: 'Centro',
      address: 'Via San Francesco da Paola 24',
      capacity: '120 pax',
      image: 'linear-gradient(135deg, #D4FF00, #7B61FF)',
      description: 'Atmosfera intima, cocktail curati, programmazione jazz e fusion quotidiana. Palco a forma di U.',
      instagram: '@jazzclubtorino',
      website: 'https://www.jazzclubtorino.com'
    },
    {
      id: 'murazzi',
      name: 'Caffè Murazzi',
      district: 'Vanchiglia',
      address: 'Lungo Po Armando Diaz',
      capacity: '200 pax',
      image: 'linear-gradient(135deg, #FF3CAC, #7B61FF)',
      description: 'Terrazza sul Po. Serate a tema, live acustici e DJ set con vista mozzafiato.',
      instagram: '@caffemurazzi',
      website: 'https://www.caffemurazzi.it'
    },
    {
      id: 'spazio211',
      name: 'Spazio 211',
      district: 'Aurora',
      address: 'Via Cigna 211',
      capacity: '400 pax',
      image: 'linear-gradient(135deg, #00E5FF, #7B61FF)',
      description: 'Ex officina trasformata in spazio culturale. Concerti indie, hip-hop, arte contemporanea e eventi underground.',
      instagram: '@spazio211',
      website: 'https://www.spazio211.org'
    },
    {
      id: 'cap10100',
      name: 'Cap10100',
      district: 'Aurora',
      address: 'Via Moncalvo 13',
      capacity: '500 pax',
      image: 'linear-gradient(135deg, #FF5252, #FFD740)',
      description: 'Centro di produzione culturale nel cuore della Balon. Concerti, dj set, mostre e laboratori creativi.',
      instagram: '@cap10100',
      website: 'https://www.cap10100.it'
    },
    {
      id: 'hiroshima',
      name: 'Hiroshima Mon Amour',
      district: 'Santa Rita',
      address: 'Via Bossalli 9',
      capacity: '350 pax',
      image: 'linear-gradient(135deg, #69F0AE, #00E5FF)',
      description: 'Locale storico di Torino. Palco per band emergenti e consolidate, serate a tema, atmosfera underground.',
      instagram: '@hiroshimatorino',
      website: 'https://www.hiroshimatorino.it'
    },
    {
      id: 'combo',
      name: 'Combo Torino',
      district: 'San Paolo',
      address: 'Corso Verona 12/A',
      capacity: '180 pax',
      image: 'linear-gradient(135deg, #FFD740, #FF4081)',
      description: 'Coworking di giorno, venue di sera. Concerti acustici, elettronica, eventi culturali in uno spazio ibrido.',
      instagram: '@combotorino',
      website: 'https://www.combocollective.com'
    },
    {
      id: 'blah-blah',
      name: 'Blah Blah',
      district: 'Centro',
      address: 'Via Po 23',
      capacity: '200 pax',
      image: 'linear-gradient(135deg, #FF4081, #00E5FF)',
      description: 'Istituzione universitaria torinese dal 1992. Concerti indie, rock, elettronica e serate a tema nel cuore della città.',
      instagram: '@blahblahtorino',
      website: 'https://www.blahblahtorino.it'
    },
    {
      id: 'folkclub',
      name: 'Folkclub',
      district: 'Centro',
      address: 'Via Paganini 36',
      capacity: '150 pax',
      image: 'linear-gradient(135deg, #69F0AE, #FFD740)',
      description: 'Storica associazione dedicata al folk, world music e cantautorato. Programmazione curata e atmosfera accogliente.',
      instagram: '@folkclubtorino',
      website: 'https://www.folkclub.it'
    },
    {
      id: 'ziggy-club',
      name: 'Ziggy Club',
      district: 'Centro',
      address: 'Via San Francesco d\'Assisi 22',
      capacity: '180 pax',
      image: 'linear-gradient(135deg, #FF5252, #7B61FF)',
      description: 'Rock, blues, cover band e serate tributo. Atmosfera british nel cuore di Torino.',
      instagram: '@ziggyclubtorino',
      website: 'https://www.ziggyclub.it'
    },
    {
      id: 'lingotto-musica',
      name: 'Lingotto Musica',
      district: 'Lingotto',
      address: 'Via Nizza 262',
      capacity: '1500 pax',
      image: 'linear-gradient(135deg, #5B44E8, #FF3CAC)',
      description: 'Grande venue nel complesso del Lingotto. Concerti di artisti nazionali e internazionali, sound di alto livello.',
      instagram: '@lingottomusica',
      website: 'https://www.lingottomusica.it'
    },
    {
      id: 'magazzino-gilgamesh',
      name: 'Il Magazzino di Gilgamesh',
      district: 'San Paolo',
      address: 'Via San Marino 11/b',
      capacity: '250 pax',
      image: 'linear-gradient(135deg, #D4FF00, #00E5FF)',
      description: 'Spazio culturale polifunzionale. Concerti, teatro, presentazioni e laboratori in un ex magazzino riconvertito.',
      instagram: '@magazzinodigilgamesh',
      website: 'https://www.magazzinodigilgamesh.it'
    },
    {
      id: 'organizzato-torino',
      name: 'Organizzato Torino',
      district: 'Aurora',
      address: 'Via Borgo Dora 31',
      capacity: '200 pax',
      image: 'linear-gradient(135deg, #E91E8C, #9BB800)',
      description: 'Collettivo e spazio eventi indipendente. Musica emergente, arte, dj set e programmazione culturale alternativa.',
      instagram: '@organizzatototino',
      website: 'https://www.organizzatototino.it'
    }
  ],

  events: [
    { id: 1, title: 'Madrilena', date: '2026-06-19', time: '21:30', venueId: 'cafe-liberta', genre: 'Indie', price: '€ 12' },
    { id: 2, title: 'Noise Collective', date: '2026-06-19', time: '22:00', venueId: 'blank', genre: 'Techno', price: '€ 8' },
    { id: 3, title: 'Jazz in Piazza', date: '2026-06-19', time: '20:00', venueId: 'jazz-club', genre: 'Jazz', price: 'Free' },
    { id: 4, title: 'Post-Punk Night', date: '2026-06-19', time: '23:00', venueId: 'murazzi', genre: 'Rock', price: '€ 10' },
    { id: 5, title: 'Synthwave Revival', date: '2026-06-20', time: '22:30', venueId: 'spazio211', genre: 'Elettronica', price: '€ 15' },
    { id: 6, title: 'Hip-Hop Underground', date: '2026-06-20', time: '21:00', venueId: 'cap10100', genre: 'Hip-Hop', price: '€ 10' },
    { id: 7, title: 'Acoustic Session', date: '2026-06-21', time: '20:30', venueId: 'combo', genre: 'Indie', price: '€ 8' },
    { id: 8, title: 'Indie Night', date: '2026-06-19', time: '22:30', venueId: 'blah-blah', genre: 'Indie', price: '€ 8' },
    { id: 9, title: 'Folk Session', date: '2026-06-20', time: '21:00', venueId: 'folkclub', genre: 'World', price: '€ 12' },
    { id: 10, title: 'Rock Tribute', date: '2026-06-21', time: '22:00', venueId: 'ziggy-club', genre: 'Rock', price: '€ 10' },
    { id: 11, title: 'Big Concert', date: '2026-06-22', time: '21:00', venueId: 'lingotto-musica', genre: 'Rock', price: '€ 35' },
    { id: 12, title: 'Experimental Night', date: '2026-06-20', time: '21:30', venueId: 'magazzino-gilgamesh', genre: 'Elettronica', price: '€ 10' },
    { id: 13, title: 'Alternative Collective', date: '2026-06-21', time: '23:00', venueId: 'organizzato-torino', genre: 'Techno', price: '€ 12' }
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
  ]
};
