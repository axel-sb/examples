const numbers = [1, 4, 9, 16]
const newNumbers = numbers.map(function (number) {
    return number * 2
})

console.log(newNumbers)

/*
/* -------------------------------------------------
*/

const { a = 10, b = 5 } = { a: 3 };

console.log(a) // 3
console.log(b) // 5

/*
/* -------------------------------------------------
*/

let a, b
;({ a, b } = { a: 1, b: 2 })

console.log(a) // 1
console.log(b) // 2


/*
/* -------------------------------------------------
*/

const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe',
    },
}

function userId({id}) {
  return id;
}

console.log(userId(user)); // 42

console.log(user.id)

userId()

console.log(id)

/*
/* -------------------------------------------------
*/

const state = { counter: 1, list: ['a', 'b'] };

// rest destructuring
const { list, ...rest } = state;

console.log(rest);
// output: { counter: 1 }
console.log(list);
// output: ['a', 'b']

