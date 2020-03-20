class Post {
  id: string;
  title: string;
  description: string;

  constructor(props: any) {
    this.id = props.id;
    this.title = props.title;
    this.description = props.description;
  }
}

export default Post;
