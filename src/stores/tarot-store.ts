import { defineStore } from 'pinia';
import { Tarot } from 'components/models';

export const useTarotStore = defineStore('counter', {
  state: () => ({
    tarots: <Tarot[]>[
      {
        id: '1',
        number: '0',
        name: 'The Fool',
        description: 'He inspires courage, for he understands that every day is a chance to open up new areas in your life, and with that comes a mixture of anticipation, wonder, awe and curiosity.',
        type: 'Active',
        frequency: 'Once',
        effect: 'Using this card will fully restart the session at hand, the character and player will keep full memory of everything that has happened. <br /><br /> Every item, mechanic or skill unlocked will remain with the player.',
        image_url: 'https://cdnb.artstation.com/p/assets/images/images/021/046/595/4k/arnesson-art-thomas-hugo-0-the-fool.jpg',
      },
      {
        id: '2',
        number: 'I',
        name: 'The Magician',
        description: 'Remember that you are powerful, create your inner world, and the outer will follow.',
        type: 'Active',
        frequency: '∞',
        effect: 'Player will gain the ability to enter the outer planes at will.',
        image_url: 'https://cdnb.artstation.com/p/assets/images/images/043/857/041/4k/arnesson-art-thomas-hugo-1-the-magician-4.jpg',
      },
      {
        id: '3',
        number: 'II',
        name: 'The High Priestess',
        description: 'Her appearance in a reading can signify that it is time for you to listen to your intuition rather than prioritizing your intellect and conscious mind.',
        type: 'Active',
        frequency: '1 per short rest',
        effect: 'Gain creative inspiration for 1 action outside of combat, you will receive expertise with one of the following: <br /> <ol class="tw-list-disc tw-ml-8"><li>Investigation</li><li>Insight</li><li>Arcana</li><li>Perception</li></ol>When the player already has expertise with all of the skills, the player will gain an additional +2 on one of the skills.',
        image_url: 'https://cdnb.artstation.com/p/assets/images/images/044/226/367/4k/arnesson-art-thomas-hugo-2-the-high-priestess-5.jpg?1639430517',
      },
      {
        id: '4',
        number: 'III',
        name: 'The Empress',
        description: 'He inspires courage, for he understands that every day is a chance to open up new areas in your life, and with that comes a mixture of anticipation, wonder, awe and curiosity.',
        type: 'Active',
        frequency: '1 p/sr',
        effect: 'Give half of your current HP to another player.',
        image_url: 'https://cdna.artstation.com/p/assets/images/images/049/597/946/4k/arnesson-art-thomas-hugo-3-the-empress-2.jpg?1652866508',
      },
      {
        id: '5',
        number: 'IV',
        name: 'The Emperor',
        description: 'He inspires courage, for he understands that every day is a chance to open up new areas in your life, and with that comes a mixture of anticipation, wonder, awe and curiosity.',
        type: 'Active',
        frequency: '1 p/se',
        effect: 'All hostile creatures below your own level will become passive, some even submissive. However, you are not able to damage nor kill these creatures.',
        image_url: 'https://cdna.artstation.com/p/assets/images/images/021/681/662/4k/arnesson-art-thomas-hugo-the-emperor-2.jpg?1572554989',
      },
    ],
    current: <Tarot>{}
  }),
  getters: {
    all: (state) => state.tarots,
  },
  actions: {
    setCurrent(id: string | string[]) {
      const index = this.tarots.findIndex((tarot) => tarot.id == id);
      this.current = this.tarots[index] ?? {};
    },
  },
});
