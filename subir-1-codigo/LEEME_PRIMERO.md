# Tu sitio — guía de instalación (una sola vez)

Esto te deja con: sitio en vivo + panel de edición en `tusitio.netlify.app/admin` donde puedes agregar piezas, cambiar precios y marcar como vendido sin volver a hablar conmigo para eso.

Ninguno de estos pasos requiere saber programar. Es todo clicks.

---

## Paso 1 — Crear cuenta de GitHub (gratis)

GitHub es donde vive el código de tu sitio (como un Google Drive para código).

1. Ve a **github.com/signup**
2. Usa el correo que quieras usar para tu negocio
3. Elige un username — puede ser `valentina-studio` o similar

## Paso 2 — Crear el repositorio

1. Ya adentro de GitHub, click en el botón verde **"New"** (o el ícono `+` arriba a la derecha → "New repository")
2. Nombre: `valentina-studio-web`
3. Déjalo en **Public** o **Private**, cualquiera funciona
4. NO marques "Add a README" (ya traemos uno)
5. Click **"Create repository"**

## Paso 3 — Subir estos archivos

1. En la página de tu repositorio nuevo, busca el link que dice **"uploading an existing file"**
2. Arrastra **todo el contenido de esta carpeta** (todo lo que está junto a este LEEME, no la carpeta en sí)
3. Abajo, en "Commit changes", click **"Commit changes"**

## Paso 4 — Conectar con Netlify

1. Ve a **netlify.com** e inicia sesión (o crea cuenta gratis con el mismo correo)
2. Click **"Add new site"** → **"Import an existing project"**
3. Elige **GitHub**, autoriza el acceso, y selecciona `valentina-studio-web`
4. Netlify va a detectar automáticamente la configuración (ya está en `netlify.toml`) — no cambies nada, solo click **"Deploy"**
5. Espera ~1 minuto. Te va a dar una URL tipo `algo-al-azar.netlify.app` — esa es tu web, ya en vivo.

*(Opcional: en Netlify → "Domain settings" puedes conectar un dominio propio como studiovalentina.mx cuando lo compres.)*

## Paso 6 — Que te lleguen por correo las solicitudes de comisión

El formulario de Comisiones ya funciona solo (no necesita programación), pero por default las respuestas solo se guardan en el panel de Netlify — hay que activar que también te lleguen por correo:

1. En Netlify, dentro de tu sitio: **Forms** (en el menú lateral)
2. Vas a ver el formulario "comisiones" en cuanto alguien lo use por primera vez
3. Click **"Settings and usage"** → **"Add notification"** → **"Email notification"**
4. Pon tu correo → Guardar

Desde ese momento, cada vez que alguien pida una comisión, te llega directo a tu correo.

## Paso 7 — Activar el panel de edición (Decap CMS)

1. En Netlify, dentro de tu sitio: **Site configuration → Identity → Enable Identity**
2. En esa misma sección, baja a **Registration** → cámbialo a **"Invite only"** (así solo tú puedes entrar, nadie más se puede registrar solo)
3. Baja a **Services → Git Gateway → Enable Git Gateway**
4. Arriba, en la pestaña **Identity** de tu sitio, click **"Invite users"** → escribe tu propio correo → te va a llegar un correo de invitación
5. Abre el correo, click en el link, pon una contraseña

## Paso 8 — Usar el panel

Ve a `tusitio.netlify.app/admin`, inicia sesión con lo que configuraste en el paso 7, y ahí puedes:
- Agregar una obra nueva (foto, título, tamaño, precio, disponible/vendido)
- Editar o borrar cualquiera que ya exista
- Cada cambio se publica solo en 1-2 minutos, sin que yo intervenga

---

## Lo que SÍ sigue pasando por mí

- Cambios de diseño (nueva sección, otro layout, la página de la Colección cuando me mandes el nombre)
- Conectar los botones de "Comprar" a Stripe (siguiente paso, una vez tengas tu cuenta de Stripe)
- Cualquier página o funcionalidad nueva

## Estructura rápida, por si algún día quieres ver el código

- `src/obras/` — cada pieza es un archivo, esto es lo que edita el panel
- `src/index.njk`, `obra-original.njk`, `prints.njk`, `comisiones.njk`, `coleccion.njk` — las páginas
- `src/assets/` — fuentes, tu firma, fotos
- `src/admin/config.yml` — la configuración del panel (qué campos puedes editar)

Cualquier duda, la traes aquí y la resolvemos juntas.
