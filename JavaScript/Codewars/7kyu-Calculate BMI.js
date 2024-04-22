function bmi(weight, height) {
    bmiv = weight / (height * height)

    if (bmiv <= 18.5) {
      return "Underweight"
    }

    else if (bmiv <= 25.0) {
      return "Normal"
    }

    else if (bmiv <= 30) {
      return "Overweight"
    }

    else {
      return "Obese"
    }
}