# 個人官網建置規格書 (Specification)

[cite_start]本專案定位為 **「資深技術長 / 架構師 (Tech Lead / Software Architect)」** 之個人品牌與實力展示靜態網站 [cite: 1, 3]。
核心設計原則為：**模組化高內聚低耦合**、**極速載入體驗**、以及對 **SEO/AIO（AI 引擎抓取）高度友善** 的語意化架構。

---

## 1. 技術棧與專案架構 (Tech Stack & Architecture)

### 1.1 技術選型

| 項目 | 選用 | 備註 |
|------|------|------|
| 前端框架 | **Astro 4.x** | SSG 靜態生成，Node 18 相容版本 |
| 程式語言 | **TypeScript** (strict mode) | 強型別約束，確保 Props 介面嚴謹 |
| 樣式框架 | **Tailwind CSS 3.x** | 自動 Purge，客製化設計系統 |
| 字型 | **Inter** & **JetBrains Mono** | 全站主字型與 Code / EXIF 專用等寬字型 |
| 託管平台 | **Vercel / GitHub Pages** | 零成本、全球 CDN |

> [!NOTE]
> 目前開發環境為 Node.js v18。Astro 5+ 需要 Node ≥ 22，升級後可切換至最新版並自動整合 sitemap 生成。

### 1.2 設計系統 (Design Tokens)

`tailwind.config.mjs` 定義全站設計代幣：

