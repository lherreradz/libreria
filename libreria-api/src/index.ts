import { PrismaClient } from '@prisma/client'
import express from 'express'
import cors from 'cors'

const prisma = new PrismaClient()
const app = express()

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));

app.use(express.json())

app.get('/usuario', async (req, res) => {
    const usuarios = await prisma.usuario.findMany()
    res.json(usuarios)
  })  

app.get('/autor', async (req, res) => {
    const autores = await prisma.autor.findMany()
    res.json(autores)
  })  

  app.get('/libro', async (req, res) => {
    const usuarios = await prisma.usuario.findMany()
    res.json(usuarios)
  })  

app.get('/librosdisponibles', async (req, res) => {
    const libros = await prisma.libro.findMany({
      where: { disponible: true },
      include: { autor: true }
    })
    res.json(libros)
  })

app.get(`/libro/:id`, async (req, res) => {
    const { id } = req.params
    const libro = await prisma.libro.findFirst({
      where: { id: Number(id) },
    })
    res.json(libro)
  })

app.post(`/usuario`, async (req, res) => {
  try {
    const usuario = await prisma.usuario.findFirst({
      where: { email: req.body.email }
    })

    if(usuario){
      res.status(400).send({ error: 'Ya existe otro usuario con el mismo email.' });
    }
    else{
      const result = await prisma.usuario.create({
        data: { ...req.body },
      })
      res.json(result)
    }
    
  } catch (error) {
    res.status(400).send({ error: 'El usuario no ha sido creado.' });
  }
})

app.post(`/autor`, async (req, res) => {
  try {
    const autor = await prisma.autor.findFirst({
      where: { nombre: req.body.nombre }
    })

    if(autor){
      res.status(400).send({ error: 'Ya existe otro autor con el mismo nombre.' });
    }
    else{
      const result = await prisma.autor.create({
        data: { ...req.body },
      })
      res.json(result)
    }
    
  } catch (error) {
    res.status(400).send({ error: 'El autor no ha sido creado.' });
  }
})
  
app.post(`/libro`, async (req, res) => {
    const { titulo, autorNombre, isbn, cantidad_total } = req.body


    const libro = await prisma.libro.findFirst({
      where: { isbn: isbn },
    })

    if(libro){
      res.status(400).send({ error: 'Ya existe otro libro con el mismo ISBN.' });
    }
    else{
      try {
        const result = await prisma.libro.create({
        data: {
            titulo,
            autor: { connect: { nombre: autorNombre } },
            isbn,
            cantidad_total
        },
        })
        res.json(result)
      } catch (error) {
        res.status(400).send({ error: 'El libro no ha sido creado.' });
      }
    }
  })

app.put(`/prestarLibro`, async (req, res) => {
    const { libro_id, usuario_id } = req.body

    const libro = await prisma.libro.findUnique({
      where: { id: Number(libro_id) },
    })

    if(libro){
      if(libro.disponible){
        let newCantidadPrestada = Number(libro.cantidad_prestada)+1;
        let newDisponible = (newCantidadPrestada < Number(libro.cantidad_total));

        const libroUpdateRes = await prisma.libro.update({
          where: { id: Number(libro_id) },
          data: { 
            cantidad_prestada: newCantidadPrestada,
            disponible: newDisponible
          },
        })

        const result = await prisma.usuariosLibros.create({
        data: {
            libro: { connect: { id: libro_id }},
            usuario: { connect: { id: usuario_id }}
            }
        })
        res.json(result)
      }
      else{
        res.status(400).send({ error: 'No hay unidades disponibles de este libro.' });
      }
    }
    else{
      res.status(400).send({ error: 'No existe un libro con este id.' });
    }
  })


app.put(`/retornarLibro`, async (req, res) => {
  const { libro_id, usuario_id } = req.body

  const libro = await prisma.libro.findFirst({
    where: { id: Number(libro_id) },
  })

  if(libro){
    let newCantidadPrestada = Number(libro.cantidad_prestada)-1;

    const libroUpdateRes = await prisma.libro.update({
      where: { id: Number(libro_id) },
      data: { 
        cantidad_prestada: newCantidadPrestada,
        disponible: true
      },
    })

    const usuarioLibro = await prisma.usuariosLibros.delete({
      where: { usuario_id_libro_id:  {usuario_id: usuario_id,libro_id: libro_id} }
    })

    res.json(usuarioLibro)
  }
  else{
    res.status(400).send({ error: 'No existe un libro con este id.' });
  }
})

    app.put('/libro/:id/:cantidadTotal', async (req, res) => {
        const { id, cantidadTotal } = req.params

        const libro = await prisma.libro.findFirst({
          where: { id: Number(id) },
        })

        if(libro){

          const result = await prisma.libro.update({
            where: { id: Number(id) },
            data: { 
              cantidad_total: Number(cantidadTotal),
            }
          })
          res.json(result)
        }
        else{
          res.status(400).send({ error: 'No existe un libro con este id.' });
        }
      })

  app.delete(`/libro/:id`, async (req, res) => {
      const { id } = req.params
      const libro = await prisma.libro.delete({
        where: { id: Number(id) },
      })
      res.json(libro)
  })

app.listen(3001, () =>
  console.log('REST API server ready at: http://localhost:3001'),
)