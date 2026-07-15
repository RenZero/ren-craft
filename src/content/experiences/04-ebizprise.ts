import type { Experience } from '../models/experience.model';

export const ebizpriseExperience: Experience = {
  id: "ebizprise",
  company: "聯合通商科技 (天津) 有限公司 eBizprise Inc",
  title: "Senior Full Stack / Backend Engineer",
  period: "2017.03 - 2018.11",
  location: "中國・天津",
  summary: "負責高可用性微服務架構管理與前端現代化轉型。",
  details: [
    {
      category: "微服務架構開發與維護",
      items: [
        "使用 Java Spring Boot 開發高可用性、高效能與低延遲的 RESTful API。",
      ],
    },
    {
      category: "前端現代化轉型",
      items: [
        "負責前端系統開發，將核心介面導入 Vue.js 框架，大幅提升使用者互動體驗。",
      ],
    },
    {
      category: "軟體工程最佳實踐",
      items: [
        "導入 Jenkins CI/CD 自動化部署流程，編寫完整系統開發文件，並實作端到端自動化測試，確保系統交付質量。",
      ],
    },
  ],
};
