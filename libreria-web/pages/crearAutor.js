import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "semantic-ui-react";
import BasicLayout from '../layouts/BasicLayout/BasicLayout';
import { createAutor } from '../api/autor';

export default function crearAutor(props) {
    const { showLoginForm } = props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),

        onSubmit: async (formData) => {
            const response = await createAutor(formData);
            if (response?.jwt) {
                showLoginForm();
            } else {
            alert("Error al registrar el autor, inténtelo mas tarde");
            }
        },
    });

    return (
        <BasicLayout>
            <h1>Crear Autor</h1>

            <Form className="login-form" onSubmit={formik.handleSubmit}>
            <Form.Input
                name="nombre"
                type="text"
                placeholder="Nombre"
                onChange={formik.handleChange}
                error={formik.errors.nombre}
            />
            <Form.Input
                name="nacionalidad"
                type="text"
                placeholder="Nacionalidad"
                onChange={formik.handleChange}
                error={formik.errors.nacionalidad}
            />

            <Button type="submit" className="submit" >
                Crear
            </Button>
            </Form>
        </BasicLayout>
    )
}

function initialValues() {
    return {
        nombre: "",
        nacionalidad: "",
    };
}

function validationSchema() {
    return {
        nombre: Yup.string().required("El nombre es obligatoria"),
        nacionalidad: Yup.string().required("La nacionalidad es obligatoria"),
    };
}
