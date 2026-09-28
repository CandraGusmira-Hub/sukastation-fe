// Satu sumber data game untuk dua tempat:
// - GameList (preview di halaman utama, 6 game pertama)
// - GameLibrary (halaman khusus, semua game)
// Nambah game baru cukup di sini.
//
// Cara ganti/nambah gambar cover:
// 1. Taruh file gambarnya di public/images/games/ (misal: public/images/games/gta5.png)
// 2. Isi field `image` dengan path-nya, contoh: "/images/games/gta5.png"
// Kalau `image` kosong atau file gagal dimuat, kartu otomatis fallback ke ikon gamepad.
const games = [
  { title: "Grand Theft Auto V", platform: "PS4 / PS5", categories:"OpenWorld" , image: "/images/games/GTAV.png" },
  { title: "God Of War Ragnarök", platform: "PS5", categories:"SinglePlayer" ,image: "/images/games/god-of-war-rag.png" },
  { title: "Hogwarts Legacy", platform: "PS5", categories:"SinglePlayer", image: "/images/games/hogwarts-legacy.png" },
  { title: "Marvel's Spider-Man 2", platform: "PS5", categories:"SinglePlayer", image: "/images/games/spiderman2.png" },
  { title: "Horizon Forbidden West", platform: "PS4", categories:"OpenWorld", image: "/images/games/horizon-west.png" },
  { title: "It Takes Two", platform: "PS5",categories:"MultiPlayer", image: "/images/games/it-takes-two.png" },
  { title: "EA Sports FC27", platform: "PS5",categories:"MultiPlayer / Sport", image: "/images/games/fc27.png" },
  { title: "EA UFC 6", platform: "PS5",categories:"MultiPlayer / Sport", image: "/images/games/ufc6.png" },
  { title: "Assasin Creed Mirage", platform: "PS5",categories:"SinglePlayer / OpenWorld", image: "/images/games/assasinscreed.png" },
  { title: "F1", platform: "PS5",categories:"Sports / Arcade", image: "/images/games/f1.png" },
  { title: "Elden Ring", platform: "PS5",categories:"SinglePlayer / OpenWorld", image: "/images/games/elden-ring.png" },
  { title: "BlackSmith Wukong", platform: "PS5",categories:"SinglePlayer / OpenWorld", image: "/images/games/blacksmith-wukong.png" },
];

export default games;
