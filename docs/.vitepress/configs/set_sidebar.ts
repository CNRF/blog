// @ts-ignore
import path from 'node:path'
// @ts-ignore
import fs from 'node:fs'

// 文件根目录
const DIR_PATH = path.resolve()
// 白名单,过滤不是文章的文件和文件夹
const WHITE_LIST = [
  'index.md',
  '.vitepress',
  'node_modules',
  '.idea',
  'assets',
  'image',
  'nav',
  'public',
  'nav.md',
]
const SUFFIX = '.md'

// 判断是否是文件夹
const isDirectory = (path: fs.PathLike) => fs.lstatSync(path).isDirectory()

// 取差值
const intersections = (arr1: any[], arr2: Iterable<unknown> | null | undefined) =>
  Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))))

// 把方法导出直接使用
// @ts-ignore
function getList(params: any[], path1: string, pathname: string, rootPath: string) {
  // 存放结果
  const res = []
  // 开始遍历params
  for (let file in params) {
    // 拼接目录
    const dir = path.join(path1, params[file])
    // 判断是否是文件夹
    const isDir = isDirectory(dir)
    if (isDir) {
      // 如果是文件夹,读取之后作为下一次递归参数
      const files = fs.readdirSync(dir)
      if (params[file] === 'assets') {
        continue
      }
      const directoryArray = params[file].split('.')
      let directoryName = ''
      if (directoryArray.length < 2) {
        directoryName = params[file]
      } else {
        directoryName = directoryArray.slice(1)
      }
      res.push({
        text: directoryName,
        collapsed: true,
        items: getList(files, dir, `${pathname}/${params[file]}`, rootPath),
      })
    } else {
      // 获取名字
      const fullName = path.basename(path.basename(params[file], SUFFIX))
      const nameParts = fullName.split('.')
      let name = ''
      if (nameParts.length < 2) {
        name = fullName
      } else {
        name = nameParts.slice(1).join('.')
      }
      // 排除非 md 文件
      const suffix = path.extname(params[file])
      if (suffix !== SUFFIX) {
        continue
      }
      const relativePath = path.relative(rootPath, pathname)
      res.push({
        text: name,
        link: `${relativePath}/${fullName}`,
      })
    }
  }
  return res
}

export const set_sidebar = (pathname: string) => {
  // 获取pathname的路径
  const dirPath = path.join(DIR_PATH, pathname)
  // 读取pathname下的所有文件或者文件夹
  const files = fs.readdirSync(dirPath)
  // 过滤掉
  const items = intersections(files, WHITE_LIST)
  return getList(items, dirPath, pathname, pathname)
}
