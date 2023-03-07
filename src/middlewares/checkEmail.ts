import { userRepository } from '../repositories/userRepository'
import { BadRequestError } from '../helpers/api-erros'


export async function checkEmail(email: string) {
      const userExists = await userRepository.findOneBy({ email })

       if (userExists) {
            throw new BadRequestError('E-mail já existe')
      }
}

export default checkEmail;
