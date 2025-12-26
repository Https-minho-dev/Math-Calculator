# Calculator

A modern, mobile-responsive calculator application with a beautiful phone-like interface. Built with vanilla HTML, CSS, and JavaScript.

## 🎯 Features

- **Modern UI Design** - Phone-like interface with rounded corners and elegant styling
- **Full Calculator Functionality** - Basic arithmetic operations (addition, subtraction, multiplication, division)
- **Expression Display** - Shows the current expression being entered
- **Clear Function** - All Clear (AC) button to reset the calculator
- **Special Functions** - Percentage (%), Sign toggle (±), and Parentheses support
- **Responsive Design** - Optimized for mobile and desktop viewing
- **Smooth Animations** - Button press animations for better user experience

## 📱 Screenshots

The calculator features a sleek phone-like design with:
- White text on dark background for the display
- Color-coded buttons (function buttons, operators, and numbers)
- Clean, modern aesthetic

## 🚀 Getting Started

### Prerequisites

No installation required! This is a pure client-side application that runs in any modern web browser.

### Running the Calculator

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start calculating!

Alternatively, you can use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Then open http://localhost:8000 in your browser
```

## 📋 Usage

### Basic Operations

- **Numbers (0-9)**: Click to enter numbers
- **Operators**: 
  - `+` Addition
  - `−` Subtraction
  - `×` Multiplication
  - `÷` Division
- **Equals (=)**: Calculate the result
- **AC**: Clear all and reset

### Special Functions

- **%**: Percentage (currently displayed but functionality can be enhanced)
- **±**: Toggle sign (currently displayed but functionality can be enhanced)
- **( )**: Parentheses (currently displayed but functionality can be enhanced)
- **.**: Decimal point

### Example Calculations

1. Enter: `23 + 7 + 2003`
2. Press `=`
3. Result: `2033`

## 🛠️ Project Structure

```
Calculator/
├── index.html      # Main HTML structure
├── style.css       # Styling and layout
├── script.js       # Calculator logic
└── README.md       # This file
```

## 💻 Technologies Used

- **HTML5** - Structure and markup
- **CSS3** - Styling and responsive design
- **Vanilla JavaScript** - Calculator functionality

## 🎨 Design Features

- **Phone Container**: Simulates a smartphone interface
- **Color Scheme**: 
  - Display: White text on dark background
  - Number buttons: Light gray (#f2f6f7)
  - Function buttons: Teal (#3e6f72)
  - Equals button: Darker teal (#2c5154)
- **Typography**: Segoe UI font family
- **Animations**: Button scale animation on click

## 🔧 Customization

### Changing Colors

Edit `style.css` to customize the color scheme:

```css
/* Change button colors */
button {
    background: #your-color;
}

.func {
    background: #your-color;
}
```

### Adjusting Size

Modify the phone container dimensions in `style.css`:

```css
.phone {
    width: 360px;  /* Change width */
    height: 740px; /* Change height */
}
```

## 📝 Code Structure

### JavaScript (`script.js`)

- Event listeners attached to all buttons
- Expression building and evaluation
- Error handling for invalid expressions
- Symbol conversion (× → *, ÷ → /, − → -)

### CSS (`style.css`)

- Mobile-first responsive design
- Flexbox and Grid layouts
- Smooth transitions and animations
- Modern styling with rounded corners and shadows

## 🐛 Known Limitations

- Percentage (%) functionality is displayed but not fully implemented
- Sign toggle (±) is displayed but not fully implemented
- Parentheses ( ) functionality is displayed but not fully implemented
- Uses `eval()` for calculations (consider implementing a safer parser for production)

## 🔮 Future Enhancements

- [ ] Implement percentage calculation
- [ ] Add sign toggle functionality
- [ ] Complete parentheses support
- [ ] Add calculation history
- [ ] Implement light/dark theme toggle
- [ ] Add keyboard support
- [ ] Replace `eval()` with a safer expression parser
- [ ] Add scientific calculator functions

## 📄 License

This project is open source and available for personal and educational use.

## 👤 Author

Created as a modern calculator application example.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

---

**Enjoy calculating!** 🧮

