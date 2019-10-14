import { ActivePageValues } from '@/models/setting'

interface Swimlane {
  label: string
  name: Lane
  color: string
}

interface Swimlanes {
  [key: string]: Swimlane
}

export type Lane = 'backlog' | 'sprint' | 'started' | 'review' | 'complete'

export interface Routes {
  [key: string]: {
    component: string
    name: ActivePageValues
    path: string
  }
}

export const IDENT = 'Trax'

export const COLORS = {
  blue: '3C7CB3',
  orange: 'F85E10',
  purple: '7C30D4',
  green: '5FB42F',
  yellow: 'F0CF0F',
  cyan: '48B1C6',
  teal: '51B294',
  red: 'B33C3C',
  pink: 'E068DB'
}

export const ROUTES: Routes = {
  welcome: {
    component: 'WelcomePage',
    name: 'welcome',
    path: '/welcome'
  },
  create: {
    component: 'CreatePage',
    name: 'create',
    path: '/create'
  },
  board: {
    component: 'BoardPage',
    name: 'board',
    path: '/board'
  },
  profile: {
    component: 'ProfilePage',
    name: 'profile',
    path: '/profile'
  },
  timers: {
    component: 'TimersPage',
    name: 'timers',
    path: '/timers'
  },
  invoices: {
    component: 'InvoicesPage',
    name: 'invoices',
    path: '/invoices'
  },
  settings: {
    component: 'SettingsPage',
    name: 'settings',
    path: '/settings'
  }
}

export const SWIMLANES: Swimlanes = {
  backlog: {
    label: 'Backlog',
    name: 'backlog',
    color: COLORS.pink
  },
  sprint: {
    label: 'Sprint',
    name: 'sprint',
    color: COLORS.cyan
  },
  started: {
    label: 'Started',
    name: 'started',
    color: COLORS.orange
  },
  review: {
    label: 'Review',
    name: 'review',
    color: COLORS.blue
  },
  complete: {
    label: 'Complete',
    name: 'complete',
    color: COLORS.green
  }
}

export const TYPES: LabelsType = {
  epic: {
    label: 'Epic',
    name: '---epic',
    color: 'A789F6'
  },
  story: {
    label: 'Story',
    name: '--story',
    color: 'C0ABF8'
  },
  feature: {
    label: 'Feature',
    name: '-feature',
    color: 'DBCEFD'
  },
  bug: {
    label: 'Bug',
    name: '-bug',
    color: 'DBCEFD'
  }
}

export type ScrumTypes = 'epic' | 'story' | 'feature' | 'bug'
export const scrumTypes = ['epic', 'story', 'feature', 'bug']

export const PRIORITY: LabelsType = {
  high: {
    label: 'High',
    name: '!!!',
    color: 'FF9898'
  },
  medium: {
    label: 'Medium',
    name: '!!',
    color: 'F7C6C6'
  },
  low: {
    label: 'Low',
    name: '!',
    color: 'FFE9E9'
  }
}

export const POINTS: LabelsType = {
  '1': {
    label: '1',
    name: '•',
    color: '51B294'
  },
  '3': {
    label: '3',
    name: '•••',
    color: '51B294'
  },
  '5': {
    label: '5',
    name: '•••••',
    color: '51B294'
  }
}

interface LabelsType {
  [key: string]: {
    label: string
    name: string
    color: string
  }
}

export const LABELS: LabelsType = {
  ...SWIMLANES,
  ...TYPES,
  ...PRIORITY,
  ...POINTS
}

export const LANES: Lane[] = Object.keys(SWIMLANES as Swimlanes).map((key: string) => (SWIMLANES[key] as Swimlane).name as Lane)

export const MICROSERVICE = {
  API: 'https://trax-server.herokuapp.com',
  GITHUB: {
    AUTH: '/github/auth'
  },
  GOOGLE: {
    AUTH: '/google/auth'
  }
}

export const GITHUB = {
  API: 'https://api.github.com/',
  HOST: 'https://github.com',
  CLIENT_ID: '67c705a18a7b8576a4c1',
  SCOPE: 'user,public_repo,repo,repo_deployment,notifications'
}
