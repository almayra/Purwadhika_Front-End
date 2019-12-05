import {MOBIL,MOTOR, DURASI} from '../type'

export const tarifMobil=(durasi)=>{
    return{
        type:MOBIL,
        time:durasi
    }
}
export const tarifMotor=(durasi)=>{
    return{
        type:MOTOR,
        time:durasi
    }
}
export const lamaParkir=(durasi)=>{
    return{
        type:DURASI,
        time:durasi
    }
}
