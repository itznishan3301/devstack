# Dev Stack Builder

Dev Stack Builder is a modern React application that helps developers visualize and select their ideal technology stack from a curated list of popular frameworks, libraries, and tools.

## Key Features
1. **Dynamic Stack Management:** Easily add or remove technologies from your custom stack.
2. **Real-time Notifications:** Get instant feedback with beautiful toast alerts when modifying your stack.
3. **Responsive Layout:** A clean, grid-based UI that looks perfect on mobile, tablet, and desktop devices.

## Technologies Used
- React 19
- Vite
- Tailwind CSS v4
- DaisyUI
- React Toastify

---

## React Concepts & Q&A

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension for JavaScript that looks like HTML. We use it in React because it makes writing and structuring UI components much easier and more readable directly inside our JavaScript code.

**2. What is the difference between props and state?**
Props are used to pass data down from a parent component to a child component and are read-only. State is local data managed within a component that can change over time and trigger a re-render.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` allows functional components to store and update data across renders. I used it to keep track of the selected technologies in the `stack` array and to manage the `loading` boolean state.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` lets you perform side effects in functional components, like fetching data or setting timers. I used it to fetch the `data.json` file when the component first mounts so the technology cards can be rendered.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` prop to identify which items have changed, been added, or removed. A unique key helps React optimize rendering by only updating the specific elements that changed rather than the whole list.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering is showing different UI elements based on a condition (like an if-statement). I used it in the Stack Sidebar: if the stack array is empty, it shows an "Empty Stack" message and icon, otherwise, it maps over and shows the selected technologies.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
You pass data to a child by giving it attributes called `props` (e.g., `<TechCard tech={data} />`). A child sends data back to the parent by calling a callback function that was passed down as a prop from the parent (e.g., `onAdd(tech)`).
