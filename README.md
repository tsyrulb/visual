# Chaos Design: Exploring Chaos Theory through Generative Art

## Overview

**Chaos Design** is a creative exploration that merges the principles of **chaos theory** with **generative art**. This project demonstrates how complex and unpredictable behaviors, exemplified by the **Lorenz attractor**, can be harnessed to transform static images into dynamic, mesmerizing visualizations. It's an educational tool aimed at studying the intersection of scientific concepts and artistic design.

## Features

- **Chaos-Driven Animation**: Utilizes the Lorenz system to animate pixels, creating intricate and organic motion patterns.
- **Randomized Activation**: Each pixel begins its chaotic journey at a random frame, ensuring a unique and evolving visual experience.
- **Interactive Controls**: Navigate and explore the 3D space using intuitive mouse controls.
- **Performance Optimizations**: Efficiently handles pixel transformations for smooth animations.

## Demo

![Animated Visualization](demo.gif) <!-- Optional: Add a demo GIF or video -->

## Getting Started

Follow these instructions to set up and run the project locally for study and experimentation purposes.

### Prerequisites

- **Web Browser**: Modern browsers like Chrome, Firefox, or Edge with JavaScript enabled.
- **Local Server** (Optional but recommended): To handle loading local images without CORS issues. You can use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code or any other local server tool.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/tsyrulb/chaos-design.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd chaos-design
   ```

3. **Add Your Image**

   - Place your desired image (e.g., `image.png`) in the project directory.
   - Ensure the image is named `image.png` or update the `sketch.js` accordingly.

### Running the Project

1. **Using Live Server (Recommended)**

   - Open the project folder in [Visual Studio Code](https://code.visualstudio.com/).
   - Install the **Live Server** extension if you haven't already.
   - Right-click on `index.html` in the Explorer sidebar and select **"Open with Live Server"**.

2. **Directly Opening in Browser**

   - Simply double-click `index.html` to open it in your default browser.
   - **Note**: Some browsers may restrict loading local files. Using a local server is recommended to avoid potential issues.

## Usage

- **Navigate the 3D Space**: Click and drag to rotate, scroll to zoom in and out.
- **Observe the Transformation**: Watch as each pixel begins to move according to the Lorenz attractor after its randomized start frame, gradually transforming the original image into a chaotic pattern.

## Customization

Feel free to tweak the following parameters in `sketch.js` to experiment with different effects:

- **Lorenz System Constants**

  ```javascript
  const sigma = 10;
  const rho = 28;
  const beta = 8 / 3;
  ```

- **Time Step and Speed**

  ```javascript
  const dt = 0.01; // Time step
  ```

- **Start Frame Range**

  ```javascript
  let startFrame = floor(random(0, 300));
  ```

- **Canvas Size**

  ```javascript
  createCanvas(600, 600, WEBGL);
  ```

## Contributing

Contributions are welcome! If you'd like to add features, fix bugs, or improve documentation:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- **p5.js**: A JavaScript library that makes coding accessible for artists, designers, educators, and beginners.
- **Lorenz Attractor**: A system of ordinary differential equations first studied by Edward Lorenz, which serves as a classic example of chaos theory.

---

*Explore the beauty of chaos and design. Happy coding!*
