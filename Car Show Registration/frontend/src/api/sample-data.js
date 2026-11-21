const registrationSeeds = [
  ['Juan Dela Cruz', '09171234567', 'juan.delacruz@example.com', 'Naga City', 'Toyota Supra MK4', 'ABC 1234', 'Competitor', 'Confirmed', 2500, 2500],
  ['Maria Santos', '09182345678', 'maria.santos@example.com', 'Sorsogon City', 'Honda Civic Type R', 'DEF 2027', 'Competitor', 'Confirmed', 2500, 2500],
  ['Paolo Reyes', '09273456789', 'paolo.reyes@example.com', 'Legazpi City', 'Nissan Skyline GT-R R34', 'GTR 3434', 'VIP', 'Confirmed', 3900, 3900],
  ['Angela Mendoza', '09384567890', 'angela.mendoza@example.com', 'Daraga, Albay', 'Mazda MX-5 RF', 'MX5 8080', 'Exhibitor', 'Pending', 1500, 0],
  ['Miguel Torres', '09495678901', 'miguel.torres@example.com', 'Pili, Camarines Sur', 'Mitsubishi Lancer Evolution IX', 'EVO 0909', 'Competitor', 'CheckedIn', 2500, 2500],
  ['Sofia Ramos', '09506789012', 'sofia.ramos@example.com', 'Sorsogon City', 'Subaru WRX STI', 'WRX 7777', 'Competitor', 'CheckedIn', 2500, 2500],
  ['Carlo Villanueva', '09617890123', 'carlo.villanueva@example.com', 'Naga City', 'Toyota 86 GT', 'TOY 8686', 'Exhibitor', 'Confirmed', 1500, 1500],
  ['Isabella Garcia', '09728901234', 'isabella.garcia@example.com', 'Tabaco City', 'Volkswagen Golf GTI', 'GTI 2027', 'Competitor', 'Pending', 2500, 0],
  ['Rafael Bautista', '09839012345', 'rafael.bautista@example.com', 'Legazpi City', 'Porsche 911 Carrera', '911 0901', 'VIP', 'Confirmed', 3900, 3900],
  ['Nicole Fernandez', '09940123456', 'nicole.fernandez@example.com', 'Sorsogon City', 'Honda Civic EG Hatchback', 'EGH 1995', 'Exhibitor', 'CheckedIn', 1500, 1500],
  ['Andres Castillo', '09151234568', 'andres.castillo@example.com', 'Iriga City', 'Ford Mustang GT', 'MST 5000', 'Competitor', 'Confirmed', 2500, 2500],
  ['Camille Flores', '09262345679', 'camille.flores@example.com', 'Naga City', 'BMW M3 E46', 'M3E 4646', 'Competitor', 'Pending', 2500, 1000],
  ['Gabriel Navarro', '09373456780', 'gabriel.navarro@example.com', 'Sorsogon City', 'Suzuki Jimny 5-Door', 'JIM 2027', 'Exhibitor', 'Cancelled', 1500, 0],
  ['Patricia Aquino', '09484567891', 'patricia.aquino@example.com', 'Ligao City', 'Toyota GR Yaris', 'GRY 0303', 'Competitor', 'CheckedIn', 2500, 2500],
  ['Enzo Mercado', '09595678902', 'enzo.mercado@example.com', 'Legazpi City', 'Mercedes-Benz C63 AMG', 'AMG 6363', 'VIP', 'Confirmed', 3900, 3900],
  ['Beatriz Lim', '09606789013', 'beatriz.lim@example.com', 'Sorsogon City', 'Hyundai Ioniq 5 N', 'ION 2025', 'Competitor', 'Confirmed', 2500, 2500],
  ['Joshua Cruz', '09717890124', 'joshua.cruz@example.com', 'Pili, Camarines Sur', 'Nissan Silvia S15', 'S15 1515', 'Competitor', 'CheckedIn', 2500, 2500],
  ['Andrea Perez', '09828901235', 'andrea.perez@example.com', 'Naga City', 'Toyota Land Cruiser Prado', 'LCP 2727', 'Exhibitor', 'Pending', 1500, 0],
  ['Noah Salazar', '09939012346', 'noah.salazar@example.com', 'Daraga, Albay', 'Chevrolet Camaro SS', 'CAM 2027', 'VIP', 'Confirmed', 3900, 3900],
  ['Chloe Rivera', '09140123457', 'chloe.rivera@example.com', 'Sorsogon City', 'Honda S2000', 'S2K 2000', 'Exhibitor', 'CheckedIn', 1500, 1500],
  ['Daniel Domingo', '09251234569', 'daniel.domingo@example.com', 'Masbate City', 'Mazda RX-7 FD', 'RX7 0007', 'Competitor', 'Confirmed', 2500, 2500],
  ['Samantha Ortega', '09362345670', 'samantha.ortega@example.com', 'Naga City', 'Mitsubishi Pajero Fieldmaster', 'PJR 1999', 'Exhibitor', 'Cancelled', 1500, 0],
  ['Luis Gonzales', '09473456781', 'luis.gonzales@example.com', 'Sorsogon City', 'Toyota GR86', 'GR8 2027', 'Competitor', 'Pending', 2500, 2500],
  ['Erika Valdez', '09584567892', 'erika.valdez@example.com', 'Legazpi City', 'Lexus LC 500', 'LCS 0500', 'VIP', 'Pending', 3900, 1000],
  ['Marco Santiago', '09695678903', 'marco.santiago@example.com', 'Naga City', 'Toyota AE86 Trueno', 'AE8 1986', 'Exhibitor', 'Cancelled', 1500, 0],
];

