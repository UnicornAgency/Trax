import { union, merge } from 'lodash'
import { Resources, defaultState } from 'models/app'
import * as IssueModel from 'models/issue'
import * as GithubModel from 'models/github'

export const updateIssues = (payload: IssueModel.Issue[]): IssueModel.IssueAction => ({
  type: IssueModel.ISSUES.UPDATE,
  payload: payload.map(IssueModel.normalizeIssue)
})

export const updateIssue = (payload: IssueModel.Issue): IssueModel.IssueAction => ({
  type: IssueModel.ISSUE.UPDATE,
  payload
})

export const issuesReducer = (state: Resources = defaultState, action: IssueModel.IssueAction): Resources => {
  const { type, payload } = action

  if (!type || !payload) return state

  const newState = { ...state }

  switch (type) {
    case GithubModel.GITHUB.ISSUE.REQUEST:
      newState.isLoading = true
      return newState

    case IssueModel.ISSUES.UPDATE:
      (payload as IssueModel.Issue[]).forEach(r => {
        newState.data[r.key] = merge(newState.data[r.key], r)
        newState.keys = union(newState.keys, [r.key])
      })
      newState.isLoading = false
      break

    case IssueModel.ISSUE.UPDATE:
      let issue = payload as IssueModel.Issue
      newState.keys = union(newState.keys, [issue.key])
      newState.data[issue.key] = merge(newState.data[issue.key], payload)
      break

    default:
      return state
  }

  return newState
}
