import { Router } from 'express'
import { readdirSync } from 'fs'

const PATH_ROUTES = `{__dirname}`

const router = Router()

const cleanFileName = (fileName: string) => {
    return fileName.replace('.ts','')
}

readdirSync(PATH_ROUTES).forEach((file) => {
    const cleanFile = cleanFileName(file)
    if (cleanFile !== 'index') {
        import(`/${cleanFile}`)
            .then((moduleRouter) => {
                router.use(`/${cleanFile}`, moduleRouter.router)
            })
            .catch((err) => {
                console.log(err)
            })
    }
})

export { router }