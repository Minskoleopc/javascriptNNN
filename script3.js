// switch case 

let city = "nagpur"

// switch(city){
//     case 'pune':
//         console.log("MH")

//     case 'jaipur':
//         console.log("RJ")

//     case 'indore':
//         console.log("MP")

//     default:
//         console.log('No city found')
// }

// switch (city) {
//     case 'pune':
//         console.log("MH")
//         break

//     case 'jaipur':
//         console.log("RJ")
//         break

//     case 'indore':
//         console.log("MP")
//         break

//     default:
//         console.log('No city found')
// }



switch (city) {
    case 'pune':
    case 'nagpur':
        console.log("MH")
        break

    case 'jaipur':
    case 'udaipur':
        console.log("RJ")
        break

    case 'indore':
    case 'bhopal':
        console.log("MP")
        break

    default:
        console.log('No city found')
}