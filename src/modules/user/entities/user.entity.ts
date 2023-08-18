import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user', { schema: 'public' })
export class User {
  @PrimaryGeneratedColumn() id: number;
  @Column() firstName: string;
  @Column() lastName: string;
  @Column() email: string;
  @Column() userName: string;
  @Column() password: string;
  @CreateDateColumn() created_at: Date;
  @CreateDateColumn() updated_at: Date;
}
