import { union, merge } from 'lodash'
import * as IssueModel from 'models/issue'
import * as GithubModel from 'models/github'
import { Resources, defaultState } from 'models/app'

export const updateIssues = (payload: IssueModel.Issue[]): IssueModel.UpdateIssuesAction => ({
  type: IssueModel.ISSUES.UPDATE,
  payload
})

export const issuesReducer = (state: Resources = defaultState, action: IssueModel.UpdateIssuesAction): Resources => {
  const { type, payload } = action
  const newState = { ...state }

  switch (type) {
    case GithubModel.GITHUB.ISSUES.REQUEST :
      newState.isLoading = true
      return newState

    case IssueModel.ISSUES.UPDATE :
      (payload as IssueModel.Issue[]).forEach(r => {
        newState.data[r.key] = merge(newState.data[r.key], r)
        newState.keys = union(newState.keys, [r.key])
      })
      newState.isLoading = false
      break

    default:
      return state
  }

  return newState
}
