import UsersRouteDefinitions, { EUsersRoute } from '../definitions/users.route';
import { APIResponse } from '../../../utils/response.util';
import { mapUserEntities, mapUserEntity } from '../../../entities/user.entity';
import UserService from '../../../services/user.service';

class UsersRoute {
  public static getUsersList: UsersRouteDefinitions.RouteMethod<EUsersRoute.GetUsersList> = async (request, response, next) => {
    try {
      const dbUsers = await UserService.list();

      const users = mapUserEntities(dbUsers);

      return response.status(200).json(APIResponse.success(users));
    } catch (error) {
      next(error);
    }
  };

  public static getUser: UsersRouteDefinitions.RouteMethod<EUsersRoute.GetUser> = async (request, response, next) => {
    try {
      const {
        id
      } = request.params;

      const dbUser = await UserService.getUserById(id);

      const user = mapUserEntity(dbUser);

      return response.status(200).json(APIResponse.success(user));
    } catch (error) {
      next(error);
    }
  };

  public static postUser: UsersRouteDefinitions.RouteMethod<EUsersRoute.PostUser> = async (request, response, next) => {
    try {
      const {
        first_name
      } = request.body;

      const dbUser = await UserService.createUser({
        firstName: first_name
      });

      const user = mapUserEntity(dbUser);

      return response.status(200).json(APIResponse.success(user));
    } catch (error) {
      next(error);
    }
  };
}

export default UsersRoute;
