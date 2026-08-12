[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/vCb5pM-C)
# Examen Estraordinario - Aplicación Ionic Simpsons

## Datos del estudiantes
- Nombre: ______________________

## 📋 Objetivo

Desarrollar una aplicación móvil utilizando Ionic + React que muestre una lista de personajes de Los Simpson consumiendo datos de una API REST externa.

## 🎯 Requisitos del Proyecto

### Funcionalidad Principal

Los estudiantes deberán implementar una aplicación que:

1. **Consuma la API de Los Simpson** para obtener la lista de personajes
2. **Muestre los personajes** en una lista ordenada

### API a Utilizar

**Endpoint Base:** `https://thesimpsonsapi.com/api`

**Endpoint de personajes:** `https://thesimpsonsapi.com/api/characters`

#### Método HTTP Requerido

La consulta debe realizarse mediante un **GET** al endpoint indicado.

#### Parámetros Requeridos

La consulta a la API puede incluir los siguientes parámetros:

| Parámetro | Valor | Descripción |
|-----------|-------|-------------|
| `limit` | `20` | Cantidad máxima de personajes a obtener |

#### Ejemplo de URL completa:
```
https://thesimpsonsapi.com/api/characters?limit=20
```

#### Estructura de la Respuesta

La API retorna datos en formato JSON. Para un personaje, la documentación muestra una estructura como esta:

```json
{
  "id": 1,
  "age": 39,
  "birthdate": "1956-05-12",
  "gender": "Male",
  "name": "Homer Simpson",
  "occupation": "Safety Inspector",
  "portrait_path": "/character/1.webp",
  "phrases": [
    "Doh!",
    "Why you little...!",
    "Woo-hoo!"
  ],
  "status": "Alive"
}
```

Para la lista de personajes, el estudiante debe consumir el endpoint de personajes y trabajar con el arreglo de personajes retornado por la API.

#### Campos Disponibles

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | number | Identificador único del personaje |
| `name` | string | Nombre del personaje |
| `age` | number | Edad del personaje |
| `birthdate` | string | Fecha de nacimiento |
| `gender` | string | Género del personaje |
| `portrait_path` | string | Ruta de la imagen del personaje |
| `occupation` | string | Ocupación del personaje |
| `phrases` | string[] | Frases asociadas al personaje |
| `status` | string | Estado del personaje |

## 🛠️ Requisitos Técnicos

### Tecnologías Obligatorias
- **Framework:** Ionic 8.5.0 (ya instalado)
- **Librería UI:** React 19.0.0 (ya instalado)
- **Lenguaje:** TypeScript 5.9 (ya configurado)
- **HTTP Client:** Axios (**OBLIGATORIO** - debe instalarse)

### Instalación de Axios

**IMPORTANTE:** Antes de empezar, instala Axios ejecutando:

```bash
npm install axios
```

### Componentes Ionic Recomendados
- `IonList` / `IonItem` - Para la lista de personajes
- `IonCard` - Para mostrar información del personaje
- `IonAvatar` - Para la imagen del personaje
- `IonHeader` / `IonToolbar` - Para el encabezado
- `IonContent` - Para el contenido principal
- `IonLoading` - Para indicar carga de datos

## 📱 Funcionalidades Esperadas

### 1. Modificar Vista Home (`src/pages/Home.tsx`)

**IMPORTANTE:** Debes modificar la página Home existente para que cargue y muestre los personajes de Los Simpson desde `https://thesimpsonsapi.com/api/characters`.

#### Requisitos de la Vista Home:
- **Consumir la API** mediante un GET al endpoint `/api/characters` al cargar el componente
- **Mostrar una lista** de los personajes obtenidos
- Cada ítem de la lista debe mostrar:
  - **Imagen** del personaje usando `portrait_path`
  - **Nombre** del personaje
  - **Género**
  - **Ocupación**
- Los datos deben consumirse directamente del arreglo retornado por la API

#### Ejemplo de estructura de ítem:
```
┌─────────────────────────────┐
│ [Imagen]  Homer Simpson       │
│           Género: Male        │
│           Ocupación: Safety Inspector │
└─────────────────────────────┘
```

### 2. Manejo de Estados
- Estado de carga (loading)
- Estado de error (si la API falla)
- Estado vacío (si no hay datos)

## 🎨 Criterios de Evaluación

**Total: 90 puntos**

| Criterio | Puntos |
|----------|--------|
| Consumo correcto de la API con Axios y GET a `/api/characters` desde Home | 28 pts |
| Visualización en Home: imagen, nombre, género y ocupación | 29 pts |
| Manejo de estados (loading, error, vacío) | 18 pts |
| Diseño UI/UX con componentes Ionic | 9 pts |
| Calidad de código (TypeScript) | 6 pts |
| **TOTAL** | **90 pts** |

## 🚀 Instrucciones de Inicio

### Instalación
```bash
npm install
```

### Ejecutar en Desarrollo
```bash
ionic serve
```


## 📝 Notas Importantes

1. **Instalación de Axios:** Lo primero es instalar Axios con `npm install axios`
2. **Tiempo de desarrollo:** [Especificar duración del examen]
3. **Entrega:** Subir proyecto a repositorio Git (GitHub/GitLab)
4. **Documentación:** Incluir comentarios breves en el código TypeScript cuando aporten claridad
5. **Testing:** Bonus points por implementar pruebas unitarias
6. **Uso de Axios:** Todas las llamadas a la API deben hacerse con Axios, no con Fetch API

## 🆘 Recursos de Ayuda

- [Documentación Ionic](https://ionicframework.com/docs)
- [Documentación React](https://react.dev)
- [The Simpsons API](https://thesimpsonsapi.com/api)
- [Ejemplo personaje 1](https://thesimpsonsapi.com/api/characters/1)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

