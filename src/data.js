import dragon from './images/dragon.jpg'
import hawaii from'./images/hawaii.jpg'
import tempshrimp from './images/tempshrimp.jpg'
import spicysal from './images/spicysal.jpg'
import spider from './images/spider.jpg'
import rainbow from './images/rainbow.jpg'
import miso from './images/miso.jpg'
import cocoshrimp from'./images/cocoshrimp.jpg'
import kingcrab from './images/kingcrab.jpg'
import sake from './images/sake.jpg'
import yellowtail from './images/yellowtail.jpg'
import albacore from './images/albacore.jpg'

const menu =[
    {
        id: 1,
        title: 'Dragon Roll',
        category: 'Rolls',
        price: 22,
        img: dragon,
        desc: `snow crab mix, avocado, cucumber topped w/ half an eel,
        sesame seeds, tobiko, soy glaze `,
      },
      {
        id: 2,
        title: 'Hawaii Roll',
        category: 'Rolls',
        price: 20,
        img: hawaii,
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      },
      {
        id: 3,
        title: 'Tempura Shrimp Roll',
        category: 'Rolls',
        price: 22,
        img: tempshrimp,
        desc: `shrimp tempura, mayo, avocado, cucumber, tobiko,
        sesame seeds`,
      },
      {
        id: 4,
        title: 'Spicy Salmon Roll',
        category: 'Rolls',
        price: 21,
        img: spicysal,
        desc: `salmon, spicy aioli, avocado, cucumber,
        tobiko, sesame seed `,
      },
      {
        id: 5,
        title: 'Spider Roll',
        category: 'Rolls',
        price: 22,
        img: spider,
        desc: `soft-shell crab, mayo, avocado, cucumber, tobiko`,
      },
      {
        id: 6,
        title: 'Rainbow Roll',
        category: 'Rolls',
        price: 20,
        img: rainbow,
        desc: `snow crab mix, cucumber topped w/ tuna, salmon,
        shrimp, yellowtail, avocado, tobiko, spicy aioli`,
      
      },
      {
        id: 7,
        title: 'Miso Soup',
        category: 'Soup',
        price: 7,
        img: miso, 
        desc: `tofu, scallions, seaweed `,
      },
      {
        id: 8,
        title: 'Spicy King Crab',
        category: 'Soup',
        price: 21,
        img: kingcrab, 
        desc: `king crab, onion, cilantro, jalapeno, habanero tobiko, bonito broth`,
      },
      {
        id: 9,
        title: 'Spicy Coconut Shrimp',
        category: 'Soup',
        price: 21,
        img: cocoshrimp, 
        desc: `shrimp, onion, cilantro, coconut milk, habanero tobiko, bonito broth`,
      },
      {
        id: 10,
        title: 'Sake (Salmon)',
        category: 'Sashimi',
        price: 18,
        img: sake, 
        desc: `3 slices $10, 6 slices $18`,
      },
      {
        id: 11,
        title: 'Hamachi (yellowtail)',
        category: 'Sashimi',
        price: 18 ,
        img: yellowtail, 
        desc: `3 slices $10, 6 slices $18`,
      },
      {
        id: 12,
        title: 'Shiro Maguro (albacore)',
        category: 'Sashimi',
        price: 2,
        img: albacore,
        desc: `4 slices $10, 6 slices $14`,
      },
]

export default menu;
