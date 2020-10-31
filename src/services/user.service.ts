import User from '../models/User.model';
import { Transaction } from 'sequelize';

class UserService {
  public static async list(): Promise<User[]> {
    return User.findAll();
  }

  public static async getUserById(userId: string): Promise<User> {
    return User.findOne({
      where: {
        id: userId
      }
    });
  }

  public static async createUser(data: { firstName: string }, tx?: Transaction) {
    try {
      const dbUser = User.create({
        first_name: data.firstName
      }, { transaction: tx });

      if (tx) {
        await tx.commit();
      }

      return dbUser;

    } catch (error) {
      if (tx) {
        tx.rollback();
      }

      throw error;
    }
  }
}

export default UserService;
