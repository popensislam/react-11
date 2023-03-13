import { useState } from 'react';

const RenderProp = ({ render }) => {
  const [state, setState] = useState([1, 2, 3, 4]);
  return render(state);
};

export default RenderProp;
