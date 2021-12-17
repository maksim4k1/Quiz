import { LOAD_RATING_FAILING, LOAD_RATING_LOADING, LOAD_RATING_SUCCESS } from "../../types"

export function loadRatingAction(){
  return async (dispatch) => {
    dispatch({type: LOAD_RATING_LOADING});
    setTimeout(() => {
      try{
        const data = [
          {place: 1, username: "username", image: "https://i.ytimg.com/vi/0P2m-Bqaaq8/maxresdefault.jpg"},
          {place: 2, username: "username", image: "https://www.spletnik.ru/img/__post/60/60cf0ac41d8c3404a26fb544a0887c1d_994.jpg"},
          {place: 3, username: "username", image: "https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg"},
          {place: 4, username: "username", image: "https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg"},
          {place: 5, username: "username", image: ""},
          {place: 6, username: "username", image: "https://habrastorage.org/r/w780/webt/-j/go/fx/-jgofxkmtexlfds_uh_c4eklqgu.jpeg"},
        ];

        dispatch({type: LOAD_RATING_SUCCESS, payload: data});
      } catch{
        dispatch({type: LOAD_RATING_FAILING, payload: "Error"});
      }
    }, 500);
  }
}