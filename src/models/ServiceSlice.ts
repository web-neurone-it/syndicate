import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IService} from "./IService";

interface ServiceState{
    service: IService;
}
const initialState: ServiceState = {
    service: {
        id: 0,
        title: 'Кузов',
        subtitle: 'Кузовные работы',
        price: 'индивидуальная',
        description: 'Подберем идеальный вариант детейлинга для вашего автомобиля! Выполним все процедуры по уходу и защите за авто. Бесплатный осмотр и консультация!',
    }
}
export const serviceSlice = createSlice(({
    name: 'service',
    initialState,
    reducers: {
        fetchService(state, action: PayloadAction<IService>) {
            state.service = action.payload
        }
    }
}))
export default serviceSlice.reducer