export const dynamicForm = {
  firstName: {
    label: "First Name",
    type: "text",
    placeholder: "Enter your first name",
    defaultValue: "",
    rules: {
      required: true,
    },
  },
  lastName: {
    label: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
    defaultValue: "",
    rules: {
      required: true,
    },
  },
  email: {
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    defaultValue: "",
    rules: {
      required: true,
      pattern: {
        value:
          /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Email not format",
      },
    },
  },
  phone: {
    label: "Phone number",
    type: "text",
    placeholder: "Enter your phone",
    defaultValue: "",
    rules: {
      pattern: {
        value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        message: "Phone not format",
      },
    },
  },
  gender: {
    label: "Gender",
    type: "radio",
    options: ["male", "female"],
    defaultValue: "",
    rules: {
      required: true,
    },
  },
  profession: {
    label: "Profession",
    type: "dropdown",
    options: [
      {
        label: "Front-end Developer",
        value: "Front-end Developer",
      },
      {
        label: "Back-end Developer",
        value: "Back-end Developer",
      },
      {
        label: "Devops Engineer",
        value: "Devops Engineer",
      },
    ],
    defaultValue: "",
    rules: {
      required: true,
    },
  },
  agree: {
    type: "checkbox",
    label: "",
    checkboxLabel: "I hereby agree to the terms.",
    defaultValue: false,
    rules: {
      required: true,
    },
  },
};
