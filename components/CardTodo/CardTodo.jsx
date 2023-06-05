import { TouchableOpacity } from "react-native";
import { Text, Image} from "react-native";
import checkImg from "../../assets/check.png";
import { s } from "./CardTodo.style";
export function CardTodo({ todo}){
  return(
    <TouchableOpacity style= { s.card } >
       <Text style={s.txt}> {todo.title}</Text>
        <Image  style={s.img} source= {checkImg}  />
    </TouchableOpacity>
  ) ;
}