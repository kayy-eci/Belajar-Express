import express, { type Express, type Request, type Response } from "express";
import cors from "cors";

const app: Express = express();
const port = 8000;

app.use(cors());

const dataFilm = [
  {
    title: "Crimson Static",
    year: 2024,
    rating: "16+",
    duration: "2h 4m",
    genres: ["Thriller", "Suspenseful"],
  },
  {
    title: "Neon Harbor",
    year: 2023,
    rating: "18+",
    duration: "3 Seasons",
    genres: ["Crime", "Dark"],
  },
  {
    title: "The Last Signal",
    year: 2022,
    rating: "13+",
    duration: "1h 58m",
    genres: ["Sci-Fi", "Mind-bending"],
  },
  {
    title: "Paper Moths",
    year: 2024,
    rating: "16+",
    duration: "2 Seasons",
    genres: ["Drama", "Romantic"],
  },
  {
    title: "Glass",
    year: 2021,
    rating: "16+",
    duration: "1h 47m",
    genres: ["Mystery", "Suspenseful"],
  },
  {
    title: "Moths",
    year: 2024,
    rating: "16+",
    duration: "2 Seasons",
    genres: ["Drama", "Romantic"],
  },
  {
    title: "Glard",
    year: 2021,
    rating: "16+",
    duration: "1h 47m",
    genres: ["Mystery", "Suspenseful"],
  },
];

app.get("/api/movie", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Data film berhasil di fetch",
    data: dataFilm,
  });
});

// const data = [{
//     name: "susu uht",
//     category: "minuman",
//     prices: 4500
// },{
//     name: "indomie sedap",
//     category: "makanan",
//     prices: 5000
// }, {
//     name: "cipuk mang teten",
//     category: "makanan",
//     prices: 1000
// }
// ]

// app.get('/api/products', (req: Request, res: Response) => {
//   res.status(200).json({
//     message: "Berhasil fetch data products",
//     data   : data
//   })
// });

// app.post('/api/products', (req: Request, res: Response) => {
//     res.status(200).json({
//         message : "Berhasil menambahkan data products",
//         data: data.push({
//             name: "beng beng",
//             category: "makanan",
//             prices: 2000
//         })
//     })
// })

// app.put('/api/products', (req: Request, res: Response) => {
//     res.status(200).json({
//         message: "Data berhasil di ubah",
//         data: data[0] = {
//             name: "batagor",
//             category: "makanan",
//             prices: 5000
//         }
//     })
// })

// app.delete('/api/products', (req: Request, res: Response) => {

//     if (data.length === 0) {
//         res.status(404).json({
//             message: "Data yang ingin di hapus tidak ada"
//         })
//     }

//     res.status(200).json({
//         message: "Data berhasil di hapus",
//         data: data.pop()
//     })
// })

app.listen(port, () => {
  console.log(`arga is listening on port ${port}`);
});
