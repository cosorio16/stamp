function colorLuminance(hex, lum) {
  hex = String(hex).replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  let rgb = "#",
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }

  return rgb;
}

function getContrast(hex) {
  const r = parseInt(hex.substr(1, 2), 16),
    g = parseInt(hex.substr(3, 2), 16),
    b = parseInt(hex.substr(5, 2), 16),
    yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#001f3f" : "#F6F5F7";
}

function generateNeumorphismColors(color) {
  const darkColor = colorLuminance(color, -0.6);
  const lightColor = colorLuminance(color, +0.6);

  const firstGradientColor = color;
  const secondGradientColor = colorLuminance(color, 0.07);
  const thirdGradientColor = colorLuminance(color, -0.1);

  return {
    color,
    darkColor,
    lightColor,
    firstGradientColor,
    secondGradientColor,
    thirdGradientColor,
  };
}

export default { getContrast, generateNeumorphismColors, colorLuminance };
