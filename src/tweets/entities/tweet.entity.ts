import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tweets' })
export class Tweet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  tweet: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
