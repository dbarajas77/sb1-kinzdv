import { 
  Calculator,
  Settings,
  FileText,
  BarChart2,
  DollarSign,
  TrendingUp,
  FileSpreadsheet,
  Users,
  FileSearch,
  Component,
  LayoutDashboard,
  User,
  Grid,
  MessageSquare
} from 'lucide-react';

export const mainMenuConfig = [
  ['Dashboard', LayoutDashboard, '/dashboard'],
  ['Reports', FileText, '/rda-software'],
  ['Components', Component, '/rda-software/components'],
  ['Client', User, '/rda-software/client'],
  ['User Management', Users, '/rda-software/users'],
  ['Categories', Grid, '/rda-software/categories'],
  ['Comments', MessageSquare, '/rda-software/comments']
] as const;

export const reportNavConfig = [
  ['Calculations', Calculator, '/rda-software/calculations'],
  ['Adjustments', Settings, '/rda-software/adjustments'],
  ['Report Summary', FileText, '/rda-software/report-summary'],
  ['Component Summary', Component, '/rda-software/component-summary'],
  ['Funding Status Report', DollarSign, '/rda-software/funding-status'],
  ['Cash Flow Projections', TrendingUp, '/rda-software/cash-flow'],
  ['Annual expenditures', FileSpreadsheet, '/rda-software/annual-expenditures'],
  ['Graphs', BarChart2, '/rda-software/graphs'],
  ['Detail Report / Category', FileSearch, '/rda-software/detail-report'],
  ['Detail Index Report', FileText, '/rda-software/detail-index'],
  ['Owner Summary', Users, '/rda-software/owner-summary']
] as const;