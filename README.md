# 📅 IES Virgen de la Calle — Gestión de Horarios 2025/26

Aplicación web para la gestión del profesorado del **IES Virgen de la Calle (Palencia)**, curso 2025/26.

## 🌐 Acceso

**https://horarios-iesvc-2526.netlify.app**

> Acceso restringido con contraseña. Contacta con el equipo directivo.

---

## 📱 Instalación como app (PWA)

En Chrome (móvil o escritorio), abre la URL y pulsa **"Añadir a pantalla de inicio"** en el menú del navegador. Funciona sin conexión una vez instalada.

---

## 🔐 Perfiles de acceso

| Perfil | Acceso |
|---|---|
| 👤 **Docente** | Consulta horarios, guardias, cobertura, aulas y reservas. Ve las ausencias registradas. |
| 👔 **Equipo Directivo** | Acceso completo. Registra ausencias, genera partes de guardia (Word y PDF). |

Para cambiar de perfil pulsa el badge de usuario en la cabecera. Pasar de Docente a Equipo Directivo requiere contraseña.

---

## 🧩 Módulos

### ⚡ Ahora
Muestra en tiempo real la sesión en curso, guardianes asignados, ausencias a cubrir y aulas libres. Incluye buscador de aula instantáneo.

### 📅 Horarios
Consulta el horario completo de cualquier docente seleccionando nombre y día de la semana.

### 🛡️ Guardias
Tabla semanal con los docentes de guardia en cada sesión (lunes a viernes), con contador por día y día actual resaltado.

### 📋 Ausencias
- Registra docentes ausentes por fecha (solo Equipo Directivo)
- El sistema carga automáticamente las clases del docente ese día
- Solo incluye sesiones con clase asignada o guardia (G)
- Datos guardados en Supabase — visibles para todo el claustro en tiempo real
- Genera parte en **Word** (.doc) y **PDF** con dos páginas (sesiones 1-3 / 4-7)

### 🔴 Cobertura
Semáforo semanal (L-V × sesiones) mostrando si hay suficientes guardianes para cubrir las ausencias registradas.

### 🏫 Aulas
Ocupación de todas las aulas del centro por fecha y sesión. Permite **reservar aulas libres** directamente desde la app. Las reservas son visibles para todo el claustro en tiempo real.

---

## 📁 Archivos del repositorio

| Archivo | Descripción |
|---|---|
| `index.html` | Aplicación web completa (HTML + CSS + JS) |
| `horarios.json` | Base de datos de horarios generada desde el Excel |
| `Horarios_Profesorado.xlsx` | Excel con una hoja por día, para consulta y edición |
| `macro_horarios.bas` | Macro VBA para regenerar `horarios.json` desde el Excel |

---

## 🔄 Actualizar los horarios

Cuando haya cambios en el horario:

1. Edita el **Excel** (`Horarios_Profesorado.xlsx`)
2. `Alt + F11` → `Alt + F8` → `GenerarJSON` → **Ejecutar**
3. Sube el `horarios.json` generado a GitHub
4. Netlify lo publica automáticamente en segundos

---

## 🗄️ Base de datos (Supabase)

Las **reservas de aulas** y las **ausencias** se guardan en Supabase (PostgreSQL), accesibles en tiempo real desde cualquier dispositivo.

---

## 📊 Sesiones

| Clave | Nombre | Horario |
|---|---|---|
| 1 | Guardia mañana | 08:00–08:30 |
| 2 | Sesión 1 | 08:30–09:20 |
| 3 | Sesión 2 | 09:25–10:15 |
| 3R | Sesión 3 | 10:20–11:10 |
| 4 | Recreo | 11:10–11:35 |
| 5 | Sesión 4 | 11:35–12:25 |
| 6 | Sesión 5 | 12:30–13:25 |
| 7 | Sesión 6 | 13:30–14:20 |
| 8 | Sesión 7 | 14:25–15:15 |

> Los viernes no hay Sesión 7 (clave 8).

---

## 🔤 Siglas frecuentes

| Sigla | Significado |
|---|---|
| G | Guardia |
| GREC | Guardia de Recreo |
| AMP | Atención a Madres y Padres |
| CHL | Compensación de Horario Lectivo |
| RT | Reunión de Tutores |
| RDP | Reunión de Departamento |
| FCT | Formación en Centros de Trabajo |
| JDEP | Jefatura de Departamento |
| TLEC | Tutoría Lectiva |
| DD | Despacho Dirección |
| ED | Equipo Directivo |

---

## 👤 Autor

**Luis González Posada**  
Jefe de Estudios · IES Virgen de la Calle · Palencia  
\#soydelvirgendlacalle

---

*Desarrollado con HTML · CSS · JS · Supabase · Netlify · Claude AI · Curso 2025/26*
