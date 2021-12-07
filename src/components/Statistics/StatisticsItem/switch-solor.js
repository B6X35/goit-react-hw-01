export default function getRangomColor() {
    return `#${getRandomHex()}0000`;
  }
  
  function getRandomHex() {
    return Math.round(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
  }