# Horarios IES — 2025/26

Aplicación web para consultar el horario del profesorado del IES Valle del Carrión, curso 2025/26.

## 🌐 Demo

Accede en: **https://luisgp1984.github.io/Horarios_IES_VC_25_26/**

## 📁 Archivos

| Archivo | Descripción |
|---|---|
| `index.html` | Aplicación web completa (HTML + CSS + JS) |
| `horarios.json` | Base de datos de horarios (generada del Word original) |
| `Horarios_Profesorado.xlsx` | Excel de consulta rápida con hoja por día |

## 🚀 Uso local

Basta con abrir `index.html` en un navegador. Si los datos no cargan (error CORS), usa un servidor local:

```bash
python3 -m http.server 8080
```
Luego accede a `http://localhost:8080`

## 📱 Instalación como PWA (Android / Windows)

En Chrome, abre la URL de GitHub Pages y pulsa **"Añadir a pantalla de inicio"** en el menú del navegador.

## 📊 Sesiones

| Columna | Nombre | Horario |
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

## 🔤 Siglas frecuentes

`AMP` Atención a Madres y Padres · `CHL` Compensación Horario Lectivo · `G` Guardia · `RT` Reunión Tutores · `FCT` Prácticas empresa · `JDEP` Jefatura Dpto. · `RDP` Reunión Departamento · `GREC` Guardia Recreo · `TLEC` Tutoría Lectiva · `DD` Despacho Dirección
