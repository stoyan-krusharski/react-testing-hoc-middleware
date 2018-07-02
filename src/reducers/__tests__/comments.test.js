import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

const newComment = 'New Comment';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: newComment
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual([newComment]);
});
