import { initializeApp } from "firebase/app";
import {collection, doc, addDoc, getFirestore, getDocs, getDoc, } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "miapkgabriel.firebaseapp.com",
  projectId: "miapkgabriel",
  storageBucket: "miapkgabriel.appspot.com",
  messagingSenderId: "455458194782",
  appId: "1:455458194782:web:cce1e1b441be876bddbbcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

const cargarBaseDeDatos = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach( async(producto) => {
       await addDoc(collection(db,"productos"), {
            nombre: producto.nombre,
            marca: producto.marca,
            categoria: producto.idCategoria,
            tipo: producto.tipo,
            marca: producto.marca,
            precio: producto.precio,
            stock: producto.stock,
            img: producto.img
       })
    })
}

const getProducto = async (id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const prod = [producto.id, producto.data()]
  console.log(prod)
  return prod
}

const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(producto => [producto.id, producto.data()])
  return items
}

export {cargarBaseDeDatos, getProductos, getProducto}
//AIzaSyDn-iRHBfQ9dYsqhCUtJr8Ooe2qlPyehUg