import { REPO, Repo, Repos, ReposAction, defaultState } from 'models/repo'

export const requestUserRepos = (): ReposAction => ({
  type: REPO.REQUEST,
})

export const requestOrgRepos = (login: string): ReposAction => ({
  type: REPO.REQUEST,
  login
})

export const receiveRepos = (payload: Repo[]): ReposAction => ({
  type: REPO.SUCCESS,
  payload
})

export const reposReducer = (state: Repos = defaultState, action: ReposAction): Repos => {
  const { payload, type } = action

  switch (type)
  {
    case REPO.REQUEST :
      return { ...state, isLoading: true }

    case REPO.SUCCESS :
      return payload ? { isLoading: false, entities: payload } : state

    default :
      return state
  }
}