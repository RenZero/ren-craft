import type { Experience } from '../models/experience.model';

export const settourExperience: Experience = {
  id: "settour",
  company: "東南旅行社股份有限公司",
  department: "數位數據發展本部通路營銷部",
  title: "課長兼資深研發工程師",
  period: "2024.07 - 2025.12",
  location: "台灣・台北",
  summary: "統籌集團前台數位產品體驗升級、核心營運中台重構，並全權主導企業級 AI 與自動化技術 (Low-Code) 的架構自建與落地。",
  details: [
    {
      category: "核心數據中台與 AI 標籤工程",
      items: [
        "主導核心旅遊資訊與 POI 之基礎資料庫模組化與 Schema 設計。",
        "實作跨系統異質資料清洗與 ETL 流程，並引入 AI 文本分類模型進行自動化貼標，建立高可用性之結構化數據中台。",
      ],
    },
    {
      category: "AI 基礎建設自建與效能調優",
      items: [
        "負責架設與部署地端開源 AI 語言模型，針對推理延遲與硬體資源消耗進行基準測試。",
        "獨立自建企業級 n8n Server 系統，透過低代碼自動化流程串接內部系統與 AI Agent，有效分流核心後端系統負載。",
      ],
    },
    {
      category: "高彈性 CMS 後台與多通路 CRM 系統開發",
      items: [
        "設計支援官網「拖拉式版塊」的動態資料結構與 RESTful API。",
        "重構內部自動發送訊息系統，將簡訊/Email/LINE 訊息調用邏輯高度抽象化與模組化，建立規格化排程管理機制，並串接 LINE Bot 智能客服機器人 API。",
      ],
    },
    {
      category: "技術影響力與團隊賦能",
      items: [
        "針對內部技術團隊舉辦技術分享與工作坊，主講 Data-Driven 系統架構設計、AI Agent 實務落地架構，並主持 n8n 自動化流程開發教育訓練。",
      ],
    },
  ],
};
