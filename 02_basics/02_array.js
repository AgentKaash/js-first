const mcu_heros = ["Ironman", "Spiderman", "thor"]
const dc_heros = ["superman", "Batman", "Flash"]

// mcu_heros.push(dc_heros)

// console.log(mcu_heros);
// const allHeros = mcu_heros.concat(dc_heros)
// console.log(allHeros);



// const all_new_heros = [...mcu_heros, ...dc_heros] // ... -->sprade operator

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// console.log(Array.isArray("Kaash"))
// console.log(Array.from("kaash"))
// console.log(Array.from({name:"kaash"})) // null array-->intresting


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));


