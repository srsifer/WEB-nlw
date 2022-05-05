import html2canvas from 'html2canvas'
import { Camera, Trash } from 'phosphor-react'
import React, { useState } from 'react'
import { Loading } from '../Loading';

interface ScreenshotButton {
  screenShot: String | null,
  onScreenshoTook: (screenShot: string | null) => void;
}

export function ScreenshotButton({
  screenShot,
  onScreenshoTook,
}: ScreenshotButton) {

  const [isTakingScreenShot, setISTakingScreenShot] = useState(false);

  const handleTakeScreenshot = async () => {
    setISTakingScreenShot(true)

    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image.png')

    onScreenshoTook(base64image);
    setISTakingScreenShot(false)
  }

  if (screenShot) {
    return (
      <button
        type='button'
        className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors'
       onClick={() => onScreenshoTook(null)}
        style={{
          backgroundImage: `url(${screenShot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: '180',
        }}
      >
        <Trash weight="fill" />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-trasparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >

      {isTakingScreenShot ? <Loading /> : <Camera className="w-6 h-6 text-zinc-100 " />}
    </button>
  )
}
