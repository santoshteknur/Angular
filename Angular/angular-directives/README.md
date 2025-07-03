# Angular Directives Demo

This project is a simple, interactive demonstration of all the main Angular directives. It shows how each directive works with clear examples and code, making it easy to understand for beginners and useful as a reference for experienced developers.

---

## What are Angular Directives?

**Angular directives** are special instructions in Angular that let you change how elements behave or look in your application.  
There are three main types of directives:

1. **Component Directives**  
   - These are actually Angular components.
   - They have their own template (HTML), styles, and logic.
   - Example: Any custom component you create with `@Component`.

2. **Structural Directives**  
   - These change the structure of the DOM (Document Object Model).
   - They can add, remove, or change elements in your HTML.
   - Common examples: `*ngIf`, `*ngFor`, `*ngSwitch`.

3. **Attribute Directives**  
   - These change the appearance or behavior of an element.
   - They work by modifying the element’s attributes or styles.
   - Common examples: `[ngClass]`, `[ngStyle]`, and custom directives like `appHighlight`.

---

## Structural Directives Explained

### 1. `*ngIf`
- **Purpose:** Show or hide an element based on a condition.
- **Example:**
  ```html
  <div *ngIf="isVisible">This appears only if isVisible is true</div>
  ```
- **How it works:**  
  If `isVisible` is `true`, the `<div>` is added to the DOM. If `false`, it is removed.

### 2. `*ngFor`
- **Purpose:** Repeat an element for each item in a list.
- **Example:**
  ```html
  <ul>
    <li *ngFor="let fruit of fruits">{{fruit}}</li>
  </ul>
  ```
- **How it works:**  
  If `fruits = ['Apple', 'Banana']`, this creates two `<li>` elements, one for each fruit.

### 3. `*ngSwitch`
- **Purpose:** Show one of many possible elements, depending on a value.
- **Example:**
  ```html
  <div [ngSwitch]="color">
    <p *ngSwitchCase="'red'">Red</p>
    <p *ngSwitchCase="'green'">Green</p>
    <p *ngSwitchDefault>Other</p>
  </div>
  ```
- **How it works:**  
  If `color` is `'red'`, only the first `<p>` is shown. If `'green'`, the second. Otherwise, the default.

---

## Attribute Directives Explained

### 1. `[ngClass]`
- **Purpose:** Add or remove CSS classes dynamically.
- **Example:**
  ```html
  <p [ngClass]="{special: isSpecial}">Styled text</p>
  ```
- **How it works:**  
  If `isSpecial` is `true`, the `special` class is added to the `<p>`. If `false`, it is removed.

### 2. `[ngStyle]`
- **Purpose:** Set CSS styles dynamically.
- **Example:**
  ```html
  <p [ngStyle]="{'font-weight': isBold ? 'bold' : 'normal'}">Styled text</p>
  ```
- **How it works:**  
  If `isBold` is `true`, the text is bold. If `false`, it is normal.

---

## Custom Directive Example: `appHighlight`

You can also create your own attribute directives.  
This project includes a simple custom directive called `appHighlight` that highlights an element with a background color.

**Usage:**
```html
<p appHighlight="yellow">Highlighted text</p>
```
This makes the paragraph’s background yellow.

**How it works (TypeScript code):**
```typescript
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') highlightColor: string = 'yellow';
  constructor(private el: ElementRef) {}
  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }
}
```
- The directive takes an input (the color).
- When the element is created, it sets the background color to the value you provide (default is yellow).

---

## Example Usage in the App

Here are some examples you’ll find in this project:

```html
<!-- *ngIf -->
<div *ngIf="isVisible">Visible if isVisible is true</div>

<!-- *ngFor -->
<ul>
  <li *ngFor="let item of items">{{item}}</li>
</ul>

<!-- *ngSwitch -->
<div [ngSwitch]="color">
  <p *ngSwitchCase="'red'">Red</p>
  <p *ngSwitchCase="'green'">Green</p>
  <p *ngSwitchDefault>Other</p>
</div>

<!-- [ngClass] -->
<p [ngClass]="{special: isSpecial}">Styled text</p>

<!-- [ngStyle] -->
<p [ngStyle]="{'font-weight': isBold ? 'bold' : 'normal'}">Styled text</p>

<!-- Custom Directive -->
<p appHighlight="yellow">Highlighted text</p>
```

---

## Live Demo

Run the app locally to see each directive in action.  
You can interact with the controls to see how the directives work in real time.

---

## Summary

- **Structural directives** change the structure of your HTML (add/remove elements).
- **Attribute directives** change the appearance or behavior of elements.
- **Custom directives** let you create your own behaviors.

This project is a hands-on way to learn and experiment with Angular directives.  
Feel free to explore the code and try changing the examples!