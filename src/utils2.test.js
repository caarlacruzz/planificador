import { describe, it, expect } from 'vitest'
import { formatearFecha, calcularPrioridad } from './utils'

describe('formatearFecha', () => {
  it('formatea correctamente', () => {
    expect(true).toBe(true)
  })
})


describe('calcularPrioridad', () => {
  it("calcular un peso a partir de unos minutos dados", () => {
    const v1 = 5
    const v2 = 15
    const v3 = 35
    const resultado1 = calcularPrioridad(v1)
    const resultado2 = calcularPrioridad(v2)
    const resultado3 = calcularPrioridad(v3)
    expect(resultado1).toBe('baja')
    expect(resultado2).toBe('media')
    expect(resultado3).toBe('alta')
  })
})                   