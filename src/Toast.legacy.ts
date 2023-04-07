type CreateToastFn = (message: string, duration: number) => void;
type RemoveToastFn = (id: number) => void;

interface ToastItem {
  id: number;
  message?: string;
  duration?: number;
}

// let bind: CreateToastFn | undefined = undefined;
// let id = 0;


// class ToastManager {
//   queue: ToastItem[]
//   constructor() {
//     this.queue = []
//     // 이 부분이 중요하다.
//     bind = this.createToast.bind(this)
//   }

//   createToast (message?: string, duration = 2000) {
//     const newToast: ToastItem = {
//       id: id,
//       message: message,
//       duration: duration
//     }

//     id += 1

//     this.queue.push(newToast)
//     this.queue.forEach((toast) => {
//       console.log(toast)
//     })
//   }

//   removeToast (toastId: number) {
//     this.queue.filter((toast) => toast.id !== toastId)
//     console.log(this.queue)
//   }

// }


// new ToastManager()

// const Toast = (message: string, duration = 2000) => {
//   if (!bind) {
//     throw new Error('error')
//   }
//   bind?.(message, duration);
// }
