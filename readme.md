PONER AQUÏ TODO LO QUE HEMOS IDO HACIENDO

1. Usando POST en la ruta localhost:4000/auth/signup introduce un "username" y un "password" que sean cadenas.
2. Usando POST en la ruta localhost:4000/auth/signin introduce el username y el password para logearte.
3. Usando GET en la ruta localhost:4000/users podrás ver la información del usuario logeado.
4. Usando POST en la ruta localhost:4000/publications/newpost introduce "title" y "text_body" para añadir el título y el texto de la notica que quieras compartir.
5. Usando GET en la ruta localhost:4000/publications puedes obtener todas las publicaciones disponibles.
6. Usando GET en la ruta localhost:4000/publications/:id puedes obtener la información de una publicación concreta
7. Usando PUT en la ruta localhost:4000/publications/updatepost/:id puedes introducir los valores "newTitle" y "newText_body" para modificar el título o el contenido de la noticia
8. Usando DELETE en la ruta localhost:4000/publications/deletepost/:id puedes eliminar esa publicación.
9. Usando POST en la ruta localhost:4000/publications/:publication_id/newcomment puedes introducir un "response" para añadir un comentario a la noticia
10. Usando DELETE en la ruta localhost:4000/publications/:publication_id/deletecomment/:id puedes eliminar un comentario publicado en una noticia
11. Usando GET en la ruta localhost:4000/publications/:publication_id/comments puedes ver la noticia y todos los comentarios que se han hecho a esa publicación.
