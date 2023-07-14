const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

app.listen(port, () => {
    const posts = [
        { title: 'Lamborghini',price: '$200', image:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png', description: 'Automobili Lamborghini S.p.A. is an Italian manufacturer of luxury sports cars and SUVs based in Sant Agata Bolognese.'},
        { title: 'Mercedes',price: '$300',image:'https://www.carscoops.com/wp-content/uploads/2023/02/2022-Mercedes-CLS.jpg', description: 'Mercedes-Benz, commonly referred to as Mercedes and sometimes as Benz, is a German luxury and commercial.'},
        { title: 'BMW',price: '$500',image:'https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/brands/bmw_i/2023/230201_BMW_Group_BMW_i4eDrive40.png', description: 'TBayerische Motoren Werke AG, abbreviated as BMW, is a German multinational manufacturer of luxury vehicles and motorcycles headquartered in Munich'},
        { title: 'Honda',price: '$100',image:'https://www.motortrend.com/uploads/sites/10/2022/11/2023-honda-civic-sport-5door-hatchback-angular-front.png', description: 'Honda Motor Co., Ltd. is a Japanese public multinational conglomerate manufacturer of automobiles, motorcycles, and power equipment, headquartered in Minato, Tokyo, Japan.'},
        { title: 'Lamborghini',price: '$200', image:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png', description: 'Automobili Lamborghini S.p.A. is an Italian manufacturer of luxury sports cars and SUVs based in Sant Agata Bolognese.'},
        { title: 'Mercedes',price: '$300',image:'https://www.carscoops.com/wp-content/uploads/2023/02/2022-Mercedes-CLS.jpg', description: 'Mercedes-Benz, commonly referred to as Mercedes and sometimes as Benz, is a German luxury and commercial.'},
        { title: 'BMW',price: '$500',image:'https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/brands/bmw_i/2023/230201_BMW_Group_BMW_i4eDrive40.png', description: 'TBayerische Motoren Werke AG, abbreviated as BMW, is a German multinational manufacturer of luxury vehicles and motorcycles headquartered in Munich'},
        { title: 'Honda',price: '$100',image:'https://www.motortrend.com/uploads/sites/10/2022/11/2023-honda-civic-sport-5door-hatchback-angular-front.png', description: 'Honda Motor Co., Ltd. is a Japanese public multinational conglomerate manufacturer of automobiles, motorcycles, and power equipment, headquartered in Minato, Tokyo, Japan.'},
      
      ]
      
      app.get('/api/products', (req, res) => {
        res.json(posts);
      });


  console.log(`Server is running on port ${port}`);
});

  