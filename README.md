# 📅 Gestión de Horarios — IES Virgen de la Calle (Palencia) 2025/26

Aplicación web para la gestión de horarios, ausencias, guardias y actividades del IES Virgen de la Calle de Palencia.

## 🌐 URLs

- **Producción**: https://horarios-iesvc-2526.netlify.app
- **Repositorio**: https://github.com/LuisGP1984/Horarios_IES_VC_25_26 (privado)

## 🗂️ Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Aplicación completa (HTML + CSS + JS) |
| `horarios.json` | Datos de horarios generados desde Excel con macro VBA |
| `manifest.json` | Configuración PWA para instalar como app |
| `logo.png` | Logo del centro |

## 🔐 Acceso

| Rol | Contraseña | Permisos |
|-----|-----------|----------|
| Docente | `VC2526` | Consulta (horarios, grupos, guardianes, ausencias, aulas, ACEX, evaluaciones, tablón) |
| Dirección | `EGL2530` | Consulta + gestión (ausencias, sustituciones, ACEX, reservas, evaluaciones, tablón) |

## 📱 Módulos

### ⚡ Ahora
- Aviso destacado del Tablón de anuncios del equipo directivo (resumen + enlace)
- Sesión actual en curso con reloj en tiempo real
- Guardianes asignados a esta sesión
- Guardias a cubrir (docentes ausentes con clase)
- Buscador de aula libre
- ACEX activas hoy
- Selector de fecha para consultar otro día

### 📅 Horarios
- Horario completo de cualquier docente por día
- Muestra sustitutos con 🔄 si hay sustitución activa
- Sesiones con materia, grupo, aula y tipo

### 👥 Grupos
- Horario completo de cualquier grupo (ESO, Bachillerato, FP) por día
- Para cada sesión: materia, docente y aula
- Soporta clases compartidas entre varios grupos a la vez (desdobles, optativas)
- Muestra sustitutos con 🔄 si hay sustitución activa
- Índice de grupos derivado automáticamente del horario (sin mantenimiento manual)

### 🛡️ Guardianes
- Tabla semanal de guardianes por sesión (L-V)
- Contadores por sesión con semáforo de color
- Actualizado automáticamente con sustituciones activas

### 📋 Ausencias *(Dirección)*
- Registro de ausencias desde Supabase (compartido entre dispositivos)
- Descarga del parte diario en Word (.docx) y PDF (2 páginas)
- Muestra nombre del sustituto si hay sustitución activa

### 🔴 Cobertura
- Semáforo semanal: guardianes disponibles vs ausencias a cubrir
- Carga automática desde Supabase al abrir

### 🏫 Aulas
- Ocupación de todas las aulas por fecha y sesión
- Reserva de aulas desde Supabase
- Sesión Vespertina (16:00–21:00)
- Scroll horizontal para ver todas las sesiones

### 🔄 Sustituciones *(Dirección)*
- Sustituciones indefinidas hasta cancelación manual
- El sustituto aparece en todos los desplegables (horarios, grupos, ausencias, guardianes)
- El sustituido desaparece de los selectores mientras dure la sustitución

### 🎒 ACEX
- Actividades Complementarias y Extraescolares por semana
- Selector múltiple de grupos participantes (a partir del índice de grupos del horario, sin texto libre)
- Todas las sesiones marcadas por defecto al crear
- Aparece en el módulo Ahora si hay ACEX activa
- **Buscador por grupo**: selecciona un grupo y un día (hoy por defecto) y consulta al instante si tiene alguna ACEX programada

### 📝 Evaluaciones *(edición solo Dirección · lectura para todo el claustro)*
- Organizado por etapa: ESO (1ª/2ª evaluación, Final), Bachillerato (1ª/2ª evaluación, Final ordinaria/extraordinaria) y FP (1ª/2ª evaluación, Primera/Segunda final)
- Editor de texto enriquecido (negrita, cursiva, listas, tablas) para fechas, lugares y grupos de cada evaluación
- Muestra quién actualizó por última vez cada pestaña y cuándo

