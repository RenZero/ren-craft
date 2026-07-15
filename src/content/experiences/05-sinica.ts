import type { Experience } from '../models/experience.model';

export const sinicaExperience: Experience = {
  id: "sinica",
  company: "中央研究院 RNAi Core",
  title: "Full Stack Web Programmer / Data Engineer",
  period: "2009.12 - 2016.03",
  summary: "",
  details: [
    {
      category: "核心系統重構",
      items: [
        "將實驗室舊有 ASP 網站架構重寫為 Apache Wicket 與 JSP，解決舊系統維護瓶頸並提升整體服務穩定度。",
      ],
    },
    {
      category: "資料庫管理與運算優化",
      items: [
        "維運核心實驗室資料庫，負責處理大規模基因數據，並針對繁重的資料運算流程進行效能調優。",
      ],
    },
    {
      category: "伺服器維運與資安控管",
      items: [
        "專責核心伺服器的日常維護與故障排除，執行網路安全設定與系統漏洞修補。",
      ],
    },
  ],
};
