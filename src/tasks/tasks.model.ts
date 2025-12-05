import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Task extends Model<Task> {
  @Column
  name: string;

  @Column
  desc: string;

  @Column({ defaultValue: true })
  done: boolean;
}