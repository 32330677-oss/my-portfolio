// Text and numbers for the drawn app screens (AppMock.jsx, LiveDemo.jsx).

export const mockText = {
  en: {
    site: "North site, today",
    submit: "Submit day",
    submittedAll: "Day submitted",
    approved: "Approved",
    submitted: "Submitted",
    draft: "Draft",
    payroll: "Payroll preview, October",
    worker: "Worker",
    days: "Days",
    hours: "Hours",
    net: "Net",
    total: "Total",
    excel: "Download Excel",
    save: "Save batch",
    machines: "Machines today",
    working: "Working",
    paused: "Paused",
    out: "Checked out",
    approve: "Approve",
    people: ["Ahmad K.", "Omar S.", "Khaled M.", "Yousef A.", "Hasan R."],
    equipment: ["Excavator 320", "Wheel loader", "Mobile crane", "Dump truck"],
  },
  ar: {
    site: "الموقع الشمالي، اليوم",
    submit: "إرسال اليوم",
    submittedAll: "تم إرسال اليوم",
    approved: "معتمد",
    submitted: "مُرسل",
    draft: "مسودة",
    payroll: "معاينة الرواتب، تشرين الأول",
    worker: "العامل",
    days: "أيام",
    hours: "ساعات",
    net: "الصافي",
    total: "المجموع",
    excel: "تحميل Excel",
    save: "حفظ الدفعة",
    machines: "الآليات اليوم",
    working: "تعمل",
    paused: "متوقفة",
    out: "أنهت العمل",
    approve: "اعتماد",
    people: ["أحمد ك.", "عمر س.", "خالد م.", "يوسف أ.", "حسن ر."],
    equipment: ["حفارة 320", "شيول", "رافعة متحركة", "قلاب"],
  },
};

export const attendanceTimes = [
  ["07:02", "16:05"],
  ["06:58", "16:00"],
  ["07:15", "16:10"],
  ["07:00", "16:02"],
  ["07:04", "16:02"],
];

export const initialStatuses = ["approved", "approved", "submitted", "draft", "submitted"];

// Before today: days, hours, hourly rate.
export const payrollBase = [
  [25, 203, 5.85],
  [24, 195, 5.83],
  [25, 221, 5.93],
  [21, 167, 5.8],
  [25, 205, 5.86],
];
export const TODAY_HOURS = 9;

export const payrollRows = (statuses) =>
  payrollBase.map(([d, h, rate], i) => {
    const today = statuses[i] === "approved";
    const days = d + (today ? 1 : 0);
    const hours = h + (today ? TODAY_HOURS : 0);
    return { days, hours, net: Math.round(hours * rate) };
  });
