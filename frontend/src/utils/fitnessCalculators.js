export function calculateBMI(heightCm, weightKg) {
  const heightM = heightCm / 100
  if (!heightM || !weightKg) return 0
  return weightKg / (heightM * heightM)
}

export function getBMICategory(bmi) {
  if (bmi < 18.5) return { category: 'Underweight', advice: 'Aim to eat balanced meals with healthy calories.' }
  if (bmi < 25) return { category: 'Normal', advice: 'Keep up your routine and focus on mobility.' }
  if (bmi < 30) return { category: 'Overweight', advice: 'Increase activity and prioritize lean proteins.' }
  return { category: 'Obese', advice: 'Consult with a healthcare professional for a safe plan.' }
}

export function calculateBMR({ age, gender, height, weight }) {
  if (!age || !height || !weight) return 0
  if (gender === 'female') {
    return 655 + 9.6 * weight + 1.8 * height - 4.7 * age
  }
  return 66 + 13.7 * weight + 5 * height - 6.8 * age
}

export function activityMultiplier(level) {
  const map = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    intense: 1.9,
  }
  return map[level] || 1.2
}

export function calculateCalories(bmr, multiplier) {
  if (!bmr || !multiplier) return 0
  return bmr * multiplier
}
