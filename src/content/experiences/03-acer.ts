import type { Experience } from '../models/experience.model';

export const acerExperience: Experience = {
  id: "acer",
  company: "宏碁股份有限公司 (駐點)",
  title: "Senior Backend Engineer",
  period: "2019.03 - 2019.10",
  location: "台灣・新北",
  summary: "參與 Acer Global ERP 後端管理系統之架構重構，導入現代化技術棧與運維自動化流程。",
  details: [
    {
      category: "大型企業 ERP 系統架構重構",
      items: [
        "將舊有系統從 JBoss Seam 全數翻修重寫為現代化 Java MVC 架構，大幅提升系統執行效率與可維護性。",
      ],
    },
    {
      category: "技術資產沉澱",
      items: [
        "負責編寫完整的系統重構技術開發文件，並執行團隊代碼審查 (Code Review) 以確保改版後的代碼質量。",
      ],
    },
    {
      category: "自動化運維",
      items: [
        "參與 CI/CD 自動化部署流程之建置與調優。",
      ],
    },
  ],
};
