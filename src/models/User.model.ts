import {
  AllowNull,
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
  Unique
} from 'sequelize-typescript';

@Table({
  freezeTableName: true,
  modelName: 'users',
  timestamps: true,
  underscored: true
})
export default class User extends Model<User> {
  @Unique
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({type: DataType.UUIDV4})
  id: string;

  @AllowNull(false)
  @Column
  first_name: string;
}
