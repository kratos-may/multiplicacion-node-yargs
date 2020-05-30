esta es una aplicacion para generar archivos de tablas de de multiplicar.

ejecuta este comando

npm install

luego ejecuta para crear archivo de texto de tabla de multiplicar el siguiente comando:
node app crear --l 20 --b 100
=========================
donde --l 20(aqui puedes poner el limite que quieras, ejemplo: 11, 1000, etc) es el limite de iteraciones de la tabla, y donde b es la base para generar la tabla, ejemplo si es 2, generara esa tabla de mulpiplicar si es 3 generara la de 3 y asi sucesivamente.
=========================
tambien puedes poner para imprimir por consola:
node app listar --l 20 --b 10
este no genera archivo de texto