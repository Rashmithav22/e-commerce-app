import 'keen-slider'

declare module 'keen-slider' {
  interface KeenSliderOptions {
    breakpoints?: {
      [key: string]: KeenSliderOptions
    }
  }
}
