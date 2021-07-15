import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("annotations")
export class Annotation {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  title: string;

  @Column()
  body: string;

  @JoinColumn({ name: "owner" })
  @ManyToOne(() => User)
  owner: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
