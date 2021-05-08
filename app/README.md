# app

Finalmente he acabado haciendo el back porque de otra manera hubiera sido complicado hacer correctamente el ejercicio.

A partir del ejercicio 5 ya no había más visuales por lo que me he centrado más en la lógica dado que andamos cortos de tiempo.

Para el offline he utilizado el localStorage, simplemente cada vez que se cargan se guardan en el localStorage y en caso de no estar online se recuperan del localStorage.

Mencionar que en el ejercicio 5 he olvidado hacer el modal reutilizable, sin
embargo lo he hecho reutilizable en el ejercicio 9.

El App.js lo he utilizado como componente de clase pero el resto de componentes que he creado han sido componentes funcionales. En su mayoría stateless. He dejado que fuera App.js quien se encargara de hacer las peticiones al back y quien manejara la mayor parte del estado.

Como se pedía en el enunciado no he añadido ninguna librería y he usado flexbox.

De andar con más tiempo refactorizaría algo más el código, especialmente separar las llamadas al api, las funciones privadas y pulir un poco más los estilos y los nombres de las funciones.
