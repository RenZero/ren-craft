import type { Experience } from '../models/experience.model';

export const acerExperience: Experience = {
  id: "acer",
  company: "宏碁股份有限公司 (駐點)",
  title: "Senior Backend Engineer",
  period: "2019.03 - 2019.10",
  summary: "",
  details: [
    {
      category: "ERP 系統架構重構",
      items: [
        "參與 Acer Global ERP 後端系統改版專案，將舊有 JBoss Seam 框架重寫為現代化 Java MVC 架構，解決技術債並提升系統可維護性與執行效率。",
      ],
    },
    {
      category: "工程文件與 Code Review",
      items: [
        "撰寫系統重構期間之技術開發與 API 文件，並執行團隊 Code Review 機制，確保架構轉換過程中的程式碼品質與一致性。",
      ],
    },
    {
      category: "自動化部署導入",
      items: [
        "參與 CI/CD Pipeline 的建置與調優，協助團隊建立標準化與自動化的交付流程。",
      ],
    },
  ],
};
