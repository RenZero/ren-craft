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
      "深度了解歐洲當地資訊產業生態與工作文化。",
      "兼職紀念品銷售，鍛鍊德語及跨文化溝通能力。",
      "周遊歐洲多國，進行風景攝影創作，沉澱個人美學與視野。",
    ],
  },
  {
    id: "wh-usa",
    country: "美國 USA (Chicago)",
    company: "Six Flags Great America",
    title: "Restaurant Staff",
    period: "2008.06 - 2008.10",
    achievements: [
      "於遊樂園內餐廳 Crazy Buffalo Saloon 擔任餐飲服務人員。",
      "置身全英語工作環境，有效提升外語實戰表達能力並深度遊歷美國。",
    ],
  },
];
