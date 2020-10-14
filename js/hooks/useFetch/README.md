# useFetch

Hook para poder utilizar la funcionalidad fetch de js, con la posibilidad de utilizar el un loader de manera sencilla y tambien de manejar el error en caso de una peticion incorrecta.

## Uso

```
    const { loading , error , data } = useFetch( url );
```

Url es el endpoint donde realizamos la peticion fetch, en primera instancia loading es un booleano true, cuando la peticion se ejecute pasara a false. El error inicia en null y continua de igual manera en caso de que no exista un error, caso contrario retornara un string "No se pudo cargar la informacion". En data tendremos un valor inicial de null, una vez ejecutada la peticion tendremos la informacion solicitada.