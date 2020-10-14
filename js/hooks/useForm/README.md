# useForm

Este hook permite utilizar de manera sencilla formularios en html con mas de un campo input, es completamente valido utilizarlo con un solo campo input.

## Uso

```
    const [ values, handleInputChange , reset ] = useForm( intialState );
```
Donde values es un objeto que contiene el valor cargado en el initialState (objeto), dicho objeto debera tener como key los nombres de los inputs en el formulario, y dichos inputs deberan tener en el value el valor obtenido del objeto value referido a dicho input.

handleInputChange es el denominador comun entre todos los inputs, es el mismo metodo para todos, dicho metodo identificara que valor corresponde a que input basandose en sus nombres, por eso es importante inicializar el objeto con los nombres exactos a los inputs.

reset es un metodo que permite reiniciar el formulario.

## Ejemplo de uso

Teniendo el siguiente formulario Html

```
<form> 
    <input 
        type="text"
        name="name"
        value= { name }
        onChange = { handleInputChange }
    />
    <input 
        type="text"
        name="lastname"
        value= { lastname }
        onChange = { handleInputChange }
    />
    <button>
        Enviar
    </button>
</form>
```

El hook para manipular este formulario deberia ser el siguiente:

```
    const [ { name,lastname }, handleInputChange , reset ] = useForm({
        name: '',
        lastname: ''
    });
```

Observese que el handleInputChange es el mismo para los 2 inputs


