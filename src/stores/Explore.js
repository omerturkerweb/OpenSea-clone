import { createSlice } from "@reduxjs/toolkit";

export const Explore = createSlice({
  name: "explore",
  initialState: {
    items: [
      {
        id: 1,
        name: "The Pendings",
        isVerified: false,
        background:
          "https://i.seadn.io/gcs/files/d0b17f1a361a8f79b8c5dde2bd1869d5.png?auto=format&w=1920",
        image:
          "https://i.seadn.io/gcs/files/09d041309d305c5d130c97f41beb2ef6.png?auto=format&w=128",
      },
      {
        id: 2,
        name: "ENS : Ethereum Name Service ",
        isVerified: true,
        background:
          "https://i.seadn.io/gae/BBj09xD7R4bBtg1lgnAAS9_TfoYXKwMtudlk-0fVljlURaK7BWcARCpkM-1LGNGTAcsGO6V1TgrtmQFvCo8uVYW_QEfASK-9j6Nr?auto=format&w=1920",
        image:
          "https://i.seadn.io/gae/0cOqWoYA7xL9CkUjGlxsjreSYBdrUBE0c6EO1COG4XE8UeP-Z30ckqUNiL872zHQHQU5MUNMNhfDpyXIP17hRSC5HQ?auto=format&w=128",
      },
      {
        id: 3,
        name: "Fluffy Polar Bears",
        isVerified: false,
        background:
          " https://i.seadn.io/gae/tFimJtkxolqZjELxeXQU0HFYEC1tQVlnsa_8Uaf_-1vvGmT7C36G0InQTyBfqS9bGhcWqyZIh3eUsDk8QMwOVO9oORAiR4mLPwjo8Vw?auto=format&w=1920",
        image:
          "https://i.seadn.io/gae/UC-Pq58qGkwdNejYOmcdP6JUDfNusuglxNa8vAnIiSFiOnzs8MkwcMCPl1llNuqz3bej1jhFZncjKNDmNoQ7rvr18HTm0CR3RS1XxA?auto=format&w=128",
      },
      {
        id: 4,
        name: "The Red Pill NFT",
        isVerified: false,
        background:
          "https://i.seadn.io/gcs/files/9a546e5bb3e64d537e1efa6bbfdb3bab.gif?auto=format&w=1920",
        image:
          "https://i.seadn.io/gcs/files/9a546e5bb3e64d537e1efa6bbfdb3bab.gif?auto=format&w=128",
      },
      {
        id: 5,
        name: "On-chain Solar Systems",
        isVerified: false,
        background:
          "https://i.seadn.io/gcs/files/766a89d3adf7a8291d27b94d2a38505d.png?auto=format&w=1920",
        image:
          "https://i.seadn.io/gcs/files/172249776b77183cb592f955c66bdb80.png?auto=format&w=128",
      },
      {
        id: 6,
        name: "FUTR One By Minifty",
        isVerified: false,
        background:
          "https://i.seadn.io/gcs/files/3ef6ca7e5591187426c57c5aab9245e7.jpg?auto=format&w=1920",
        image:
          "https://i.seadn.io/gcs/files/f1f7a39135dced852c73788b54553311.webp?auto=format&w=128",
      },
    ],
  },
  reducers: {},
});

export const {} = Explore.actions;

export default Explore.reducer;
