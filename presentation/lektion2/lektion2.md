class: center, middle, front blinky

# CSS - Beispiele

---

# Rahmen, runde Ecken und Schatten

```css
.box{
  border: 2px solid black;
}
.rund {
  border-radius: 5;
}
.schatten {
  box-shadow: 4px 4px 5px rgba(0, 0, 0, .85);
}
```
--

<div class="html-result">
  <div class="box-shadow">
    <div class="box"></div>
    <div class="box rund"></div>
    <div class="box rund schatten"></div>
  </div>
</div>

---


# Hover (Mauszeiger darüber schweben)

.split[
.split-left[
Ohne Hover
```css
.box {
  background: red;
}
```
]
.split-right[
  <div class="html-result">
    <div class="hover">
      <div class="box"></div>
    </div>
  </div>
]
]

--

<hr>

.split[
.split-left[
Mit Hover
```css
.box:hover {
    background: green;
}
```
]
.split-right[
  <div class="html-result">
    <div class="hover">
      <div class="box hovered"></div>
    </div>
  </div>
]
]

---

# Transformationen

.split[
.split-left[

```css
.rotiert {
  transform: rotate(45deg);
}
```
]
.split-right[
  <div class="html-result">
    <div class="transform">
      <div class="box rotiert">Hallo</div>
    </div>
  </div>
]
]

--

.split[
.split-left[

```css
.skaliert {
  transform: scale(1.2);
}
```
]
.split-right[
  <div class="html-result">
    <div class="transform">
      <div class="box skaliert">Hallo</div>
    </div>
  </div>
]
]

--

.split[
.split-left[

```css
.kombiniert {
  transform: scale(1.2) ↵
   translate(20px, 15px) ↵
   rotate(45deg) ;
}
```
]
.split-right[
  <div class="html-result">
    <div class="transform">
      <div class="box kombiniert">Hallo</div>
    </div>
  </div>
]
]

---

# Übergänge

.split[
.split-left[

Hover ohne Übergang
```css
.box:hover {
  background: green;
  transform: scale(1.2) rotate(15deg);
}
```
]
.split-right[
  <div class="html-result">
    <div class="hover">
      <div class="box hovered-transform"></div>
    </div>
  </div>
]
]

.split[
.split-left[

Hover mit Übergang
```css
.uebergang {
    transition: transform .25s linear;
}
```
]
.split-right[
  <div class="html-result">
    <div class="hover">
      <div class="box hovered-transform uebergang"></div>
    </div>
  </div>
]
]

---

# Positionierung

.split[
.split-left[
```css
.eltern{
  position: relative;
}

.absoultes-kind {
  position: absolute;
  left: 10px;
  top: 10px;
}

.fixiert {
  position: fixed;
  bottom: 0;
  left: 0;
}
```
]
.split-right[
  <div class="html-result">
    <div class="position">
      <div class="box relative-parent">
        Eltern-Container
        <div class="absolute-child">Kind-Element</div>
      </div>
    </div>
    <div class="fixiert">Fixiert am Fenster-Boden</div>
  </div>
]
]

---

class: center, middle, front blinky

# Javascript - Einführung

---

![DOM Modell](DOM-model.svg)
.img-source[By <a href="//commons.wikimedia.org/w/index.php?title=User:Eib&amp;action=edit&amp;redlink=1" class="new" title="User:Eib (page does not exist)">Birger Eriksson</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=18034500">Link</a>]

---

# JS - Button

```html
<button>Klick mich an!!</button>
```
<hr>

<div class="html-result">
 <div class="js">
    <button>Klick mich an!!</button>
  </div>
</div>

---

# JS - Button mit Klick

```html
<button onClick="alert('Hallo')">
  Klick mich an!!
</button>
```
<hr>

<div class="html-result">
 <div class="js">
    <button onClick="alert('Hallo')">Klick mich an!!</button>
  </div>
</div>


---

# JS - Button mit externer Datei


```js
// in der Datei script.js
function hallo(){
  alert("Hallo");
}
```

```html
<script src="script.js"></script>

*<button onClick=hallo()">
  Klick mich an!!
</button>
```
<hr>

<div class="html-result">
 <div class="js">
    <button onClick="alert('Hallo')">Klick mich an!!</button>
  </div>
</div>



---

# JS - Button mit Klick

```js
function bunt(){
   document.querySelector('#trist').classList.toggle("bunt");
}
```

```html
*<button onClick="bunt()">Machs bunt :)</button>
<div id="trist"></div>
```

```css
.bunt {
    background: linear-gradient(90deg, #833ab4 0%,
     #fd1d1d 50%, #fcb045 100%);
}
```

</script>
<div class="html-result">
 <div class="js">
    <button onClick="bunt()">Machs bunt :)</button>
    <div id="trist"></div>
  </div>
</div>