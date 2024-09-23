import { useParams } from "react-router-dom";
export function User() {
    const {userid} = useParams();
  return (<>
    <div className="bg-red-700">
        <h1 className="bg-black text-white">USER:{userid}</h1>
    </div>
    </>);
}