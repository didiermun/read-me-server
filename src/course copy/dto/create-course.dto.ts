import { UserType } from 'src/user/dto/create-user.dto';
import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class CourseType {
  @Field(() => ID)
  id: string;
  @Field({ nullable: true })
  readonly name: string;
  @Field(() => [UserType], { nullable: true })
  readonly author: UserType[];
}
