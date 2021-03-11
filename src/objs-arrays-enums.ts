enum Role { ADMIN, READ_ONLY, AUTHOR };

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// }
const person = {
    name: 'Bruno',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}
// person.role.push('admin'); //TS doesn't catch this
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if(person.role === Role.ADMIN){
    console.log('isADMIN');
    
}