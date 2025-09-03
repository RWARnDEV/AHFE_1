# Digital Yard Sale - Front-End Prototype

This project is a front-end prototype for a "Digital Yard Sale" web application. It is designed to simulate the user experience of posting, browsing, and purchasing items in an online marketplace. The application is built entirely with front-end technologies and uses mock data to showcase its features, making it ideal for usability testing without a backend.

This application was built with React and Vite.

## How to Run the Application

1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Run the development server**:
    ```bash
    npm run dev
    ```
3.  Open your browser and navigate to the local URL provided (usually `http://localhost:5173`).

---

## 1. Application Features & Functionality

This prototype includes the following features:

### a. Browse Marketplace

*   **Marketplace Page**: This is the homepage of the application. It displays a grid of all items currently available for sale.
*   **Item Details**: Each item is displayed in a card with its name, price, image, and seller.
*   **"Buy Now" Action**: Each item card has a "Buy Now" button. In this prototype, clicking it simulates adding the item to a cart by showing an alert. This allows for testing the user's initial purchase intent.

### b. Manage Your Items

*   **My Items Page**: Accessible via the "My Items" link in the navigation bar, this page is where users can manage their own listings.
*   **Post a New Item**:
    *   Users can select a pre-defined mock item from a dropdown menu.
    *   Clicking the "Add Item" button adds the selected item to their list of items for sale. This simulates the workflow of creating a new listing.
*   **View Your Listings**: All items the user has posted are displayed in a list on this page.
*   **Remove an Item**: Each of the user's own items has a "Remove" button, allowing them to take a listing down.

### c. Navigation

*   **Header Navigation**: A clean and persistent header at the top of the page contains links to the "Marketplace" and "My Items" pages.
*   **Active State**: The user's current location is clearly indicated with a visual highlight on the active navigation link.
*   **Logo/Title Link**: While not a functional link in this prototype, the "Digital Yard Sale" title is positioned where a logo would be, reinforcing the convention of a link to the homepage.

---

## 2. Adherence to Usability Guidance

The design and development of this prototype were guided by the provided usability principles. Here is a breakdown of how the application adheres to them:

### Consistency & Standards

*   **Internal Consistency**: The application uses a consistent design language. Buttons, typography, colors, and spacing are uniform across all pages. The `ItemCard` component is reused on both the Marketplace and My Items pages, ensuring a consistent look and feel.
*   **Platform Conventions**: The layout follows standard web conventions, with a header at the top, main content in the center, and a footer at the bottom. Navigation links are placed in the header, which is where users expect to find them.
*   **Consistent Terminology**: Labels and actions use consistent terms. For example, the marketplace is always referred to as "Marketplace," and the user's own items page is always "My Items."

### Content & Readability

*   **Clear, Concise Language**: UI text is straightforward (e.g., "Browse the Marketplace," "Manage Your Items for Sale"). Button labels like "Buy Now" and "Remove" are direct and unambiguous.
*   **Scannable Text**: Pages are structured with clear headings (`<h2>`, `<h3>`) to create a visual hierarchy. Item details on cards are broken down into distinct pieces of information (name, price, description) to be easily scannable.
*   **Objective and Helpful Tone**: The language is task-oriented and neutral. There is no promotional "marketese." The focus is on helping the user browse, add, or remove items efficiently.
*   **Recognition Over Recall**: On the "My Items" page, the form for adding a new item is on the same screen as the list of current items. Users don't need to remember what they already have listed.

### Navigation & Information Architecture

*   **Intuitive Navigation**: A simple, two-item main navigation is always visible in the header, making it easy for users to switch between the two primary sections of the app.
*   **Clear Hierarchical Structure**: The information architecture is flat and simple, which is appropriate for an application of this size. The two main pages are at the same level of hierarchy.
*   **Highlight Current Location**: The currently active page in the navigation bar is visually distinct (it has a colored underline), immediately showing the user "Where am I?".
*   **Easy Access to Home**: The "Marketplace" page serves as the home/dashboard and is always one click away from the "My Items" page.

### Visual Design & Layout

*   **Clear Visual Hierarchy**: Headings are larger and bolder than body text. The most important action on an item card ("Buy Now") is a prominent button. This guides the user's attention to key elements.
*   **Consistent Spacing and Alignment**: The application uses a grid layout for item cards and consistent margins and padding throughout, creating a clean and organized appearance.
*   **Consistent Typography**: A single, legible font family is used, with a clear typographic scale for headings and body text to ensure readability and structure.
*   **Sufficient Color Contrast**: The color scheme uses dark text on a light background, providing high contrast that meets accessibility standards.
*   **Responsive Design**: The item list uses a CSS grid layout that automatically adjusts the number of columns based on screen width, ensuring the application is usable on different device sizes.

### Interaction & Feedback

*   **Immediate Feedback**: Buttons change appearance on hover, providing instant feedback. When an item is added or removed, the list updates immediately. Clicking "Buy Now" shows an immediate `alert`.
*   **User Control and Freedom**: Users can easily remove an item they have added. The navigation allows them to freely move between pages without being trapped in a workflow.
*   **Error Prevention**: The "Add Item" button is only effective if an item is selected. The application also prevents the same item from being added to the user's list more than once, with an alert to inform the user.
*   **Clear Error Messages**: When a user tries to add an item that's already in their list, a clear alert message ("This item is already in your list.") explains the problem in plain language.

### Forms & Data Input

*   **Minimize Form Fields**: The form for adding a new item is extremely simple, consisting of just a dropdown and a button. This minimizes user effort in this prototype.
*   **Input Guidance**: The dropdown for adding an item constrains the user's choice to valid options, preventing data entry errors.

### Accessibility & Inclusivity

*   **Follows WCAG Principles**: The design uses high-contrast colors. Interactive elements like buttons and links are clearly distinguishable. Semantic HTML (e.g., `<header>`, `<main>`, `<nav>`) is used to provide structure for assistive technologies.
*   **High-Contrast Visuals**: The text and background colors were chosen to ensure a high contrast ratio, making the content readable for users with low vision.

### Performance & Reliability

*   **Optimized for Speed**: As a Vite + React application, it is lightweight and fast-loading. There are no heavy assets or complex computations that would slow down the user experience.
*   **Stability**: The application's state management is simple and self-contained, leading to reliable and predictable behavior during user testing.

### Simplicity & Minimalism

*   **Eliminate Clutter**: The interface is clean and focused. Only essential information and actions are displayed. Ample whitespace is used to prevent a cluttered feeling.
*   **Prioritize Primary Actions**: On the Marketplace, the primary action is browsing, so the items are front and center. On the "My Items" page, adding and removing items are the key tasks, and the UI is built around them.
*   **Minimize User Effort**: Adding an item is a two-click process (select from dropdown, click button), making the workflow highly efficient for the purpose of this prototype.
*   **Use Whitespace Strategically**: Whitespace is used to separate the header, main content, and footer, and to create visual grouping within the item cards and forms.

### Efficiency & Flexibility for Users

*   **Shortcut Paths**: While this simple prototype has limited workflows, the clear navigation acts as a shortcut, allowing users to switch between core tasks (browsing vs. managing) instantly.
*   **Personalization**: The "My Items" page is a form of personalization, as it represents a space that is customized by the user's actions (i.e., the items they choose to add).