- **風格**：Neobrutalism (新粗野主義)
- **主色系**：高飽和鮮明色彩（黃 bg-neo-primary、藍 bg-neo-secondary、綠 bg-neo-success、粉 bg-neo-accent、白 bg-neo-white）
- **核心元素**：純黑字體與邊框（border-neo-black）、強烈實體陰影（shadow-[4px_4px_0px_0px_#111]）
- **動畫與互動**：卡片點擊或懸停時的實體壓按位移與去色/上色效果

---

## 2. 資料夾結構 (Project Structure)

專案採用**數據與 UI 分離**的架構設計。未來若需更動履歷內容或專案實績，**僅需更動 `src/content/` 下的 TypeScript 資料檔案**，完全不需改動任何元件或頁面代碼。

```text
ren-craft/
├── public/
│   ├── favicon.svg              # SVG favicon（Indigo 底 + R 字）
│   ├── robots.txt               # 開放爬蟲，指向 sitemap
│   └── photos/                  # 📸 Canon 5DMarkIII 攝影作品（直接放入即自動顯示）
├── src/
│   ├── components/              # ⚙️ UI 元件層（純渲染，無狀態，高複用）
│   │   ├── common/
│   │   │   ├── SEOMeta.astro    # Title / OG / Twitter / JSON-LD 注入
│   │   │   ├── Navbar.astro     # 固定導覽列（含 active state、mobile menu）
│   │   │   ├── Footer.astro     # 頁尾（品牌、快速連結、社群圖示）
│   │   │   └── ContactForm.astro  # 聯絡表單（mailto 方案）
│   │   ├── home/
│   │   │   ├── Hero.astro       # 全寬居中 Hero（標題 + 量化指標橫幅）
│   │   │   └── CoreSkills.astro    # 三大技術領域卡片
│   │   ├── resume/
│   │   │   ├── ExperienceTimeline.astro  # 交替式時間軸
│   │   │   └── ProjectCard.astro         # 專案卡片（含 Metrics Badge）
│   │   └── photography/
│   │       ├── MasonryGrid.astro  # CSS Columns 瀑布流（限制最大 2 欄的大圖展示）
│   │       └── PhotoCard.astro    # 照片卡片（Neobrutalism 粗框與懸停變彩效果）
│   ├── content/                 # 📁 數據源層（TypeScript 資料檔）
│   │   ├── experiences/
│   │   │   ├── 01-settour.ts    # 東南旅行社 經歷與專案資料
│   │   │   ├── 02-tao-info.ts   # 傑騰智能科技 經歷與專案資料
│   │   │   ├── 03-acer.ts       # 宏碁 經歷與專案資料
│   │   │   ├── 04-ebizprise.ts  # 聯合通商 經歷與專案資料
│   │   │   ├── 05-sinica.ts     # 中央研究院 經歷與資料工程
│   │   │   └── 06-workingholiday.ts # 海外工作假期經歷 (德國、美國)
│   │   └── photos.ts            # 攝影作品類型定義（Photo / PhotoExif interface）
│   ├── layouts/
│   │   └── BaseLayout.astro     # 頁面外框（SEOMeta + Navbar + Footer）
│   ├── pages/                   # 🧭 路由頁面層（僅負責組裝元件）
│   │   ├── index.astro          # / → 關於我（Hero）
│   │   ├── experience.astro     # /experience → 工作經歷
│   │   ├── skills.astro         # /skills → 技能專長
│   │   ├── photography.astro    # /photography → 攝影藝廊
│   │   ├── contact.astro        # /contact → 聯絡我
│   │   └── 404.astro            # 404 錯誤頁
│   └── styles/
│       └── global.css           # 全域樣式（reset、字型、utilities、keyframes）
├── docs/
│   └── spec.md                  # 本規格書
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions CI/CD → Vercel
├── astro.config.mjs             # Astro 設定（Tailwind 整合）
├── tailwind.config.mjs          # Tailwind 設計系統設定
├── tsconfig.json                # TypeScript strict 設定
└── package.json
3. 路由架構 (Multi-Page Routing)採用換頁式（MPA） 導覽設計，每個功能區塊為獨立靜態頁面：路由頁面主要元件/關於我Hero.astro/experience工作經歷ExperienceTimeline.astro/skills技能專長CoreSkills.astro/photography攝影藝廊MasonryGrid.astro/contact聯絡我ContactForm.astro/404404 錯誤—4. 核心資料源 Schema 補全此部分已與 2026.07.15 的 PDF 履歷完全同步對齊。4.1 東南旅行社經歷數據 (01-settour.ts)TypeScriptimport type { Experience } from '../models/experience.model';

export const settourExperience: Experience = {
  id: "settour",
  company: "東南旅行社股份有限公司",
  department: "數位數據發展本部通路營銷部",
  title: "課長兼資深研發工程師",
  period: "2024.07 - 2025.12",
  summary: "統籌集團前台數位產品體驗升級、核心營運中台重構，並全權主導企業級 AI 與自動化技術 (Low-Code) 的架構自建與落地。",
  details: [
    {
      category: "核心數據中台與 AI 標籤工程",
      items: [
        "主導核心旅遊資訊與 POI 之基礎資料庫模組化與 Schema 設計。",
        "實作跨系統異質資料清洗與 ETL 流程，並引入 AI 文本分類模型進行自動化貼標，建立高可用性之結構化數據中台。"
      ]
    },
    {
      category: "AI 基礎建設自建與效能調優",
      items: [
        "負責架設與部署地端開源 AI 語言模型，針對推理延遲與硬體資源消耗進行基準測試。",
        "獨立自建企業級 n8n Server 系統，透過低代碼自動化流程串接內部系統與 AI Agent，有效分流核心後端系統負載。"
      ]
    },
    {
      category: "高彈性 CMS 後台與多通路 CRM 系統開發",
      items: [
        "設計支援官網「拖拉式版塊」的動態資料結構與 RESTful API。",
        "重構內部自動發送訊息系統，將簡訊/Email/LINE 訊息調用邏輯高度抽象化與模組化，建立規格化排程管理機制，並串接 LINE Bot 智能客服機器人 API。"
      ]
    },
    {
      category: "技術影響力與團隊賦能",
      items: [
        "針對內部技術團隊舉辦技術分享與工作坊，主講 Data-Driven 系統架構設計、AI Agent 實務落地架構，並主持 n8n 自動化流程開發教育訓練。"
      ]
    }
  ]
};
4.2 傑騰智能經歷數據 (02-tao-info.ts)TypeScriptimport type { Experience } from '../models/experience.model';

export const taoInfoExperience: Experience = {
  id: "tao-info",
  company: "傑騰智能 TAO Info",
  department: "智能產品開發部",
  title: "技術主管 / 研發經理",
  period: "2019.11 - 2024.06",
  summary: "管理 5-8 人軟體研發團隊，主導核心 B2B 智慧產品之系統技術方案、資料結構設計與代碼質量審查。",
  management: {
    leadership: "帶領 5-8 人軟體研發團隊。負責核心 B2B 智慧化資料平台之系統架構、資料管線與異質資料結構設計。定期執行 1-on-1 會議與績效評估，落實 Code Review 機制以提升團隊程式碼品質。",
    clientSLA: "主導核心客戶（包含大型醫院、製造廠）的前期需求訪談、架構評估與技術售後服務。負責將客戶端複雜的商業指標轉化為工程開發目標，並親自執行產品導入時的教育訓練，確保高標準的客戶滿意度（SLA）。",
    devops: "全面落實 API-First 設計規範，運用 Docker / Docker Compose 建立標準化開發環境，並導入 Kubernetes 進行容器編排管理；規劃 GitLab 分支策略，設計 Jenkins Pipeline 實現全自動化 CI/CD 工作流，使團隊部署效率提升 40% 以上。"
  },
  projects: [
    {
      title: "AI 建模與管理平台 (AIoT & MLOps)",
      highlight: "主導智慧製造 AIoT 數據採集與分析平台。整合 Apache Spark 分散式運算平台，規劃高效能 ETL 資料流架構與動態資料處理節點。實現在模型出現偏差時自動重新訓練新模型並快速部署到生產環境的 MLOps 自動化流程，大幅降低維運成本。",
      metrics: [
        { label: "資料吞吐", value: "GB~TB 級" },
        { label: "維運成本降低", value: "80%" }
      ],
      techStack: ["Apache Spark", "ETL", "MLOps", "Queue/Cache", "Docker"]
    },
    {
      title: "睡眠中止症居家監控系統",
      highlight: "負責連線伺服器後端架構維運。針對高密度音訊資料流，導入 Kubernetes Auto-scaling (自動擴展) 與負載平衡機制，確保高峰期低延遲傳輸與高可用性。",
      metrics: [
        { label: "併發吞吐", value: "同時百人以上即時音訊" },
        { label: "延遲", value: "<100ms" },
        { label: "可用性 SLA", value: "99.9%" }
      ],
      techStack: ["Kubernetes", "Auto-scaling", "Load Balancing", "Time-Series DB"]
    },
    {
      title: "LLM 智能助理系統 (Python & 分散式架構)",
      highlight: "基於 Python 與分散式後端架構，整合 GPT 核心模型與 Prompt 最佳化管理。重構與優化資料交換流程，大幅縮短原先非同步處理的等待時間。",
      metrics: [
        { label: "處理耗時", value: "1~3工作天 ➔ 5秒內" }
      ],
      techStack: ["Python", "GPT API", "Prompt Engineering", "Distributed Backend"]
    },
    {
      title: "藥品影像辨識檢核系統",
      highlight: "設計高相容性 RESTful API 與資料介接方案。在完全不改動醫院既有核心流程的前提下，將實體機台影像與處方箋數據無縫嵌入院方檢核流程。",
      metrics: [
        { label: "處理時間限制", value: "15秒內" },
        { label: "錯判率", value: "低於 0.5%" }
      ],
      techStack: ["RESTful API", "Data Integration", "Image Processing"]
    }
  ]
};
4.3 宏碁經歷數據 (03-acer.ts)TypeScriptimport type { Experience } from '../models/experience.model';

export const acerExperience: Experience = {
  id: "acer",
  company: "宏碁股份有限公司 (駐點)",
  title: "Senior Backend Engineer",
  period: "2019.03 - 2019.10",
  summary: "參與 Acer Global ERP 後端管理系統之架構重構，導入現代化技術棧與運維自動化流程。",
  details: [
    {
      category: "大型企業 ERP 系統架構重構",
      items: [
        "將舊有系統從 JBoss Seam 全數翻修重寫為現代化 Java MVC 架構，大幅提升系統執行效率與可維護性。"
      ]
    },
    {
      category: "技術資產沉澱",
      items: [
        "負責編寫完整的系統重構技術開發文件，並執行團隊代碼審查 (Code Review) 以確保改版後的代碼質量。"
      ]
    },
    {
      category: "自動化運維",
      items: [
        "參與 CI/CD 自動化部署流程之建置與調優。"
      ]
    }
  ]
};
4.4 聯合通商經歷數據 (04-ebizprise.ts)TypeScriptimport type { Experience } from '../models/experience.model';

export const ebizpriseExperience: Experience = {
  id: "ebizprise",
  company: "聯合通商科技 (天津) 有限公司 eBizprise Inc",
  title: "Senior Full Stack / Backend Engineer",
  period: "2017.03 - 2018.11",
  summary: "負責高可用性微服務架構管理與前端現代化轉型。",
  details: [
    {
      category: "微服務架構開發與維護",
      items: [
        "使用 Java Spring Boot 開發高可用性、高效能與低延遲的 RESTful API。"
      ]
    },
    {
      category: "前端現代化轉型",
      items: [
        "負責前端系統開發，將核心介面導入 Vue.js 框架，大幅提升使用者互動體驗。"
      ]
    },
    {
      category: "軟體工程最佳實踐",
      items: [
        "導入 Jenkins CI/CD 自動化部署流程，編寫完整系統開發文件，並實作端到端自動化測試，確保系統交付質量。"
      ]
    }
  ]
};
4.5 中央研究院經歷數據 (05-sinica.ts)TypeScriptimport type { Experience } from '../models/experience.model';

export const sinicaExperience: Experience = {
  id: "sinica",
  company: "中央研究院 RNAi Core",
  title: "Full Stack Web Programmer / Data Engineer",
  period: "2009.12 - 2016.03",
  summary: "主導核心實驗室網站與資料庫重構，專責大規模基因數據運算與伺服器資訊安全維護。",
  details: [
    {
      category: "核心實驗室網站與資料庫重構",
      items: [
        "主導核心實驗室官網全面重構，成功將舊型 ASP 架構全數重寫為 Apache Wicket 與 JSP 架構，大幅強化系統穩定度。"
      ]
    },
    {
      category: "大規模資料工程",
      items: [
        "負責管理核心實驗室資料庫，處理與調優大規模基因數據運算。"
      ]
    },
    {
      category: "資訊安全維護",
      items: [
        "專責核心伺服器之網路安全維護、漏洞補強與日常系統故障排除。"
      ]
    }
  ]
};
4.6 海外 Working Holiday 經歷數據 (06-workingholiday.ts)這是最能展現你個人特質、外語能力與生活美學視野的板塊：TypeScriptexport interface WorkingHoliday {
  id: string;
  country: string;
  company: string;
  title: string;
  period: string;
  achievements: string[];
}

export const workingHolidayExperiences: WorkingHoliday[] = [
  {
    id: "wh-germany",
    country: "德國 Germany (Jannowitz Center Berlin)",
    company: "Jannowitz Center Berlin",
    title: "Salesperson",
    period: "2016.03 - 2017.03",
    achievements: [
      "深度了解歐洲當地資訊產業生態與工作文化。",
      "兼職紀念品銷售，鍛鍊德語及跨文化溝通能力。",
      "周遊歐洲多國，進行風景攝影創作，沉澱個人美學與視野。"
    ]
  },
  {
    id: "wh-usa",
    country: "美國 USA (Chicago)",
    company: "Six Flags Great America in Chicago",
    title: "Restaurant Staff",
    period: "2008.06 - 2008.10",
    achievements: [
      "於遊樂園內餐廳 Crazy Buffalo Saloon 擔任餐飲服務人員。",
      "置身全英語工作環境，有效提升外語實戰表達能力並深度遊歷美國。"
    ]
  }
];
5. SEO 與 AIO（AI 搜尋優化）規格5.1 SEOMeta 元件src/components/common/SEOMeta.astro 統一管理所有 <head> meta。5.2 JSON-LD 結構化資料每頁注入 Person 類型 Schema，確保 Google 爬蟲與 AI Agent (ChatGPT/Gemini/Perplexity) 能精準建立實體關聯：JSON{
  "@context": "[https://schema.org](https://schema.org)",
  "@type": "Person",
  "name": "Ren Chen (陳厚任)",
  "jobTitle": "Software Architect / Technical Lead",
  "email": "a19850728@gmail.com",
  "url": "[https://renchen.dev](https://renchen.dev)",
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Chinese Culture University (PCCU)",
    "department": "Department of Computer Science"
  },
  "knowsLanguage": ["Chinese", "English", "German"],
  "knowsAbout": [
    "Software Architecture", "Java Spring Boot", "Python Backend Development",
    "Kubernetes & Docker", "DevOps & CI/CD", "Data Engineering", "Apache Spark",
    "ETL", "MLOps", "AI Implementations", "Microservices", "System Design",
    "n8n Low-Code Automation", "LLM Deployment"
  ]
}
5.3 關鍵字矩陣 (Target Keywords)為了完美配合你 PDF 的強勢實績，我們更新並補強關鍵字：分類核心關鍵字身分與領導Tech Lead, Software Architect, Technical Lead, Technical Manager, Team Management, Code Review後端與架構Java Spring Boot, Python backend, RESTful API, System Architecture, Microservices, POI Database運維與雲原生Docker, Kubernetes, CI/CD, Jenkins Pipeline, GitLab Flow, DevOps infrastructure資料與 AIData Pipeline, Apache Spark, ETL, MLOps, LLM deployment, AI automation, n8n Server, AI Agent, Auto-tagging6. 部署與 CI/CD 流程git push origin main
        ↓
GitHub Actions (.github/workflows/deploy.yml)
        ↓
  npm ci → npm run build → Vercel Deploy --prod
項目設定Node 版本18（本機開發）/ 建議 Vercel 設為 20+Build 指令npm run build（Astro SSG → dist/ 靜態檔案）部署目標Vercel（透過 amondnet/vercel-action@v25）所需 SecretsVERCEL_TOKEN / VERCEL_ORG_ID / VERCEL_PROJECT_ID7. 待辦與未來擴充優先度項目說明🔴 高GitHub Secrets完成設定 Vercel 的 Org ID & Project ID🔴 高履歷檔放 public將 RenChen20260708.pdf 放入 public/ 提供直接下載🟢 完攝影照片(已完成) 將 10 張 FB 上的 Canon 5DMarkIII 攝影作品匯入 public/photos/🟢 完個人大頭照(已完成) 已將大頭照加入首頁 Hero 區塊🟢 低語言能力標籤在官網適當處呈現：English (中階)、German (初階)