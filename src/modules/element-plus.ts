import ElementPlus from 'element-plus'
import { type UserModule } from '@/types'
import 'element-plus/dist/index.css'

export const install: UserModule = ({ app }) => {
  app.use(ElementPlus)
}
