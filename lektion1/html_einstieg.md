class: center, middle, front

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