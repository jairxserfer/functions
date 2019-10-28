# Ejemplo de script lanzador de functions
#
# Written by Harry Bazalar


#Utilizo un secret en cada linea para crear el function, por lo que solicito que solo sea creado una vez y repetido

if [ -z "$1" ]; then
              echo usage: $0 theSecret
              exit
fi
theSecret=$1

#Esta linea crea el function utilizando el archivo javascript  y encarga la ejecución de la accion desde la linea 8, utilizando el secret ingresado
ibmcloud fn action create prueba/ejemploFunction ejemploFunctions.js --kind nodejs:8 --web true --web-secure $theSecret
#Este es un ejemplo del como se puede vincular otro servicio en este caso una base de datos a la accion ya creada
#ibmcloud fn service bind dashDB prueba/ejemploFunction --instance oneibmDB

