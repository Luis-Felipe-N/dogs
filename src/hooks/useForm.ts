import { useState } from "react";

const type = {
  email: {
    regex:
      /^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$/,
    message: "Insira um email válido!",
  },
};

export default function useForm(typeValidate?: any) {
  const [value, setValue] = useState("");
  const [erro, setErro] = useState(String);

  const validate = () => {
    if (typeValidate === false) {
      return false;
    }
    if (value.length === 0) {
      setErro("Preencha um valor!");
      return false;
    } else if (typeValidate === "email" && !type.email.regex.test(value)) {
      setErro(type.email.message);
      return false;
    } else {
      setErro("");
      return true;
    }
  };

  const onChange = ({ target }: any) => {
    if (erro) validate();
    setValue(target.value);
  };

  return {
    value,
    setValue,
    onChange,
    validate: validate,
    onBlur: () => validate(),
    erro,
  };
}
