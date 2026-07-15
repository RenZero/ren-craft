import type { Experience } from '../models/experience.model';

export const taoInfoExperience: Experience = {
  id: "tao-info",
  company: "傑騰智能 TAO Info",
  department: "智能產品開發部",
  title: "技術主管 / 研發經理",
  period: "2019.11 - 2024.06",
  summary: "",
  management: {
    leadership: "帶領 5-8 人軟體工程團隊，主導核心 B2B 智慧化資料平台架構與 Data Pipeline 設計。",
    clientSLA: "負責核心客戶（大型醫院、製造廠）需求訪談與架構規劃，將商業指標轉化為工程開發目標，並提供導入期教育訓練與技術支援。",
    devops: "導入 API-First 設計規範與 Code Review 機制，落實季度 KPI 評估以確保專案交付品質。採用前後端分離架構，依專案特性與環境彈性調配 Spring Boot (Java) 與 Python 開發高效能後端服務。運用 Docker / K8s 建置容器環境，規劃 GitLab 分支策略並導入 Jenkins 自動化 CI/CD，使部署效率提升 40% 以上。",
  },
  projects: [
    {
      title: "智慧製造 AIoT 數據平台",
      highlight: "整合 Apache Spark 分散式運算架構，處理每日千萬筆機台數據。針對不同工廠端的網路環境限制，靈活調配 Queue / Cache 機制（如批次寫入或持續發送），優化高併發寫入並解決端到雲的傳輸瓶頸。",
      metrics: [
        { label: "資料吞吐", value: "千萬筆/日" },
      ],
      techStack: ["Apache Spark", "Queue", "Cache"],
    },
    {
      title: "MLOps 平台建置",
      highlight: "開發模型監控與自動化流程，支援數據偏差時的重新訓練與遠端部署，降低 80% 人工維運成本。",
      metrics: [
        { label: "維運成本降低", value: "80%" },
      ],
      techStack: ["MLOps", "Automation", "Deployment"],
    },
    {
      title: "睡眠中止症監控系統",
      highlight: "負責後端系統架構與關聯式資料庫維運。針對高密度音訊特徵與生理數據流，設計高效傳輸與儲存機制，在百人併發傳輸下維持延遲 <100ms 及 99.9% 系統可用性。",
      metrics: [
        { label: "併發吞吐", value: "百人併發" },
        { label: "延遲", value: "<100ms" },
        { label: "可用性 SLA", value: "99.9%" },
      ],
      techStack: ["Relational DB", "High Concurrency", "Low Latency"],
    },
    {
      title: "LLM 智能報表系統",
      highlight: "基於 Python 整合 落地大語言模型與 Prompt 管理，重構數據分析與呈現方式，將原需 1-3 工作天的資料處理流程，縮短至 5 秒內完成。",
      metrics: [
        { label: "處理耗時", value: "1~3工作天 → 5秒內" },
      ],
      techStack: ["Python", "LLM", "Prompt Engineering"],
    },
    {
      title: "藥品影像辨識整合",
      highlight: "設計 RESTful API 串接實體機台影像與處方箋數據。在不更動藥師既有流程下的前提下完成流程整合，單次處方箋辨識延遲控制於 15 秒內，錯判率低於 0.5%。",
      metrics: [
        { label: "處理時間限制", value: "15秒內" },
        { label: "錯判率", value: "< 0.5%" },
      ],
      techStack: ["RESTful API", "Data Integration", "Image Processing"],
    },
  ],
};
