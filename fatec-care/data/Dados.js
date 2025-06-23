export const getSimulatedHealthData = () => ({
 steps: Math.floor(Math.random(10) * 1000),
 sleepHours: Math.floor(Math.random() * 900 + 100) / 10,
 hydration: Math.floor(Math.random() * 900 + 100) / 100,
 heartRate: Math.floor(Math.random() * (120 - 60 + 1)) + 60
})
