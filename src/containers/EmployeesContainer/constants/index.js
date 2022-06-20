export const times = [
  '09:00 - 18:00',
  '18:00 - 00:00',
  '00:00 - 09:00'
];

export const departments = [
  'Rəqəmsal idarə etmə',
  'HR',
  'Təhlükəsizlik',
  'İT',
  'Satınalma'
]

export const disabilities = [
  'Yoxdur',
  '1 ci dərəcəli',
  '2 ci dərəcəli',
  '3 ci dərəcəli',
  '4 ci dərəcəli'
]

export const duration = [
  'Müddətli',
  'Müddətsiz'
]

export const education = [
  'Orta',
  'Ali'
]

export const relatives = [
  'Ata',
  'Ana',
  'Qardaş',
  'Bacı',
  'Həyat yoldaşı'
]

export const positions = [
  'Aparıcı',
  'Müdir',
  'Müavin'
]
export const tabs = [
    { value: "main", label: "Ümumi" },
    { value: "contract", label: "Müqavilə" },
    { value: "order", label: "Əmr" },
    { value: "salary", label: "Staj/Əmək haqqı" },
    { value: "vacation", label: "Əmək məzuniyyəti" },
    { value: "documents", label: "Sənədlər" },
  ];
  export const detailsTabs = [
    { value: "mainDetails", label: "Ümumi" },
    { value: "contractDetails", label: "Müqavilə" },
    { value: "orderDetails", label: "Əmr" },
    { value: "salaryDetails", label: "Staj/Əmək haqqı" },
    { value: "vacationDetails", label: "Əmək məzuniyyəti" },
    { value: "documentsDetails", label: "Sənədlər" },
  ];



  export const employee = {
    firstName: "Xəyalə",
    lastName: "Aslanova",
    patronymic: "Əliağa",
    avatar: "https://picsum.photos/200",
    gender: "Qadın",
    birthDay: "25/06/1985",
    age: "35",
    maritalStatus: "Evli",
    fin: "1QVRNU3",
    IDnumber: "AZE14149832",
    company: "Xəzan TV",
    department: "Rəqəmsal idarəetmə",
    positionStatus: "Fəhlə",
    position: "Aparıcı",
    citizenship: "Azərbaycan",
    nationality: "Azərbaycanlı",
    education: "Ali",
    email: "xeyale@gmail.com",
    staff: "Tam",
    workplace: "Əsas",
    mobile: "+994 55 342 32 23",
    corporateNumber: "+994 55 342 32 23",
    internalNumber: "23 50",
    homeNumber: "012 342 32 23",
    relatives: "həyat yoldaşı",
    relativesPhoneNumber: "+994 55 342 32 23",
    workingTime: "09:00-18:00",
    weeklyWorkingHours: "156",
    disabilities: "1ci dərəcəli",
    insurance: "1407197900479"
  }
  
  export const employeesDetailsFormRows = [
    { name: "Ad Soyad Ata", value: `${employee.firstName} ${employee.lastName} ${employee.patronymic}` },
    { name: "Ailə vəziyyəti", value: employee.maritalStatus },
    { name: "Cinsi", value: employee.gender },
    { name: "FİN", value: employee.fin },
    { name: "Şəxsiyyət vəsiqənin seriya nömrəsi", value: employee.IDnumber },
    { name: "Vətəndaşlıq", value: employee.citizenship },
    { name: "Milliyyəti", value: employee.nationality },
    { name: "Təhsil", value: employee.education },
    { name: "E-ünvan", value: employee.email },
    { name: "Mobil nömrə", value: employee.mobile },
    { name: "Korporativ nömrə", value: employee.corporateNumber },
    { name: "Daxili nömrə", value: employee.internalNumber },
    { name: "Ev telefonu", value: employee.homeNumber },
    { name: "Yaxın qohumun kimliyi", value: employee.relatives },
    { name: "Yaxın qohum(mob)", value: employee.relativesPhoneNumber },
    { name: "Şirkət", value: employee.company },
    { name: "Şöbə", value: employee.department },
    { name: "Vəzifə təsnifatı", value: employee.positionStatus },
    { name: "Vəzifə", value: employee.position },
    { name: "İş vaxtı", value: employee.workingTime },
    { name: "Həftəlik iş saatı", value: employee.weeklyWorkingHours },
    { name: "Ştat tutumu", value: employee.staff },
    { name: "İş yeri", value: employee.workplace }
  ]
