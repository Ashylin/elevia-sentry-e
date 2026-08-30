import * as THREE from 'three'

let cached: THREE.CanvasTexture | null = null

/** Bakes the "SENTRY-E" badge label to a texture — no font fetch, fully offline. */
export function getBadgeTexture(): THREE.CanvasTexture {
  if (cached) return cached

  const width = 512
  const height = 96
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')!

  ctx.fillStyle = '#0d1f14'
  ctx.fillRect(0, 0, width, height)

  ctx.fillStyle = '#c9c9c9'
  ctx.font = '600 44px "Helvetica Neue", Arial, sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.letterSpacing = '6px'
  ctx.fillText('SENTRY-E', width / 2 + 6, height / 2 + 2)

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  cached = texture
  return texture
}
