import type { Experience } from '../models/experience.model';

export const ebizpriseExperience: Experience = {
  id: "ebizprise",
  company: "联合通商科技(天津)有限公司 eBizprise Inc",
  title: "Senior Full Stack / Backend Engineer",
  period: "2017.03 - 2018.11",
  summary: "",
  details: [
    {
      category: "微服務後端開發",
      items: [
        "基於 Spring Boot (Java) 開發與維護微服務架構，負責核心 RESTful API 設計與實作，確保系統服務穩定運行。",
      ],
    },
    {
      category: "前端架構升級",
      items: [
        "使用 Vue.js 框架進行前端系統重構與開發，推動 UI 介面元件化，提升系統互動性與前後端協作開發效率。",
      ],
    },
    {
      category: "自動化測試與 CI/CD",
      items: [
        "建立Jenkins 建置 CI/CD Pipeline 實現自動化部署流程。撰寫系統技術文件並實作 End-to-End 自動化測試，確保軟體交付品質。",
      ],
    },
  ],
};
