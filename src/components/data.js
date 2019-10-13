import React,{Component, createContext} from 'react'


import Bank from './Slike/bank.jpg'
import brankow from './Slike/brankow.jpg'
import bridge from './Slike/bridge.jpg'
import free from './Slike/free.jpg'
import gotik from './Slike/gotik.jpg'
import hype from './Slike/hype.png'
import kasina from './Slike/kasina.jpg'
import nostra from './Slike/nostra.jpg'
import river from './Slike/river.jpg'
import stefan from './Slike/stefan.jpg'

import bank1 from './Slike/Bank/bank1.jpg'
import bank2 from './Slike/Bank/bank2.jpg'
import bank3 from './Slike/Bank/bank3.jpg'
import bank4 from './Slike/Bank/bank4.jpg'

import brankow1 from './Slike/Brankow/brankow1.jpg'
import brankow2 from './Slike/Brankow/brankow2.jpg'
import brankow3 from './Slike/Brankow/brankow3.jpg'
import brankow4 from './Slike/Brankow/brankow4.jpg'

import bridge1 from './Slike/Bridge/bridge1.jpg'
import bridge2 from './Slike/Bridge/bridge2.jpg'
import bridge3 from './Slike/Bridge/bridge3.jpg'
import bridge4 from './Slike/Bridge/bridge4.jpg'

import free1 from './Slike/Freestyler/freestyler1.jpg'
import free2 from './Slike/Freestyler/freestyler2.jpg'
import free3 from './Slike/Freestyler/freestyler3.jpg'
import free4 from './Slike/Freestyler/freestyler4.jpg'

import gotik1 from './Slike/Gotik/gotik1.jpg'
import gotik2 from './Slike/Gotik/gotik2.jpg'
import gotik3 from './Slike/Gotik/gotik3.jpg'
import gotik4 from './Slike/Gotik/gotik4.jpg'

import hype1 from './Slike/Hype/hype1.jpg'
import hype2 from './Slike/Hype/hype2.jpg'
import hype3 from './Slike/Hype/hype3.jpg'
import hype4 from './Slike/Hype/hype4.jpg'

import kasina1 from './Slike/Kasina/kasina1.jpg'
import kasina2 from './Slike/Kasina/kasina2.jpg'
import kasina3 from './Slike/Kasina/kasina3.jpg'
import kasina4 from './Slike/Kasina/kasina4.jpg'

import nostra1 from './Slike/Nostra/nostra1.jpg'
import nostra2 from './Slike/Nostra/nostra2.jpg'
import nostra3 from './Slike/Nostra/nostra3.jpg'
import nostra4 from './Slike/Nostra/nostra4.jpg'

import river1 from './Slike/River/river1.jpg'
import river2 from './Slike/River/river2.jpg'
import river3 from './Slike/River/river3.jpg'
import river4 from './Slike/River/river4.jpg'

import stefan1 from './Slike/Stefan/stefan1.jpg'
import stefan2 from './Slike/Stefan/stefan2.jpg'
import stefan3 from './Slike/Stefan/stefan3.jpg'
import stefan4 from './Slike/Stefan/stefan4.jpg'

import random1 from './Slike/Random/random1.jpg'
import random2 from './Slike/Random/random2.jpg'
import random3 from './Slike/Random/random3.jpg'
import random4 from './Slike/Random/random4.jpg'
import random5 from './Slike/Random/random5.jpg'
import random6 from './Slike/Random/random6.jpg'
import random7 from './Slike/Random/random7.jpg'
import random8 from './Slike/Random/random8.jpg'
import random9 from './Slike/Random/random9.jpg'
import random10 from './Slike/Random/random10.jpg'
import random11 from './Slike/Random/random11.jpg'
import random12 from './Slike/Random/random12.jpg'


export const Data = createContext()


