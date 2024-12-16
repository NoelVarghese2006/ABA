
import {Input} from "@nextui-org/input";

import {Button} from "@nextui-org/button";

const InputBox = () => {
    return (
      <div>
        <Input label="Name" />
        <Input label="Email" type="email" />
        <Input label="Message" />
        <Button color="primary">Submit</Button>
      </div>
    )
  }
  
  export default InputBox