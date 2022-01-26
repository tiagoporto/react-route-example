import { useParams } from "react-router-dom";

export function Person() {
  let params = useParams();
  return <div>{params.personId} contact page</div>;
}
