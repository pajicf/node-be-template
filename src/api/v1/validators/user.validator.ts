import UserRouteDefinitions from '../definitions/users.route';
import { ValidatorFields } from '../../../types/util.types';
import { checkSchema } from 'express-validator';
import { val } from '../middlewares/validate.middleware';

type PostUserFields =
  (keyof UserRouteDefinitions.IPostUserRequestBody)

const postUserSchema: ValidatorFields<PostUserFields> = {
  first_name: {
    in: ['body'],
    errorMessage: 'First name must be a string',
    isString: true,
    exists: true
  }
};

export default class UserValidator {
  public static validatePostUser = val(checkSchema(postUserSchema));
}
