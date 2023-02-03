import { createContext, useEffect, useReducer, useRef } from "react";
import { getPhothos, searchPhothos } from "../utils/pexel/pexel.utils";

const getPhotosAsync = async (dispatch, page) => {
  try {
    dispatch({ type: PICTURE_ACTION_TYPES.PICTURE_LOADING_START });
    const response = await getPhothos(page);
    dispatch({
      type: PICTURE_ACTION_TYPES.CURATED_LOADING_SUCCESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: PICTURE_ACTION_TYPES.PICTURE_LOADING_FAILED,
      payload: err.message,
    });
  }
};
const getMorePhotosAsync = async (dispatch, page) => {
  try {
    dispatch({ type: PICTURE_ACTION_TYPES.PICTURE_LOADING_START });
    const response = await getPhothos(page);
    dispatch({
      type: PICTURE_ACTION_TYPES.CURATED_LOADING_MORE,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: PICTURE_ACTION_TYPES.PICTURE_LOADING_FAILED,
      payload: err.message,
    });
  }
};

const searchPhothosAsync = (dispatch, page, query, filter) => {
  dispatch({ type: PICTURE_ACTION_TYPES.PICTURE_LOADING_START });
  searchPhothos(page, query, filter)
    .then((response) => {
      if (response && !response.photos.length)
        throw new Error("Oops! No Picture Found");
      dispatch({
        type: PICTURE_ACTION_TYPES.PICTURE_LOADING_SUCCESS,
        payload: response,
      });
    })
    .catch((err) => {
      dispatch({
        type: PICTURE_ACTION_TYPES.PICTURE_LOADING_FAILED,
        payload: err.message,
      });
    });
};
const searchMorePhothosAsync = (dispatch, page, query, filter) => {
  dispatch({ type: PICTURE_ACTION_TYPES.PICTURE_LOADING_START });
  searchPhothos(page, query, filter)
    .then((response) => {
      dispatch({
        type: PICTURE_ACTION_TYPES.PICTURE_LOADING_MORE,
        payload: response,
      });
    })
    .catch((err) => {
      dispatch({
        type: PICTURE_ACTION_TYPES.PICTURE_LOADING_FAILED,
        payload: err.message,
      });
    });
};

const defaultValue = {
  page: null,
  pictures: [],
  curated: [],
  getMorePhotos: () => null,
  searchPhothos: () => null,
  searchMorePhothos: () => null,
  isLoading: false,
  loadingRef: null,
  error: "",
};

export const PictureContext = createContext(defaultValue);

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

const pictureReducer = (state, action) => {
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
      throw new Error(`Unhandled action type of ${type} in pictureReducer`);
  }
};

export const PictureProvider = ({ children }) => {
  const [{ pictures, curated, error, isLoading, page }, dispatch] = useReducer(
    pictureReducer,
    INITIAL_STATE
  );

  const loadingRef = useRef();

  const searchPhotos = (page, query, filter) =>
    searchPhothosAsync(dispatch, page, query, filter);

  const getMorePhotos = (page) => getMorePhotosAsync(dispatch, page);

  const searchMorePhothos = (page, query, filter) =>
    searchMorePhothosAsync(dispatch, page, query, filter);

  const value = {
    page,
    pictures,
    curated,
    error,
    isLoading,
    loadingRef,
    searchPhotos,
    searchMorePhothos,
    getMorePhotos,
  };

  useEffect(() => {
    console.log("Rendred");
    (async () => {
      await getPhotosAsync(dispatch, null);
    })();
  }, []);
  return (
    <PictureContext.Provider value={value}>{children}</PictureContext.Provider>
  );
};
