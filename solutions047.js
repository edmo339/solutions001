var inputData = [
    {
        id: 1,
        title: 'hippo',
        faveFood: 'carrots'
    },
    {
        id: 2,
        title: 'Cat',
        faveFood: 'carrots'
    },
    {
        id: 3,
        title: 'ducks',
        faveFood: 'breadcrumbs'
    },
]

findAnimal = function() {
    const output = inputData.find(animal => animal.title === arguments[0]);
            return output .faveFood;
        }
 

console.log(findAnimal('hippo'))