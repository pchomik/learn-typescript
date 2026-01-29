export const COLORS: string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
export const PREFIXES: string[] = ["", "kilo", "mega", "giga"];

export function decodedResistorValue(colors: string[]): string {
    const color1Number = COLORS.indexOf(colors[0]);
    const color2Number = COLORS.indexOf(colors[1]);

    const color3Number = color2Number === 0 ? COLORS.indexOf(colors[2]) + 1 : COLORS.indexOf(colors[2]);
    const colorValue = color2Number === 0 ? `${color1Number}` : `${color1Number}${color2Number}`;

    const unit = PREFIXES[Math.floor(color3Number / 3)];
    const multiplier = 10 ** (color3Number % 3);
    const value = Number(colorValue) * multiplier;

    return `${value} ${unit}ohms`;
}
