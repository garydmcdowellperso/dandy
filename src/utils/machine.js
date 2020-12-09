import { Machine } from "xstate";
      
const introVals = {
    start: 'start',
    enter: 'enter',
    giveup: 'giveup',
};

const firstLevel = {
    gates: 'down through the caves',
    mountain: 'up to the mountains',
};

const cavern = {
    open: 'open the box',
    north: 'head north',
};

const step1 = {
    west: 'head west',
    east: 'head east',
};

export const dandyMachine = Machine({
    id: 'dandy',
    initial: 'start',
    states: {
      [introVals.start]: {
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
          [introVals.enter]: introVals.enter,
          [introVals.giveup]: introVals.giveup,
        },
      },
      [introVals.giveup]: {
        meta: {
          story: `Be gone with you coward`,
        },
        on: {
            restart: introVals.start,
        },
      },
      [introVals.enter]: {
        meta: {
          story: `Your journey begins here, the town crier crashes a baton against the town bells
          and now you must decide if you go up to the mountains or down through the caves, each has
          its own perils, choose wisely`
        },
        on: {
            [firstLevel.mountain]: firstLevel.mountain,
            [firstLevel.gates]: firstLevel.gates,
        },
      },
      [firstLevel.gates]: {
        meta: {
            story: `The clamour of the excited spectators gradually
            fades behind you as y   ou venture deep lnto the
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
            [cavern.open]: cavern.open,
            [cavern.north]: cavern.north,
         },
      },
      [firstLevel.mountain]: {
        meta: {
            story: `The clamour of the excited spectators gradually
            fades behind you as vou venture with the first steps on your
            long climb up the mountain face.`,
          },
      },
      [cavern.open]: {
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
              [cavern.north]: cavern.north,
          }
      },
      [cavern.north]: {
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
            [step1.west]: step1.west,
            [step1.east]: step1.east,
        },
      },
    [step1.west]: {
        meta: {
            story: `step1.west`
        },
    },
    [step1.east]: {
        meta: {
            story: `step1.east`
        },
    },
    }
  });