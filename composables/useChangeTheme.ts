// It will be available as useFoo() (camelCase of file name without extension)
export const useChangeTheme = (e) => {
  const themeActive = 'theme-1'

  const changeTheme = (e) => {
    themeActive = e
  }
  return useState('foo', () => console.log(e))
}
