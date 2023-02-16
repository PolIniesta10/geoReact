import { useState} from "react";

export const useForm = (initialForm={}) => {

    let [formState, setFormState] = useState(initialForm);
    
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

        
    const OnChangeForm = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const OnResetForm = () => {
        setFormState('');
    };
    
    // ………………………
    
    // Podem afegir més mètodes
    
    // I s’hauran de retornar a continuació
    
    return { ...formState, formState, onInputChange, OnChangeForm, OnResetForm };
    
};
