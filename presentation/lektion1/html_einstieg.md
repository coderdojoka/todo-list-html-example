class: center, middle, front blinky

# HTML

--

## Hyper Text Markup Language

---

# HTML - Grundaufbau

```html
 <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Meine Webseite</title>
  </head>
  <body>

* <!-- Inhalt hier einfügen -->   

  </body>
</html>
```

- Grundgerüst für jede Seite
- In den Beispielen **weggelassen!**

---

# HTML - Elemente über HTML-Tags

### Allgemeiner Aufbau:

```html
<tagname>Inhalt, z.B. Text oder andere Elemente</tagname>
```

--

### Tags innerhalb von Tags


```html
<tag1>
  Inhalt, z.B. Text oder andere Elemente
  <tag2>Geschachtelte Tags!</tag2>
</tag1>
```

---

# HTML - Beispiel

```html
<h1>Hauptüberschrift</h1>
<div>
  <h2>Unter-Überschrift</h2>
  Und hier steht dann Text!
</div>
```
--

<hr>

<div class="html-result">
<h1>Hauptüberschrift</h1>
<div>
  <h2>Unter-Überschrift</h2>
  Und hier steht dann Text!
</div>
</div>

---

# HTML - Wichtige Elemente I

### Überschriften: `h1, h2... h6`

```html
<h1>Ich bin eine Überschrift</h1>      
<h2>Ich auch, aber kleiner</h2>
```
--

### Container-Element: `div`

```html
<div>
  Container für Text und andere Elemente
  <h2>Z.B. für eine weitere Überschrift</h2>
</div>
```

---

# HTML - Wichtige Elemente II

### Aufzählungen: `ul`

```html
<ul>
  <li>Ich bin ein Listenpunkt</li>
  <li>Ich auch!</li>
</ul>      
```
--

<hr>

<div class="html-result">
<ul>
  <li>Ich bin ein Listenpunkt</li>
  <li>Ich auch!</li>
</ul> 
</div>

---


# HTML - Komplettes Beispiel (Code)

```html
<h1>Programmiersprachen</h1>
<div>
  Hier ist eine Liste meiner Lieblingsprogrammierspachen.
</div>
<ul>
  <li>Python</li>
  <li>Java</li>
  <li>Javascript</li>
  <li>...</li>
</ul>      
```

---

# HTML - Komplettes Beispiel (Ergebnis)

<div class="html-result">
<h1>Programmiersprachen</h1>
<div>
  Hier ist eine Liste meiner Lieblingsprogrammierspachen.
</div>
<ul>
  <li>Python</li>
  <li>Java</li>
  <li>Javascript</li>
  <li>...</li>
</ul>  

---

# HTML - Aufgabe 1

Verwende `h1, h2, div, ul, li` und erzeuge in etwas folgende Ausgabe:

<div class="html-result">
TODO...
</div>

---

# HTML - Weitere Elemente

### Bilder

```html
<img src="bild_im_gleichen_ordner.jpg">
```


### Text hervorheben (fett) und betonen (kursiv)

```html
Dieser <strong>Text</strong> ist <em>formatiert!</em>
```

### Youtube-Videos

```html
<iframe src="https://www.youtube.com/embed/abcd"></iframe>
```

### Viele mehr...

---

class: middle center front

# CSS

## Cascading Style sheets

---

# CSS: Zu bedenken

### Verschiedene Einheiten, mögliche Werte:
Je nach Verwendung: `20px`, `12pt`, `50%`, `#fefefe` ...

--

### Regeln "kaskadieren"
Regeln werden von den Eltern-Elementen geerbt (übertragen)

--

### Welche Elemente sind betroffen:
Betrifft bestimmte Tags, Klassen,  oder IDs.

--

### Regeln werden von wichtigeren Regeln überschrieben
- spätere Regeln überschreiben vorhergehende Regeln
- spezifischere Regeln überschreiben allgemeinere Regeln


---
name: css-example

# CSS: Beispiel

```html
  <h1>Nur h1</h1>
  <h1 class="heading">h1 mit Klasse</h1>
  <h1 class="heading" id="haupt-ueberschrift">
    h1 mit Klasse und Id
  </h1> 
```

---

template: css-example

.split[
.split-left[
```css
h1 {
  color: blue;
}
```
]

.split-right[
<div class="example-1">
  <h1>Nur h1</h1>
  <h1 class="">h1 mit Klasse</h1>
  <h1 class="" id="">h1 mit Klasse und Id</h1> 
</div>
]
]

---

template: css-example

.split[
.split-left[
```css
h1 {
  color: blue;
}
.heading{
  background-color: green;
  color: pink;
}
```
]

.split-right[
<div class="example-1">
  <h1>Nur h1</h1>
  <h1 class="heading">h1 mit Klasse</h1>
  <h1 class="heading" id="">h1 mit Klasse und Id</h1> 
</div>
]
]

---

template: css-example

.split[
.split-left[
```css
h1 {
  color: blue;
}
.heading{
  background-color: green;
  color: pink;
}
#haupt-ueberschrift{
  color: red
}
```
]

.split-right[
<div class="example-1">
  <h1>Nur h1</h1>
  <h1 class="heading">h1 mit Klasse</h1>
  <h1 class="heading" id="haupt-ueberschrift">h1 mit Klasse und Id</h1> 
</div>
]
]

---

### Schrift- und Hintergrundfarbe
```css
color: blue;
background-color: red;
```

### Breite und Höhe
```css
width: 80%;
max-width: 450px;
min-height: 250px;
...
```

### Schriftart und Varianten
```css
font-family: "Roboto, Arial, sans-serif";
font-weight: bold;
text-transform: uppercase;
```

---

# Box Model

![Box Model](Boxmodell.svg)
.img-source[ [Quelle: By Matthias Apsel - Vectorized from Boxmodell-detail.png, CC0](https://commons.wikimedia.org/w/index.php?curid=44610332)]

---

# Box Model II

<div class="example-2">
  <div class="box box-1">Inhalt Inhalt Inhalt Inhalt Inhalt Inhalt Inhalt Inhalt Inhalt Inhalt Inhalt Inhalt Inhalt Inhalt Inhalt Inhalt Inhalt Inhalt Inhalt Inhalt</div>
  <div class="box box-2">Inhalt Inhalt Inhalt Inhalt Inhalt Inhalt Inhalt</div>
</div>

--

<hr>

### Schreibweise

```css
margin: oben rechts unten links;
padding: 10px 20px 10px 20px;
border: 2px solid green;
```