import {IStorageData} from "./StorageTypes";

class StorageService {
    public static async getData(): Promise<IStorageData> {
        try {
            const data = await localStorage.getItem('data');

            if (!data) {
                throw new Error('Данные отсутствуют');
            }

            return JSON.parse(data)
        } catch (error) {
            throw new Error('Ошибка чтения данных: ' + error)
        }
    }

    public static async setData(data: IStorageData): Promise<void> {
        try {
            await localStorage.setItem('data', JSON.stringify(data));
        } catch (error) {
            throw new Error('Ошибка сохранения данных: ' + error)
        }
    }
}
