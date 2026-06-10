# 📅 IES Virgen de la Calle — Gestión de Horarios 2025/26

Aplicación web para la gestión del profesorado del **IES Virgen de la Calle (Palencia)**, curso 2025/26.

## 🌐 Acceso

**https://luisgp1984.github.io/Horarios_IES_VC_25_26/**

> Acceso restringido con contraseña. Contacta con el equipo directivo.

---

## 📱 Instalación como app (PWA)

En Chrome (móvil o escritorio), abre la URL y pulsa **"Añadir a pantalla de inicio"** en el menú del navegador. Funciona sin conexión una vez instalada.

---

## 🧩 Módulos disponibles

### 📅 Horarios
Consulta el horario completo de cualquier docente seleccionando nombre y día de la semana. Muestra sesión por sesión con grupo, aula y actividad.

### 🛡️ Guardias
Tabla semanal con los docentes de guardia en cada sesión (lunes a viernes). Incluye contador por día y resalta el día actual.

### 📋 Ausencias y parte de guardias
- Selecciona una fecha del calendario lectivo
- Añade los docentes ausentes — el sistema carga automáticamente sus clases de ese día
- Solo se incluyen sesiones con **clase asignada** o **guardia (G)**; las actividades administrativas (CHL, AMP, JDEP…) se descartan automáticamente
- Los datos se **guardan automáticamente** en el navegador por fecha — puedes añadir más ausentes otro día sin perder los anteriores
- Genera el parte en dos formatos:
  - 🖨️ **Imprimir** — vista limpia directamente desde el navegador
  - ⬇️ **Descargar Word** — parte en formato `.doc` fiel a la plantilla oficial, con sesiones 1–3 en la primera página y sesiones 4–7 en la segunda

---

## 📁 Archivos del repositorio

| Archivo | Descripción |
|---|---|
| `index.html` | Aplicación web completa (HTML + CSS + JS, todo en un archivo) |
| `horarios.json` | Base de datos de horarios generada desde el Excel |
| `Horarios_Profesorado.xlsx` | Excel con una hoja por día, para consulta y edición |
| `macro_horarios.bas` | Macro VBA para regenerar `horarios.json` desde el Excel |

---

## 🔄 Actualizar los horarios

Cuando haya cambios en el horario (sustituciones, bajas, nuevos grupos):

1. Edita el **Excel** (`Horarios_Profesorado.xlsx`) en la hoja del día correspondiente
2. Abre el editor de macros: `Alt + F11`
3. Ejecuta la macro: `Alt + F8` → `GenerarJSON` → **Ejecutar**
4. Sube el `horarios.json` generado a este repositorio
5. En 1–2 minutos la web se actualiza automáticamente

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

> **Nota:** Los viernes no hay Sesión 7 (clave 8).

---

## 🔤 Siglas

| Sigla | Significado |
|---|---|
| G | Guardia |
| GREC | Guardia de Recreo |
| AMP | Atención a Madres y Padres |
| CHL | Compensación de Horario Lectivo |
| RT | Reunión de Tutores |
| RDP | Reunión de Departamento |
| FCT | Formación en Centros de Trabajo (Prácticas) |
| JDEP | Jefatura de Departamento |
| TLEC | Tutoría Lectiva |
| GREC | Guardia de Recreo |
| DD | Despacho Dirección |
| ED | Equipo Directivo |
| APO | Apoyo |
| AC | Actividades Complementarias |
| RTIC | Reunión Coordinación TIC |

---

## 🚀 Uso local

```bash
# Clona el repositorio
git clone https://github.com/LuisGP1984/Horarios_IES_VC_25_26.git
cd Horarios_IES_VC_25_26

# Lanza un servidor local (necesario para cargar el JSON)
python3 -m http.server 8080
```

Accede en `http://localhost:8080`

---

*Desarrollado para el IES Virgen de la Calle · Palencia · Curso 2025/26*
