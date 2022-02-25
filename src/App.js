import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import "./App.css";
import Error from "./Error";
import { dynamicForm } from "./formFields";
import InputCT from "./InputCT";

function App() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  console.log("errors", errors);

  const onSubmit = (data) => {
    console.log(data);
  };

  const formInputs = Object.keys(dynamicForm).map((e, idx) => {
    const { rules, defaultValue, label } = dynamicForm[e];

    return (
      <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlInput1"
        key={idx}
      >
        <Form.Label>{label}</Form.Label>
        <Controller
          name={e}
          control={control}
          rules={rules}
          defaultValue={defaultValue}
          render={({ field }) => {
            return (
              <InputCT
                value={field.value}
                onChange={field.onChange}
                {...dynamicForm[e]}
              />
            );
          }}
        />
        {errors[e] && (
          <Error>{errors[e]?.message || "This field is required"} </Error>
        )}
      </Form.Group>
    );
  });

  return (
    <Container className="App">
      <h1>Demo Form</h1>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Row>
          <Col xs={6}>{formInputs}</Col>
        </Row>
        <Button type="submit">OKE</Button>
      </Form>
    </Container>
  );
}

export default App;
