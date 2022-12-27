export const PackageParameters = {
    FirstParameter: {
        HTMLTag: "input",
        inputType: "text",
        inputName: "FirstParameter",
        inputLabel: "First Parameter",
        inputPlaceholder: "First Parameter",
        inputRequired: true,
        inputDisabled: false,
        inputReadOnly: false,
        inputAutoFocus: true,
    },
    SecondParameter: {
        HTMLTag: "select",
        inputName: "SecondParameter",
        inputRequired: true,
        InParameter: {
            FirstOption: {
                optionValue: "FirstOption",
                optionLabel: "First Option",
            },
            SecondOption: {
                optionValue: "SecondOption",
                optionLabel: "Second Option",
            },
            ThirdOption: {
                optionValue: "ThirdOption",
                optionLabel: "Third Option",
            },
        },
    },
    ThirdParameter: {
        HTMLTag: "textarea",
        inputName: "ThirdParameter",
        inputLabel: "Third Parameter",
        inputPlaceholder: "Third Parameter",
        inputRequired: true,
        inputDisabled: false,
        inputReadOnly: false,
        inputAutoFocus: true,
    },
    FourthParameter: {
        HTMLTag: "input",
        inputType: "file",
        inputName: "FourthParameter",
        inputLabel: "Fourth Parameter",
        inputPlaceholder: "Fourth Parameter",
        accept: ".php",
    },
    FiveParameter: {
        HTMLTag: "input",
        inputType: "submit",
        inputName: "FiveParameter",
        inputDisabled: false,
    },
};
