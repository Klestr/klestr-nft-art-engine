const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

// const network = NETWORK.eth;
const network = NETWORK.sol;

// General metadata for Ethereum & Sol
const namePrefix = "Cheese Boys";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "CB", // NFT Prefix Acronym
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://github.com/Klestr",
  creators: [ // Fund distribbution 
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 50, // all creators share needs to add up to 100 
    },
  ],
  creators: [ // Fund distribbution 
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjssEjEnPN4",
      share: 50, // all creators share needs to add up to 100 
    },
  ],
};

/*
 Eth iterates 1 + 
 Sol iterates 0 + <- normal array 
 If you have selected Solana then the collection starts from 0 automatically


Eg.
Sol
Created edition: 0, with DNA: 2214750725e427806ee97a1510f514475056fce7
Eth
Created edition: 1, with DNA: 8fddd59504b487f8e3c563f08d78b4d3bc644c03
*/
const layerConfigurations = [
  {
    growEditionSizeTo: 15, // number of NFT to Generate 
    layersOrder: [
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Eye color" },
      { name: "Iris" },
      { name: "Shine" },
      { name: "Bottom lid" },
      { name: "Top lid" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 10, // number of NFT to Generate 
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
