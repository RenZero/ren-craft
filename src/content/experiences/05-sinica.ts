import type { Experience } from '../models/experience.model';

export const sinicaExperience: Experience = {
  id: "sinica",
  company: "中央研究院 RNAi Core",
  title: "Full Stack Web Programmer / Data Engineer",
  period: "2009.12 - 2016.03",
  location: "台灣・台北",
  summary: "主導核心實驗室網站與資料庫重構，專責大規模基因數據運算與伺服器資訊安全維護。",
  details: [
    {
      category: "核心實驗室網站與資料庫重構",
      items: [
        "主導核心實驗室官網全面重構，成功將舊型 ASP 架構全數重寫為 Apache Wicket 與 JSP 架構，大幅強化系統穩定度。",
      ],
    },
    {
      category: "大規模資料工程",
      items: [
        "負責管理核心實驗室資料庫，處理與調優大規模基因數據運算。",
      ],
    },
    {
      category: "資訊安全維護",
      items: [
        "專責核心伺服器之網路安全維護、漏洞補強與日常系統故障排除。",
      ],
    },
  ],
};
