export const ADD_COMMENT = 'ADD_COMMENT',
	   REMOVE_COMMENT = 'REMOVE_COMMENT',
	   EDIT_COMMENT = 'EDIT_COMMENT',
	   COMMENT_THUMB_UP = 'COMMENT_THUMB_UP',
	   COMMENT_THUMB_DOWN ='COMMENT_THUMB_DOWN';

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		commentId
	}
}

function removeComment(commentId) {
	return {
		type: REMOVE_COMMENT,
		commentId
	}
}

function editComment(commentId, text) {
	return {
		type: EDIT_COMMENT,
		commentId,
		text
	}
}

function commentUp(commentId) {
	return {
		type: COMMENT_THUMB_UP,
		commentId
	}
}

function commentDown(commentId) {
	return {
		type: COMMENT_THUMB_DOWN,
		commentId
	}
}
