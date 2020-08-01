import { useState } from "react";

function useForm(valoresIniciais){
    const [valores, setValores] = useState(valoresIniciais);

    function setValor(titulo, valor) {
        setValores({
            ...valores,
            [titulo]: valor
        });
    }

    function handleChange(infoEvento) {
        setValor(
            infoEvento.target.getAttribute('name'),
            infoEvento.target.value
        );
    }

    function clearForm() {
        setValor(valoresIniciais);
    }

    return {
        valores,
        handleChange,
        clearForm,
    };
}

export default useForm; 