class Post {
  id: string;
  title: string;
  description: string;
  authorId: string;

  constructor(props: any) {
    this.id = props.id;
    this.title = props.title;
    this.description = props.description;
    this.authorId = props.authorId || props.author.id;
  }
}

export default Post;
