import { initialState } from "./initialState";
import { SET_VINO_LIST, DELETE_VINO_LIST ,FILTRO_VINO_LIST, UPDATE_VINO_LIST} from "./const";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_VINO_LIST: {
            return {
                    ...state,
                    vinos: state.vinos.map(item => {
                        if (item.id === action.payload.id) {
                            return {
                                ...item,
                                nombre: action.payload.nombre,
                                vina: action.payload.vina,
                                cepa: action.payload.cepa,
                                cosecha: action.payload.cosecha,
                                tipo: action.payload.tipo,
                                show: true
                            }
                        }
    
                        return item;
                    })
                }           
        }        
        case DELETE_VINO_LIST: {
            return {
                ...state,
                vinos: state.vinos.filter((item, index) => {
                    return item.id !== action.payload;
                })
            }
        }
        case SET_VINO_LIST: {
            return {
                ...state, vinos: state.vinos.concat(action.payload)
                
            };
        }
        case FILTRO_VINO_LIST: {
            const texto = action.payload.toUpperCase().trim();
            return {
                ...state,
            vinos: state.vinos.map(item => {
                if (
                    (item.nombre.toUpperCase().trim().indexOf(texto) !== -1) ||
                    (item.vina.toUpperCase().trim().indexOf(texto) !== -1) ||
                    (item.cepa.toUpperCase().trim().indexOf(texto) !== -1) ||
                    (item.cosecha.toUpperCase().trim().indexOf(texto) !== -1) ||
                    (item.tipo.toUpperCase().trim().indexOf(texto) !== -1)
                   )
                  {
                    return {
                        ...item,
                        show: true
                    }
                } else {
                    return {
                        ...item,
                        show: false
                    }
                }
            })
        }
    }
    default: {
        return state;
    }
}
};