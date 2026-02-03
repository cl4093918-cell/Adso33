# comando
``git --version``
``node -v``
``npm -v``
## Inicializar un proyecto ##
```npm init -y ``
## manejo de git
``git init``
``git add .``
``git commit -m "v1"``
``git branch -M master``

# 📂Estructura profesional de una API en Node.js
api-node
|-src **Aqui vive todo el codigo real del proyecto** 
    |-config **Configuraciones globales**
    |-controllers **Controla as peticiones HTTP**
    |-middlewares **intermediarios de seguridad y validación**
    |-models **Representa las tablas de la base de datos**
    |-routers **Define las Urls de la API**
    |-services **Lógica del negocio**
    |-utils **Funciones utilizables**
    |-app.js **Configuración de la aplicación**
    |-server.js **Punto de arranque**
