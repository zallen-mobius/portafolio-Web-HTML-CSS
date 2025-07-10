
window.addEventListener("load", () => {

    const validation = new JustValidate(".main__contact");

    let isValidate = false;

    validation
        .addField("#contactName", [
            {
                rule: "required",
                errorMessage: "El nombre es obligatorio",
            },
            {
                rule: "minLength",
                value: 3,
                errorMessage: "El nombre es muy corto",
            },
            {
                rule: "maxLength",
                value: 15,
                errorMessage: "El nombre es muy largo"
            }
        ])
        .addField("#surname", [
            {
                rule: "required",
                errorMessage: "Los apellidos son obligatorios",
            },
            {
                rule: "minLength",
                value: 3,
                errorMessage: "Los apellidos son muy cortos",
            },
            {
                rule: "maxLength",
                value: 25,
                errorMessage: "Los apellidos son demasiados largos"
            }
        ])
        .addField("#contactEmail", [
            {
                rule: "required",
                errorMessage: "El email es obligatorio",
            },
            {
                rule: "email",
                value: 3,
                errorMessage: "El email deb ser válido",
            },
        ])
        .addField("#gender", [
            {
                rule: "required",
                errorMessage: "Selecciona una opción",
            },
        ])
        .addField("#date", [
            {
                rule: "required",
                errorMessage: "La fecha es obligatoria",
            },
        ])
        .addField("#edad", [
            {
                rule: "required",
                errorMessage: "La edad es obligatoria",
            },
            {
                rule: "integer",
                errorMessage: "Solo son válidos los números",
            },
        ])
        .onSuccess(() => {
            isValidate = true;

            alert("Todo es válido")
        });

});