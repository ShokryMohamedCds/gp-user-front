import { Comments } from './comments';
export interface Posts {
  showcomment?:boolean;
  id:string;
  isliked:boolean;
  date:string;
  postimage?:string;
  creatorimage:string;
  creatorname:string;
  postsubject:string;
  comments?: Comments[]
}
