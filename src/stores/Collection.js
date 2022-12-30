import { createSlice } from "@reduxjs/toolkit";

export const Collection = createSlice({
  name: "collection",
  initialState: {
    collections: [
      {
        id: 1,
        name: "ETH GLOBBLERS",
        floorPrice: 0.33,
        volume: 447,
        isVerified: false,
        valueBy: "ETH",
        imgSrc:
          "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy9kMjA1MWJlZmExOTE4ZDllOTkxOTFmZjJhMTJmZmM2OS5naWY/dz01MDAmYXV0bz1mb3JtYXQ=",
      },
      {
        id: 2,
        name: "flawless renegades",
        floorPrice: 0.04,
        volume: 80,
        isVerified: false,
        valueBy: "ETH",
        imgSrc:
          "https://assets.bueno.art/images/QmTmUC4hUK3NY9EEhi777tBdtutMVCwVf1NGUzEyqYtpst?w=600&auto=format&s=226250e19565415dca62bc0d19057cb7",
      },

      {
        id: 3,
        name: "10KTF Stockroom",
        floorPrice: 0.07,
        volume: 84,
        isVerified: true,
        valueBy: "ETH",
        imgSrc:
          " https://looksrare.mo.cloudinary.net/0x7DaEC605E9e2a1717326eeDFd660601e2753A057/0x36d5b61cfa65102972394b3adc049b78f382981ca5c5b447c3a71baa2429d3de?resource_type=image&f=auto&c=limit&w=1600&q=auto",
      },

      {
        id: 4,
        name: "yaygifs",
        floorPrice: 0.01,
        volume: 40,
        isVerified: false,
        valueBy: "ETH",
        imgSrc: "https://pbs.twimg.com/media/Fk3sl-nWIAE0_Sb.png",
      },
      {
        id: 5,
        name: "SOULIO / SOLDOUT",
        floorPrice: 0.03,
        volume: 31,
        isVerified: false,
        valueBy: "ETH",
        imgSrc:
          "https://www.infobae.com/new-resizer/lM4EZU4MKGp5BDrC86TW3kKGmLw=/arc-anglerfish-arc2-prod-infobae/public/BODULJCOVVDTJNDICFN3NLBFII.jpg",
      },
      {
        id: 6,
        name: "KURENAİI-HOOZUKI-",
        floorPrice: 0.05,
        volume: 32,
        isVerified: false,
        valueBy: "ETH",
        imgSrc:
          "https://i.seadn.io/gcs/files/8347173f9e5bce705308c8705e5f42aa.jpg?w=500&auto=format",
      },
      {
        id: 7,
        name: "Bitz Ape",
        floorPrice: 0.04,
        volume: 22,
        isVerified: false,
        valueBy: "ETH",
        imgSrc:
          "https://i.seadn.io/gcs/files/3eb24a74a35418b81247d93db545ff8d.jpg?w=500&auto=format",
      },
      {
        id: 8,
        name: "FreeNFT.xyz Daily Cargo",
        floorPrice: 0.01,
        volume: 21,
        isVerified: false,
        valueBy: "ETH",
        imgSrc:
          "https://pbs.twimg.com/profile_images/1592739599964549120/QdpL7K6d_400x400.jpg",
      },
      {
        id: 9,
        name: "Dads left 4 Milk",
        floorPrice: 0.02,
        volume: 15,
        isVerified: false,
        valueBy: "ETH",
        imgSrc:
          " https://i.seadn.io/gcs/files/e4599c2d3248b9fa8388af2b6b2ce8f7.jpg?w=500&auto=format",
      },

      {
        id: 10,
        name: "Ultiverse - Moonlight",
        floorPrice: 0.03,
        volume: 76,
        isVerified: false,
        valueBy: "BNB",
        imgSrc:
          " https://public.nftstatic.com/static/nft/res/nft-cex/S3/1666606966635_mhfz6onyjqnj3e1hvyqymavmvzrir9fw.gif",
      },
    ],
    reducers: {},
  },
});

export const {} = Collection.actions;
export default Collection.reducer;
