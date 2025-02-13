# Border Radius Previewer

A **React-based web application** that allows users to dynamically preview and generate CSS `border-radius` values. Users can adjust the border radius for each corner of a box using sliders and copy the generated CSS code to their clipboard.

---

## Features

- **Dynamic Border Radius Control:**
  - Adjust the border radius for each corner (top-left, top-right, bottom-left, bottom-right) using sliders.
  - Real-time preview of the box with the applied border radius.

- **CSS Code Generation:**
  - Automatically generates the corresponding CSS code for the border radius.
  - Displays the CSS code in a user-friendly format.

- **Copy to Clipboard:**
  - Includes a **Copy CSS Code** button to easily copy the generated CSS to the clipboard.
  - Displays toast notifications for successful or failed copy operations.

- **Responsive Design:**
  - Works seamlessly on different screen sizes.

---

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **React Toastify:** For displaying toast notifications.
- **CSS:** For styling the application and customizing the sliders.

---

## How to Use

1. **Adjust the Sliders:**
   - Use the sliders around the box to adjust the border radius for each corner.

2. **Preview the Box:**
   - The box will update in real-time to reflect the changes.

3. **Copy the CSS Code:**
   - Click the **Copy CSS Code** button to copy the generated CSS to your clipboard.
   - A toast notification will confirm if the copy operation was successful.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SereenALHajjar/BorderRadius.git
2. Navigate to the project directory:
    ```bash
    cd BorderRadius
3. install dependencies
    ```bash
    npm install
4. start the development server 
     ```bash
    npm run dev
5. open your browser and visit  
    ```bash
    http://localhost:5173