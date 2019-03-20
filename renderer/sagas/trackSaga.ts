import { put, all, call, takeLatest } from 'redux-saga/effects'
import { RequestOptions } from '@octokit/rest'
import { fetchCreateLabel } from 'services/githubService'
import { updateTrack } from 'controllers/trackController'
import { updateUsers } from 'controllers/userController'
import { createAlert } from 'controllers/alertController'
import { updateIssues } from 'controllers/issueController'
import { normalizePayload } from 'models/app'
import { TrackAction } from 'models/track'
import { User } from 'models/user'
import { Issue } from 'models/issue'
import { TRACK } from 'models/track'
import { LABELS } from 'config/constants'
import { octokit } from 'models/github'

const labelRequests = (): RequestOptions[] => {
  const requests: RequestOptions[] = []

  Object.keys(LABELS).forEach(key => {
    requests.push({
      method: 'POST',
      headers: {
        Accept: 'application/vnd.github.symmetra-preview+json',
      },
      body: {
        name: LABELS[key].name,
        color: LABELS[key].color
      }
    })
  })

  return requests
}

function* watchCreateTrack(action: TrackAction) {
  try {
    yield all(labelRequests().map(r => call(fetchCreateLabel, action.payload.ident, r)))
    yield call(watchReloadTrack, action)
  }
  catch (e) {
    yield put(createAlert({
      key: 'watchCreateTrackError',
      status: 'error',
      message: `Error creating track: ${e.message}`,
      dismissable: true
    }))
  }
}

function* watchReloadTrack({ payload }: TrackAction) {
  const [owner, repo] = payload.ident.split('/')

  try {
    const users = yield call(octokit.issues.listAssignees, { owner, repo, per_page: 100 })
    const issues = yield call(octokit.issues.listForRepo, { owner, repo, per_page: 100 })
    const normalizedUsers = users.data.map((user: User) => normalizePayload({ ...user, ident: payload.ident }))
    const normalizedIssues = issues.data.map((issue: Issue) => normalizePayload({ ...issue, ident: payload.ident }))

    yield put(updateUsers(normalizedUsers))
    yield put(updateIssues(normalizedIssues))

    yield put(updateTrack({
      ...payload,
      userIds: normalizedUsers.map((user: User) => user.nodeId),
      issueIds: normalizedIssues.map((issue: Issue) => issue.nodeId)
    }))
  }
  catch (e) {
    yield put(createAlert({
      key: 'watchReloadTrackError',
      status: 'error',
      message: `Error reloading track: ${e.message}`,
      dismissable: true
    }))
  }
}

export default function* trackSaga() {
  yield takeLatest(TRACK.CREATE, watchCreateTrack)
  yield takeLatest(TRACK.RELOAD, watchReloadTrack)
}
