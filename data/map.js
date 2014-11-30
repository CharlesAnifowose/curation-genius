var books, questions;

books = {
  'the-kingkiller-chronicles': {
    title: 'The Kingkiller Chronicles',
    author: 'Patrick Rothfuss',
    url: 'http://en.wikipedia.org/wiki/The_Kingkiller_Chronicle'
  },
  'the-lord-of-the-rings': {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    url: 'http://en.wikipedia.org/wiki/The_Lord_of_the_Rings'
  },
  'wicked': {
    title: 'Wicked',
    author: 'Gregory Maguire',
    url: 'http://en.wikipedia.org/wiki/Wicked_(Maguire_novel)'
  },
  'the-once-and-future-king': {
    title: 'The Once and Future King',
    author: 'T. H. White',
    url: 'http://en.wikipedia.org/wiki/The_Once_and_Future_King'
  },
  'the-crystal-cave': {
    title: 'The Crystal Cave',
    author: 'Mary Steward',
    url: 'http://en.wikipedia.org/wiki/The_Crystal_Cave'
  },
  'the-mists-of-avalon': {
    title: 'The Mists of Avalon',
    author: 'Marion Zimmer Bradley',
    url: 'http://en.wikipedia.org/wiki/The_Mists_of_Avalon'
  },
  'the-last-unicorn': {
    title: 'The Last Unicorn',
    author: 'Peter S. Beagle',
    url: 'http://en.wikipedia.org/wiki/The_Last_Unicorn'
  },
  'watership-down': {
    title: 'Watership Down',
    author: 'Richard Adams',
    url: 'http://en.wikipedia.org/wiki/Watership_Down'
  },
  'dragonflight': {
    title: 'Dragonflight',
    author: 'Anne McCaffrey',
    url: 'http://en.wikipedia.org/wiki/Dragonflight'
  },
  'kushiels-legacy-series': {
    title: 'Kushiel\'s Legacy Series',
    author: 'Jaqueline Carey',
    url: 'http://en.wikipedia.org/wiki/Kushiel%27s_Legacy'
  },
  'jonathan-strange-mr-norrell': {
    title: 'Jonathan Strange & Mr. Norrell',
    author: 'Susanna Clarke',
    url: 'http://en.wikipedia.org/wiki/Jonathan_Strange_%26_Mr_Norrell'
  },
  'stardust': {
    title: 'Stardust',
    author: 'Neil Galman',
    url: 'http://en.wikipedia.org/wiki/Stardust_(novel)'
  },
  'the-princess-bride': {
    title: 'The Princess Bride',
    author: 'William Goldman',
    url: 'http://en.wikipedia.org/wiki/The_Princess_Bride'
  },
  'a-song-of-ice-and-fire': {
    title: 'A Song of Ice and Fire',
    author: 'George R. R. Martin',
    url: 'http://en.wikipedia.org/wiki/A_Song_of_Ice_and_Fire'
  },
  'the-way-of-kings': {
    title: 'The Way of Kings',
    author: 'Brandon Sanderson',
    url: 'http://en.wikipedia.org/wiki/The_Way_of_Kings'
  },
  'the-mistborn-trilogy': {
    title: 'The Mistborn Trilogy',
    author: 'Brandon Sanderson',
    url: 'http://en.wikipedia.org/wiki/Mistborn_series'
  },
  'the-sword-of-shannara-trilogy': {
    title: 'The Sword of Shannara Trilogy',
    author: 'Terry Brooks',
    url: 'http://en.wikipedia.org/wiki/The_Sword_of_Shannara'
  },
  'the-sword-of-truth-series': {
    title: 'The Sword of Truth Series',
    author: 'Terry Goodkind',
    url: 'http://en.wikipedia.org/wiki/The_Sword_of_Truth'
  },
  'the-farseer-trilogy': {
    title: 'The Farseer Trilogy',
    author: 'Robin Hobb',
    url: 'http://en.wikipedia.org/wiki/The_Farseer_Trilogy'
  },
  'the-riftwar-saga': {
    title: 'The Riftwar Saga',
    author: 'Raymond E. Feist',
    url: 'http://en.wikipedia.org/wiki/The_Riftwar_Saga'
  },
  'the-chronicles-of-thomas-covenant-the-unbeliever': {
    title: 'The Chronicles of Thomas Covenant, The Unbeliever',
    author: 'Stephen R. Donaldson',
    url: 'http://en.wikipedia.org/wiki/The_Chronicles_of_Thomas_Covenant'
  },
  'chronicles-of-conan-the-barbarian': {
    title: 'Chronicles of Conan the Barbarian',
    author: 'Robert E. Howard',
    url: ''
  },
  'going-postal': {
    title: 'Going Postal',
    author: 'Terry Prachett',
    url: 'http://en.wikipedia.org/wiki/Going_Postal'
  },
  'small-gods': {
    title: 'Small Gods',
    author: 'Terry Prachett',
    url: 'http://en.wikipedia.org/wiki/Small_Gods'
  },
  'xanth-series': {
    title: 'Xanth Series',
    author: 'Piers Anthony',
    url: 'http://en.wikipedia.org/wiki/Xanth'
  },
  'something-wicked-this-way-comes': {
    title: 'Something Wicked This Way Comes',
    author: 'Ray Bradbury',
    url: 'http://en.wikipedia.org/wiki/Something_Wicked_This_Way_Comes_(novel)'
  },
  'the-dark-tower': {
    title: 'The Dark Tower',
    author: 'Stephen King',
    url: 'http://en.wikipedia.org/wiki/The_Dark_Tower:_The_Gunslinger'
  },
  'neverwhere': {
    title: 'Neverwhere',
    author: 'Neil Gaiman',
    url: 'http://en.wikipedia.org/wiki/Neverwhere_(novel)'
  },
  'american-gods': {
    title: 'American Gods',
    author: 'Neil Gaiman',
    url: 'http://en.wikipedia.org/wiki/American_Gods'
  },
  'the-legend-of-drizzt': {
    title: 'The Legend of Drizzt',
    author: 'R.A. Salvatore',
    url: 'http://en.wikipedia.org/wiki/The_Legend_of_Drizzt'
  },
  'anathem': {
    title: 'Anathem',
    author: 'Neal Stephenson',
    url: 'http://en.wikipedia.org/wiki/Anathem'
  },
  'the-elric-saga': {
    title: 'The Elric Saga',
    author: 'Michael Moorcock',
    url: 'http://en.wikipedia.org/wiki/Elric_of_Melnibon%C3%A9'
  },
  'the-hyperion-cantos': {
    title: 'The Hyperion Cantos',
    author: 'Dan Simmons',
    url: 'http://en.wikipedia.org/wiki/Hyperion_Cantos'
  },
  'the-belgariad': {
    title: 'The Belgariad',
    author: 'David Eddings',
    url: 'http://en.wikipedia.org/wiki/The_Belgariad'
  },
  'the-chronicles-of-amber': {
    title: 'The Chronicles of Amber',
    author: 'Roger Zelazny',
    url: 'http://en.wikipedia.org/wiki/The_Chronicles_of_Amber'
  },
  'the-malazan-book-of-the-fallen-series': {
    title: 'The Malazan Book of the Fallen Series',
    author: 'Steven Erikson',
    url: 'http://en.wikipedia.org/wiki/The_Malazan_Book_of_the_Fallen_Series'
  },
  'the-wheel-of-time': {
    title: 'The Wheel of Time',
    author: 'Robert Jordan',
    url: 'http://en.wikipedia.org/wiki/The_Wheel_of_Time'
  },
  'the-silmarillion': {
    title: 'The Silmarillion',
    author: 'J.R.R. Tolkien',
    url: 'http://en.wikipedia.org/wiki/The_Silmarillion'
  },
  'the-stand': {
    title: 'The Stand',
    author: 'Stephen King',
    url: 'http://en.wikipedia.org/wiki/The_Stand'
  },
  'the-road': {
    title: 'The Road',
    author: 'Cormac McCarthy',
    url: 'http://en.wikipedia.org/wiki/The_Road'
  },
  'farenheit-451': {
    title: 'Farenheit 451',
    author: 'Ray Bradbury',
    url: 'http://en.wikipedia.org/wiki/Farenheit_451'
  },
  'the-book-of-the-new-sun': {
    title: 'The Book of the New Sun',
    author: 'Gene Wolfe',
    url: 'http://en.wikipedia.org/wiki/The_Book_of_the_New_Sun'
  },
  'frankenstein': {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    url: 'http://en.wikipedia.org/wiki/Frankenstein'
  },
  'the-eyre-affar': {
    title: 'The Eyre Affar',
    author: 'Jasper Fforde',
    url: 'http://en.wikipedia.org/wiki/The_Eyre_Affar'
  },
  'perdido-street-station': {
    title: 'Perdido Street Station',
    author: 'China Mieville',
    url: 'http://en.wikipedia.org/wiki/Perdido_Street_Station'
  },
  'the-sandman-series': {
    title: 'The Sandman Series',
    author: 'Neil Gaiman',
    url: 'http://en.wikipedia.org/wiki/The_Sandman_Series'
  },
  'watchmen': {
    title: 'Watchmen',
    author: 'Alan Moore & Dave Gibbons',
    url: 'http://en.wikipedia.org/wiki/Watchmen'
  },
  'contact': {
    title: 'Contact',
    author: 'Carl Sagan',
    url: 'http://en.wikipedia.org/wiki/Contact'
  },
  'sunshine': {
    title: 'Sunshine',
    author: 'Robin McKinley',
    url: 'http://en.wikipedia.org/wiki/Sunshine'
  },
  'the-codex-alera': {
    title: 'The Codex Alera',
    author: 'Jim Butcher',
    url: 'http://en.wikipedia.org/wiki/The_Codex_Alera'
  },
  'the-belgariad': {
    title: 'The Belgariad',
    author: 'David Eddings',
    url: 'http://en.wikipedia.org/wiki/The_Belgariad'
  },
  'flowers-for-algernon': {
    title: 'Flowers for Algernon',
    author: 'Daniel Keyes',
    url: 'http://en.wikipedia.org/wiki/Flowers_for_Algernon'
  },
  'i-am-legend': {
    title: 'I Am Legend',
    author: 'Richard Matheson',
    url: 'http://en.wikipedia.org/wiki/I_Am_Legend'
  },
  'world-war-z': {
    title: 'World War Z',
    author: 'Max Brooks',
    url: 'http://en.wikipedia.org/wiki/World_War_Z'
  },
  'the-time-travellers-wife': {
    title: 'The Time Traveller\'s Wife',
    author: 'Audrey Neffenegger',
    url: 'http://en.wikipedia.org/wiki/The_Time_Traveller\'s_Wife'
  },
  'the-outlander-series': {
    title: 'The Outlander Series',
    author: 'Diana Gabaldon',
    url: 'http://en.wikipedia.org/wiki/The_Outlander_Series'
  },
  'a-clockwork-orange': {
    title: 'A Clockwork Orange',
    author: 'Anthony Burgess',
    url: 'http://en.wikipedia.org/wiki/A_Clockwork_Orange'
  },
  'cats-craddle': {
    title: 'Cat\'s Craddle',
    author: 'Kurt Vonnegut',
    url: 'http://en.wikipedia.org/wiki/Cat\'s_Craddle'
  },
  'brave-new-world': {
    title: 'Brave New World',
    author: 'Aldus Huxley',
    url: 'http://en.wikipedia.org/wiki/Brave_New_World'
  },
  'slaughterhouse-5': {
    title: 'Slaughterhouse 5',
    author: 'Kurt Vonnegut',
    url: 'http://en.wikipedia.org/wiki/Slaughterhouse_5'
  },
  'the-handmaids-tale': {
    title: 'The Handmaid\'s Tale',
    author: 'Margaret Atwood',
    url: 'http://en.wikipedia.org/wiki/The_Handmaid\'s_Tale'
  },
  'nineteen-eighty-four': {
    title: 'Nineteen Eighty-Four',
    author: 'George Orwell',
    url: 'http://en.wikipedia.org/wiki/Nineteen_Eighty-Four'
  },
  'childhoods-end': {
    title: 'Childhood\'s End',
    author: 'Arthur C. Clarke',
    url: 'http://en.wikipedia.org/wiki/Childhood\'s_End'
  },
  'rendezvous-with-rama': {
    title: 'Rendezvous with Rama',
    author: 'Arthur C. Clarke',
    url: 'http://en.wikipedia.org/wiki/Rendezvous_with_Rama'
  },
  'the-thrawn-trilogy': {
    title: 'The Thrawn Trilogy',
    author: 'Timothy Zahn',
    url: 'http://en.wikipedia.org/wiki/The_Thrawn_Trilogy'
  },
  'war-of-the-worlds': {
    title: 'War of the Worlds',
    author: 'H.G. Wells',
    url: 'http://en.wikipedia.org/wiki/War_of_the_Worlds'
  },
  'the-diamond-age': {
    title: 'The Diamond Age',
    author: 'Neal Stephenson',
    url: 'http://en.wikipedia.org/wiki/The_Diamond_Age'
  },
  'neuromancer': {
    title: 'Neuromancer',
    author: 'William Gibson',
    description: 'Neuromancer is a 1984 novel by William Gibson, a seminal work in the cyberpunk genre and the first winner of the science-fiction "triple crown" — the Nebula Award, the Philip K. Dick Award, and the Hugo Award.',
    image: 'assets/Neuromancer_(Book).jpg',
    url: 'http://en.wikipedia.org/wiki/Neuromancer'
  },
  'snow-crash': {
    title: 'Snow Crash',
    author: 'Neal Stephenson',
    url: 'http://en.wikipedia.org/wiki/Snow_Crash'
  },
  'journey-to-the-center-of-the-earth': {
    title: 'Journey to the Center of the Earth',
    author: 'Jules Verne',
    url: 'http://en.wikipedia.org/wiki/Journey_to_the_Center_of_the_Earth'
  },
  'do-androids-dream-of-electric-sheep': {
    title: 'Do Androids Dream of Electric Sheep?',
    author: 'Phillip K. Dick',
    url: 'http://en.wikipedia.org/wiki/Do_Androids_Dream_of_Electric_Sheep?'
  },
  'the-left-hand-of-darkness': {
    title: 'The Left Hand of Darkness',
    author: 'Usula K.LeGuin',
    url: 'http://en.wikipedia.org/wiki/The_Left_Hand_of_Darkness'
  },
  '20000-leagues-under-the-sea': {
    title: '20,000 Leagues Under the Sea',
    author: 'Jules Verne',
    url: 'http://en.wikipedia.org/wiki/20000_Leagues_Under_the_Sea'
  },
  'cryptonomicon': {
    title: 'Cryptonomicon',
    author: 'Neal Stephenson',
    url: 'http://en.wikipedia.org/wiki/Cryptonomicon'
  },
  '2001-a-space-odyssey': {
    title: '2001: A Space Odyssey',
    author: 'Arthur C. Clarke',
    url: 'http://en.wikipedia.org/wiki/2001_A_Space_Odyssey'
  },
  'the-martian-chronicles': {
    title: 'The Martian Chronicles',
    author: 'Ray Bradbury',
    url: 'http://en.wikipedia.org/wiki/The_Martian_Chronicles'
  },
  'the-mars-trilogy': {
    title: 'The Mars Trilogy',
    author: 'Kim Stanley Robinson',
    url: 'http://en.wikipedia.org/wiki/The_Mars_Trilogy'
  },
  'starship-troopers': {
    title: 'Starship Troopers',
    author: 'Robert A. Heinlein',
    url: 'http://en.wikipedia.org/wiki/Starship_Troopers'
  },
  'enders-game': {
    title: 'Ender\'s Game',
    author: 'Orson Scott Card',
    url: 'http://en.wikipedia.org/wiki/Enders_Game'
  },
  'the-forever-war': {
    title: 'The Forever War',
    author: 'Joe Haldeman',
    url: 'http://en.wikipedia.org/wiki/The_Forever_War'
  },
  'the-hitchhikers-guide-to-the-galaxy': {
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    author: 'Douglas Adams',
    url: 'http://en.wikipedia.org/wiki/The_Hitchhikers_Guide_to_the_Galaxy'
  },
  'the-culture-series': {
    title: 'The Culture Series',
    author: 'Iain M. Banks',
    url: 'http://en.wikipedia.org/wiki/The_Culture_Series'
  },
  'the-mote-in-gods-eye': {
    title: 'The Mote in God\'s Eye',
    author: 'Larry Niven & Jerry Pournelle',
    url: 'http://en.wikipedia.org/wiki/The_Mote_in_Gods_Eye'
  },
  'animal-farm': {
    title: 'Animal Farm',
    author: 'George Orwell',
    url: 'http://en.wikipedia.org/wiki/Animal_Farm'
  },
  'vorkosigan-saga': {
    title: 'Vorkosigan Saga',
    author: 'Lois McMaster Bujold',
    url: 'http://en.wikipedia.org/wiki/Vorkosigan_Saga'
  },
  'i-robot': {
    title: 'I, Robot',
    author: 'Isaac Asimov',
    url: 'http://en.wikipedia.org/wiki/I,_Robot'
  },
  'the-dispossessed': {
    title: 'The Dispossessed',
    author: 'Ursula K. LeGuin',
    url: 'http://en.wikipedia.org/wiki/The_Dispossessed'
  },
  'a-canticle-of-leibowitz': {
    title: 'A Canticle of Leibowitz',
    author: 'Walter M. Miller Jr.',
    url: 'http://en.wikipedia.org/wiki/A_Canticle_of_Leibowitz'
  },
  'stranger-in-a-strange-land': {
    title: 'Stranger in a Strange Land',
    author: 'Robert A. Heinlein',
    url: 'http://en.wikipedia.org/wiki/Stranger_in_a_Strange_Land'
  },
  'the-time-machine': {
    title: 'The Time Machine',
    author: 'H. G. Wells',
    url: 'http://en.wikipedia.org/wiki/The_Time_Machine'
  },
  'doomsday-book': {
    title: 'Doomsday Book',
    author: 'Connie Willis',
    url: 'http://en.wikipedia.org/wiki/Doomsday_Book'
  },
  'lucifers-hammer': {
    title: 'Lucifer\'s Hammer',
    author: 'Larry Niven & Jerry Pournelle',
    url: 'http://en.wikipedia.org/wiki/Lucifers_Hammer'
  },
  'the-caves-of-steel': {
    title: 'The Caves of Steel',
    author: 'Isaac Asimov',
    url: 'http://en.wikipedia.org/wiki/The_Caves_of_Steel'
  },
  'the-mars-trilogy': {
    title: 'The Mars Trilogy',
    author: 'Kim Stanley Robinson',
    url: 'http://en.wikipedia.org/wiki/The_Mars_Trilogy'
  },
  'space-trilogy': {
    title: 'Space Trilogy',
    author: 'C. S. Lewis',
    url: 'http://en.wikipedia.org/wiki/Space_Trilogy'
  },
  'old-mans-war': {
    title: 'Old Man\'s War',
    author: 'John Scalzi',
    url: 'http://en.wikipedia.org/wiki/Old_Mans_War'
  },
  'the-moon-is-a-harsh-mistress': {
    title: 'The Moon is a Harsh Mistress',
    author: 'Robert A. Heinlein',
    url: 'http://en.wikipedia.org/wiki/The_Moon_is_a_Harsh_Mistress'
  },
  'the-dune-chronicles': {
    title: 'The Dune Chronicles',
    author: 'Frank Herbert',
    url: 'http://en.wikipedia.org/wiki/The_Dune_Chronicles'
  },
  'foundation-trilogy': {
    title: 'Foundation Trilogy',
    author: 'Isaac Asimov',
    url: 'http://en.wikipedia.org/wiki/Foundation_Trilogy'
  },
  'ringworld': {
    title: 'Ringworld',
    author: 'Larry Niven',
    url: 'http://en.wikipedia.org/wiki/Ringworld'
  },
  'a-fire-upon-the-deep': {
    title: 'A Fire Upon the Deep',
    author: 'Vernor Vinge',
    url: 'http://en.wikipedia.org/wiki/A_Fire_Upon_the_Deep'
  },
  'the-illustrated-man': {
    title: 'The Illustrated Man',
    author: 'Ray Bradbury',
    url: 'http://en.wikipedia.org/wiki/The_Illustrated_Man'
  }
};

