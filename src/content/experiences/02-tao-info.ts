import type { Experience } from '../models/experience.model';

export const taoInfoExperience: Experience = {
  id: "tao-info",
  company: "傑騰智能 TAO Info",
  department: "智能產品開發部",
  title: "技術主管 / 研發經理",
  period: "2019.11 - 2024.06",
  location: "台灣・台北",
  summary: "管理 5-8 人軟體研發團隊，主導核心 B2B 智慧產品之系統技術方案、資料結構設計與代碼質量審查。",
  management: {
    leadership: "帶領 5-8 人軟體研發團隊。負責核心 B2B 智慧化資料平台之系統架構、資料管線與異質資料結構設計。定期執行 1-on-1 會議與績效評估，落實 Code Review 機制以提升團隊程式碼品質。",
    clientSLA: "主導核心客戶（包含大型醫院、製造廠）的前期需求訪談、架構評估與技術售後服務。負責將客戶端複雜的商業指標轉化為工程開發目標，並親自執行產品導入時的教育訓練，確保高標準的客戶滿意度（SLA）。",
    devops: "全面落實 API-First 設計規範，運用 Docker / Docker Compose 建立標準化開發環境，並導入 Kubernetes 進行容器編排管理；規劃 GitLab 分支策略，設計 Jenkins Pipeline 實現全自動化 CI/CD 工作流，使團隊部署效率提升 40% 以上。",
  },
  projects: [
    {
      title: "AI 建模與管理平台 (AIoT & MLOps)",
      highlight: "主導智慧製造 AIoT 數據採集與分析平台。整合 Apache Spark 分散式運算平台，規劃高效能 ETL 資料流架構與動態資料處理節點。實現在模型出現偏差時自動重新訓練新模型並快速部署到生產環境的 MLOps 自動化流程，大幅降低維運成本。",
      metrics: [
        { label: "資料吞吐", value: "GB~TB 級" },
        { label: "維運成本降低", value: "80%" },
      ],
      techStack: ["Apache Spark", "ETL", "MLOps", "Queue/Cache", "Docker"],
    },
    {
      title: "睡眠中止症居家監控系統",
      highlight: "負責連線伺服器後端架構維運。針對高密度音訊資料流，導入 Kubernetes Auto-scaling（自動擴展）與負載平衡機制，確保高峰期低延遲傳輸與高可用性。",
      metrics: [
        { label: "併發吞吐", value: "同時百人以上即時音訊" },
        { label: "延遲", value: "<100ms" },
        { label: "可用性 SLA", value: "99.9%" },
      ],
      techStack: ["Kubernetes", "Auto-scaling", "Load Balancing", "Time-Series DB"],
    },
    {
      title: "LLM 智能助理系統 (Python & 分散式架構)",
      highlight: "基於 Python 與分散式後端架構，整合 GPT 核心模型與 Prompt 最佳化管理。重構與優化資料交換流程，大幅縮短原先非同步處理的等待時間。",
      metrics: [
        { label: "處理耗時", value: "1~3工作天 → 5秒內" },
      ],
      techStack: ["Python", "GPT API", "Prompt Engineering", "Distributed Backend"],
    },
    {
      title: "藥品影像辨識檢核系統",
      highlight: "設計高相容性 RESTful API 與資料介接方案。在完全不改動醫院既有核心流程的前提下，將實體機台影像與處方箋數據無縫嵌入院方檢核流程。",
      metrics: [
        { label: "處理時間限制", value: "15秒內" },
        { label: "錯判率", value: "低於 0.5%" },
      ],
      techStack: ["RESTful API", "Data Integration", "Image Processing"],
    },
  ],
};
