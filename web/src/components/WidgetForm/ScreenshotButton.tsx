import { Camera, Trash } from 'phosphor-react'
import html2canvas from 'html2canvas'
import { useState } from 'react'
import { Loading } from '../Loading'

interface ScreenshotButtonProps {
  screenshot: string | null
  comment: string
  onScreenshotTook: (screenshot: string | null) => void
}

export function ScreenshotButton({
  screenshot,
  comment,
  onScreenshotTook
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshoot() {
    setIsTakingScreenshot(true)

    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')

    onScreenshotTook(base64image)
    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end  text-zinc-400 hover:text-zinc-500 transition-colors"
        onClick={() => onScreenshotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180
        }}
      >
        <Trash weight="fill" />
      </button>
    )
  }

  return (
    <button
      type="button"
      className="p-2 dark:bg-zinc-800 bg-zinc-100 hover:bg-zinc-200 rounded-md border-transparent dark:hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 focus:ring-offset-zinc-100 focus:ring-brand-500 dark:text-zinc-100 text-zinc-800 disabled:opacity-50 disabled:hover:bg-zinc-800 disabled:cursor-not-allowed"
      onClick={handleTakeScreenshoot}
      disabled={comment.length === 0}
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  )
}
