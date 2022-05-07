import successImage from '../../../assets/success.svg'
import { CloseButton } from '../../CloseButton'

interface FeedbackSuccessStep {
  onRestartFeedback: () => void
}

export function FeedbackSuccessStep({
  onRestartFeedback
}: FeedbackSuccessStep) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImage} alt="Imagem de checado" className="h-10 w-10" />
        <span className="text-xl leading-6 dark:text-zinc-100 text-zinc-800 mt-2">
          Agradecemos o feedback
        </span>
        <button
          type="button"
          className="dark:text-zinc-100 text-zinc-800 dark:bg-zinc-800 bg-zinc-100 py-2 px-6 rounded-md mt-3 border-transparent text-sm dark:hover:bg-zinc-700 hover:bg-zinc-200 transition-colors focus:border-brand-500 focus:ring-brand-500 focus:ring-2 focus:outline-none"
          onClick={onRestartFeedback}
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}
