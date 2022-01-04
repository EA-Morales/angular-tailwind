# Angular 13 - Angular material - Tailwind 3.0

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Para instalar angular material

Primero instalar angular material

```
ng add @angular/material
```

## Para intalar Tailwind css

```
npm install -D tailwindcss
```

Luego inicializar tailwindcss

```
npx tailwindcss init
```

Configurar los paths al tailwind.config.js

```
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Ultimo paso añadir las directivas css a tu css raiz

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
