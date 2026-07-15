export interface WorkingHoliday {
  id: string;
  country: string;
  company: string;
  title: string;
  period: string;
  achievements: string[];
}

export const workingHolidayExperiences: WorkingHoliday[] = [
  {
    id: "wh-germany",
    country: "德國 Germany",
    company: "Jannowitz Center Berlin",
    title: "Salesperson",
    period: "2016.03 - 2017.03",
    achievements: [
      "了解當地資訊產業",
      "兼職紀念品銷售",
      "周遊歐洲",
      "風景攝影"
    ],
  },
  {
    id: "wh-usa",
    country: "美國 USA",
    company: "Six Flags Great America in Chicago",
    title: "Restaurant Staff",
    period: "2008.06 - 2008.10",
    achievements: [
      "遊樂園內餐廳 Crazy Buffalo Saloon 餐飲服務人員",
      "練習外語",
      "遊歷美國"
    ],
  },
];
