import { createSlice } from "@reduxjs/toolkit";
export const Home = createSlice({
  name: "Home",
  initialState: {
    products: [
      {
        id: 1,
        name: "Bored Ape",
        value: 2.7,
        isVerified: true,
        imgUrl:
          "https://uploads.laborx.com/gig/thumb_cropped_631x631_LHq07C4aiByeFw6W0O7uI4ziJpgnNLy9.png",
      },
      {
        id: 2,
        name: "Pixel Guy",
        value: 3.1,
        isVerified: false,
        imgUrl:
          "https://mintspace.io/wp-content/uploads/2022/03/20220308_114755_0000.png",
      },
      {
        id: 3,
        name: "Pixel Gangsta Guy",
        value: 0.3,
        isVerified: true,
        imgUrl:
          "https://i.pinimg.com/736x/19/ea/a1/19eaa15f300632f4c893873ee6643d6f.jpg",
      },
      {
        id: 4,
        name: "Cowboy Dog",
        value: 2.7,
        isVerified: false,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNT9-KdNipDagU1G5KzrD_uUt6c4tXPlZOYg&usqp=CAU",
      },
      {
        id: 5,
        name: "Duck Crocodile",
        value: 3.7,
        isVerified: true,
        imgUrl:
          "https://www.nftculture.com/wp-content/uploads/2021/10/funkycroc-NFTs.png",
      },
      {
        id: 6,
        name: "Pink Horse",
        value: 2.1,
        isVerified: false,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWfs_xO2dFYe5HpZwjIFym4lUhZHg_A9o8g&usqp=CAU ",
      },
      {
        id: 7,
        name: "Black Red Shoes",
        value: 0.7,
        isVerified: true,
        imgUrl:
          "https://www.datocms-assets.com/16499/1622710278-image3.png?auto=format&dpr=0.84&fit=max&w=960",
      },
      {
        id: 8,
        name: "Blue Ape",
        value: 1.8,
        isVerified: true,
        imgUrl:
          "https://lh3.googleusercontent.com/qIsIXihKZeVDop6AZWt1j6gxOnYZ_oGfr09PzlJDL_H4YWasvDrNuTXK8Qrmh0oL6ppWI3RaGU5vMif2gNwO38UdWWei4eZCNhbfdrVlm5qHV3zVYIk6qtBuFvdkoo0HexhmSmvn",
      },
    ],
  },
  reducers: {},
});

export const {} = Home.actions;
export default Home.reducer;
