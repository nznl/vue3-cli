
import { ElInput, ElButton } from 'element-plus'

export function useElementComponents (app) {
  app.use(ElInput).use(ElButton)
}
