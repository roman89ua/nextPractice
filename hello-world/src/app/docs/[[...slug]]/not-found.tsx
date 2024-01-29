import {concepts, features} from "@/app/docs/[[...slug]]/consts";

const NotFound = () => {

  return (
    <div>

      <h1>This is local docs NOT FOUND page.</h1>
      <p>If you see it than you set incorrect route for docs pages.</p>
      <p>possible routes are:</p>
      <p>localhost:3000/docs/--here should be some of this features [{features.map(f=> `${f}, `)}]--/--and here should be some of this concepts [{concepts.map(c=> `${c}, `)}]</p>
      <p>Third parameter after concept param not allowed. It will leed you to this local not found page.</p>
      <p>Good luck :)</p>
    </div>
  )
};

export default NotFound;