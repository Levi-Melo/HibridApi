import { EntityRepository, Repository } from "typeorm";
import { Annotation } from "../entities/Annotation";

@EntityRepository(Annotation)
export class AnnotationRepositories extends Repository<Annotation> {}