const registrationDates = [
  '2027-02-10T08:30:00Z', '2027-02-10T09:05:00Z', '2027-02-10T10:15:00Z', '2027-02-11T07:45:00Z', '2027-02-11T08:10:00Z',
  '2027-02-11T08:55:00Z', '2027-02-11T09:20:00Z', '2027-02-12T07:35:00Z', '2027-02-12T08:05:00Z', '2027-02-12T08:40:00Z',
  '2027-02-12T09:10:00Z', '2027-02-13T07:50:00Z', '2027-02-13T08:25:00Z', '2027-02-13T09:00:00Z', '2027-02-13T09:35:00Z',
  '2027-02-14T07:40:00Z', '2027-02-14T08:15:00Z', '2027-02-14T08:50:00Z', '2027-02-14T09:25:00Z', '2027-02-15T07:55:00Z',
  '2027-02-15T08:30:00Z', '2027-02-15T09:05:00Z', '2027-02-15T09:40:00Z', '2027-02-16T08:00:00Z', '2027-02-16T08:35:00Z',
];

export const sampleRegistrations = registrationSeeds.map((seed, index) => {
  const [participantName, contactNumber, email, address, carMakeModel, plateNumber, registrationType, status, registrationFee, amountPaid] = seed;

  return {
    id: `car-show-2027-${String(index + 1).padStart(4, '0')}`,
    registrationNumber: `CS27-${String(index + 1).padStart(4, '0')}`,
    registrationDate: registrationDates[index],
    participantName,
    contactNumber,
    email,
    address,
    carMakeModel,
    plateNumber,
    registrationType,
    status,
    registrationFee,
    amountPaid,
    paymentStatus: amountPaid === 0 ? 'Unpaid' : amountPaid >= registrationFee ? 'Paid' : 'Partial',
  };
});

const wait = (duration = 120) => new Promise((resolve) => setTimeout(resolve, duration));

export async function getRegistrations({ participantName = '', type = '', status = '', page = 1, pageSize = 10 } = {}) {
  await wait();
  const query = participantName.trim().toLocaleLowerCase();
  const filtered = sampleRegistrations.filter((registration) => {
    const matchesName = !query || registration.participantName.toLocaleLowerCase().includes(query);
    const matchesType = !type || type === 'All' || registration.registrationType === type;
    const matchesStatus = !status || status === 'All' || registration.status === status;
    return matchesName && matchesType && matchesStatus;
  });
  const totalCount = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const safePage = Math.min(Math.max(1, Number(page) || 1), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: filtered.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    totalCount,
    totalPages,
  };
}

export async function getSummary() {
  await wait();
  return sampleRegistrations.reduce((summary, registration) => {
    summary.totalRegistrations += 1;
    summary[registration.status === 'CheckedIn' ? 'checkedIn' : registration.status.toLocaleLowerCase()] += 1;
    summary.totalFees += registration.registrationFee;
    summary.totalPayments += registration.amountPaid;
    summary.uncollectedPayments += registration.registrationFee - registration.amountPaid;
    return summary;
  }, {
    totalRegistrations: 0,
    confirmed: 0,
    checkedIn: 0,
    pending: 0,
    cancelled: 0,
    totalFees: 0,
    totalPayments: 0,
    uncollectedPayments: 0,
  });
}
