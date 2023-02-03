const INITIAL_STATE = {
  pictures: [],
  curated: [],
  page: null,
  isLoading: false,
  error: "",
};

const PICTURE_ACTION_TYPES = {
  PICTURE_LOADING_START: "PICTURE_LOADING_START",
  PICTURE_LOADING_SUCCESS: "PICTURE_LOADING_SUCCESS",
  PICTURE_LOADING_MORE: "PICTURE_LOADING_MORE",
  CURATED_LOADING_SUCCESS: "CURATED_LOADING_SUCCESS",
  CURATED_LOADING_MORE: "CURATED_LOADING_MORE",
  PICTURE_LOADING_FAILED: "PICTURE_LOADING_FAILED",
};

export const picturesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case PICTURE_ACTION_TYPES.PICTURE_LOADING_START:
      return { ...state, isLoading: true };
    case PICTURE_ACTION_TYPES.PICTURE_LOADING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        curated: [],
        pictures: payload.photos,
        page: payload.page,
      };
    case PICTURE_ACTION_TYPES.PICTURE_LOADING_MORE:
      return {
        ...state,
        isLoading: false,
        curated: [],
        pictures: state.pictures.concat(payload.photos),
        page: payload.page,
      };

    case PICTURE_ACTION_TYPES.CURATED_LOADING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        curated: payload.photos,
        pictures: [],
        page: payload.page,
      };
    case PICTURE_ACTION_TYPES.CURATED_LOADING_MORE:
      return {
        ...state,
        isLoading: false,
        curated: state.curated.concat(payload.photos),
        pictures: [],
        page: payload.page,
      };

    case PICTURE_ACTION_TYPES.PICTURE_LOADING_FAILED:
      return {
        ...state,
        pictures: [],
        curated: [],
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
