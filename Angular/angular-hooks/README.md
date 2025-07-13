# 🔄 Angular Lifecycle Hooks Playground

Welcome to the **Angular Lifecycle Hooks Playground**!  
This project is a modern, interactive, and visual way to learn how Angular's component lifecycle hooks work.  
Whether you're a beginner or brushing up, you'll find this demo fun and easy to follow.

---

## 🚀 What is this project?

This is a hands-on Angular app that **visually demonstrates** how Angular's lifecycle hooks are triggered as you interact with components.  
You can toggle a child component, change its input, and instantly see which hooks fire—both in the UI and in your browser console.

---

## 🎯 Why should you care about lifecycle hooks?

Lifecycle hooks are special methods in Angular components that let you tap into key moments of a component's life—creation, updates, and destruction.  
Understanding them helps you:

- Write cleaner, more predictable code
- Debug tricky component issues
- Build advanced features (like animations, subscriptions, and more)

---

## 🧩 How does this demo work?

- **Parent Component**  
  - Controls the visibility of the child component.
  - Sends data (input) to the child.
  - Shows a sidebar with a live log of all lifecycle events.

- **Child Component**  
  - Receives input from the parent.
  - Implements and logs all major Angular lifecycle hooks.
  - Explains what each hook does, right in the UI.

- **Logs Sidebar**  
  - Every time you interact (toggle child, change input), you see which hooks are triggered and in what order.
  - You can clear the logs at any time for a fresh start.

---

## 🖥️ Try it out!

1. **Start the app:**
   ```bash
   ng serve
   ```
2. **Open your browser:**  
   Go to [http://localhost:4200/](http://localhost:4200/)

3. **Play with the UI:**
   - Click **Toggle Child Component** to mount/unmount the child.
   - Click **Change Input Data** to update the input sent to the child.
   - Watch the **Lifecycle Hook Logs** sidebar update in real time!

---

## 🕹️ What are the main Angular lifecycle hooks?

Here's a quick, friendly summary:

| Hook                   | When does it run?                                 | What is it for?                                 |
|------------------------|---------------------------------------------------|-------------------------------------------------|
| `constructor`          | When the component is created                     | Setup basic things, but no inputs yet           |
| `ngOnChanges`          | When an input property changes                    | React to input changes from parent              |
| `ngOnInit`             | Once after the first `ngOnChanges`                | Initialization logic (fetch data, etc.)         |
| `ngDoCheck`            | On every change detection run                     | Custom change detection (advanced)              |
| `ngAfterContentInit`   | After content (ng-content) is projected           | Respond to content children                     |
| `ngAfterContentChecked`| After every check of projected content            | Respond after content check                     |
| `ngAfterViewInit`      | After component's view (and child views) init     | DOM-dependent logic, view children available    |
| `ngAfterViewChecked`   | After every check of the component's view         | Respond after view check                        |
| `ngOnDestroy`          | Just before the component is destroyed            | Cleanup (unsubscribe, remove listeners, etc.)   |


## 👀 What will you see in the UI?

- **Modern, clean layout** with a sidebar for logs and a main area for explanations.
- **Live logs**: Every lifecycle event is logged as it happens.
- **Clear explanations**: Each component tells you what it's doing and why.
- **Interactive controls**: Instantly see how Angular responds to your actions.

---

## 🧑‍💻 How does the code work?

- **Parent component**:
  - Has buttons to toggle the child and change input data.
  - Maintains a log array and displays it in the sidebar.
  - Receives log events from the child via an `@Output()`.

- **Child component**:
  - Implements all lifecycle hooks.
  - Emits a log message to the parent for each hook.
  - Shows the current input value and explains how data binding works.

- **Styling**:
  - Uses modern SCSS for a clean, readable look.
  - Responsive and easy to read.

---

## 📝 Want to explore more?

- Open the browser console to see logs with color highlights.
- Try editing the code to add your own hooks or log extra info.
- Use this as a template for your own Angular experiments!

---

## 📚 Further Reading

- [Angular Lifecycle Hooks (Official Docs)](https://angular.dev/reference/lifecycle-hooks)
- [Angular CLI Overview](https://angular.dev/tools/cli)
- [Angular Blog](https://blog.angular.io/)

---

## 💡 Final thoughts

Learning by doing is the best way!  
This playground is designed to make Angular's lifecycle hooks **visual, interactive, and fun**.  
If you have ideas for improvement, feel free to fork and enhance it.

![App Screenshot](src/asserts/Screenshot 2025-07-13 at 12.20.14 PM.png)
Happy coding! 🚀
