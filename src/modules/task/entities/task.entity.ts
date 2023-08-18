import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('task', { schema: 'public' })
export class Task {
  @PrimaryGeneratedColumn() taskId: number;
  @Column() title: string;
  @Column() description: string;
  @Column() status: string;
  @Column() dueDate: string;
  @UpdateDateColumn() updated_at: Date;
  @CreateDateColumn() created_at: Date;
}
