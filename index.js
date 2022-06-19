const meals = [
    'Mediterranean Salad',
    'Double Quarter Pounder',
    'Lamb Steak',
    'KFC Bargain Bucket',
    'Shish Kebab',
    'Dominos',
    'Rainbow Salad',
  ]

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  const randomizer = item => {
    return Math.floor(Math.random() * item.length)
  }

const day = days[randomizer(days)]
const breakfast = meals[randomizer(meals)]
const lunch = meals[randomizer(meals)]
const dinner = meals[randomizer(meals)]
