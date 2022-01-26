const products = [
    {
      id: 1,
      nombre: "Notebook Acer",
      imagen: "https://raw.githubusercontent.com/francozalazar/imagenes/main/acer.jpg",
      descripcion:"Computadora portatil de oficina liviana",
      marca:"Acer",
      precio: 28999,
      cantidad: 10,
    },
    {
      id: 2,
      nombre: "MacBook",
      imagen: "https://raw.githubusercontent.com/francozalazar/imagenes/main/apple.jpg",
      descripcion:"Computadora portatil de hogar importada, gran definicion",
      marca:"Apple",
      precio: 24999,
      cantidad: 6,
    },
    {
      id: 3,
      nombre: "Samsung",
      imagen: "https://raw.githubusercontent.com/francozalazar/imagenes/main/samsung.jpg",
      descripcion:"Computadora portatil de oficina ",
      marca:"Samsung",
      precio: 18999,
      cantidad: 7,
    },
    {
      id: 4,
      nombre: "Notebook Dell",
      imagen: "https://raw.githubusercontent.com/francozalazar/imagenes/main/dell.jpg",
      descripcion: "Computadora portatil de oficina",
      marca: "Dell",
      precio: 8999,
      cantidad: 11,
    },
    {
      id: 5,
      nombre: "Notebook HP",
      imagen: "https://raw.githubusercontent.com/francozalazar/imagenes/main/hp1.jpg",
      descripcion:"Computadora de oficina portatil",
      marca:"HP",
      precio: 8999,
      cantidad: 12,
    },
    {
      id: 6,
      nombre: "Notebook Huawei",
      imagen:"https://raw.githubusercontent.com/francozalazar/imagenes/main/huawei.jpg",
      descripcion:"Computadora portatil de gran velocidad ",
      marca:"Huawei",
      precio: 24999,
      cantidad: 14,
    },
    {
      id: 7,
      nombre: "Notebook Lenovo",
      imagen: "https://raw.githubusercontent.com/francozalazar/imagenes/main/lenovo.jpg",
      descripcion:"Computadora de oficina portatil",
      marca:"Lenovo",
      precio: 18999,
      cantidad: 5,
    },
    {
      id: 8,
      nombre: "Notebook LG",
      imagen: "https://raw.githubusercontent.com/francozalazar/imagenes/main/lg.jpg",
      descripcion:"Computadora de oficina u hogar portatil",
      marca:"Lg",
      precio: 23999,
      cantidad: 6,
    },
    
  ];
  
   export const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(products)
    },2000)
})