### 📌 Tablón *(edición solo Dirección · lectura para todo el claustro)*
- Anuncio único de la semana, se sobrescribe cada vez que Dirección actualiza (sin historial)
- Mismo editor de texto enriquecido que Evaluaciones
- Resumen automático visible en la pantalla "Ahora" con enlace directo al tablón completo

### ℹ️ Acerca de
- Información del desarrollador
- Botón "Instalar como app" (PWA)

## 🗄️ Base de datos (Supabase)

```sql
-- Ausencias
ausencias (id, fecha, codigo, nombre, sesiones jsonb, tipo, created_at)

-- Reservas de aulas
reservas (id, fecha, aula, sesion, docente, motivo, created_at)

-- Sustituciones activas
sustituciones (id, docente_original, codigo_original, docente_sustituto, 
               fecha_inicio, fecha_fin, activa, created_at)

-- ACEX (docentes y grupos como array, grupos seleccionados desde el horario)
acex (id, fecha, sesiones text[], docentes text[], grupos text[], observaciones, created_at)

-- Evaluaciones (una fila por etapa + pestaña; 11 filas fijas)
evaluaciones (id, etapa, pestana, contenido, actualizado_por, actualizado_en)

-- Tablón de anuncios (fila única, se sobrescribe cada semana)
tablon (id, contenido, actualizado_por, actualizado_en)
```

## 👥 Grupos e índice derivado

La lista de grupos (usada en la vista **Grupos** y en el selector de ACEX) no se mantiene a mano: se calcula automáticamente recorriendo `horarios.json` y extrayendo el campo `grupo` de cada sesión de tipo `clase`. Un grupo puede aparecer en varias sesiones distintas si comparte clase con otros (ej. una optativa entre `03A` y `03B`), gracias a que el campo `grupo` admite varios códigos separados por coma.

## ⏰ Sesiones

| Clave | Nombre | Horario |
|-------|--------|---------|
| 1 | Guardia mañana | 08:00–08:30 |
| 2 | Sesión 1 | 08:30–09:20 |
| 3 | Sesión 2 | 09:25–10:15 |
| 3R | Sesión 3 | 10:20–11:10 |
| 4 | Recreo | 11:10–11:35 |
| 5 | Sesión 4 | 11:35–12:25 |
| 6 | Sesión 5 | 12:30–13:25 |
| 7 | Sesión 6 | 13:30–14:20 |
| 8 | Sesión 7 | 14:25–15:15 |
| V | Vespertino | 16:00–21:00 |

> Viernes no tiene Sesión 7.

## 📊 Generación de horarios.json

`horarios.json` se genera desde `Horarios_Profesorado.xlsm` con la macro `GenerarJSON` (módulo `ModuloHorarios`), que:

1. Lee la hoja **Datos** (tabla plana: Día, Sesión, Docente, Tipo, Grupo, Materia, Aula, Actividad) — no las hojas de días directamente
2. Traduce la etiqueta de sesión (`Sesión 3`, `Recreo`...) a su clave corta (`3R`, `4`...) detectando el patrón por subcadena, sin depender de comparar tildes/ñ
3. Busca el código de cada docente en la hoja **Docentes** (columnas Código | Docente) — nunca lo recalcula por iniciales, para evitar colisiones
4. Escribe el archivo en UTF-8 real (`ADODB.Stream`), no en ANSI, para que tildes y ñ no se corrompan

La hoja **Datos** se regenera a partir de las 5 hojas de días (Lunes–Viernes) cada vez que estas cambian, antes de ejecutar `GenerarJSON`.

## 🛠️ Stack técnico

- **Frontend**: HTML + CSS + JavaScript (vanilla, sin frameworks)
- **Editor de texto enriquecido**: `contenteditable` nativo del navegador (sin librerías externas)
- **Base de datos**: Supabase (PostgreSQL)
- **Hosting**: Netlify
- **Datos de horarios**: JSON generado desde Excel con macro VBA
- **PWA**: manifest.json + meta tags Apple

## 👨‍💻 Autor

**Luis González Posada**  
Jefe de Estudios — IES Virgen de la Calle, Palencia  
luis.gonpos@educa.jcyl.es  
#soydelvirgendelacalle

---
*v3.0 · Junio 2026 · Desarrollado con Claude AI*
