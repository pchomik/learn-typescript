export const COLORS: string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export function decodedValue(colors: string[]): number {
    const indexOfColor1 = COLORS.indexOf(colors[0]);
    const indexOfColor2 = COLORS.indexOf(colors[1]);
    return Number(`${indexOfColor1}${indexOfColor2}`);
}
