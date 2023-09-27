const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤',
    isHunter: false,
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤',
    isHunter: false,
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏤',
    isHunter: false,
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥',
    isHunter: false,
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
    isHunter: false,
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
    isHunter: false,
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏭',
    isHunter: false,
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '🏭',
    isHunter: false,
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏭',
    isHunter: false,
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
    isHunter: false,
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
    isHunter: false,
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
    isHunter: false,
}
]

// for (let i = 0; i < arrayOfPeople.length; i++) {
//     const people = arrayOfPeople[i]
//     console.log(people.name)

// }

// people.forEach((people) => {
//     console.log(people.name)
// })

// function drawPeopleAtBank() {
//     let stringOfEmojis = ''

//     const peepsAtBank = people.filter(people => people.location == '🏤')
//     console.log(peepsAtBank)
// }

// drawPeopleAtBank()

function drawPeople() {
    locations.forEach(location => {

        // console.log(location)

        const personIsAtArea = people.filter(person => person.location == location)

        // console.log('people are here', peopleIsAtArea)

        let stringOfEmojis = ''

        personIsAtArea.forEach(people => stringOfEmojis += people.picture)

        // console.log(location, stringOfEmojis)

        const locationElement = document.getElementById(location)

        locationElement.innerText = stringOfEmojis
    })
}

function changePeopleLocations() {
    people.forEach(person => {
        if (person.picture == '🦇') {
            return
        }

        const randomLocationIndex = Math.floor(Math.random() * locations.length)

        const randomLocation = locations[randomLocationIndex]

        person.location = randomLocation
    })
}

function makeAHunter() {
    const randomPersonIndex = Math.floor(Math.random() * people.length)

    const randomPerson = people[randomPersonIndex]

    randomPerson.isHunter = true
}

function vampireAttackBank() {
    people.forEach(person => {
        if (person.location = "🏤") {

            person.picture = "🦇"
        }
        document.getElementById("🏤").innerText = person.picture
    })
}

function vampireAttackHospital() {
    people.forEach(person => {
        if (person.location = "🏥") {

            person.picture = "🦇"
        }
        document.getElementById("🏥").innerText = person.picture
    })
}

function vampireAttackFactory() {
    for (let i = 0; i < people.length; i++) {
        let person = people[i]

        let factoryPeople = people.filter(person => people.location = '🏭')

        factoryPeople = '🦇'

        document.getElementById("🏭").innerText = factoryPeople
    }

}
function vampireAttackLibrary() {

}
function vampireAttackPoliceStation() {

}





// HunterAttack()
// changePeopleLocations()
drawPeople()
makeAHunter()
