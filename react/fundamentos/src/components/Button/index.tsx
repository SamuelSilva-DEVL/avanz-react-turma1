import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  titulo: string;

}


export default function Button(props: ButtonProps) {
  return (
    <button id={props.id} onClick={props.onClick}>
      {props.titulo}
    </button>
         
  );
}
