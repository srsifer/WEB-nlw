import { ArrowLeft, Camera } from 'phosphor-react';
import React, { FormEvent, useState } from 'react'
import { FeedBackType, feedbackTypes } from '..'
import { api } from '../../../lib/api';
import { CloseButton } from '../../CloseButton'
import { Loading } from '../../Loading';
import { ScreenshotButton } from '../ScreenshotButton';

interface FeedBackContentStepProps {
  feedBackType: FeedBackType
  onFeedBackRestartedRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedBackContentStep({
  feedBackType,
  onFeedBackRestartedRequested,
  onFeedbackSent,
}: FeedBackContentStepProps) {
  const [ screenShot, setScreenShot] = useState<String | null>(null)
  const [comment , setComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)
  const feedBackTypeInfo = feedbackTypes[feedBackType];

  async function handleSubmitFeedBack (event: FormEvent) {
    event.preventDefault();
    setIsSendingFeedback(true)

    try {
      await api.post("/feedbacks", {
        type: feedBackType,
        comment,
        screenshot: screenShot,
      });

    } catch (error) {
      console.log(error)
    }

    setIsSendingFeedback(false)
    onFeedbackSent()
  }

  return (
    <>
      <header>

        <button
          type='button'
          className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'
          onClick={onFeedBackRestartedRequested}
        >
          <ArrowLeft weight='bold' className='w-4 h-4' />
        </button>

        <span className=" text-xl leading-6 flex items-center gap-2">
          <img src={feedBackTypeInfo.image.source} alt={feedBackTypeInfo.image.alt} className="w-6 h-6" />
          {feedBackTypeInfo.title}
        </span>

        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        <form onSubmit={handleSubmitFeedBack} className="my-4 w-full">
          <textarea
            className="min-w-[304px] w-full min-h-[112px] text-sm placeholder:text-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
            placeholder="Conte com detalhes oque esta acontecendo..."
            onChange={e => setComment(e.target.value)}
          />
          <footer className="flex gap-2 mt-2">
            <ScreenshotButton 
              onScreenshoTook={setScreenShot}
              screenShot={screenShot}
            />
            <button
              disabled={comment.length === 0 ||  isSendingFeedback }
              type="submit"
              className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            >
              { isSendingFeedback ?  <Loading /> : 'Enviar feedback'}
            </button>
          </footer>
        </form>
      </div>
    </>
  )
}