questions = {
  'start': {
    question: 'Where should I start?',
    answers: [
      {
        main: 'Fantasy',
        sub: 'I pretty much live in a fantasy land already.',
        destination: {
          type: 'question',
          id: 'harry-potter'
        }
      }, {
        main: 'SciFi',
        sub: 'Fly me to the moon.',
        destination: {
          type: 'question',
          id: 'cyberpunk'
        }
      }, {
        main: 'Somewhere in between',
        destination: {
          type: 'question',
          id: 'neither-fantasy-scifi'
        }
      }
    ]
  },
  'neither-fantasy-scifi': {
    question: 'Not sure if you are looking for Fantasy or Scifi?',
    answers: [
      {
        main: 'Can\'t I have both',
        destination: {
          type: 'question',
          id: 'fantasy-scifi'
        }
      }, {
        main: 'I only read books with pictures.',
        destination: {
          type: 'question',
          id: 'graphic-novels'
        }
      }, {
        main: 'What about Horror?',
        destination: {
          type: 'question',
          id: 'vampire-pick'
        }
      }, {
        main: 'I\'d rather not be seen in that area of the bookstore.',
        destination: {
          type: 'question',
          id: 'genre-bender'
        }
      }
    ]
  },
  'harry-potter': {
    question: 'Are you going to be upset when you don\'t find Harry Potter',
    answers: [
      {
        main: 'Yes',
        sub: 'Give me more precocious lads at schools of magic please.',
        destination: {
          type: 'book',
          id: 'the-kingkiller-chronicles'
        }
      }, {
        main: 'No',
        sub: 'I know where to find him if I need him',
        destination: {
          type: 'question',
          id: 'new-to-fantasy'
        }
      }
    ]
  },
  'new-to-fantasy': {
    question: 'Are you new to the fantasy genre?',
    answers: [
      {
        main: 'Yes',
        sub: 'I am as yet unfamiliar with your tropes, do your worst.',
        destination: {
          type: 'question',
          id: 'tolkien'
        }
      }, {
        main: 'Maybe',
        sub: 'Does the Wizard of Oz count?',
        destination: {
          type: 'book',
          id: 'wicked'
        }
      }, {
        main: 'No',
        sub: 'I\'m what you call, experienced.',
        destination: {
          type: 'question',
          id: 'arthurian-legend'
        }
      }
    ]
  },
  'tolkien': {
    question: 'Have you read The Lord of the Rings?',
    bg: 'assets/bg-lotr.jpg',
    bgDark: true,
    answers: [
      {
        main: 'Yes',
        sub: 'I\'m not that new.',
        destination: {
          type: 'book',
          id: 'the-silmarillion'
        }
      },
      {
        main: 'No',
        destination: {
          type: 'book',
          id: 'the-lord-of-the-rings'
        }
      } 
    ]
  },


  'arthurian-legend': {
    question: 'Like the Arthurian legend?',
    answers: [
      {
        main: 'Yes',
        sub: 'I own the Sword and the Stone on DVD and VHS.',
        destination: {
          type: 'question',
          id: 'which-arthurian-character'
        }
      }, {
        main: 'No',
        destination: {
          type: 'question',
          id: 'modern-day-settings'
        }
      }
    ]
  },
  'which-arthurian-character': {
    question: 'Which character do you like best?',
    answers: [
      {
        main: 'Arthur',
        destination: {
          type: 'book',
          id: 'the-once-and-future-king'
        }
      }, {
        main: 'Merlin',
        destination: {
          type: 'book',
          id: 'the-crystal-cave'
        }
      }, {
        main: 'Morgan Le Faye',
        destination: {
          type: 'book',
          id: 'the-mists-of-avalon'
        }
      }
    ]
  },
  'modern-day-settings': {
    question: 'Looking for modern day settings?',
    answers: [
      {
        main: 'Yes',
        sub: 'I\'m a city person.',
        destination: {
          type: 'question',
          id: 'city-pick'
        }
      }, {
        main: 'Maybe',
        sub: 'I\'m partial to small towns.',
        destination: {
          type: 'book',
          id: 'something-wicked-this-way-comes'
        }
      }, {
        main: 'No',
        sub: 'Let\'s find another world, this one\'s depressing.',
        destination: {
          type: 'question',
          id: 'westerns'
        }
      }
    ]
  },
  'ideal-pet': {
    question: 'What\'s your ideal pet?',
    answers: [
      {
        main: 'Unicorn',
        destination: {
          type: 'book',
          id: 'the-last-unicorn'
        }
      }, {
        main: 'Bunny',
        destination: {
          type: 'book',
          id: 'watership-down'
        }
      }, {
        main: 'Dragon',
        destination: {
          type: 'book',
          id: 'dragonflight'
        }
      }
    ]
  },
  'animals': {
    question: 'Animals more your thing?',
    answers: [
      {
        main: 'Yes',
        sub: 'I donate to the WWF. Not the wrestling one.',
        destination: {
          type: 'question',
          id: 'ideal-pet'
        }
      }, {
        main: 'No',
        sub: 'I have allergies',
        destination: {
          type: 'question',
          id: 'alternate-history'
        }
      }
    ]
  },
  'alternate-history': {
    question: 'How about some alternate history?',
    answers: [
      {
        main: 'Yes',
        sub: 'I\'m a revisionist myself.',
        destination: {
          type: 'question',
          id: 'romance-or-war-mag'
        }
      }, {
        main: 'No',
        sub: 'I never paid any attention in history class.',
        destination: {
          type: 'question',
          id: 'alternate-history-series'
        }
      }
    ]
  },
  'alternate-history-series': {
    question: 'Ready to dive into a series?',
    answers: [
      {
        main: 'Yes',
        sub: 'The other two options ended with some strange choices.',
        destination: {
          type: 'question',
          id: 'finished-series'
        }
      }, {
        main: 'Maybe',
        sub: 'How about an episodic series?',
        destination: {
          type: 'question',
          id: 'episodic-series-pick'
        }
      }, {
        main: 'No',
        sub: 'Let\'s keep this casual',
        destination: {
          type: 'question',
          id: 'type-of-pirate'
        }
      }
    ]
  },
  'manufactured-humans': {
    question: 'Do manufactured humans interest you?',
    answers: [
      {
        main: 'Yes',
        destination: {
          type: 'book',
          id: 'brave-new-world'
        }
      }, {
        main: 'No',
        destination: {
          type: 'question',
          id: 'scary-questions'
        }
      }
    ]
  },
  'scary-questions': {
    question: 'Which question most frightens you?',
    answers: [
      {
        main: 'Who needs books?',
        destination: {
          type: 'book',
          id: 'farenheit-451'
        }
      }, {
        main: 'Who needs Free Will?',
        destination: {
          type: 'book',
          id: 'a-clockwork-orange'
        }
      }, {
        main: 'No',
        sub: 'I was thinking more post-apocalyptic.',
        destination: {
          type: 'question',
          id: 'post-apocalyptic-fire'
        }
      }
    ]
  },
  'post-apocalyptic-fire': {
    question: 'Like the world on fire?',
    answers: [
      {
        main: 'Yes',
        sub: 'Some men just want to see the world burn.',
        destination: {
          type: 'book',
          id: 'the-road'
        }
      }, {
        main: 'No',
        sub: 'But a worldwide pandemic would be cool.',
        destination: {
          type: 'book',
          id: 'the-stand'
        }
      }
    ]
  },
  'totalitarian-or-crazy-world': {
    question: 'Totalitarian or world gone mad?',
    answers: [
      {
        main: 'Dictators',
        destination: {
          type: 'question',
          id: 'totalitarian-dictators'
        }
      }, {
        main: 'Madness',
        destination: {
          type: 'question',
          id: 'manufactured-humans'
        }
      }
    ]
  },
  'totalitarian-dictators': {
    question: 'What type?',
    answers: [
      {
        main: 'Religious Totalitarians',
        destination: {
          type: 'book',
          id: 'the-handmaids-tale'
        }
      }, {
        main: 'Warlords',
        destination: {
          type: 'book',
          id: 'nineteen-eighty-four'
        }
      }
    ]
  },
  'dystopian-fiction': {
    question: 'Interested in dystopian fiction?',
    answers: [
      {
        main: 'Yes',
        sub: 'I\'m a sucker for worst case scenarios',
        destination: {
          type: 'question',
          id: 'totalitarian-or-crazy-world'
        }
      }, {
        main: 'No',
        sub: 'The world is bleak enough already.',
        destination: {
          type: 'book',
          id: 'animal-farm',
          title: 'Sounds like you could use a nice allegory.'
        }
      }
    ]
  },
  'romance-or-war-mag': {
    question: 'Romance or warring magicians?',
    answers: [
      {
        main: 'Romance',
        destination: {
          type: 'book',
          id: 'kushiels-legacy-series'
        }
      }, {
        main: 'Magicians',
        destination: {
          type: 'book',
          id: 'jonathan-strange-mr-norrell'
        }
      }
    ]
  },
  'type-of-pirate': {
    question: 'What type of pirate do you prefer?',
    answers: [
      {
        main: 'Pirates in the Air',
        destination: {
          type: 'book',
          id: 'stardust'
        }
      }, {
        main: 'Pirates at Sea',
        destination: {
          type: 'book',
          id: 'the-princess-bride'
        }
      }
    ]
  },
  'finished-series': {
    question: 'Does the series have to be finished?',
    answers: [
      {
        main: 'Yes',
        destination: {
          type: 'question',
          id: 'sword-and-sorcery'
        }
      }, {
        main: 'No',
        sub: 'I like to be held in suspense. Preferably for years at a time.',
        destination: {
          type: 'question',
          id: 'high-road-low-road'
        }
      }
    ]
  },
  'no-drama': {
    question: 'Post-modern mind-bender?',
    answers: [
      {
        main: 'Yes',
        sub: 'If one examines neocultural narrative, one is faced with a choice: either accept the subtextual paradigm of expression or conclude that narrative must come from communication. Thus if the dialectic paradigm...',
        destination: {
          type: 'question',
          id: 'post-modern'
        }
      }, {
        main: 'No',
        destination: {
          type: 'question',
          id: 'dystopian-fiction'
        }
      }
    ]
  },
  'post-modern': {
    question: 'Want some time-travel too?',
    answers: [
      {
        main: 'Yes',
        destination: {
          type: 'book',
          id: 'slaughterhouse-5'
        }
      }, {
        main: 'No',
        destination: {
          type: 'book',
          id: 'cats-craddle'
        }
      }
    ]
  },
  'high-road-low-road': {
    question: 'Take the high road or the low road?',
    answers: [
      {
        main: 'Low Fantasy',
        destination: {
          type: 'book',
          id: 'a-song-of-ice-and-fire'
        }
      }, {
        main: 'High Fantasy',
        destination: {
          type: 'book',
          id: 'the-way-of-kings'
        }
      }
    ]
  },
  'sword-and-sorcery': {
    question: 'Do the words Sword and Sorcery havea positive connotation for you?',
    answers: [
      {
        main: 'Yes',
        sub: 'Wizards and barbarians? What\'s not to like?',
        destination: {
          type: 'question',
          id: 'roleplayer'
        }
      }, {
        main: 'No',
        destination: {
          type: 'question',
          id: 'trilogy'
        }
      }
    ]
  },
  'trilogy': {
    question: 'Looking for an old-fashioned trilogy?',
    answers: [
      {
        main: 'Yes',
        sub: 'Three is my lucky number',
        destination: {
          type: 'question',
          id: 'trilogy-pick'
        }
      }, {
        main: 'No',
        sub: 'In for a penny, in for a pound I always say.',
        destination: {
          type: 'question',
          id: 'more-than-trilogy'
        }
      }, {
        main: 'Maybe',
        sub: 'How about a trilogy of trilogies?',
        destination: {
          type: 'book',
          id: 'the-chronicles-of-thomas-covenant-the-unbeliever'
        }
      }
    ]
  },
  'roleplayer': {
    question: 'Roleplayer?',
    answers: [
      {
        main: 'Yes',
        destination: {
          type: 'book',
          id: 'the-legend-of-drizzt'
        }
      }, {
        main: 'No',
        destination: {
          type: 'question',
          id: 'wizards-or-barbarians'
        }
      }
    ]
  },
  'wizards-or-barbarians': {
    question: 'More wizards or barbarians?',
    answers: [
      {
        main: 'Barbarians',
        destination: {
          type: 'book',
          id: 'chronicles-of-conan-the-barbarian'
        }
      }, {
        main: 'Wizards',
        destination: {
          type: 'book',
          id: 'the-elric-saga'
        }
      }
    ]
  },
  'trilogy-pick': {
    question: 'What shall we read about?',
    answers: [
      {
        main: 'Thieves',
        destination: {
          type: 'book',
          id: 'the-mistborn-trilogy'
        }
      }, {
        main: 'MacGuffins',
        destination: {
          type: 'book',
          id: 'the-sword-of-shannara-trilogy'
        }
      }, {
        main: 'Assassins',
        destination: {
          type: 'book',
          id: 'the-farseer-trilogy'
        }
      }, {
        main: 'Magicians',
        destination: {
          type: 'book',
          id: 'the-riftwar-saga'
        }
      }
    ]
  },
  'quests-against-evil': {
    question: 'Enjoy quests ot prevent great evil from conquering the world?',
    answers: [
      {
        main: 'Yes',
        sub: 'Good vs. Evil on an epic scale please.',
        destination: {
          type: 'question',
          id: 'who-will-save-us'
        }
      }, {
        main: 'No',
        sub: 'I need a little more complexity.',
        destination: {
          type: 'question',
          id: 'choose-wisely-end'
        }
      }
    ]
  },
  'who-will-save-us': {
    question: 'Who will save us?',
    answers: [
      {
        main: 'The Seeker of Truth',
        destination: {
          type: 'book',
          id: 'the-sword-of-truth-series'
        }
      }, {
        main: 'The One Power',
        destination: {
          type: 'book',
          id: 'the-wheel-of-time'
        }
      }
    ]
  },
  'choose-wisely-end': {
    question: 'Choose wisely, this is the end.',
    answers: [
      {
        main: 'Earth in the Shadows',
        destination: {
          type: 'book',
          id: 'the-chronicles-of-amber'
        }
      }, {
        main: 'Weaving Timeline',
        destination: {
          type: 'book',
          id: 'the-malazan-book-of-the-fallen-series'
        }
      }
    ]
  },
  'more-than-trilogy': {
    question: 'So, five or six books enough for you?',
    answers: [
      {
        main: 'Yes',
        sub: 'That should keep me busy.',
        destination: {
          type: 'question',
          id: 'orphaned-farm-boys'
        }
      }, {
        main: 'No',
        sub: 'I shall require at least ten.',
        destination: {
          type: 'question',
          id: 'quests-against-evil'
        }
      }
    ]
  },
  'orphaned-farm-boys': {
    question: 'Enjoy stories about orphaned farm boys?',
    answers: [
      {
        main: 'Yes',
        destination: {
          type: 'question',
          id: 'orphaned-farm-boys-pick'
        }
      }, {
        main: 'No',
        sub: 'Tough.',
        destination: [
          {
            type: 'question',
            id: 'orphaned-farm-boys-tough'
          }
        ]
      }
    ]
  },
  'orphaned-farm-boys-pick': {
    question: 'You might like these.',
    answers: [
      {
        main: 'Try this.',
        destination: {
          type: 'book',
          id: 'the-codex-alera'
        }
      }, {
        main: 'Or this.',
        destination: {
          type: 'book',
          id: 'the-belgariad'
        }
      }
    ]
  },
  'orphaned-farm-boys-tough': {
    question: 'Tough.',
    answers: [
      {
        main: 'Try this.',
        destination: {
          type: 'book',
          id: 'the-codex-alera'
        }
      }, {
        main: 'Or this.',
        destination: {
          type: 'book',
          id: 'the-belgariad'
        }
      }
    ]
  },
  'fantasy-scifi-future-no-math': {
    question: 'What sounds more interesting: a dying sun in an impaling demon?',
    answers: [
      {
        main: 'Bring on the shrike',
        destination: {
          type: 'book',
          id: 'the-hyperion-cantos'
        }
      }, {
        main: 'A dying sun sounds poetic',
        destination: {
          type: 'book',
          id: 'the-book-of-the-new-sun'
        }
      }
    ]
  },
  'episodic-series-pick': {
    question: 'What\'s your pleasure?',
    answers: [
      {
        main: 'Bureaucratic Satire',
        destination: {
          type: 'book',
          id: 'going-postal'
        }
      }, {
        main: 'Religious Satire',
        destination: {
          type: 'book',
          id: 'small-gods'
        }
      }, {
        main: 'Fun with Puns',
        destination: {
          type: 'book',
          id: 'xanth-series'
        }
      }
    ]
  },
  'westerns': {
    question: 'Fan of Westerns?',
    answers: [
      {
        main: 'Yes',
        sub: 'I\'m prone to don chaps and walk the streets at high noon.',
        destination: {
          type: 'book',
          id: 'the-dark-tower'
        }
      }, {
        main: 'No',
        sub: 'Too dusty. And I\'m not much of a card player',
        destination: {
          type: 'question',
          id: 'animals'
        }
      }
    ]
  },
  'city-pick': {
    question: 'Gods or people under the streets?',
    answers: [
      {
        main: 'Modern Mythology',
        destination: {
          type: 'book',
          id: 'american-gods'
        }
      }, {
        main: 'A world beneath the city',
        destination: {
          type: 'book',
          id: 'neverwhere'
        }
      }
    ]
  },
  'cyberpunk': {
    question: 'Cyberpunk?',
    bg: 'assets/bg-cyberpunk2.jpg',
    bgDark: true,
    answers: [
      {
        main: 'Yes',
        sub: 'I love that Billy Idol album.',
        destination: {
          type: 'question',
          id: 'cyberpunk-pick'
        }
      }, {
        main: 'Maybe',
        sub: 'Can I get the geek without the bleak?',
        destination: {
          type: 'book',
          id: 'cryptonomicon'
        }
      }, {
        main: 'No',
        sub: 'I get enough "cyber punks" on Facebook.',
        destination: {
          type: 'question',
          id: 'space'
        }
      }
    ]
  },
  'cyberpunk-pick': {
    question: 'Gritty Noir, Neo-Victorian or Samurai?',
    bg: 'assets/bg-cyberpunk.jpg',
    bgDark: false,
    answers: [
      {
        main: 'Samurai',
        destination: {
          type: 'book',
          id: 'snow-crash'
        }
      }, {
        main: 'Noir',
        destination: {
          type: 'book',
          id: 'neuromancer'
        }
      }, {
        main: 'Funny Hats Please',
        destination: {
          type: 'book',
          id: 'the-diamond-age'
        }
      }
    ]
  },
  'space': {
    question: 'Ready to blast into space?',
    answers: [
      {
        main: 'Yes',
        sub: 'The stars are my destination. (Can\'t believe they left that one off.)',
        destination: {
          type: 'question',
          id: 'war-buff'
        }
      }, {
        main: 'Maybe',
        sub: 'Let\'s just stay close. I\'m new at this.',
        destination: {
          type: 'question',
          id: 'space-or-mars'
        }
      }, {
        main: 'No',
        sub: 'I like to keep my feet on the ground.',
        destination: {
          type: 'question',
          id: 'underground'
        }
      }
    ]
  },
  'space-or-mars': {
    question: 'Looking for outer space?',
    answers: [
      {
        main: 'Yes',
        destination: {
          type: 'book',
          id: '2001-a-space-odyssey'
        }
      }, {
        main: 'No',
        sub: 'Too far. Too trippy. How about Mars?',
        destination: {
          type: 'question',
          id: 'mars-pick'
        }
      }
    ]
  },
  'mars-pick': {
    question: 'What would you like to see from the Red Planet?',
    answers: [
      {
        main: 'Vignettes',
        destination: {
          type: 'book',
          id: 'the-martian-chronicles'
        }
      }, {
        main: 'Environmentalism',
        destination: {
          type: 'book',
          id: 'the-mars-trilogy'
        }
      }, {
        main: 'Through the looking glass',
        destination: {
          type: 'book',
          id: 'space-trilogy'
        }
      }
    ]
  },
  'war-buff': {
    question: 'War Buff?',
    answers: [
      {
        main: 'Yes',
        sub: 'I watch the military channel exclusively.',
        destination: {
          type: 'question',
          id: 'scifi-war-pick'
        }
      }, {
        main: 'Maybe',
        sub: 'But what I\'m really after is exploring the galaxy.',
        destination: {
          type: 'question',
          id: 'galaxy-far-away'
        }
      }, {
        main: 'No',
        sub: 'But I\'m interested in first contact.',
        destination: {
          type: 'question',
          id: 'alien-pick'
        }
      }
    ]
  },
  'underground': {
    question: 'Don\'t you mean under the ground?',
    answers: [
      {
        main: 'Yes',
        sub: 'Give me some subterranean action.',
        destination: {
          type: 'question',
          id: 'subterranean-wet-dry'
        }
      }, {
        main: 'No',
        sub: 'I sain on, smart guy.',
        destination: {
          type: 'question',
          id: 'politics-religion-philosophy'
        }
      }
    ]
  },
  'subterranean-wet-dry': {
    question: 'Wet or Dry?',
    answers: [
      {
        main: 'Underground',
        destination: {
          type: 'book',
          id: 'journey-to-the-center-of-the-earth'
        }
      }, {
        main: 'Underwater',
        destination: {
          type: 'book',
          id: '20000-leagues-under-the-sea'
        }
      }
    ]
  },
  'politics-religion-philosophy': {
    question: 'Politics, Religion, or Philosophy?',
    answers: [
      {
        main: 'I think therefore I am',
        destination: {
          type: 'book',
          id: 'do-androids-dream-of-electric-sheep'
        }
      }, {
        main: 'Read my lips...',
        destination: {
          type: 'question',
          id: 'scifi-politics'
        }
      }, {
        main: 'Tell me the good word.',
        destination: {
          type: 'question',
          id: 'scifi-religious'
        }
      }, {
        main: 'No',
        large: true,
        sub: 'These things aren\'t polite to talk about in company. Don\'t you guys write about time travel or something.',
        destination: {
          type: 'question',
          id: 'time-travel-or-other'
        }
      }
    ]
  },
  'scifi-religious': {
    question: 'Pick your poison.',
    answers: [
      {
        main: 'Catholicism',
        destination: {
          type: 'book',
          id: 'a-canticle-of-leibowitz'
        }
      }, {
        main: 'Humanism',
        destination: {
          type: 'book',
          id: 'stranger-in-a-strange-land'
        }
      }
    ]
  },
  'scifi-politics': {
    question: 'What\'s your interest?',
    answers: [
      {
        main: 'Feminism',
        destination: {
          type: 'book',
          id: 'the-left-hand-of-darkness'
        }
      }, {
        main: 'Communism',
        destination: {
          type: 'book',
          id: 'the-dispossessed'
        }
      }
    ]
  },
  'time-travel-or-other': {
    question: 'Sure do. Modern or classic?',
    answers: [
      {
        main: 'Modern',
        destination: {
          type: 'book',
          id: 'doomsday-book'
        }
      }, {
        main: 'Classic',
        destination: {
          type: 'book',
          id: 'the-time-machine'
        }
      }, {
        main: 'No',
        sub: 'All right, all right... Im a bit out of my comfort zone. Got a nice mystery or a thriller?',
        destination: {
          type: 'question',
          id: 'scifi-mystery-thriller-other'
        }
      }
    ]
  },
  'scifi-mystery-thriller-other': {
    question: 'Got a nice mystery or a thriller?',
    answers: [
      {
        main: 'Mystery',
        destination: {
          type: 'book',
          id: 'the-caves-of-steel'
        }
      }, {
        main: 'Thriller',
        destination: {
          type: 'book',
          id: 'lucifers-hammer'
        }
      }
    ]
  },
  'scifi-war-pick': {
    question: 'Who shall we fight?',
    answers: [
      {
        main: 'Man vs. Bugs',
        destination: {
          type: 'book',
          id: 'starship-troopers'
        }
      }, {
        main: 'Man vs. Far Away Bugs',
        destination: {
          type: 'book',
          id: 'enders-game'
        }
      }, {
        main: 'Man vs. Alien',
        destination: {
          type: 'book',
          id: 'the-forever-war'
        }
      }, {
        main: 'Spiritual vs. Colonial',
        destination: {
          type: 'book',
          id: 'the-dune-chronicles'
        }
      }, {
        main: 'Human v. Human',
        destination: {
          type: 'book',
          id: 'the-moon-is-a-harsh-mistress'
        }
      }, {
        main: 'Everyone',
        destination: {
          type: 'book',
          id: 'old-mans-war'
        }
      }
    ]
  },
  'galaxy-far-away': {
    question: 'A galaxy far away?',
    answers: [
      {
        main: 'Yes',
        sub: 'Preferably long ago, as well.',
        destination: {
          type: 'book',
          id: 'the-thrawn-trilogy'
        }
      }, {
        main: 'No',
        sub: 'I see what you did there...',
        destination: {
          type: 'question',
          id: 'galaxy-far-away-laugh'
        }
      }
    ]
  },
  'alien-pick': {
    question: 'What kind of aliens would you like?',
    answers: [
      {
        main: 'Hostile',
        destination: {
          type: 'book',
          id: 'war-of-the-worlds'
        }
      }, {
        main: 'Absent',
        destination: {
          type: 'book',
          id: 'rendezvous-with-rama'
        }
      }, {
        main: 'Peaceful',
        destination: {
          type: 'book',
          id: 'childhoods-end'
        }
      }, {
        main: 'Fatherly',
        destination: {
          type: 'book',
          id: 'contact'
        }
      }, {
        main: 'Prodigious Breeders',
        destination: {
          type: 'book',
          id: 'the-mote-in-gods-eye'
        }
      }
    ]
  },
  'galaxy-far-away-laugh': {
    question: 'Are you having a laugh?',
    answers: [
      {
        main: 'Yes',
        sub: 'Comedy is in my blood.',
        destination: {
          type: 'book',
          id: 'the-hitchhikers-guide-to-the-galaxy'
        }
      }, {
        main: 'No',
        sub: 'I do not have a sense of humor that I\'m aware of.',
        destination: {
          type: 'question',
          id: 'galaxy-far-away-laugh-no'
        }
      }, {
        main: 'Maybe',
        sub: 'I don\'t mind a few chuckles between explosions.',
        destination: {
          type: 'book',
          id: 'the-culture-series'
        }
      }
    ]
  },
  'galaxy-far-away-laugh-no': {
    question: 'Kind of professorial aren\'t we?',
    answers: [
      {
        main: 'No',
        sub: 'I just like my action intense.',
        destination: {
          type: 'question',
          id: 'galaxy-far-away-laugh-no-series'
        }
      }, {
        main: 'Yes',
        sub: 'I\'m a scholarly adventurer.',
        destination: {
          type: 'question',
          id: 'scifi-scholarly'
        }
      }
    ]
  },
  'galaxy-far-away-laugh-no-series': {
    question: 'Interested in a long read?',
    answers: [
      {
        main: 'Yes',
        destination: {
          type: 'book',
          id: 'vorkosigan-saga'
        }
      }, {
        main: 'No',
        sub: 'A whole series? I don\'t have that much time?',
        destination: {
          type: 'question',
          id: 'scifi-space-shorter-stories'
        }
      }
    ]
  },
  'scifi-space-shorter-stories': {
    question: 'Short stories it is then. Robots or Martians?',
    answers: [
      {
        main: 'Robots',
        destination: {
          type: 'book',
          id: 'i-robot'
        }
      }, {
        main: 'Martians',
        destination: {
          type: 'book',
          id: 'the-illustrated-man'
        }
      }
    ]
  },
  'scifi-scholarly': {
    question: 'What are you studying?',
    answers: [
      {
        main: 'History',
        destination: {
          type: 'book',
          id: 'foundation-trilogy'
        }
      }, {
        main: 'Engineering',
        destination: {
          type: 'book',
          id: 'ringworld'
        }
      }, {
        main: 'Information Technology',
        destination: {
          type: 'book',
          id: 'a-fire-upon-the-deep'
        }
      }
    ]
  },
  'math-geek': {
    question: 'Math Geek?',
    answers: [
      {
        main: 'Yes',
        destination: {
          type: 'book',
          id: 'anathem'
        }
      }, {
        main: 'No',
        destination: {
          type: 'question',
          id: 'fantasy-scifi-future-no-math'
        }
      }
    ]
  },
  'fantasy-scifi-past': {
    question: 'Like monsters?',
    answers: [
      {
        main: 'Yes',
        destination: {
          type: 'book',
          id: 'perdido-street-station'
        }
      }, {
        main: 'No',
        destination: {
          type: 'book',
          id: 'the-eyre-affar'
        }
      }
    ]
  },
  'scifi-romantic-time': {
    question: 'Like a little time travel with your love story?',
    answers: [
      {
        main: 'Yes',
        destination: {
          type: 'question',
          id: 'scifi-romantic-time-yes'
        }
      }, {
        main: 'No',
        destination: {
          type: 'question',
          id: 'scifi-romantic-time-no'
        }
      }
    ]
  },
  'scifi-romantic-time-yes': {
    question: 'You might be interested in a couple of books...',
    answers: [
      {
        main: 'Try this',
        destination: {
          type: 'book',
          id: 'the-time-travellers-wife'
        }
      }, {
        main: 'Or this',
        destination: {
          type: 'book',
          id: 'the-outlander-series'
        }
      }
    ]
  },
  'scifi-romantic-time-no': {
    question: 'Tough.',
    answers: [
      {
        main: 'Try this',
        destination: {
          type: 'book',
          id: 'the-time-travellers-wife'
        }
      }, {
        main: 'Or this',
        destination: {
          type: 'book',
          id: 'the-outlander-series'
        }
      }
    ]
  },
  'zombie-pick': {
    question: 'Zombie war, or one man against a hoard?',
    answers: [
      {
        main: 'I\'m going it alone',
        destination: {
          type: 'i-am-legend',
          id: 'xxxx'
        }
      }, {
        main: 'With a little help from my friends',
        destination: {
          type: 'book',
          id: 'world-war-z'
        }
      }, {
        main: 'No',
        sub: 'On second thought, why not go with a classic',
        destination: {
          type: 'book',
          id: 'frankenstein'
        }
      }
    ]
  },
  'fantasy-scifi': {
    question: 'You can have it all. Into the future or the past?',
    answers: [
      {
        main: 'Future',
        destination: {
          type: 'question',
          id: 'math-geek'
        }
      }, {
        main: 'Past',
        destination: {
          type: 'question',
          id: 'fantasy-scifi-past'
        }
      }
    ]
  },
  'romance-or-underdog': {
    question: 'Romance or overcoming the odds?',
    answers: [
      {
        main: 'I root for the underdog',
        destination: {
          type: 'book',
          id: 'flowers-for-algernon'
        }
      }, {
        main: 'Romance',
        destination: {
          type: 'question',
          id: 'scifi-romantic-time'
        }
      }
    ]
  },
  'graphic-novels': {
    question: 'PoMo Superheroes or tortured spector?',
    answers: [
      {
        main: 'Heroes',
        destination: {
          type: 'book',
          id: 'watchmen'
        }
      }, {
        main: 'Master of Dreams',
        destination: {
          type: 'book',
          id: 'the-sandman-series'
        }
      }
    ]
  },
  'vampire-pick': {
    question: 'Not much to choose from. Looking for vampires?',
    answers: [
      {
        main: 'Yes',
        destination: {
          type: 'book',
          id: 'sunshine'
        }
      }, {
        main: 'No',
        destination: {
          type: 'question',
          id: 'zombie-pick'
        }
      }
    ]
  },
  'genre-bender': {
    question: 'We won\'t tell. Prefer a drama?',
    answers: [
      {
        main: 'Yes',
        sub: 'I love me a good tear jerker.',
        destination: {
          type: 'question',
          id: 'romance-or-underdog'
        }
      }, {
        main: 'No',
        sub: 'I just watched The Notebook last night.',
        destination: {
          type: 'question',
          id: 'no-drama'
        }
      }
    ]
  },  
  '___':0
};
