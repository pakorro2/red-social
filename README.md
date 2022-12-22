# Red Social API

### Url base: http://localhost:9000/api/v1

- /auth
    - /login -> Login con las credenciales del usuario para autenticar
    
- /post
    - /me -> Mis propias publicaciones
    - /users/id -> Publicaciones de usuarios en particular
    - /:id -> Una publicacion en especifico
    - /:id/comments -> Los comentarios de una publicacion en especifico
    - /:id/likes -> Los likes de una publicacion en especifico

- /users
    - /me -> Mi Perfil de usuario 
    - /:id -> Un usuario en espesifico
    - /:id/follow

example ecommerce: /product/:id/add-to-cart


- /follows
    - /:id

- /followers
    - /:id

---
### Posts controllers
- [x] findAllPosts,
- [x] findPostById,
- [x] createPost,
- [x] updatePost
- [x] removePost

### Posts Services
- [x] getAllPosts,
- [x] getPostById,
- [x] postNewPost,
- [x] patchPost
- [x] deletePost


