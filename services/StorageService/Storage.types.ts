export enum ColorsEnum {
    Blue = "#0295ff",
    Pink = "#E77EC3",
    Green = "#94C900",
    Orange = "#EA9026",
    Violet = "#AD5EEC",
    Yellow = "#EAC500"
}

export enum FontSizeEnum {
    Small = 12,
    Medium = 14,
    Large = 16,
    ExtraLarge = 18
}

export interface IStorageData {
    settings: {
        theme: "dark" | "light"
        accent: ColorsEnum
        fontSize: FontSizeEnum
    }
    currentLevel: number
}
