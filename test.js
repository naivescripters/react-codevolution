const persons = [
    {
        id: 1,
        name: 'Bruce',
        age: 30,
        skill: 'React'
    },
    {
        id:2,
        name: 'Clark',
        age: 30,
        skill: 'Angular'
    },
    {
        id: 3,
        name: 'Diana',
        age: 30,
        skill: 'vue js'
    }
]

const personList = persons.map(person =>person)

console.log(personList);