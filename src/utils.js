import dayjs from 'dayjs'

export function formatearFecha(fecha) {
    const fechaFormateada = dayjs(fecha).format('DD/MM/YYYY HH:mm ')
    return fechaFormateada
}
export function calcularPrioridad(tiempo) {
    if (tiempo < 10) {
        return 'baja'
    } else if (tiempo < 30) {
        return 'media'
    } else {
        return 'alta'
    }
}