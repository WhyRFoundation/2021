export const scrollToHandler = (elementId: string): void => {
  const element = document.getElementById(elementId)

  setTimeout(() => {
    window.scrollTo({
      behavior: 'smooth',
      top: element ? element.offsetTop : 0,
    })
  }, 100)
}