export class DataProvider extends Component{
state ={
    clubs: [
        {
            id:1,
            nameAbove: 'The-Bank',
            name: 'The Bank',
            slika: Bank,
            info: "Belgrade has become richer for another modern club, the CLUB THE BANK has been opened in the heart of the city. All fans of RnB sound will finally be able to find their refuge in Belgrade's nightlife, as The Bank will become the epicenter of good entertainment for all electronic sound lovers. Equipped with state-of-the-art lighting and sound, The Bank Club guarantees that spending time at this popular capital club will be an unforgettable experience. The managers of Bank Club are experienced clubbers who have been running some of the most elite clubs and rafts with electronic music for many years, so we have no doubt that they will transfer that energy to a new club. We are sure that you will become his permanent guest as well, because the Bank Club is something that has long missed Belgrade. In summer, the complete party moves to The Money raft, which is a summer variant of The Bank.",
            slika1: bank1,
            slika2: bank2,
            slika3: bank3,
            slika4: bank4,
            music: 'Rnb, House',
            adress: 'Beton Hala, Beograd',
            slika5: random1,
            slika6: random2,
            slika7: random3,
            slika8: random4,
            slika9: random5,
            slika10: random6,
            slika11: random7,
            slika12: random8,
            slika13: random9,
            slika14: random10,
            slika15: random11,
            slika16: random12
        },
        {
            id:2,
            nameAbove: 'Brankow',
            name: 'Brankow',
            slika: brankow,
            info: "BRANKOW CLUB is one of the best luxury clubs in Belgrade where you can enjoy the best international RNB, Hip Hop and House sounds. BRANKOW is located in the heart of the city, below Branko's Bridge, in the best part of nightlife, Savamali. The guests of the club are the most beautiful girls and celebrities. The club also has the longest tradition of all winter clubs in the city. The club has a capacity of 400 people. Places at the club are: bar, bar tables, high seating and VIP booths (seating).",
            slika1: brankow1,
            slika2: brankow2,
            slika3: brankow3,
            slika4: brankow4,
            music: 'Rnb, House',
            adress: 'Crnogorska 12, Beograd',
            slika5: random1,
            slika6: random2,
            slika7: random3,
            slika8: random4,
            slika9: random5,
            slika10: random6,
            slika11: random7,
            slika12: random8,
            slika13: random9,
            slika14: random10,
            slika15: random11,
            slika16: random12
        },
        {
            id:3,
            nameAbove: 'Bridge',
            name: 'Bridge',
            slika: bridge,
            info: "Raft Bridge is a place you should not miss if you want a great time on the river during the summer months in Belgrade. It is one of the most popular rafts in Belgrade, known for guest appearances by the biggest music stars and the best atmosphere. Raft Bridge is located on the right bank of the Sava River behind the Belgrade Fair, just a few kilometers from the center of Belgrade with a beautiful view of the new Ada Bridge. Architecturally it is one of the most spectacular Belgrade rafts, with many stunts, so guests feel that they are at the center of the event no matter what part of the club they are. The exterior of the raft is not far behind the interior, its light effects will leave you breathless as you enter the Bridge Club. The atmosphere and energy you can experience on the Bridge raft is unique in Belgrade. With a capacity of over 500 people, phenomenal lighting and sound and ample parking for all guests, Bridge Bridge offers you the perfect atmosphere in the right club atmosphere on the river throughout the summer.",
            slika1: bridge1,
            slika2: bridge2,
            slika3: bridge3,
            slika4: bridge4,
            music: 'Pop, House',
            adress: 'Savski kej, iza Beogradskog sajma, Beograd',
            slika5: random1,
            slika6: random2,
            slika7: random3,
            slika8: random4,
            slika9: random5,
            slika10: random6,
            slika11: random7,
            slika12: random8,
            slika13: random9,
            slika14: random10,
            slika15: random11,
            slika16: random12
        },
        {
            id:4,
            nameAbove: 'Freestyler',
            name: 'Freestyler',
            slika: free,
            info: "Freestyler raft has become synonymous with recognizable Summer House, Disco, HipHop, R'n'B parties and will entertain everyone who wants to join. The raft is organized into rings, with the outer ring of the raft filled with a large number of booths for larger societies wishing to stand out. A little closer to the center are high seating and bar tables, while in the center is a large central bar where you can enjoy the classic lounge experience if you wish. Freestyler rafts can be met by different generations of guests, and it is also characterized by the fact that it is very popular with foreigners, so the English language became home on this raft. It is considered one of the most popular clubs / rafts in Belgrade and is always looking for a place more. The raft opens half an hour before midnight, and because of the large crowds at the entrance, it is advisable to arrive immediately after opening, as the popular Free is filling up very quickly and you can stay without a reservation if you are least late. As of 2018, Freestyler raft is located in a new location on the estuary, in line with other popular Belgrade rafts, so you can also visit the Port Raft, the Raft Raft, the Kartel Raft, the River Raft and many others on this quay.",
            slika1: free1,
            slika2: free2,
            slika3: free3,
            slika4: free4,
            music: 'RnB, House',
            adress: 'Usce bb, Beograd',
            slika5: random1,
            slika6: random2,
            slika7: random3,
            slika8: random4,
            slika9: random5,
            slika10: random6,
            slika11: random7,
            slika12: random8,
            slika13: random9,
            slika14: random10,
            slika15: random11,
            slika16: random12
        },
        {
            id:5,
            nameAbove: 'Gotik',
            name: 'Gotik',
            slika: gotik,
            info: "The Gothic Club is the latest Belgrade club to open in the epicenter of night events, in the heart of the Concrete Hall. In a magnificent space, experienced architects have designed an interior that is rarely found in the best places in the world. The light effects and energy of the space will delight you as you first enter the Gothic club, so don't be surprised to quickly become a regular guest of this popular club. The Gotik Club has signed an experienced team of caterers who have been running some of Belgrade's most popular clubs for years, so there is no doubt that the Gotik Club will also be able to push the boundaries of nightlife in Belgrade.",
            slika1: gotik1,
            slika2: gotik2,
            slika3: gotik3,
            slika4: gotik4,
            music: 'Pop, House',
            adress: 'Beton hala, Karadjordjeva 2-4, Beograd',
            slika5: random1,
            slika6: random2,
            slika7: random3,
            slika8: random4,
            slika9: random5,
            slika10: random6,
            slika11: random7,
            slika12: random8,
            slika13: random9,
            slika14: random10,
            slika15: random11,
            slika16: random12
        },
        {
            id:6,
            nameAbove: 'Hype',
            name: 'Hype',
            slika: hype,
            info: "The Hype Club is something completely new to the Belgrade club scene. Phenomenal location, Phenomenal venue, Phenomenal music, Phenomenal guests, all in one place, united in the Hype Club. Located in the heart of Savamala, in Karadjordjeva Street, on the site of the former Mikser House, the Hype Club is a club with state-of-the-art lighting and sound, a club where you can enjoy popular electronic music, surrounded by a real city crew of guests. The management of the Hype Club has already proven itself to be leading a number of leading Belgrade venues, so there is no doubt that the new club will be a full hit and that the Hype Club will quickly become the leading place to go, marked in big letters on the map of Belgrade's nightlife.",
            slika1: hype1,
            slika2: hype2,
            slika3: hype3,
            slika4: hype4,
            music: 'Rnb, House',
            adress: 'Karadjordjeva 46, Beograd',
            slika5: random1,
            slika6: random2,
            slika7: random3,
            slika8: random4,
            slika9: random5,
            slika10: random6,
            slika11: random7,
            slika12: random8,
            slika13: random9,
            slika14: random10,
            slika15: random11,
            slika16: random12
        },
        {
            id:7,
            nameAbove: 'Club-Kasina',
            name: 'Club Kasina',
            slika: kasina,
            info: "KASINA CLUB by Community is now a legendary club in downtown Belgrade, formerly known as a pub, then transformed into one of the capital's most modern clubs. It is completely renovated at the beginning of each winter season and this contributes to its guests enjoying the always refreshed ambience. The Kasina Club is visited mainly by older guests, who enjoy local pop / rock music by performing some of the most famous stars of the regional music scene. At the Casino by Community Club, guest appearances include such names as Severina, Jelena Karleusa, Dzenan Loncarevic, Toni Cetinski, Nina Badric, Lexington band, Aca Lukas, Ministers, etc.",
            slika1: kasina1,
            slika2: kasina2,
            slika3: kasina3,
            slika4: kasina4,
            music: 'Pop, Rock',
            adress: 'Terazije 25, Beograd',
            slika5: random1,
            slika6: random2,
            slika7: random3,
            slika8: random4,
            slika9: random5,
            slika10: random6,
            slika11: random7,
            slika12: random8,
            slika13: random9,
            slika14: random10,
            slika15: random11,
            slika16: random12
        },
        {
            id:8,
            nameAbove: 'Club-Cosa-Nostra',
            name: 'Club Cosa Nostra',
            slika: nostra,
            info: "Club Cosa Nostra is a newly opened club in Belgrade. An interesting club name, an interesting interior and an unforgettable pastime are what make you remember the Cosa Nostra Club. An experienced team of caterers is behind this club, with a long tradition behind it, so there is no doubt that the Goat Nostra Club will quickly become one of the most popular places to go in Belgrade. 'Cosa nostra', or 'Our Thing' is a story we write with the help of you. Every day is a new page, every week is ours and your chapter. We create a place of quality fun with a special theme where we will write the history of our 'Cosa Nostra' story together. Be a part of the family. 'The family always comes first.' Your Cosa Nostra Club.",
            slika1: nostra1,
            slika2: nostra2,
            slika3: nostra3,
            slika4: nostra4,
            music: 'Rnb, House',
            adress: 'Savska 21, Beograd',
            slika5: random1,
            slika6: random2,
            slika7: random3,
            slika8: random4,
            slika9: random5,
            slika10: random6,
            slika11: random7,
            slika12: random8,
            slika13: random9,
            slika14: random10,
            slika15: random11,
            slika16: random12
        },
        {
            id:9,
            nameAbove: 'Club-River',
            name: 'Club River',
            slika: river,
            info: "River Raft has been in a new location on the estuary since 2018, but it still remains one of the favorite for going out. Raft River is an institution of good fun flying in Belgrade, a place that is unavoidable if you want to experience all the magic of Belgrade nightlife. It is known for guest appearances of the biggest music stars from our region, the most beautiful guests and the warmest atmosphere. If you want to be seen and have a great time you should not bypass the River Raft. It has been one of Belgrade's most popular rafts for years, which speaks volumes about the quality it offers to its guests. We recommend booking your place on time.",
            slika1: river1,
            slika2: river2,
            slika3: river3,
            slika4: river4,
            music: 'Pop, House',
            adress: 'Usce bb, Beograd',
            slika5: random1,
            slika6: random2,
            slika7: random3,
            slika8: random4,
            slika9: random5,
            slika10: random6,
            slika11: random7,
            slika12: random8,
            slika13: random9,
            slika14: random10,
            slika15: random11,
            slika16: random12
        },
        {
            id:10,
            nameAbove: 'Mr.-Stefan-Braun',
            name: 'Mr. Stefan Braun',
            slika: stefan,
            info: "Want to feel the true spirit of Belgrade clubbing? The Stefan Brown Club is the right place for this, the club with the longest tradition in Belgrade, which has been synonymous with the ultimate entertainment in the nightlife of the capital for more than a decade. Mr Stefan Braun's club is located in Nemanjina 4. Exit the elevator straight to the 9th floor and enter a completely different world, a real factory of good fun, as you will be greeted by friendly hostesses at the exit of the elevator and accommodate you for the place you have booked. The centerpiece of Mr Stefan Brown's club is occupied by central bars, but don't worry, the best party is right there, at the epicenter of the party are bartenders who, in addition to shaking delicious cocktails, are tasked with bringing the atmosphere to a boil. Behind the DJ counter are frequent guest appearances by famous DJs, and the Stefan Braun club is equally popular with both domestic and foreign guests.",
            slika1: stefan1,
            slika2: stefan2,
            slika3: stefan3,
            slika4: stefan4,
            music: 'Rnb, House',
            adress: 'Nemanjina 4, Beograd',
            slika5: random1,
            slika6: random2,
            slika7: random3,
            slika8: random4,
            slika9: random5,
            slika10: random6,
            slika11: random7,
            slika12: random8,
            slika13: random9,
            slika14: random10,
            slika15: random11,
            slika16: random12
        }
    ]
}

getClub = (nameAbove) =>{
    let tempClub = [...this.state.clubs];
    const club = tempClub.find((club) =>club.nameAbove === nameAbove);
    return club    
}



render(){
    return(
        <Data.Provider value={{...this.state, getClub: this.getClub}}>
            {this.props.children}
        </Data.Provider>
    )
}

}

 export const DataConsumer = Data.Consumer
