import { Machine } from "xstate";

const commands = {
    ring: 'ring',
    openBox: 'open box',
    up: 'up',
    down: 'down',
    enter: 'enter',
    giveup: 'giveup',
    north: 'north',
    south: 'south',
    east: 'east',
    west: 'west',
    fight: 'fight',
    flee: 'flee',
    scream: 'scream',
    deaden: 'deaden with boot',
};

const intro = {
    start: 'start',
    enter: 'enter',
    giveup: 'giveup'
}

const level1_cave = {
    intro: 'introcave',
    open: 'open',
    north: 'north',
    west: 'west',
    east: 'east',
    north2: 'north2',
    west2: 'west2',
    west3: 'west3',
    ring: 'ring',
    scream: 'scream',
    deaden: 'deaden',
}

const level1_mountain = {
    intro: 'intromoutain',
}

export const dandyMachine = Machine({
    id: 'dandy',
    initial: 'start',
    states: {
      [intro.start]: {
        meta: {
          story: `<p>Down in the dark, twisting labyrinth of Fang, unlnown
          horrors await you. Devised by the devilish mind of Baron
          Sukhumvit, the labyrinth is riddled with fiendish traps and
          bloodthristy monsters, which will test your skils almost
          beyond the limit of endurance. Countless adventurers
          before you have takcn up the challenge of the Trial of
          Champions and walked through the caved mouth of the
          labynnth, never to be seen again Do YOU dare enter?
          Tempted by the promise of a fabulous prize - and the lure
          of the unbeaten challenge - YOU are one of six seasoned
          fighters prepared to take on the labyrinth. Only one of you
          may win through - the rest will perish. But which of you
          will it be?</p>`,
        },
        on: {
          [commands.enter]: intro.enter,
          [commands.giveup]: intro.giveup,
        },
      },
      [intro.giveup]: {
        meta: {
          story: `Be gone with you coward`,
        },
        on: {
            restart: intro.start,
        },
      },
      [intro.enter]: {
        meta: {
          story: `Your journey begins here, the town crier crashes a baton against the town bells
          and now you must decide if you go up to the mountains or down through the caves, each has
          its own perils, choose wisely`
        },
        on: {
            [commands.up]: level1_mountain.intro,
            [commands.down]: level1_cave.intro,
        },
      },
      [level1_cave.intro]: {
        meta: {
            story: `The clamour of the excited spectators gradually
            fades behind you as you venture deep lnto the
            gloom of the cavern tunnel.
            Large crystals hang from the tunnel roof at twenty metre intervals, radiating a soft light, just enough
            for you to see your way. As your eyes gradually
            become accustomed to the near darkness, you begin
            to see movement all around. Spiders and beetles
            crawling up and down the chiselled walls disappear
            quickly into cracks and crevices as they sense your
            approach; rats and mice scurry along the floor ahead
            of vou. Droplets of water drip into small pools with
            an eerie plopping sound which echoes down the
            tunnel The air is cold, moist and dank. After walking slowly along the tunnel for about five minutes,
            you arive at a stone table standing against the wall
            to your left On it there are six boxes, one of which
            has your name painted on its lid. 
            `,
          },
          on: {
            [commands.openBox]: level1_cave.open,
            [commands.north]: level1_cave.north,
         },
      },
      [level1_mountain.intro]: {
        meta: {
            story: `The clamour of the excited spectators gradually
            fades behind you as vou venture with the first steps on your
            long climb up the mountain face.`,
          },
      },
      [level1_cave.open]: {
        meta: {
            story: `The lid of the box lifts off easily. Inside you find two
            Gold Pieces and a note written on a small plece of
            parchment addressed to you. After Placing the gold
            in your pocket, you read the message, which says:
            'Well done At least you have the sense to stop and
            take advantage of the token aid given to you. Now I
            can advise you that you will need to find and use
            several iterms if you hope to pass triumphantly
            through my Deathtrap Dungeon. Signed Sukumvit ' Memorizing the advice on the noie, you tear
            it into tiny pieces and continue north along the
            tunnel`,
          },
          on: {
              [commands.north]: level1_cave.north,
          }
      },
      [level1_cave.north]: {
        meta: {
            story: `After walking down the tunnel for a few minutes,
            you come to a junction. A white arrow painted on
            one wall points west. On the floor you can see wet
            footprints made by those who entered before you. It
            is hard to be sure, but it looks as though three of
            them followed the direction of the arrow, while one
            decided to go east. `
          },
        on: {
            [commands.west]: level1_cave.west,
            [commands.east]: level1_cave.east,
        },
      },
    [level1_cave.west]: {
        meta: {
            story: `Following the three sets of wet footprints along the
            west passage of the tunnel, you soon arrive at a
            junction. West you can see the footprints continue, whilst there are a sole set of tracks north`
        },
        on: {
            [commands.west]: level1_cave.west2,
            [commands.north]: level1_cave.north2,
        },
    },
    [level1_cave.east]: {
        meta: {
            story: `step1.east`
        },
    },
    [level1_cave.west2]: {
        meta: {
            story: `Walking along the tunnel, you are surprised to see a
            large iron bell hanging down from the ceiling.`
        },
        on: {
            [commands.ring]: level1_cave.ring,
            [commands.west]: level1_cave.west3,
        },
    },
    [level1_cave.ring]: {
        meta: {
            story: `A dull 'bong' sounds ftom the bell like a death toll.
            Everying around you starts to vibrate, and you
            grit your teeth as your head too starts to shudder.
            Your whole body is trembling and you fall to the
            floor. You quiver and shake, writhing convulsively
            on the floor as the vibiations intensify. Lose 2 SKILL
            points and 2 STAMINA points. You search desperately for a way of stopping the bell.`
        },
        on: {
            [commands.scream]: level1_cave.scream,
            [commands.deaden]: level1_cave.deaden,
        },
    },
    [level1_cave.west3]: {
        meta: {
            story: `level1_cave.west3`
        },
    },
    [level1_cave.north2]: {
        meta: {
            story: `step2.north`
        },
    },
    [level1_cave.scream]: {
        meta: {
            story: `level1_cave.scream`
        },
    },
    [level1_cave.deaden]: {
        meta: {
            story: `level1_cave.deaden`
        },
    },
    }
  });