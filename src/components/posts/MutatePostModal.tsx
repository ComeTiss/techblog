import React from "react";
import {
  Modal,
  makeStyles,
  Theme,
  TextField,
  Button,
  Typography
} from "@material-ui/core";

type Props = {
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
  const { onClose } = props;
  const styles = useStyles();

  const onClickSubmit = () => {
    console.log("Submit press");
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
        <Typography variant="h5">Create a Post</Typography>

        <div className={styles.mutateModal__titleInput}>
          <TextField
            required
            id="title-input"
            label="Required"
            placeholder="Title"
          />
        </div>
        <TextField
          multiline
          required
          id="description-input"
          label="Required"
          placeholder="Description"
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
