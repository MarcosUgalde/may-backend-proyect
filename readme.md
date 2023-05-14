PONER AQUÏ TODO LO QUE HEMOS IDO HACIENDO

1. Usando POST en la ruta localhost:4000/auth/signup introduce un "username" y un "password" que sean cadenas.
2. Usando POST en la ruta localhost:4000/auth/signin introduce el username y el password para logearte.
3. Usando POST en la ruta localhost:4000/auth/signout puedes deslogearte
4. Usando GET en la ruta localhost:4000/users podrás ver la información del usuario logeado.
5. Usando POST en la ruta localhost:4000/publications/newpost introduce "title" y "text_body" para añadir el título y el texto de la notica que quieras compartir.
6. Usando GET en la ruta localhost:4000/publications puedes obtener todas las publicaciones disponibles.
7. Usando GET en la ruta localhost:4000/publications/:id puedes obtener la información de una publicación concreta
8. Usando PUT en la ruta localhost:4000/publications/updatepost/:id puedes introducir los valores "newTitle" y "newText_body" para modificar el título o el contenido de la noticia
9. Usando DELETE en la ruta localhost:4000/publications/deletepost/:id puedes eliminar esa publicación.
10. Usando POST en la ruta localhost:4000/publications/:publication_id/newcomment puedes introducir un "response" para añadir un comentario a la noticia
11. Usando DELETE en la ruta localhost:4000/publications/:publication_id/deletecomment/:id puedes eliminar un comentario publicado en una noticia
12. Usando GET en la ruta localhost:4000/publications/:publication_id/comments puedes ver la noticia y todos los comentarios que se han hecho a esa publicación.
13. Usando GET en la ruta localhost:4000/publications/:publication_id/comments/:id puedes ver el título de la noticia y el comentario
14. Usando PUT en la ruta localhost:4000/publications/:publication_id/comments/:id/updatecomment puedes modificar un comentario hecho en una publicación.
