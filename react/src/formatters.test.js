import { formatDuration } from './formatters'

describe('formatters', function() {
  it('formatDuration', function() {
    expect(formatDuration(100)).toBe('2 mins')
    expect(formatDuration(600)).toBe('10 mins')
    expect(formatDuration(6000)).toBe('100 mins')
  })
})
