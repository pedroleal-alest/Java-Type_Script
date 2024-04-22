function declareWinner(fighter1, fighter2, firstAttacker) {
  let contf1 = 0
  let contf2 = 0

  while(fighter1.health > 0){
    fighter1.health -= fighter2.damagePerAttack
    contf2++
  }
  while(fighter2.health > 0){
    fighter2.health -= fighter1.damagePerAttack
    contf1++
  }
  
  if (contf1 == contf2) {return firstAttacker}
  else if (contf1 < contf2) {return fighter1.name}
  return fighter2.name
}

const test1 = declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4),"Lew")
console.log(test1 + " --> Lew")

const test2 = declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")
console.log(test2 + " --> Harry")

const test3 = declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4,), "Harry")
console.log(test3 + " --> Harald")

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() { return this.name; }
}

// declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
// lew - h10, d2 - lew->
// harry - h5, d2
// 
// Lew attacks Harry; Harry now has 3 health.
// Harry attacks Lew; Lew now has 6 health.
// Lew attacks Harry; Harry now has 1 health.
// Harry attacks Lew; Lew now has 2 health.
// Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.