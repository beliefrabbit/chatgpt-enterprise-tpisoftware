import React from 'react';
import { ShieldCheck, Database, Rocket, BookOpen, Users, LayoutTemplate, Terminal, Megaphone, Briefcase, Code, FileText, PieChart, Scale } from 'lucide-react';

export const NAV_LINKS = [
  { label: '核心訴求', href: '#value-prop' },
  { label: '顧問服務', href: '#services' },
  { label: '應用場景', href: '#use-cases' },
];

export const VALUE_PROPS = [
  {
    id: 1,
    title: '資安承諾',
    description: '企業級的隱私防護，確保您的商業機密與客戶資料絕對安全無虞。',
    subtext: '絕不使用您的資料進行訓練',
    icon: <ShieldCheck className="w-8 h-8 text-tpi" />,
    colSpan: 'md:col-span-1',
  },
  {
    id: 2,
    title: '數據價值',
    description: '串聯破碎的企業數據，將資料轉化為可執行的商業洞察。',
    subtext: '打破資料孤島，釋放價值',
    icon: <Database className="w-8 h-8 text-tpi-light" />,
    colSpan: 'md:col-span-1',
  },
  {
    id: 3,
    title: '生產力',
    description: '讓 AI 成為每位員工的隨身特助，減少重複性工作，專注於高價值的創新與決策。',
    subtext: '提升團隊長期生產力',
    icon: <Rocket className="w-8 h-8 text-openai" />,
    colSpan: 'md:col-span-1',
  },
];

export const SERVICES = [
  {
    id: 'onboarding',
    title: '導入資源包',
    description: '提供最佳實務手冊 (Playbook)、客製化教學訓練，以及針對行銷、HR、IT 等不同角色的導向課程，讓團隊無痛上手。',
    icon: <BookOpen className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80',
    features: ['專業顧問團隊陪跑', '企業場景客製化調整'],
  },
  {
    id: 'workshops',
    title: '流程優化工作坊',
    description: '顧問帶領團隊盤點現有流程，手把手打造專屬的 AI 工作流 (AI Workflow)，讓團隊具備自主優化能力，而不僅僅是使用工具。',
    icon: <Users className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop&q=80',
    features: ['流程拆解與優化技術移轉', '客製化AI解決方案'],
  },
  {
    id: 'modernization',
    title: '資訊現代化策略',
    description: '不只是導入工具，TPI 顧問協助您評估整體資訊架構，制定企業現代化轉型策略，確保 AI 能與現有系統完美整合。',
    icon: <LayoutTemplate className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&q=80',
    features: ['企業級資訊架構顧問', 'AI資安治理策略與科技'],
  },
];

export const TEAMS = [
  { name: '工程研發', icon: <Code className="w-5 h-5" />, desc: '代碼生成與重構' },
  { name: '行銷團隊', icon: <Megaphone className="w-5 h-5" />, desc: '文案創意與社群' },
  { name: '營運管理', icon: <Briefcase className="w-5 h-5" />, desc: '流程自動化' },
  { name: '資訊科技', icon: <Terminal className="w-5 h-5" />, desc: '系統維運助手' },
  { name: '產品設計', icon: <LayoutTemplate className="w-5 h-5" />, desc: '需求分析與發想' },
  { name: '財務會計', icon: <PieChart className="w-5 h-5" />, desc: '數據分析報表' },
  { name: '法律合規', icon: <Scale className="w-5 h-5" />, desc: '合約審閱輔助' },
  { name: '業務銷售', icon: <FileText className="w-5 h-5" />, desc: '客戶信件撰寫' },
];

export const USE_CASES = [
  {
    id: 'engineering',
    name: '工程',
    title: '全方位加速開發流程',
    description: '將 ChatGPT 連接至您的存放庫，以快速探索新程式庫、找出關鍵待改善區域，加快功能開發速度。將程式編寫任務交由 AI 處理，負責產生、除錯及改善程式碼，進而縮短開發周期，加快編碼速度。',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 'marketing',
    name: '行銷',
    title: '創造引人入勝的行銷內容',
    description: '從社群媒體貼文到電子郵件行銷，AI 助您快速產出高品質文案。分析市場趨勢、優化 SEO 策略，並針對不同受眾客製化內容，大幅提升行銷團隊的創意產出效率。',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    id: 'operations',
    name: '營運',
    title: '簡化流程，提升營運效率',
    description: '自動化重複性任務，如數據整理、報告生成和流程文件撰寫。透過 AI 分析營運數據，找出瓶頸並提供優化建議，讓團隊專注於策略性決策。',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
  },
  {
    id: 'it',
    name: '資訊科技',
    title: '智能化系統維運與支援',
    description: '快速診斷系統問題、產生技術文件、協助故障排除。AI 可協助監控系統健康狀態、自動化部署流程，並提供 24/7 的技術支援建議。',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
  },
  {
    id: 'product',
    name: '產品',
    title: '加速產品創新與迭代',
    description: '從需求收集到功能設計，AI 協助快速產出 PRD、使用者故事和產品規格。分析用戶反饋、競品研究，並提供數據驅動的產品決策建議。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    id: 'finance',
    name: '財務',
    title: '智能財務分析與報表',
    description: '自動化財務報表生成、預算分析和趨勢預測。快速處理大量財務數據，產出清晰的視覺化圖表和洞察報告，協助財務決策。',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
  },
  {
    id: 'legal',
    name: '法律條款',
    title: '高效合約審閱與法務支援',
    description: '快速審閱合約條款、識別潛在風險點、協助法律文件撰寫。AI 可協助比對標準條款、提供法規遵循建議，大幅提升法務團隊效率。',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
  },
  {
    id: 'sales',
    name: '銷售',
    title: '提升銷售效能與客戶關係',
    description: '快速生成個性化的銷售提案、客戶郵件和簡報內容。分析客戶需求、優化溝通策略，並協助準備會議資料，讓業務團隊更專注於建立關係。',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&q=80',
  },
];
