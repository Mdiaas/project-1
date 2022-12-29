
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'
import { loadCategories } from '../../../../utils/loadCategory'

class ImportCategoryUseCase{
    constructor(private categoriesRepository: ICategoriesRepository){

    }
    async execute(file: Express.Multer.File): Promise<void>{
        const categories = await loadCategories(file)
        categories.map((category) => {
            const { name, description } = category
            const categoryAlreadyExists = this.categoriesRepository.findByName(name)
            if(!categoryAlreadyExists){
                this.categoriesRepository.create({
                    name, description
                })
            }
        })
    }
}

export { ImportCategoryUseCase }