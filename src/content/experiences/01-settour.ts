import type { Experience } from '../models/experience.model';

export const settourExperience: Experience = {
  id: "settour",
  company: "東南旅行社股份有限公司",
  department: "數位數據發展本部 通路營銷部",
  title: "課長兼資深研發工程師",
  period: "2024.07 - 2025.12",
  summary: "",
  details: [
    {
      category: "系統重構與數據中台建設",
      items: [
        "核心數據中台與 ETL 流程：營運中台重構，設計旅遊資訊與 POI 資料庫 Schema。建置跨系統 ETL 資料清洗pipline，並導入 AI 文本分類進行自動化貼標，建立結構化數據中台。",
        "高彈性 CMS 後台開發：設計支援官網「拖拉式版塊」的動態資料結構與 RESTful API，提升前台數位產品體驗與營運維護效率。",
        "多通路 CRM 系統重構：重構內部自動化訊息系統，將簡訊、Email 與 LINE 訊息的調用參數模組化。建立規格化排程管理機制，並完成 LINE Bot 智能客服 API 串接。"
      ],
    },
    {
      category: "AI 導入與自動化架構",
      items: [
        "地端 LLM 部署與調優：架設地端開源 AI 語言模型，針對推理延遲與硬體資源消耗進行基準測試與評估報告。",
        "企業級自動化工作流建置：建企業級 n8n 伺服器，設計實作 Workflows 以串接內部系統與 AI Agent，有效分流並降低核心後端系統負載。",
        "技術導入與團隊賦能：內部技術工作坊，主講 Data-Driven 系統架構、AI Agent 實務落地，並負責 n8n 自動化流程開發的教育訓練，推動團隊技術升級。"
      ],
    }
  ],
};
