import { Timer, TimerEntry } from '@/models/Timer'

export const timerClock = (duration: number, hideEmpty?: boolean): string => {
  let hours = ('0' + Math.floor(duration / (60 * 60)).toString()).slice(-2)
  let minutesDivisor = duration % (60 * 60)
  let minutes = ('0' + Math.floor(minutesDivisor / 60).toString()).slice(-2)
  let formatted = `${hours}:${minutes}`

  return duration > 0 ? formatted : hideEmpty ? '' : '00:00'
}

export const timerDuration = (timer: Timer, format?: boolean): number | string => {
  const { entries } = timer
  let duration = entries.length > 0 ? entries.reduce((prev: number, curr: TimerEntry) => prev + curr.duration, 0) : timer.duration

  return format ? timerClock(duration, true) : duration
}

export const timersDuration = (timers: Timer[], format?: boolean): number | string => {
  let duration = timers.reduce((prev: number, curr: Timer) => prev + (timerDuration(curr) as number), 0)

  return format ? timerClock(duration, true) : duration
}

export const secondsLapsed = (start: Date): number => {
  return Math.floor((Date.now() - start.getTime()) / 1000)
}