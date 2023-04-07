type CreateToastFn = (message: string, duration: number) => void;
type RemoveToastFn = (id: number) => void;

interface ToastItem {
  id: number;
  message?: string;
  duration?: number;
}

const KeyMap = new Map()

class ToastRenderer {
  constructor ({toast, onDone}: { toast: Toast, onDone: RemoveTostFn}) {
    if (!KeyMap.has(toast.id)) {
      const timer = setTimeout(() => {
        onDone(toast.id)
      }, toast.duration)
      KeyMap.set(toast.id, timer)
    }

  }
}

function ToastManager() {
  let toastId = 0
  let queue: ToastItem[] = []

  const printQueue = () => {
    console.log(JSON.stringify(queue))
  }

  const createToast = (message?: string, duration = 2000) => {
    const newToast: ToastItem = {
      id: toastId,
      message: message,
      duration: duration
    }

    toastId += 1

    queue = [...queue, newToast]
    printQueue()
  }

  const removeToast = (toastId: number) => {
    queue = queue.filter((toast) => toast.id !== toastId)
    KeyMap.delete(toastId)
    printQueue()
  }

  const Toast = (message?: string, duration = 2000) => {
    createToast(message, duration)
    queue.forEach((toast) => {
      new ToastRenderer({ toast, onDone: removeToast })
    })
  }

  return Toast
}

const Toast = ToastManager()

export default Toast



