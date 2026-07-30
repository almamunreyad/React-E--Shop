import { useState } from "react";

const INITIAL_FORM = {
    title: "",
    price: "",
    category: "",
    image: "",
    description: "",
};

export function useProductForm() {
    const [formData, setFormData] = useState(INITIAL_FORM);

    const [errors, setErrors] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function resetForm() {
        setFormData(INITIAL_FORM);

        setErrors({});
    }

    return {
        formData,
        setFormData,

        errors,
        setErrors,

        isSubmitting,
        setIsSubmitting,

        handleChange,
        resetForm,
    };
}
