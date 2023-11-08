import { getCurrentDate } from "./getCurrentDate"

const helperWithCorrectData = (dayPlus: number = 0): string => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + dayPlus);
  const formattedDate = currentDate.toLocaleDateString();
  const parts = formattedDate.split(".");
  return `${parts[2]}-${parts[1]}-${parts[0]}`;
}

describe('getCurrentDate', () => {
  test('return the correct date', () => {
    const date = helperWithCorrectData()
    const actualDate = getCurrentDate(0)
    expect(actualDate).toBe(date)
  }),

    test('return 30 days test', () => {
      const date = helperWithCorrectData(30)
      const actualDate = getCurrentDate(30)
      expect(actualDate).toBe(date)
    }),

    test('return 90 days test', () => {
      const date = helperWithCorrectData(90)
      const actualDate = getCurrentDate(90)
      expect(actualDate).toBe(date)
    })

  test('return 366 days test', () => {
    const date = helperWithCorrectData(366)
    const actualDate = getCurrentDate(366)
    expect(actualDate).toBe(date)
  })
})
