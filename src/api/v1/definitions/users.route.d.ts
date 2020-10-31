import { EmptyObject, ParamsDictionary } from '../../../types/util.types';
import { NextFunction, Request as ExpressRequest, Response as ExpressResponse } from 'express';
import { IResponseSuccess } from '../../../utils/response.util';
import { IUserEntity } from '../../../entities/user.entity';

export enum EUsersRoute {
  GetUsersList = 'GetUsersList',
  GetUser = 'GetUser',
  PostUser = 'PostUser'
}

declare namespace TemplatesRouteDefinitions {
  type ResponseBody<T extends EUsersRoute> =
  T extends EUsersRoute.GetUsersList ? IUserEntity[] :
  T extends EUsersRoute.GetUser ? IUserEntity :
  T extends EUsersRoute.PostUser ? IUserEntity :
    EmptyObject;

  type RequestBody<T extends EUsersRoute> =
  T extends EUsersRoute.PostUser ? IPostUserRequestBody :
    EmptyObject;

  type RequestQueries<T extends EUsersRoute> =
    EmptyObject;

  type RequestParams<T extends EUsersRoute> =
  T extends EUsersRoute.GetUser ? IGetUserParams :
    EmptyObject;

  type Response<T extends EUsersRoute> = ExpressResponse<IResponseSuccess<ResponseBody<T>>>

  type Request<T extends EUsersRoute> = ExpressRequest<RequestParams<T> & ParamsDictionary, IResponseSuccess<ResponseBody<T>>, RequestBody<T>, RequestQueries<T>>

  type RouteMethod<T extends EUsersRoute> = (request: Request<T>, response: Response<T>, next: NextFunction) => Promise<any>;

  /** REQUEST BODIES **/
  interface IPostUserRequestBody {
    first_name: string;
  }

  /** REQUEST PARAMS **/
  interface IGetUserParams {
    id: string;
  }
}

export default TemplatesRouteDefinitions;
