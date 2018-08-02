import { Users, User } from 'models/user'
import { Labels } from 'models/label'
import { Milestone } from 'models/milestone'
import { Lane } from 'config/constants'

export enum ISSUE {
  REQUEST = 'trax/github/issues/REQUEST',
  SUCCESS = 'trax/github/issues/SUCCESS',
  FAILURE = 'trax/github/issues/FAILURE',
  UPDATE_REQUEST = 'trax/github/issue/UPDATE/REQUEST',
  UPDATE_SUCCESS = 'trax/github/issue/UPDATE/SUCCESS',
  UPDATE_FAILURE = 'trax/github/issue/UPDATE/FAILURE',
}

export interface Issue {
  ident: string
  lane: Lane
  id: number
  nodeId: string
  url: string
  repositoryUrl: string
  labelsUrl: string
  commentsUrl: string
  eventsUrl: string
  htmlUrl: string
  number: number
  state: string
  title: string
  body: string
  user: User
  labels: Labels
  assignee: User
  assignees: Users
  milestone: Milestone
  locked: boolean
  activeLockReason: string
  comments: number
  pullRequest: {
    url: string
    htmlUrl: string
    diffUrl: string
    patchUrl: string
  }
  closedAt: string | null
  createdAt: string | null
  updatedAt: string | null
}

export interface Issues {
  isLoading: boolean
  entities: {
    issues: {
      [key: number]: Issue
    }
  }
  result?: [number]
  nextPageUrl?: string
}

export interface IssuesAction {
  type: ISSUE
  payload?: Issues | Issue
  ident?: string
  from?: string
  to?: string
}

export const defaultState = {
  isLoading: false,
  entities: {
    issues: {}
  }
}
