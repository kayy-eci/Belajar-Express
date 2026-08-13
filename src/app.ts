import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = 8000;



const data = [{
    name: "susu uht",
    category: "minuman",
    prices: 4500
}, {
    name: "indomie sedap",
    category: "makanan",
    prices: 5000
}]

app.get('/api/products', (req: Request, res: Response) => {
  res.status(200).json({
    message: "Berhasil fetch data products",
    data   : [{
        data
    }]  
  })
});

app.post('/api/products', (req: Request, res: Response) => {
    res.status(200).json({
        message : "Berhasil menambahkan data products",
        data: data.push({
            name: "beng beng",
            category: "makanan",
            prices: 2000
        })
    })
})

app.put('/api/products', (req: Request, res: Response) => {
    res.status(200).json({
        message: "Data berhasil di ubah",
        data: data[0] = {
            name: "batagor",
            category: "makanan",
            prices: 5000
        }
    })
})

app.delete('/api/products', (req: Request, res: Response) => {

    if (data.length === 0 ) {
        res.status(404).json({
            message: "Data yang ingin di hapus tidak ada"
        })
    }

    res.status(200).json({
        message: "Data berhasil di hapus",
        data: data.pop()
    })
}) 


app.listen(port, () => {
  console.log(`arga is listening on port ${port}`);
});