import * as THREE from 'three'

let cached: THREE.CanvasTexture | null = null

/** Procedural solar-cell grid texture, generated once and cached. */
export function getSolarTexture(): THREE.CanvasTexture {
  if (cached) return cached

  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!

  ctx.fillStyle = '#0a1626'
  ctx.fillRect(0, 0, size, size)

  const cells = 6
  const cell = size / cells
  ctx.fillStyle = '#0f2038'
  const pad = 4
  for (let y = 0; y < cells; y++) {
    for (let x = 0; x < cells; x++) {
      ctx.fillRect(x * cell + pad, y * cell + pad, cell - pad * 2, cell - pad * 2)
    }
  }

  ctx.strokeStyle = 'rgba(150, 190, 255, 0.25)'
  ctx.lineWidth = 1
  for (let i = 0; i <= cells; i++) {
    ctx.beginPath()
    ctx.moveTo(i * cell, 0)
    ctx.lineTo(i * cell, size)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(0, i * cell)
    ctx.lineTo(size, i * cell)
    ctx.stroke()
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  cached = texture
  return texture
}
