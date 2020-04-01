import React, { useState } from "react";
import {
  Modal,
  makeStyles,
  Theme,
  TextField,
  Button,
  Typography
} from "@material-ui/core";
import { useMutation } from "@apollo/react-hooks";
import Post from "../../service/models/posts.model";
import { MUTATE_POST } from "../../service/apollo/mutations";
import { GET_POSTS } from "../../service/apollo/queries";
import store from "../../store/store";

type Props = {
  modalTitle: string;
  prefilledPost?: Post;
  onClose: () => void;
};

const useStyles = makeStyles((theme: Theme) => ({
  mutateModal__container: {
    marginTop: "100px",
    margin: "auto",
    width: "400px",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  mutateModal__titleInput: {
    display: "block",
    marginTop: 16,
    marginBottom: 24
  },
  mutateModal__btnSubmit: {
    marginTop: 24,
    display: "block"
  }
}));

function MutatePostModal(props: Props) {
  const { onClose, prefilledPost, modalTitle } = props;
  const styles = useStyles();
  const [postDraft, setPostDraft] = useState<Post>(
    new Post(prefilledPost || {})
  );
  const [mutatePost] = useMutation(MUTATE_POST);

  const onClickSubmit = () => {
    const filters = store.getState().filtersPosts;
    mutatePost({
      variables: { request: postDraft },
      refetchQueries: [
        { query: GET_POSTS, variables: { request: { filters } } }
      ]
    })
      .then(() => {
        onClose();
      })
      .catch(error => {
        console.error(error);
      });
  };
  const onChangeTitle = (e: any) => {
    setPostDraft({ ...postDraft, title: e.target.value });
  };
  const onChangeDescription = (e: any) => {
    setPostDraft({ ...postDraft, description: e.target.value });
  };

  return (
    <Modal
      disableEnforceFocus
      disableAutoFocus
      open
      aria-labelledby="server-modal-title"
      aria-describedby="server-modal-description"
      onClose={onClose}
    >
      <div className={styles.mutateModal__container}>
        <Typography variant="h5">{modalTitle}</Typography>

        <div className={styles.mutateModal__titleInput}>
          <TextField
            required
            id="title-input"
            label="Required"
            placeholder="Title"
            value={postDraft.title}
            onChange={onChangeTitle}
          />
        </div>
        <TextField
          multiline
          required
          id="description-input"
          label="Required"
          placeholder="Description"
          value={postDraft.description}
          onChange={onChangeDescription}
        />
        <div className={styles.mutateModal__btnSubmit}>
          <Button
            variant="contained"
            color="primary"
            component="span"
            onClick={onClickSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default MutatePostModal;
