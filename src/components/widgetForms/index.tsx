import React, { useState } from 'react'
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedBackTypeStep } from './steps/FeedBackTypeStep'
import { FeedBackContentStep } from './steps/feedBackContentStep';
import { FeedBackSuccessStep } from './steps/FeedBackSuccessStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },

  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lampada'
    }
  },

  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  },
}

export type FeedBackType = keyof typeof feedbackTypes

export function WidgetForm() {

  const [feedBackType, setFeedBackType] = useState<FeedBackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)
 
  const handleRestartFeedBack = () => {
    setFeedbackSent(false)
    setFeedBackType(null)
  }

  return (
    <>
      <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto" >
        {feedbackSent ? (
          <FeedBackSuccessStep 
            onFeedBackRestartedRequested={handleRestartFeedBack}
          />
        ) : (
          <>
            {!feedBackType ? (
              <FeedBackTypeStep onFeedBackTypeChanged={setFeedBackType} />
            ) : (
              <FeedBackContentStep
                feedBackType={feedBackType}
                onFeedBackRestartedRequested={handleRestartFeedBack}
                onFeedbackSent={() => setFeedbackSent(true)}
              />
            )}
          </>
        )}
        <footer className="text-xs text-neutral-400">
          <a className="underline-offset-2" href="https://github.com/srsifer"> Feito com ♥ pelo Igor Fernandes</a>
        </footer>
      </div>
    </>
  )
}


