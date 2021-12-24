<<<<<<< HEAD
import { FAILING, LOADING, SUCCESS } from "../redux/types"

const stateCreator = (type, error) => {
  switch (type) {
=======
import { FAILING, LOADING, SUCCESS } from "../redux/types";

const stateCreator = (type, error) => {
  switch(type){
>>>>>>> dev
    case SUCCESS: {
      return {
        success: true,
        loading: false,
        failing: false,
<<<<<<< HEAD
        error: ""
=======
        error: "",
>>>>>>> dev
      }
    } case LOADING: {
      return {
        success: false,
        loading: true,
        failing: false,
<<<<<<< HEAD
        error: ""
=======
        error: "",
>>>>>>> dev
      }
    } case FAILING: {
      return {
        success: false,
        loading: false,
        failing: true,
<<<<<<< HEAD
        error: error
=======
        error: error,
>>>>>>> dev
      }
    } default: {
      return {
        success: false,
        loading: false,
        failing: false,
        error: ""
      }
    }
  }
}

export default stateCreator;