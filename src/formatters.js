import moment from 'moment'

export function formatDuration(duration) {
  return Math.ceil(moment.duration(duration, 'seconds').asMinutes()) + ' mins'
}
