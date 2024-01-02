const inputs = [
  {
    id: 1,
    name: "name",
    palceholder: "Your name",
    label: "name",
    type: "text",
  },
  {
    id: 2,
    name: "lastname",
    palceholder: "Your last name",
    label: "Last name",
    type: "text",
  },
  {
    id: 3,
    name: "email",
    palceholder: "Your email adress",
    label: "Your email",
    errorMessage: "This field is required",
    type: "email",
    require: true,
  },
  {
    id: 4,
    name: "message",
    palceholder: "Message",
    label: "Message",
    errorMessage: "This field is required",
    type: "text-area",
    require: true,
  },
];
export default inputs;
